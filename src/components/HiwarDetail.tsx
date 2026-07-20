import React from 'react';
import { Hiwar } from '../types';
import { ArrowLeft, Edit2, Trash2, BookOpen, MessageCircle } from 'lucide-react';

interface HiwarDetailProps {
  hiwar: Hiwar;
  onBack: () => void;
  onEdit: (hiwar: Hiwar) => void;
  onDelete: (id: string) => void;
}

export default function HiwarDetail({ hiwar, onBack, onEdit, onDelete }: HiwarDetailProps) {
  const handleDeleteClick = () => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus "${hiwar.title}"?`)) {
      onDelete(hiwar.id);
    }
  };

  // Extract speaker names to detect alternating layout
  const speaker1 = hiwar.lines[0]?.speaker || 'Pembicara 1';

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
              {hiwar.theme}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(hiwar)}
              className="p-2 bg-emerald-800/80 hover:bg-emerald-700 text-white rounded-xl border border-emerald-500/30 transition shadow-lg"
              title="Edit Percakapan"
            >
              <Edit2 className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={handleDeleteClick}
              className="p-2 bg-red-950 hover:bg-red-900 text-red-200 rounded-xl border border-red-900/50 transition shadow-lg"
              title="Hapus Percakapan"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Title Banner */}
          <div className="text-center py-6 bg-slate-950/40 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center gap-2">
            <MessageCircle className="w-6 h-6 text-amber-400" />
            <h2 className="text-md font-bold text-amber-400 font-display">
              {hiwar.title}
            </h2>
            <p className="text-xs text-slate-400 italic">
              Gaya bahasa disesuaikan dengan Uslub Nahwu & Sharaf praktis
            </p>
          </div>

          {/* Dialog Bubbles Wrapper */}
          <div className="space-y-6">
            {hiwar.lines.map((line, idx) => {
              const isSpeaker1 = line.speaker === speaker1;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isSpeaker1 ? 'items-start' : 'items-end'} w-full space-y-1`}
                >
                  {/* Speaker Badge */}
                  <div className="flex items-center gap-2 px-2">
                    <span className={`text-xs font-bold ${isSpeaker1 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {line.speaker}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Paragraf {idx + 1} / 8
                    </span>
                  </div>

                  {/* Chat Bubble Card */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-md border ${
                      isSpeaker1
                        ? 'bg-slate-950/30 border-slate-800 text-left rounded-tl-none'
                        : 'bg-emerald-950/15 border-emerald-500/20 text-right rounded-tr-none'
                    }`}
                  >
                    {/* Arabic Sentence */}
                    <p
                      className="text-2xl font-serif text-white leading-loose tracking-wide mb-2"
                      dir="rtl"
                    >
                      {line.textAr}
                    </p>
                    
                    {/* Divider line */}
                    <div className="border-t border-slate-800/60 my-2"></div>

                    {/* Indonesian Translation */}
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{line.textId}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer info branding */}
        <div className="bg-slate-950/40 py-4 px-6 border-t border-slate-800/80 text-center flex flex-col sm:flex-row sm:justify-between items-center gap-2">
          <p className="text-xs text-slate-500">
            SMP IT Umar bin Al Khattab Cirebon • Kurikulum Full Day School
          </p>
          <p className="text-xs text-amber-500/80 font-medium font-display">
            Materi Pendukung Percakapan (Hiwar) Kelas 7-9
          </p>
        </div>

      </div>
    </div>
  );
}
