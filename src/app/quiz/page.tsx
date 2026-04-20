import type { Metadata } from 'next';
import QuizGame from './QuizGame';

export const metadata: Metadata = {
  title: 'Quiz tiếng Anh - Trắc nghiệm có giải thích',
  description: 'Bài quiz trắc nghiệm tiếng Anh online miễn phí, có giải thích đáp án chi tiết và lưu điểm cao nhất.',
};

export default function QuizPage() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold mb-2">📝 Quiz trắc nghiệm tiếng Anh</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Chọn đáp án đúng. Bạn sẽ thấy giải thích ngay sau khi trả lời.
      </p>
      <QuizGame />
    </article>
  );
}
