'use client';

import { useState } from 'react';
import { LISTEN } from '@/data/content';
import { speak, stopSpeaking } from '@/lib/speech';
import { useProgress } from '@/lib/ProgressProvider';

export default function ListeningList() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [text, setText] = useState<Record<number, string>>({});
  const { progress, markListen } = useProgress();

  return (
    <div className="space-y-4">
      {LISTEN.map((item, i) => {
        const done = progress.listenDone.includes(i);
        return (
          <div key={i} className="card">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className={`level-badge level-${item.level}`}>{item.level}</span>
              <button onClick={() => speak(item.text, { rate: 0.95 })} className="btn-primary btn-sm">▶️ Nghe</button>
              <button onClick={() => speak(item.text, { rate: 0.65 })} className="btn-ghost btn-sm">🐢 Chậm</button>
              <button onClick={stopSpeaking} className="btn-ghost btn-sm">⏹️ Dừng</button>
              <button
                onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
                className="btn-ghost btn-sm"
              >
                👁️ {revealed[i] ? 'Ẩn' : 'Hiện'} script
              </button>
              <button
                onClick={() => markListen(i)}
                disabled={done}
                className={`btn-sm ml-auto ${done ? 'btn bg-green-600 text-white cursor-default' : 'btn-ghost'}`}
              >
                {done ? '✅ Hoàn thành' : 'Đánh dấu xong'}
              </button>
            </div>
            <textarea
              value={text[i] || ''}
              onChange={(e) => setText((t) => ({ ...t, [i]: e.target.value }))}
              placeholder="Viết lại những gì bạn nghe được (dictation)..."
              className="w-full min-h-[80px] p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
            {revealed[i] && (
              <div className="mt-2 p-3 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 italic text-slate-600 dark:text-slate-400">
                {item.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
