import type { Metadata } from 'next';
import VocabFlashcards from './VocabFlashcards';

export const metadata: Metadata = {
  title: 'Từ vựng tiếng Anh theo chủ đề - Flashcards',
  description: 'Học từ vựng tiếng Anh theo chủ đề bằng flashcards: gia đình, đồ ăn, du lịch, công việc và từ nâng cao. Lưu tiến độ qua Google.',
};

export default function VocabPage() {
  return (
    <article>
      <span className="tag mb-3 inline-block">A1 → C1</span>
      <h1 className="text-3xl font-extrabold mb-2">📖 Từ vựng theo chủ đề</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Click vào thẻ để lật xem nghĩa. Đánh dấu "Đã thuộc" để theo dõi tiến độ. Mẹo: học mỗi ngày
        1 chủ đề, lặp lại trong 3 ngày liên tiếp.
      </p>
      <VocabFlashcards />
    </article>
  );
}
