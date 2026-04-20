'use client';

export function speak(text: string, opts: { rate?: number; lang?: string } = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    alert('Trình duyệt không hỗ trợ phát âm. Hãy dùng Chrome, Edge hoặc Safari mới.');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = opts.lang || 'en-US';
  u.rate = opts.rate ?? 0.95;
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find((vv) => vv.lang && vv.lang.startsWith('en'));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}
export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
