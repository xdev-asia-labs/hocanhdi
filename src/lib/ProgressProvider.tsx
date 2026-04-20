'use client';

// Lưu tiến độ học: Firestore khi đăng nhập, fallback localStorage khi guest.
// Tự động merge khi user đăng nhập lần đầu.

import { createContext, useContext, useEffect, useState, type ReactNode, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getFirebase } from './firebase';
import { useAuth } from './AuthProvider';

export type Progress = {
  vocabLearned: Record<string, string[]>; // topicId -> [word,...]
  quizBest: number;                        // điểm cao nhất
  quizAttempts: number;
  grammarRead: string[];                   // ids các lesson đã đọc
  blogRead: string[];                      // slugs đã đọc
  listenDone: number[];                    // index các bài listening đã làm
  updatedAt: number;
};

const EMPTY: Progress = {
  vocabLearned: {}, quizBest: 0, quizAttempts: 0,
  grammarRead: [], blogRead: [], listenDone: [], updatedAt: 0,
};

const KEY = 'hocanhdi:progress:v1';

function loadLocal(): Progress {
  if (typeof window === 'undefined') return EMPTY;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    return { ...EMPTY, ...JSON.parse(raw) };
  } catch { return EMPTY; }
}
function saveLocal(p: Progress) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {}
}

function merge(a: Progress, b: Progress): Progress {
  const vocab: Record<string, string[]> = { ...a.vocabLearned };
  for (const [k, v] of Object.entries(b.vocabLearned || {})) {
    vocab[k] = Array.from(new Set([...(vocab[k] || []), ...v]));
  }
  return {
    vocabLearned: vocab,
    quizBest: Math.max(a.quizBest || 0, b.quizBest || 0),
    quizAttempts: (a.quizAttempts || 0) + (b.quizAttempts || 0),
    grammarRead: Array.from(new Set([...(a.grammarRead || []), ...(b.grammarRead || [])])),
    blogRead: Array.from(new Set([...(a.blogRead || []), ...(b.blogRead || [])])),
    listenDone: Array.from(new Set([...(a.listenDone || []), ...(b.listenDone || [])])),
    updatedAt: Date.now(),
  };
}

type Ctx = {
  progress: Progress;
  syncing: boolean;
  markVocab: (topic: string, word: string) => void;
  unmarkVocab: (topic: string, word: string) => void;
  recordQuiz: (score: number) => void;
  markGrammar: (id: string) => void;
  markBlog: (slug: string) => void;
  markListen: (idx: number) => void;
  reset: () => void;
};

const ProgressCtx = createContext<Ctx>(null as any);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [syncing, setSyncing] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate từ localStorage trước
  useEffect(() => {
    setProgress(loadLocal());
    setHydrated(true);
  }, []);

  // Khi user đăng nhập: pull từ Firestore + merge với local
  useEffect(() => {
    if (!hydrated) return;
    const { db } = getFirebase();
    if (!user || !db) return;
    let cancelled = false;
    (async () => {
      setSyncing(true);
      try {
        const ref = doc(db, 'users', user.uid);
        const snap = await getDoc(ref);
        const remote = (snap.exists() ? (snap.data() as Progress) : EMPTY);
        const local = loadLocal();
        const merged = merge(remote, local);
        if (cancelled) return;
        setProgress(merged);
        saveLocal(merged);
        await setDoc(ref, merged, { merge: true });
      } finally { if (!cancelled) setSyncing(false); }
    })();
    return () => { cancelled = true; };
  }, [user, hydrated]);

  // Mỗi khi progress đổi: lưu local + đẩy lên Firestore (debounce nhỏ)
  useEffect(() => {
    if (!hydrated) return;
    saveLocal(progress);
    const { db } = getFirebase();
    if (!user || !db) return;
    const t = setTimeout(() => {
      setDoc(doc(db, 'users', user.uid), progress, { merge: true }).catch(() => {});
    }, 600);
    return () => clearTimeout(t);
  }, [progress, user, hydrated]);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProgress((prev) => ({ ...fn(prev), updatedAt: Date.now() }));
  }, []);

  const markVocab = (topic: string, word: string) => update((p) => {
    const cur = new Set(p.vocabLearned[topic] || []);
    cur.add(word);
    return { ...p, vocabLearned: { ...p.vocabLearned, [topic]: Array.from(cur) } };
  });
  const unmarkVocab = (topic: string, word: string) => update((p) => {
    const cur = new Set(p.vocabLearned[topic] || []);
    cur.delete(word);
    return { ...p, vocabLearned: { ...p.vocabLearned, [topic]: Array.from(cur) } };
  });
  const recordQuiz = (score: number) => update((p) => ({
    ...p, quizBest: Math.max(p.quizBest, score), quizAttempts: p.quizAttempts + 1,
  }));
  const markGrammar = (id: string) => update((p) => ({
    ...p, grammarRead: Array.from(new Set([...p.grammarRead, id])),
  }));
  const markBlog = (slug: string) => update((p) => ({
    ...p, blogRead: Array.from(new Set([...p.blogRead, slug])),
  }));
  const markListen = (idx: number) => update((p) => ({
    ...p, listenDone: Array.from(new Set([...p.listenDone, idx])),
  }));
  const reset = () => update(() => ({ ...EMPTY, updatedAt: Date.now() }));

  return (
    <ProgressCtx.Provider value={{ progress, syncing, markVocab, unmarkVocab, recordQuiz, markGrammar, markBlog, markListen, reset }}>
      {children}
    </ProgressCtx.Provider>
  );
}

export const useProgress = () => useContext(ProgressCtx);
