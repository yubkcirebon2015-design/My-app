import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';

interface ChapterFormProps {
  chapter?: Chapter; // If provided, we are editing. If undefined, we are adding.
  gradeOverride?: number;
  onSave: (chapter: Chapter) => void;
  onCancel: () => void;
}

export default function ChapterForm({ chapter, gradeOverride = 7, onSave, onCancel }: ChapterFormProps) {
  const [grade, setGrade] = useState<number>(gradeOverride);
  const [titleAr, setTitleAr] = useState('');
  const [titleId, setTitleId] = useState('');
  const [definitionAr, setDefinitionAr] = useState('');
  const [definitionId, setDefinitionId] = useState('');
  const [kaidah, setKaidah] = useState<string[]>(['', '', '']);
  const [rumus, setRumus] = useState('');
  const [latihan, setLatihan] = useState<string[]>(['', '', '', '', '']);

  useEffect(() => {
    if (chapter) {
      setGrade(chapter.grade);
      setTitleAr(chapter.titleAr);
      setTitleId(chapter.titleId);
      setDefinitionAr(chapter.definitionAr);
      setDefinitionId(chapter.definitionId);
      setKaidah(chapter.kaidah.length > 0 ? [...chapter.kaidah] : ['', '', '']);
      setRumus(chapter.rumus);
      setLatihan(chapter.latihan.length === 5 ? [...chapter.latihan] : ['', '', '', '', '']);
    }
  }, [chapter]);

  const handleKaidahChange = (index: number, value: string) => {
    const updated = [...kaidah];
    updated[index] = value;
    setKaidah(updated);
  };

  const handleAddKaidahRow = () => {
    setKaidah([...kaidah, '']);
  };

  const handleRemoveKaidahRow = (index: number) => {
    if (kaidah.length <= 1) return;
    const updated = kaidah.filter((_, i) => i !== index);
    setKaidah(updated);
  };

  const handleLatihanChange = (index: number, value: string) => {
    const updated = [...latihan];
    updated[index] = value;
    setLatihan(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titleAr || !titleId || !definitionAr || !definitionId) {
      alert("Harap isi Judul Arab, Judul Indonesia, Definisi Arab, dan Definisi Indonesia!");
      return;
    }

    // Filter empty kaidah rows
    const cleanedKaidah = kaidah.map(k => k.trim()).filter(k => k !== '');
    if (cleanedKaidah.length === 0) {
      alert("Harap tuliskan minimal 1 baris Kaidah!");
      return;
    }

    // Ensure we have exactly 5 latihan items, fill in fallbacks if empty
    const cleanedLatihan = latihan.map((l, idx) => l.trim() !== '' ? l.trim() : `Soal Latihan ${idx + 1} (Belum diisi)`);

    const savedChapter: Chapter = {
      id: chapter?.id || `${grade}-${Date.now()}`,
      grade,
      titleAr: titleAr.trim(),
      titleId: titleId.trim(),
      definitionAr: definitionAr.trim(),
      definitionId: definitionId.trim(),
      kaidah: cleanedKaidah,
      rumus: rumus.trim() || "الْقَاعِدَةُ (Belum ditentukan)",
      latihan: cleanedLatihan
    };

    onSave(savedChapter);
  };

  return (
    <div className="bg-transparent py-2">
      <div className="max-w-3xl mx-auto bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Form Header */}
        <div className="bg-gradient-to-br from-emerald-900/20 to-[#0F172A] p-6 border-b border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-800 transition-all duration-300 font-display text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Batal</span>
          </button>
          
          <h2 className="text-md font-bold text-amber-400 uppercase tracking-wider font-display">
            {chapter ? 'Edit Bab Nahwu' : 'Tambah Bab Baru'}
          </h2>
          
          <div className="w-20"></div> {/* Spacer for symmetry */}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-slate-200">
          
          {/* 1. Pilih Kelas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Tingkatan Kelas</label>
              <select
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500/85 transition"
                disabled={!!chapter} // Disable changing grade during edit to preserve IDs
              >
                <option value={7} className="bg-slate-950">Kelas 7 SMP IT UBK</option>
                <option value={8} className="bg-slate-950">Kelas 8 SMP IT UBK</option>
                <option value={9} className="bg-slate-950">Kelas 9 SMP IT UBK</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">ID / Nomor Urut Bab</label>
              <input
                type="text"
                value={chapter ? chapter.id : 'Otomatis dibuat'}
                disabled
                className="w-full bg-slate-900/40 border border-slate-800/60 rounded-xl px-4 py-2.5 text-xs text-slate-500 focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* 2. Judul Bab */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Judul Bab (Bahasa Arab)</label>
              <input
                type="text"
                value={titleAr}
                onChange={(e) => setTitleAr(e.target.value)}
                placeholder="مثال: الْكَلَامُ وَأَقْسَامُهُ"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-amber-500 text-lg font-serif text-right"
                dir="rtl"
                required
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Judul Bab (Bahasa Indonesia)</label>
              <input
                type="text"
                value={titleId}
                onChange={(e) => setTitleId(e.target.value)}
                placeholder="Contoh: Kalam dan Pembagiannya"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                required
              />
            </div>
          </div>

          {/* 3. Definisi (Tarif) */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Definisi / Tarif (Bahasa Arab)</label>
              <textarea
                value={definitionAr}
                onChange={(e) => setDefinitionAr(e.target.value)}
                placeholder="الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ..."
                rows={3}
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 text-xl font-serif text-right leading-relaxed"
                dir="rtl"
                required
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Terjemahan Definisi (Bahasa Indonesia)</label>
              <textarea
                value={definitionId}
                onChange={(e) => setDefinitionId(e.target.value)}
                placeholder="Kalam adalah lafadz yang tersusun..."
                rows={3}
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 text-sm leading-relaxed"
                required
              />
            </div>
          </div>

          {/* 4. Kaidah (Aturan-Aturan) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold font-display">Kaidah Nahwu (Poin-Poin Penting)</label>
              <button
                type="button"
                onClick={handleAddKaidahRow}
                className="text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white px-2.5 py-1.5 rounded-lg transition border border-emerald-600 shadow"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                <span>Tambah Baris</span>
              </button>
            </div>
            
            <div className="space-y-2">
              {kaidah.map((rule, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <span className="w-6 text-xs text-center text-emerald-400 font-bold font-mono">#{idx+1}</span>
                  <input
                    type="text"
                    value={rule}
                    onChange={(e) => handleKaidahChange(idx, e.target.value)}
                    placeholder={`Poin Kaidah ${idx + 1}`}
                    className="flex-1 bg-slate-950/40 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  {kaidah.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveKaidahRow(idx)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded-xl border border-transparent hover:border-red-900/50 transition-all duration-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Rumus & Contoh */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Rumus Nahwu / Contoh Konstruksi</label>
            <input
              type="text"
              value={rumus}
              onChange={(e) => setRumus(e.target.value)}
              placeholder="Contoh: اِسْمٌ + فِعْلٌ + حَرْفٌ (ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ)"
              className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 font-serif text-center text-lg"
              dir="rtl"
            />
            <p className="text-[10px] text-slate-500 mt-1">Gunakan keyboard Arab untuk menginput teks Arab, bisa dicampur teks Indonesia dalam tanda kurung.</p>
          </div>

          {/* 6. Latihan (5 Soal) */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold font-display">Latihan Mandiri (Harus 5 Soal)</label>
            <div className="bg-amber-500/5 border border-amber-500/10 p-3 rounded-xl text-xs text-amber-300/90 leading-relaxed">
              Isi 5 soal yang akan ditulis jawabannya oleh siswa di buku tulis masing-masing.
            </div>
            
            <div className="space-y-3">
              {latihan.map((question, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs font-mono">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => handleLatihanChange(idx, e.target.value)}
                      placeholder={`Ketikkan pertanyaan latihan ke-${idx + 1}`}
                      className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-800/60 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl border border-amber-500/40 hover:from-emerald-700 hover:to-emerald-600 transition shadow-lg w-full sm:w-auto justify-center cursor-pointer"
            >
              <Save className="w-4 h-4 text-amber-400" />
              <span>Simpan Bab Nahwu</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
