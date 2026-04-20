'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthProvider';
import { useProgress } from '@/lib/ProgressProvider';
import { VOCAB_TOPICS, GRAMMAR, BLOG, QUIZ, LISTEN } from '@/data/content';

export default function Dashboard() {
  const { user, signIn, configured } = useAuth();
  const { progress, reset } = useProgress();

  const totalVocab = VOCAB_TOPICS.reduce((s, t) => s + t.words.length, 0);
  const learnedVocab = Object.values(progress.vocabLearned).reduce((s, arr) => s + arr.length, 0);
  const grammarPct = Math.round((progress.grammarRead.length / GRAMMAR.length) * 100);
  const blogPct = Math.round((progress.blogRead.length / BLOG.length) * 100);
  const listenPct = Math.round((progress.listenDone.length / LISTEN.length) * 100);
  const vocabPct = Math.round((learnedVocab / totalVocab) * 100);

  return (
    <article>
      <h1 className="text-3xl font-extrabold mb-2">📊 Tiến độ học của bạn</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        {user ? (
          <>Xin chào <b>{user.displayName || user.email}</b> 👋 — tiến độ được đồng bộ qua Firebase.</>
        ) : configured ? (
          <>Bạn đang dùng chế độ khách (lưu trên trình duyệt). <button onClick={signIn} className="text-brand-600 underline">Đăng nhập Google</button> để đồng bộ trên mọi thiết bị.</>
        ) : (
          <>Firebase chưa được cấu hình. Tiến độ chỉ lưu trên trình duyệt này. Xem README để cấu hình Firebase miễn phí.</>
        )}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Stat title="📖 Từ vựng đã thuộc" value={`${learnedVocab}/${totalVocab}`} pct={vocabPct} href="/vocabulary" />
        <Stat title="📐 Bài ngữ pháp đã đọc" value={`${progress.grammarRead.length}/${GRAMMAR.length}`} pct={grammarPct} href="/grammar" />
        <Stat title="✍️ Blog đã đọc" value={`${progress.blogRead.length}/${BLOG.length}`} pct={blogPct} href="/blog" />
        <Stat title="🎧 Bài luyện nghe" value={`${progress.listenDone.length}/${LISTEN.length}`} pct={listenPct} href="/listening" />
        <Stat title="📝 Quiz - Điểm cao nhất" value={`${progress.quizBest}/${QUIZ.length}`} pct={(progress.quizBest / QUIZ.length) * 100} href="/quiz" />
        <div className="card">
          <h3 className="font-bold mb-1">🔁 Quiz đã làm</h3>
          <div className="text-3xl font-extrabold text-brand-600">{progress.quizAttempts} <span className="text-sm font-normal text-slate-500">lần</span></div>
        </div>
      </div>

      <details className="card mt-6">
        <summary className="cursor-pointer font-semibold">Chi tiết từ vựng theo chủ đề</summary>
        <div className="mt-3 space-y-2">
          {VOCAB_TOPICS.map((t) => {
            const cur = progress.vocabLearned[t.id]?.length || 0;
            return (
              <div key={t.id} className="flex items-center gap-3">
                <span className="w-40 truncate">{t.label}</span>
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-600" style={{ width: `${(cur / t.words.length) * 100}%` }} />
                </div>
                <span className="text-sm tabular-nums">{cur}/{t.words.length}</span>
              </div>
            );
          })}
        </div>
      </details>

      <div className="text-center mt-6">
        <button
          onClick={() => { if (confirm('Xóa toàn bộ tiến độ?')) reset(); }}
          className="btn-ghost btn-sm text-red-600"
        >
          🗑️ Reset tiến độ
        </button>
      </div>
    </article>
  );
}

function Stat({ title, value, pct, href }: { title: string; value: string; pct: number; href: string }) {
  return (
    <Link href={href} className="card hover:border-brand-500 transition block">
      <h3 className="font-semibold text-sm text-slate-500">{title}</h3>
      <div className="text-3xl font-extrabold text-brand-600 mt-1">{value}</div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-3">
        <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400" style={{ width: `${Math.min(100, pct || 0)}%` }} />
      </div>
    </Link>
  );
}
