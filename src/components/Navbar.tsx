'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/lib/AuthProvider';
import { useProgress } from '@/lib/ProgressProvider';

const NAV = [
  { href: '/', label: 'Trang chủ' },
  { href: '/alphabet', label: 'Bảng chữ cái' },
  { href: '/vocabulary', label: 'Từ vựng' },
  { href: '/grammar', label: 'Ngữ pháp' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/listening', label: 'Luyện nghe' },
  { href: '/blog', label: 'Blog' },
  { href: '/dashboard', label: 'Tiến độ' },
];

export default function Navbar() {
  const path = usePathname();
  const { user, loading, configured, signIn, logout } = useAuth();
  const { syncing } = useProgress();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400 text-white">HA</span>
          Học Anh Đi
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden ml-auto btn-ghost btn-sm" aria-label="Menu">☰</button>

        <nav className={`${open ? 'flex' : 'hidden'} md:flex md:ml-auto flex-col md:flex-row gap-1 md:gap-1 w-full md:w-auto`}>
          {NAV.map((n) => {
            const active = n.href === '/' ? path === '/' : path?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  active ? 'bg-brand-600 text-white' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:ml-2 flex items-center gap-2">
          {syncing && <span className="text-xs text-slate-500">Đang sync…</span>}
          {loading ? null : user ? (
            <>
              {user.photoURL && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
              )}
              <button onClick={logout} className="btn-ghost btn-sm">Đăng xuất</button>
            </>
          ) : (
            <button
              onClick={signIn}
              title={configured ? 'Đăng nhập với Google' : 'Cấu hình Firebase trong .env.local trước'}
              className="btn-primary btn-sm"
            >
              {configured ? 'Đăng nhập Google' : 'Cấu hình Firebase'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
