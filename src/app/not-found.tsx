import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold mb-3">404</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Trang bạn tìm không tồn tại.</p>
      <Link href="/" className="btn-primary">Về trang chủ</Link>
    </div>
  );
}
