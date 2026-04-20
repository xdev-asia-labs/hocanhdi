import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG } from '@/data/content';

export const metadata: Metadata = {
  title: 'Blog - Bài viết về học tiếng Anh',
  description: 'Mẹo học tiếng Anh, phân tích ngữ pháp, kỹ thuật phát âm và luyện nghe từ Học Anh Dí.',
};

export default function BlogIndex() {
  return (
    <article>
      <h1 className="text-3xl font-extrabold mb-2">✍️ Blog tiếng Anh</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Bài viết chuyên sâu giúp bạn học tiếng Anh thông minh hơn.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {BLOG.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="card hover:border-brand-500 hover:-translate-y-0.5 transition"
          >
            <div className="text-xs text-slate-500 mb-1">
              {new Date(p.date).toLocaleDateString('vi-VN')} · {p.tags.join(' · ')}
            </div>
            <h3 className="font-bold text-lg mb-1">{p.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
