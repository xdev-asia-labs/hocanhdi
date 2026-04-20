'use client';

import { useState, useMemo } from 'react';
import { VOCAB_TOPICS } from '@/data/content';
import { speak } from '@/lib/speech';
import { useProgress } from '@/lib/ProgressProvider';

export default function VocabFlashcards() {
  const [topicId, setTopicId] = useState(VOCAB_TOPICS[0].id);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [order, setOrder] = useState<number[] | null>(null);
  const { progress, markVocab, unmarkVocab } = useProgress();

  const topic = useMemo(() => VOCAB_TOPICS.find((t) => t.id === topicId)!, [topicId]);
  const indices = order ?? topic.words.map((_, i) => i);
  const word = topic.words[indices[idx] ?? 0];
  const learned = new Set(progress.vocabLearned[topicId] || []);
  const isLearned = learned.has(word.word);

  const next = () => { setFlipped(false); setIdx((i) => (i + 1) % indices.length); };
  const prev = () => { setFlipped(false); setIdx((i) => (i - 1 + indices.length) % indices.length); };
  const shuffle = () => {
    const arr = topic.words.map((_, i) => i).sort(() => Math.random() - 0.5);
    setOrder(arr); setIdx(0); setFlipped(false);
  };
  const switchTopic = (id: string) => { setTopicId(id); setIdx(0); setFlipped(false); setOrder(null); };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {VOCAB_TOPICS.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTopic(t.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${
              topicId === t.id
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700'
            }`}
          >
            {t.label} <span className={`level-badge level-${t.level} ml-1`}>{t.level}</span>
          </button>
        ))}
      </div>

      <div
        className="mx-auto max-w-md aspect-[3/2] cursor-pointer [perspective:1200px]"
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <div className="absolute inset-0 card flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
            <div className="text-4xl font-extrabold">{word.word}</div>
            <div className="text-cyan-500 font-mono mt-1">{word.ipa}</div>
            <div className="text-slate-500 text-sm mt-1">({word.pos})</div>
            <button
              onClick={(e) => { e.stopPropagation(); speak(word.word); }}
              className="btn-ghost btn-sm mt-3"
            >
              🔊 Phát âm
            </button>
          </div>
          <div className="absolute inset-0 card flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="text-2xl font-bold">{word.meaning}</div>
            <div className="italic text-slate-600 dark:text-slate-400 mt-2 px-4">"{word.example}"</div>
            <button
              onClick={(e) => { e.stopPropagation(); speak(word.example); }}
              className="btn-ghost btn-sm mt-3"
            >
              🔊 Nghe ví dụ
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 mt-3">
        {idx + 1} / {indices.length} · Đã thuộc: <b>{learned.size}</b>/{topic.words.length}
      </div>

      <div className="flex justify-center gap-2 flex-wrap mt-4">
        <button onClick={prev} className="btn-ghost btn-sm">← Trước</button>
        <button onClick={next} className="btn-primary btn-sm">Tiếp →</button>
        <button onClick={shuffle} className="btn-ghost btn-sm">🔀 Trộn</button>
        <button
          onClick={() => (isLearned ? unmarkVocab(topicId, word.word) : markVocab(topicId, word.word))}
          className={`btn-sm ${isLearned ? 'btn bg-green-600 text-white' : 'btn-ghost'}`}
        >
          {isLearned ? '✅ Đã thuộc' : '☆ Đánh dấu thuộc'}
        </button>
      </div>
    </div>
  );
}
