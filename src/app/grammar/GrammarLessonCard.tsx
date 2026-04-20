'use client';

import type { GrammarLesson } from '@/data/content';
import { useProgress } from '@/lib/ProgressProvider';

export default function GrammarLessonCard({ lesson }: { lesson: GrammarLesson }) {
  const { progress, markGrammar } = useProgress();
  const read = progress.grammarRead.includes(lesson.id);

  return (
    <section className="card">
      <div className="flex items-start gap-3 flex-wrap">
        <h3 className="text-xl font-bold flex-1">
          {lesson.title}
          <span className={`level-badge level-${lesson.level} ml-2`}>{lesson.level}</span>
        </h3>
        <button
          onClick={() => markGrammar(lesson.id)}
          disabled={read}
          className={`btn-sm ${read ? 'btn bg-green-600 text-white cursor-default' : 'btn-ghost'}`}
        >
          {read ? '✅ Đã đọc' : 'Đánh dấu đã đọc'}
        </button>
      </div>
      <div className="prose-vi mt-2" dangerouslySetInnerHTML={{ __html: lesson.html }} />
    </section>
  );
}
