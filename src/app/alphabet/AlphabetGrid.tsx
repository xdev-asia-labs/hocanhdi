'use client';

import { ALPHABET } from '@/data/content';
import { speak } from '@/lib/speech';

export default function AlphabetGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
      {ALPHABET.map((l) => (
        <button
          key={l.letter}
          onClick={() => speak(`${l.letter}. ${l.example}, ${l.example}`)}
          className="card text-center hover:border-brand-500 hover:-translate-y-0.5 transition"
        >
          <div className="text-3xl font-extrabold">{l.letter}</div>
          <div className="text-cyan-500 text-sm font-mono mt-1">{l.ipa}</div>
          <div className="text-xs text-slate-500 mt-1">{l.example}</div>
          <div className="text-[11px] text-slate-400">{l.meaning}</div>
        </button>
      ))}
    </div>
  );
}
