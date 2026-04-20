import type { Metadata } from 'next';
import ListeningList from './ListeningList';

export const metadata: Metadata = {
  title: 'Luyện nghe tiếng Anh A1-C1 - Dictation',
  description: 'Luyện nghe tiếng Anh online theo 5 cấp độ A1-C1. Phát âm chuẩn, có chế độ nghe chậm và dictation.',
};

export default function ListeningPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold mb-2">🎧 Luyện nghe tiếng Anh</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        <b>Quy trình:</b> nghe trước → viết lại (dictation) → nghe lại với tốc độ chậm → đối chiếu script.
      </p>
      <ListeningList />
    </article>
  );
}
