import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG } from '@/data/content';
import MarkRead from './MarkRead';

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Không tìm thấy bài viết' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/blog" className="text-sm text-brand-600 hover:underline">← Quay lại Blog</Link>
      <div className="text-xs text-slate-500 mt-4 mb-1">
        {new Date(post.date).toLocaleDateString('vi-VN')} · {post.tags.join(' · ')}
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{post.excerpt}</p>
      <div className="prose-vi" dangerouslySetInnerHTML={{ __html: post.html }} />
      <MarkRead slug={post.slug} />
    </article>
  );
}
