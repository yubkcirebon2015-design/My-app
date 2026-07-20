import React, { useState, useEffect } from 'react';
import { Hiwar, DialogueLine } from '../types';
import { ArrowLeft, Save, Sparkles, UserCheck } from 'lucide-react';

interface HiwarFormProps {
  hiwar?: Hiwar;
  onSave: (hiwar: Hiwar) => void;
  onCancel: () => void;
}

export default function HiwarForm({ hiwar, onSave, onCancel }: HiwarFormProps) {
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('Pendidikan & Sekolah');
  
  // Exactly 8 dialogue lines
  const [lines, setLines] = useState<DialogueLine[]>([
    { speaker: 'أَحْمَدُ (Ahmad)', textAr: '', textId: '' },
    { speaker: 'خَالِدٌ (Khalid)', textAr: '', textId: '' },
    { speaker: 'أَحْمَدُ (Ahmad)', textAr: '', textId: '' },
    { speaker: 'خَالِدٌ (Khalid)', textAr: '', textId: '' },
    { speaker: 'أَحْمَدُ (Ahmad)', textAr: '', textId: '' },
    { speaker: 'خَالِدٌ (Khalid)', textAr: '', textId: '' },
    { speaker: 'أَحْمَدُ (Ahmad)', textAr: '', textId: '' },
    { speaker: 'خَالِدٌ (Khalid)', textAr: '', textId: '' },
  ]);

  useEffect(() => {
    if (hiwar) {
      setTitle(hiwar.title);
      setTheme(hiwar.theme);
      // Ensure we load exactly 8 lines, padding with defaults if necessary
      const loadedLines = [...hiwar.lines];
      while (loadedLines.length < 8) {
        loadedLines.push({
          speaker: loadedLines.length % 2 === 0 ? 'أَحْمَدُ (Ahmad)' : 'خَالِدٌ (Khalid)',
          textAr: '',
          textId: ''
        });
      }
      setLines(loadedLines.slice(0, 8));
    }
  }, [hiwar]);

  const handleLineChange = (index: number, field: keyof DialogueLine, value: string) => {
    const updated = [...lines];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setLines(updated);
  };

  const autofillSpeakers = (pairType: 'ahmad_khalid' | 'fatimah_aisyah' | 'ustadz_tholib') => {
    const updated = [...lines];
    let p1 = 'أَحْمَدُ (Ahmad)';
    let p2 = 'خَالِدٌ (Khalid)';
    
    if (pairType === 'fatimah_aisyah') {
      p1 = 'فَاطِمَةُ (Fatimah)';
      p2 = 'عَائِشَةُ (Aisyah)';
    } else if (pairType === 'ustadz_tholib') {
      p1 = 'الْأُسْتَاذُ (Ustadz)';
      p2 = 'الطَّالِبُ (Murid)';
    }

    for (let i = 0; i < 8; i++) {
      updated[i].speaker = i % 2 === 0 ? p1 : p2;
    }
    setLines(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !theme.trim()) {
      alert("Harap lengkapi Judul Percakapan dan Kategori Tema!");
      return;
    }

    // Check if any fields are empty in the lines
    const hasEmptyField = lines.some(l => !l.speaker.trim() || !l.textAr.trim() || !l.textId.trim());
    if (hasEmptyField) {
      if (!window.confirm("Ada beberapa baris percakapan yang belum terisi lengkap. Apakah Anda ingin tetap menyimpan dengan data kosong?")) {
        return;
      }
    }

    const savedHiwar: Hiwar = {
      id: hiwar?.id || `hiwar-custom-${Date.now()}`,
      theme: theme.trim(),
      title: title.trim(),
      lines: lines.map(l => ({
        speaker: l.speaker.trim() || "Pembicara",
        textAr: l.textAr.trim() || "...",
        textId: l.textId.trim() || "..."
      }))
    };

    onSave(savedHiwar);
  };

  const themesList = [
    "Pendidikan & Sekolah",
    "Keutamaan Ilmu",
    "Safar & Rihlah",
    "Adab Belajar",
    "Bahasa Arab",
    "Di Perpustakaan",
    "Persahabatan",
    "Ujian & Persiapan",
    "Ibadah & Masjid",
    "Cita-Cita Masa Depan",
    "Kegiatan Asrama",
    "Adab Kepada Guru",
    "Umar bin Al Khattab",
    "Bahasa Al-Qur'an",
    "Olahraga & Kesehatan",
    "Keluarga & Rumah",
    "Umum"
  ];

  return (
    <div className="bg-transparent py-2">
      <div className="max-w-4xl mx-auto bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        
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
            {hiwar ? 'Edit Percakapan (Hiwar)' : 'Tambah Percakapan Baru'}
          </h2>
          
          <div className="w-20"></div> {/* Spacer for symmetry */}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-slate-200">
          
          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Kategori Tema</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500/85 transition"
              >
                {themesList.map((t, idx) => (
                  <option key={idx} value={t} className="bg-slate-950">{t}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 font-display">Judul Percakapan</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Hiwar 351: Belajar di Kebun"
                className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                required
              />
            </div>
          </div>

          {/* Quick Auto-fill controls */}
          <div className="bg-slate-950/30 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1 font-display">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Pengaturan Cepat Nama Tokoh / Pembicara</span>
            </span>
            <p className="text-xs text-slate-400">Pilih salah satu pasangan di bawah ini untuk mengisi nama pembicara secara selang-seling (ganjil-genap) secara otomatis:</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={() => autofillSpeakers('ahmad_khalid')}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 hover:bg-slate-800 rounded-lg border border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Ahmad & Khalid</span>
              </button>
              <button
                type="button"
                onClick={() => autofillSpeakers('fatimah_aisyah')}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 hover:bg-slate-800 rounded-lg border border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Fatimah & Aisyah</span>
              </button>
              <button
                type="button"
                onClick={() => autofillSpeakers('ustadz_tholib')}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/60 hover:bg-slate-800 rounded-lg border border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Ustadz & Murid</span>
              </button>
            </div>
          </div>

          {/* 8 Dialogue Lines */}
          <div className="space-y-6 pt-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block font-display">
              Percakapan (Wajib Berisi 8 Paragraf/Ujaran)
            </span>
            
            <div className="space-y-4">
              {lines.map((line, idx) => (
                <div key={idx} className="bg-slate-950/20 p-4 rounded-xl border border-slate-800/80 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/60 pb-2">
                    <span className="text-xs font-bold text-amber-400 font-mono">
                      🔴 Paragraf Ke-{idx + 1} Dari 8
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400 font-display">Nama Tokoh:</span>
                      <input
                        type="text"
                        value={line.speaker}
                        onChange={(e) => handleLineChange(idx, 'speaker', e.target.value)}
                        placeholder="Nama Pembicara"
                        className="bg-slate-950/40 border border-slate-800/80 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] text-slate-400 uppercase tracking-wider font-display">Bahasa Arab (Rata Kanan)</label>
                      <input
                        type="text"
                        value={line.textAr}
                        onChange={(e) => handleLineChange(idx, 'textAr', e.target.value)}
                        placeholder="Ketik kalimat bahasa arab di sini..."
                        className="w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-3 py-2 text-right font-serif text-lg text-white focus:outline-none focus:border-amber-500"
                        dir="rtl"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-[10px] text-slate-400 uppercase tracking-wider font-display">Terjemah Indonesia</label>
                      <input
                        type="text"
                        value={line.textId}
                        onChange={(e) => handleLineChange(idx, 'textId', e.target.value)}
                        placeholder="Ketik terjemahan bahasa indonesia di sini..."
                        className="w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>
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
              <span>Simpan Percakapan (Hiwar)</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
