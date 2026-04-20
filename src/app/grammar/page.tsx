import type { Metadata } from 'next';
import { GRAMMAR } from '@/data/content';
import GrammarLessonCard from './GrammarLessonCard';

export const metadata: Metadata = {
  title: 'Ngữ pháp tiếng Anh A1 đến C2',
  description: 'Tổng hợp ngữ pháp tiếng Anh từ cơ bản (A1) đến nâng cao (C2): 12 thì, câu điều kiện, bị động, mệnh đề quan hệ, đảo ngữ.',
};

export default function GrammarPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold mb-2">📐 Ngữ pháp tiếng Anh — A1 đến C2</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Lộ trình ngữ pháp theo chuẩn CEFR. Đánh dấu "Đã đọc" để theo dõi tiến độ.
      </p>
      <div className="space-y-4">
        {GRAMMAR.map((l) => <GrammarLessonCard key={l.id} lesson={l} />)}
      </div>
    </article>
  );
}
