import Link from 'next/link';

const FEATURES = [
  { icon: '🔤', title: 'Bảng chữ cái', href: '/alphabet', desc: '26 chữ cái + IPA + ví dụ. Click để nghe phát âm chuẩn.' },
  { icon: '📖', title: 'Từ vựng theo chủ đề', href: '/vocabulary', desc: 'Flashcards: gia đình, đồ ăn, du lịch, công việc, từ nâng cao.' },
  { icon: '📐', title: 'Ngữ pháp A1 → C2', href: '/grammar', desc: '12 thì, điều kiện, bị động, mệnh đề quan hệ, đảo ngữ...' },
  { icon: '📝', title: 'Quiz trắc nghiệm', href: '/quiz', desc: 'Có giải thích đáp án chi tiết, lưu điểm cao nhất.' },
  { icon: '🎧', title: 'Luyện nghe', href: '/listening', desc: '5 cấp độ A1-C1 với dictation và script ẩn.' },
  { icon: '✍️', title: 'Bài viết & Blog', href: '/blog', desc: 'Mẹo học, phân tích ngữ pháp, kỹ thuật luyện nghe.' },
];

export default function Home() {
  return (
    <>
      <section className="text-center py-12">
        <span className="tag mb-4 inline-block">100% Miễn phí · Lưu tiến độ qua Google</span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Học tiếng Anh từ <span className="text-brand-600">cơ bản</span> đến <span className="text-cyan-500">nâng cao</span> 🇬🇧
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg mb-6">
          Lộ trình rõ ràng từ <b>bảng chữ cái</b> đến <b>C2 nâng cao</b>. Đăng nhập bằng Google để
          đồng bộ tiến độ trên mọi thiết bị — hoàn toàn miễn phí.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link href="/alphabet" className="btn-primary">🚀 Bắt đầu học</Link>
          <Link href="/blog" className="btn-ghost">📚 Đọc bài viết</Link>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-5">🎯 Lộ trình học</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <Link key={f.href} href={f.href} className="card hover:border-brand-500 hover:-translate-y-0.5 transition">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-5">⭐ Vì sao chọn Học Anh Dí?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card"><h3 className="font-bold mb-1">☁️ Lưu tiến độ miễn phí</h3><p className="text-sm text-slate-600 dark:text-slate-400">Đăng nhập Google để đồng bộ qua Firebase (gói Spark miễn phí).</p></div>
          <div className="card"><h3 className="font-bold mb-1">🔊 Phát âm chuẩn</h3><p className="text-sm text-slate-600 dark:text-slate-400">Tích hợp Web Speech API, có chế độ nghe chậm.</p></div>
          <div className="card"><h3 className="font-bold mb-1">📱 Mọi thiết bị</h3><p className="text-sm text-slate-600 dark:text-slate-400">Responsive: máy tính, điện thoại, tablet.</p></div>
          <div className="card"><h3 className="font-bold mb-1">🆓 Không quảng cáo</h3><p className="text-sm text-slate-600 dark:text-slate-400">Không thu tiền, không quảng cáo, không thu thập dữ liệu xấu.</p></div>
          <div className="card"><h3 className="font-bold mb-1">🎯 Theo chuẩn CEFR</h3><p className="text-sm text-slate-600 dark:text-slate-400">Lộ trình A1 → C2 quốc tế.</p></div>
          <div className="card"><h3 className="font-bold mb-1">⚡ Static export, siêu nhanh</h3><p className="text-sm text-slate-600 dark:text-slate-400">Next.js + static HTML, deploy free trên Vercel/Netlify/GitHub Pages.</p></div>
        </div>
      </section>
    </>
  );
}
