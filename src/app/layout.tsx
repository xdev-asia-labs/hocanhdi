import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/AuthProvider';
import { ProgressProvider } from '@/lib/ProgressProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://hocanhdi.xdev.asia'),
  title: {
    default: 'Học Anh Đi - Học tiếng Anh từ cơ bản đến nâng cao',
    template: '%s | Học Anh Đi',
  },
  description: 'Website học tiếng Anh miễn phí: bảng chữ cái, từ vựng, ngữ pháp A1-C2, quiz, luyện nghe và blog. Đăng nhập để lưu tiến độ học miễn phí.',
  keywords: ['học tiếng anh', 'tiếng anh miễn phí', 'từ vựng tiếng anh', 'ngữ pháp tiếng anh', 'luyện nghe tiếng anh', 'quiz tiếng anh', 'IPA', 'flashcards'],
  authors: [{ name: 'Học Anh Đi' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    title: 'Học Anh Đi - Học tiếng Anh từ cơ bản đến nâng cao',
    description: 'Lộ trình rõ ràng A1 → C2, lưu tiến độ qua Google đăng nhập miễn phí.',
  },
  twitter: { card: 'summary_large_image' },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <AuthProvider>
          <ProgressProvider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
            <Footer />
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
