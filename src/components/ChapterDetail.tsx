import React from 'react';
import { Chapter } from '../types';
import { ArrowLeft, Edit2, Trash2, BookOpen, AlertCircle, Sparkles } from 'lucide-react';

interface ChapterDetailProps {
  chapter: Chapter;
  onBack: () => void;
  onEdit: (chapter: Chapter) => void;
  onDelete: (id: string) => void;
}

export default function ChapterDetail({ chapter, onBack, onEdit, onDelete }: ChapterDetailProps) {
  const handleDeleteClick = () => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus bab "${chapter.titleId}"?`)) {
      onDelete(chapter.id);
    }
  };

  return (
    <div className="bg-transparent py-2">
      <div className="max-w-4xl mx-auto bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-emerald-900/20 to-[#0F172A] p-6 border-b border-slate-800/80 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-800 transition-all duration-300 font-display text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Kembali</span>
          </button>
          
          <div className="text-center">
            <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/30 uppercase tracking-widest font-mono">
              Kelas {chapter.grade} • Bab {chapter.id.split('-')[1]}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(chapter)}
              className="p-2 bg-emerald-800/80 hover:bg-emerald-700 text-white rounded-xl border border-emerald-500/30 transition shadow-lg"
              title="Edit Bab"
            >
              <Edit2 className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={handleDeleteClick}
              className="p-2 bg-red-950 hover:bg-red-900 text-red-200 rounded-xl border border-red-900/50 transition shadow-lg"
              title="Hapus Bab"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title Banner */}
          <div className="text-center py-6 bg-slate-950/40 rounded-2xl border border-slate-800/80">
            <h2 className="text-4xl font-serif text-amber-400 mb-2 leading-relaxed tracking-wide font-bold" dir="rtl">
              {chapter.titleAr}
            </h2>
            <h3 className="text-lg font-bold text-emerald-100 font-display">
              {chapter.titleId}
            </h3>
          </div>

          {/* 1. Definisi / Tarif */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <h4 className="text-md font-bold text-amber-400 uppercase tracking-wider font-display">التعريف • Definisi</h4>
            </div>
            
            {/* Arabic Definition Box */}
            <div className="bg-slate-950/30 p-6 rounded-2xl border border-slate-800 text-right" dir="rtl">
              <p className="text-2xl font-serif text-emerald-100 leading-loose">
                {chapter.definitionAr}
              </p>
            </div>
            
            {/* Indonesian Definition Box */}
            <div className="bg-emerald-950/10 p-4 rounded-xl border border-emerald-500/20">
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-amber-400 font-display">Terjemah:</strong> {chapter.definitionId}
              </p>
            </div>
          </div>

          {/* 2. Kaidah / Aturan */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-md font-bold text-amber-400 uppercase tracking-wider font-display">القواعد • Kaidah / Aturan</h4>
            </div>
            
            <ul className="space-y-2">
              {chapter.kaidah.map((rule, idx) => (
                <li key={idx} className="flex gap-3 bg-slate-950/20 p-4 rounded-xl border border-slate-800/60">
                  <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Rumus & Contoh */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <h4 className="text-md font-bold text-amber-400 uppercase tracking-wider font-display">الرمز والمثال • Rumus & Contoh</h4>
            </div>
            
            <div className="bg-gradient-to-br from-slate-950/50 to-emerald-950/20 p-6 rounded-2xl border border-slate-800/80 text-center">
              <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold font-mono mb-2">Formula / Konstruksi Nahwu</p>
              <div className="text-xl font-serif text-amber-300 leading-loose py-2" dir="rtl">
                {chapter.rumus}
              </div>
            </div>
          </div>

          {/* 4. Latihan Soal */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h4 className="text-md font-bold text-amber-400 uppercase tracking-wider font-display">التمارين • Latihan 5 Soal</h4>
              </div>
              <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded font-mono">
                Tulis di Buku Latihan
              </span>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/15 p-4 rounded-xl text-center">
              <p className="text-xs text-amber-300 font-medium leading-relaxed">
                📝 <strong className="font-display uppercase tracking-wide">Instruksi Guru:</strong> Silakan baca soal-soal berikut, lalu tuliskan jawaban lengkap di buku latihan fisik Anda masing-masing untuk dikoreksi bersama Ustadz Jundi.
              </p>
            </div>

            <div className="grid gap-3">
              {chapter.latihan.map((question, idx) => (
                <div key={idx} className="bg-slate-950/20 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-950/80 text-amber-400 border border-emerald-500/20 font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="text-slate-200 text-sm leading-relaxed">{question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info branding */}
        <div className="bg-slate-950/40 py-4 px-6 border-t border-slate-800/80 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Materi disadur dari Kitab <em>Silsilah Ta'lim Lughah Al-Arabiyah</em> (Kurikulum Nahwu LIPIA Jakarta)
          </p>
        </div>

      </div>
    </div>
  );
}
