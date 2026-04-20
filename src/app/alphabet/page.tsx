import type { Metadata } from 'next';
import AlphabetGrid from './AlphabetGrid';

export const metadata: Metadata = {
  title: 'Bảng chữ cái tiếng Anh A-Z + IPA',
  description: 'Bảng chữ cái tiếng Anh đầy đủ 26 chữ cái A-Z kèm phiên âm IPA và ví dụ. Click để nghe phát âm chuẩn.',
};

export default function AlphabetPage() {
  return (
    <article>
      <span className="tag mb-3 inline-block">A1 · Cơ bản</span>
      <h1 className="text-3xl font-extrabold mb-2">🔤 Bảng chữ cái tiếng Anh</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Tiếng Anh có <b>26 chữ cái</b> (5 nguyên âm A, E, I, O, U và 21 phụ âm). Click vào từng chữ
        để nghe phát âm.
      </p>
      <AlphabetGrid />

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">💡 Mẹo nhớ phát âm</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card"><h3 className="font-bold">Nguyên âm</h3><p className="text-sm">A, E, I, O, U - đôi khi cả Y. Mỗi nguyên âm có nhiều cách đọc tùy ngữ cảnh (A trong "cat" /æ/ khác A trong "car" /ɑː/).</p></div>
          <div className="card"><h3 className="font-bold">Phụ âm khó</h3><p className="text-sm">Chú ý: /θ/ (think), /ð/ (this), /ʃ/ (she), /ʒ/ (vision), /tʃ/ (chair), /dʒ/ (judge).</p></div>
          <div className="card"><h3 className="font-bold">Trọng âm</h3><p className="text-sm">Tiếng Anh có trọng âm. Đặt sai trọng âm dễ bị hiểu nhầm. Luôn học từ kèm trọng âm.</p></div>
          <div className="card"><h3 className="font-bold">Luyện hằng ngày</h3><p className="text-sm">5-10 phút mỗi ngày đọc to bảng chữ cái + 10 từ mới giúp khẩu hình quen dần.</p></div>
        </div>
      </section>
    </article>
  );
}
