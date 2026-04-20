'use client';

import { useEffect } from 'react';
import { useProgress } from '@/lib/ProgressProvider';

export default function MarkRead({ slug }: { slug: string }) {
  const { progress, markBlog } = useProgress();
  const read = progress.blogRead.includes(slug);

  useEffect(() => {
    // Tự động đánh dấu sau khi user ở trên trang 8 giây
    if (read) return;
    const t = setTimeout(() => markBlog(slug), 8000);
    return () => clearTimeout(t);
  }, [slug, read, markBlog]);

  return (
    <div className="mt-8 p-4 card text-sm text-slate-600 dark:text-slate-400 text-center">
      {read ? '✅ Bạn đã đọc bài này' : '👀 Đang đọc... (sẽ tự đánh dấu sau 8s)'}
    </div>
  );
}
