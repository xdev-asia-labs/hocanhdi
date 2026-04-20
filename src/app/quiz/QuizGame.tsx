'use client';

import { useState } from 'react';
import { QUIZ } from '@/data/content';
import { useProgress } from '@/lib/ProgressProvider';

export default function QuizGame() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const { progress, recordQuiz } = useProgress();

  const choose = (qi: number, oi: number) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qi]: oi }));
  };

  const score = QUIZ.reduce((s, q, i) => s + (answers[i] === q.a ? 1 : 0), 0);
  const allAnswered = Object.keys(answers).length === QUIZ.length;

  const submit = () => {
    setSubmitted(true);
    recordQuiz(score);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div>
      <div className="card mb-4 flex items-center justify-between flex-wrap gap-2">
        <div className="text-sm">
          🏆 Điểm cao nhất của bạn: <b>{progress.quizBest}</b>/{QUIZ.length} ·
          Đã làm: <b>{progress.quizAttempts}</b> lần
        </div>
        {submitted ? (
          <button onClick={reset} className="btn-ghost btn-sm">🔄 Làm lại</button>
        ) : (
          <button onClick={submit} disabled={!allAnswered} className="btn-primary btn-sm disabled:opacity-50">
            Nộp bài ({Object.keys(answers).length}/{QUIZ.length})
          </button>
        )}
      </div>

      <div className="space-y-4">
        {QUIZ.map((q, i) => {
          const picked = answers[i];
          return (
            <div key={i} className="card">
              <div className="font-bold mb-3">{i + 1}. {q.q}</div>
              <div className="grid gap-2">
                {q.opts.map((o, j) => {
                  const isPicked = picked === j;
                  const isCorrect = j === q.a;
                  let cls = 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800';
                  if (submitted) {
                    if (isCorrect) cls = 'border-green-500 bg-green-50 dark:bg-green-900/30';
                    else if (isPicked) cls = 'border-red-500 bg-red-50 dark:bg-red-900/30';
                  } else if (isPicked) {
                    cls = 'border-brand-500 bg-brand-50 dark:bg-brand-900/30';
                  }
                  return (
                    <button
                      key={j}
                      onClick={() => choose(i, j)}
                      className={`text-left px-4 py-2.5 rounded-lg border transition ${cls}`}
                    >
                      {String.fromCharCode(65 + j)}. {o}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-3">💡 {q.ex}</div>
              )}
            </div>
          );
        })}
      </div>

      {submitted && (
        <div className="card mt-4 text-center">
          <div className="text-2xl font-extrabold">🎉 Kết quả: {score} / {QUIZ.length}</div>
          <button onClick={reset} className="btn-ghost btn-sm mt-3">🔄 Làm lại</button>
        </div>
      )}
    </div>
  );
}
