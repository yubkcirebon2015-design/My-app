import React, { useState, useEffect } from 'react';
import { initialChapters } from './nahwuData';
import { generate350Hiwars } from './hiwarData';
import { generate500Isims, generate150Fiils } from './vocabularyData';
import { Chapter, Hiwar, Isim, Fiil } from './types';

// Components
import Navbar from './components/Navbar';
import ChapterDetail from './components/ChapterDetail';
import ChapterForm from './components/ChapterForm';
import HiwarDetail from './components/HiwarDetail';
import HiwarForm from './components/HiwarForm';
import BiographyView from './components/BiographyView';
import VocabularyView from './components/VocabularyView';
import StoriesView from './components/StoriesView';


// Icons
import {
  Search,
  Plus,
  BookOpen,
  MessageCircle,
  FileDown,
  FileUp,
  RotateCcw,
  BookMarked,
  Layers,
  Sparkles,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('nahwu');
  const [theme, setTheme] = useState<'dark' | 'fire'>(() => {
    const saved = localStorage.getItem('ubk_theme');
    return (saved as 'dark' | 'fire') || 'fire';
  });

  const handleSetTheme = (newTheme: 'dark' | 'fire') => {
    setTheme(newTheme);
    localStorage.setItem('ubk_theme', newTheme);
  };

  // Core database states
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [hiwars, setHiwars] = useState<Hiwar[]>([]);
  const [isims, setIsims] = useState<Isim[]>([]);
  const [fiils, setFiils] = useState<Fiil[]>([]);

  // Detailed selected views
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedHiwar, setSelectedHiwar] = useState<Hiwar | null>(null);

  // Form states
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null);
  const [addingChapter, setAddingChapter] = useState<boolean>(false);
  const [editingHiwar, setEditingHiwar] = useState<Hiwar | null>(null);
  const [addingHiwar, setAddingHiwar] = useState<boolean>(false);

  // Filter & Search states
  const [gradeFilter, setGradeFilter] = useState<number>(7); // 7, 8, 9
  const [nahwuSearch, setNahwuSearch] = useState<string>('');
  const [hiwarSearch, setHiwarSearch] = useState<string>('');
  const [hiwarThemeFilter, setHiwarThemeFilter] = useState<string>('Semua');

  // Hiwar pagination states (12 items per page for ultra-responsive rendering)
  const [hiwarPage, setHiwarPage] = useState<number>(1);
  const hiwarsPerPage = 12;

  // 1. Initial State Hydration from LocalStorage
  useEffect(() => {
    // Nahwu Chapters
    const savedChapters = localStorage.getItem('ubk_nahwu_chapters');
    if (savedChapters) {
      try {
        setChapters(JSON.parse(savedChapters));
      } catch (e) {
        setChapters(initialChapters);
        localStorage.setItem('ubk_nahwu_chapters', JSON.stringify(initialChapters));
      }
    } else {
      setChapters(initialChapters);
      localStorage.setItem('ubk_nahwu_chapters', JSON.stringify(initialChapters));
    }

    // Hiwars
    const savedHiwars = localStorage.getItem('ubk_hiwars');
    if (savedHiwars) {
      try {
        setHiwars(JSON.parse(savedHiwars));
      } catch (e) {
        const seeded = generate350Hiwars();
        setHiwars(seeded);
        localStorage.setItem('ubk_hiwars', JSON.stringify(seeded));
      }
    } else {
      const seeded = generate350Hiwars();
      setHiwars(seeded);
      localStorage.setItem('ubk_hiwars', JSON.stringify(seeded));
    }

    // Isims
    const savedIsims = localStorage.getItem('ubk_isims');
    if (savedIsims) {
      try {
        setIsims(JSON.parse(savedIsims));
      } catch (e) {
        const seeded = generate500Isims();
        setIsims(seeded);
        localStorage.setItem('ubk_isims', JSON.stringify(seeded));
      }
    } else {
      const seeded = generate500Isims();
      setIsims(seeded);
      localStorage.setItem('ubk_isims', JSON.stringify(seeded));
    }

    // Fiils
    const savedFiils = localStorage.getItem('ubk_fiils');
    if (savedFiils) {
      try {
        setFiils(JSON.parse(savedFiils));
      } catch (e) {
        const seeded = generate150Fiils();
        setFiils(seeded);
        localStorage.setItem('ubk_fiils', JSON.stringify(seeded));
      }
    } else {
      const seeded = generate150Fiils();
      setFiils(seeded);
      localStorage.setItem('ubk_fiils', JSON.stringify(seeded));
    }
  }, []);

  // Sync helpers
  const saveChaptersToStorage = (updated: Chapter[]) => {
    setChapters(updated);
    localStorage.setItem('ubk_nahwu_chapters', JSON.stringify(updated));
  };

  const saveHiwarsToStorage = (updated: Hiwar[]) => {
    setHiwars(updated);
    localStorage.setItem('ubk_hiwars', JSON.stringify(updated));
  };

  const saveIsimsToStorage = (updated: Isim[]) => {
    setIsims(updated);
    localStorage.setItem('ubk_isims', JSON.stringify(updated));
  };

  const saveFiilsToStorage = (updated: Fiil[]) => {
    setFiils(updated);
    localStorage.setItem('ubk_fiils', JSON.stringify(updated));
  };


  // 2. Nahwu Chapter Actions
  const handleSaveChapter = (chapter: Chapter) => {
    let updated: Chapter[];
    const exists = chapters.some(c => c.id === chapter.id);
    
    if (exists) {
      updated = chapters.map(c => c.id === chapter.id ? chapter : c);
    } else {
      updated = [...chapters, chapter];
    }

    // Sort chapters by grade, then by custom ID numbering
    updated.sort((a, b) => {
      if (a.grade !== b.grade) return a.grade - b.grade;
      const numA = parseInt(a.id.split('-')[1]) || 0;
      const numB = parseInt(b.id.split('-')[1]) || 0;
      return numA - numB;
    });

    saveChaptersToStorage(updated);
    setEditingChapter(null);
    setAddingChapter(false);
    setSelectedChapter(chapter); // Keep viewing the edited chapter
  };

  const handleDeleteChapter = (id: string) => {
    const updated = chapters.filter(c => c.id !== id);
    saveChaptersToStorage(updated);
    setSelectedChapter(null);
    setEditingChapter(null);
    setAddingChapter(false);
  };

  // 3. Hiwar Actions
  const handleSaveHiwar = (hiwar: Hiwar) => {
    let updated: Hiwar[];
    const exists = hiwars.some(h => h.id === hiwar.id);

    if (exists) {
      updated = hiwars.map(h => h.id === hiwar.id ? hiwar : h);
    } else {
      updated = [...hiwars, hiwar];
    }

    saveHiwarsToStorage(updated);
    setEditingHiwar(null);
    setAddingHiwar(false);
    setSelectedHiwar(hiwar); // Keep viewing the edited hiwar
  };

  const handleDeleteHiwar = (id: string) => {
    const updated = hiwars.filter(h => h.id !== id);
    saveHiwarsToStorage(updated);
    setSelectedHiwar(null);
    setEditingHiwar(null);
    setAddingHiwar(false);
  };

  // 4. Portal Guru Administrative Actions
  const handleResetToDefault = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua perubahan dan mengembalikan 45 bab Nahwu & 350 percakapan ke setelan bawaan awal?")) {
      const freshHiwars = generate350Hiwars();
      setChapters(initialChapters);
      setHiwars(freshHiwars);
      localStorage.setItem('ubk_nahwu_chapters', JSON.stringify(initialChapters));
      localStorage.setItem('ubk_hiwars', JSON.stringify(freshHiwars));
      
      // Reset view states
      setSelectedChapter(null);
      setSelectedHiwar(null);
      setEditingChapter(null);
      setAddingChapter(false);
      setEditingHiwar(null);
      setAddingHiwar(false);
      
      alert("Setelan awal berhasil dikembalikan!");
    }
  };

  const handleExportBackup = () => {
    const backupData = {
      app: "SMP IT UBK Nahwu App",
      timestamp: new Date().toISOString(),
      compiler: "Jundi Abdul Syahid, S.Pd.",
      chapters,
      hiwars
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_Nahwu_Hiwar_UBK_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportBackup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = event.target.files?.[0];
    if (!file) return;

    fileReader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (parsed.chapters && parsed.hiwars) {
          saveChaptersToStorage(parsed.chapters);
          saveHiwarsToStorage(parsed.hiwars);
          alert(`Berhasil mengimpor data! Terpasang ${parsed.chapters.length} bab Nahwu dan ${parsed.hiwars.length} percakapan.`);
          setSelectedChapter(null);
          setSelectedHiwar(null);
        } else {
          alert("Format file tidak didukung. Pastikan file JSON cadangan yang Anda pilih valid.");
        }
      } catch (err) {
        alert("Gagal membaca file JSON. Pastikan file tidak rusak.");
      }
    };
    fileReader.readAsText(file);
  };

  // 4.5 Vocabulary Actions
  const handleSaveIsim = (item: Isim) => {
    let updated: Isim[];
    const exists = isims.some(i => i.id === item.id);
    if (exists) {
      updated = isims.map(i => i.id === item.id ? item : i);
    } else {
      updated = [...isims, item];
    }
    saveIsimsToStorage(updated);
  };

  const handleDeleteIsim = (id: string) => {
    const updated = isims.filter(i => i.id !== id);
    saveIsimsToStorage(updated);
  };

  const handleSaveFiil = (item: Fiil) => {
    let updated: Fiil[];
    const exists = fiils.some(f => f.id === item.id);
    if (exists) {
      updated = fiils.map(f => f.id === item.id ? item : f);
    } else {
      updated = [...fiils, item];
    }
    saveFiilsToStorage(updated);
  };

  const handleDeleteFiil = (id: string) => {
    const updated = fiils.filter(f => f.id !== id);
    saveFiilsToStorage(updated);
  };

  const handleResetVocabToDefault = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua perubahan kosakata dan mengembalikan data bawaan awal (500 Isim & 150 Fi'il)?")) {
      const freshIsims = generate500Isims();
      const freshFiils = generate150Fiils();
      setIsims(freshIsims);
      setFiils(freshFiils);
      localStorage.setItem('ubk_isims', JSON.stringify(freshIsims));
      localStorage.setItem('ubk_fiils', JSON.stringify(freshFiils));
      alert("Setelan kosakata berhasil dikembalikan ke bawaan!");
    }
  };

  const handleExportVocabBackup = () => {
    const backupData = {
      app: "SMP IT UBK Vocabulary Data",
      timestamp: new Date().toISOString(),
      isims,
      fiils
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_Kosakata_Isim_Fiil_UBK_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportVocabBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e.target.files?.[0];
    if (!file) return;

    fileReader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && Array.isArray(parsed.isims) && Array.isArray(parsed.fiils)) {
          setIsims(parsed.isims);
          setFiils(parsed.fiils);
          localStorage.setItem('ubk_isims', JSON.stringify(parsed.isims));
          localStorage.setItem('ubk_fiils', JSON.stringify(parsed.fiils));
          alert(`SINKRONISASI BERHASIL!\nMemuat ${parsed.isims.length} Isim dan ${parsed.fiils.length} Fi'il.`);
        } else {
          alert("Gagal memuat: Format berkas cadangan kosakata tidak valid.");
        }
      } catch (err) {
        alert("Gagal membaca berkas JSON.");
      }
    };
    fileReader.readAsText(file);
  };


  // 5. Nahwu filtering & search logic
  const filteredChapters = chapters.filter(chapter => {
    if (chapter.grade !== gradeFilter) return false;
    
    const searchLower = nahwuSearch.toLowerCase();
    if (!searchLower) return true;

    return (
      chapter.titleAr.includes(nahwuSearch) ||
      chapter.titleId.toLowerCase().includes(searchLower) ||
      chapter.definitionId.toLowerCase().includes(searchLower) ||
      chapter.definitionAr.includes(nahwuSearch)
    );
  });

  // 6. Hiwar filtering, search & pagination logic
  const filteredHiwars = hiwars.filter(hiwar => {
    const matchesTheme = hiwarThemeFilter === 'Semua' || hiwar.theme === hiwarThemeFilter;
    
    const searchLower = hiwarSearch.toLowerCase();
    if (!searchLower) return matchesTheme;

    const matchesSearch = 
      hiwar.title.toLowerCase().includes(searchLower) ||
      hiwar.theme.toLowerCase().includes(searchLower) ||
      hiwar.lines.some(l => 
        l.textAr.includes(hiwarSearch) || 
        l.textId.toLowerCase().includes(searchLower) || 
        l.speaker.toLowerCase().includes(searchLower)
      );

    return matchesTheme && matchesSearch;
  });

  // Reset page whenever search or filter changes to avoid empty pages
  useEffect(() => {
    setHiwarPage(1);
  }, [hiwarSearch, hiwarThemeFilter]);

  const totalHiwarPages = Math.ceil(filteredHiwars.length / hiwarsPerPage) || 1;
  const paginatedHiwars = filteredHiwars.slice(
    (hiwarPage - 1) * hiwarsPerPage,
    hiwarPage * hiwarsPerPage
  );

  const hiwarThemesList = [
    "Semua",
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
    "Keluarga & Rumah"
  ];

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between transition-colors duration-500 ${theme === 'fire' ? 'bg-amber-50 text-slate-900 theme-fire' : 'bg-[#0B1221] text-slate-200'}`}>
      
      {/* 1. Header / Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Reset child views when tabs change
          setSelectedChapter(null);
          setSelectedHiwar(null);
          setEditingChapter(null);
          setAddingChapter(false);
          setEditingHiwar(null);
          setAddingHiwar(false);
        }}
        chapterCount={chapters.length}
        hiwarCount={hiwars.length}
        theme={theme}
        setTheme={handleSetTheme}
      />

      {/* 2. Main Content Wrapper */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ================= TAB 1: MATERI NAHWU ================= */}
        {activeTab === 'nahwu' && (
          <div className="space-y-6">
            
            {/* If adding new chapter */}
            {addingChapter && (
              <ChapterForm
                gradeOverride={gradeFilter}
                onSave={handleSaveChapter}
                onCancel={() => setAddingChapter(false)}
              />
            )}

            {/* If editing a chapter */}
            {editingChapter && (
              <ChapterForm
                chapter={editingChapter}
                onSave={handleSaveChapter}
                onCancel={() => setEditingChapter(null)}
              />
            )}

            {/* If looking at a chapter's detail */}
            {selectedChapter && !editingChapter && !addingChapter && (
              <ChapterDetail
                chapter={selectedChapter}
                onBack={() => setSelectedChapter(null)}
                onEdit={(c) => setEditingChapter(c)}
                onDelete={handleDeleteChapter}
              />
            )}

            {/* If viewing lists */}
            {!selectedChapter && !editingChapter && !addingChapter && (
              <div className="space-y-6">
                
                {/* Intro welcome card */}
                <div className="bg-gradient-to-r from-emerald-950/40 via-slate-950 to-emerald-950/40 rounded-xl border border-emerald-800/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                      <BookMarked className="w-5 h-5 text-amber-400" />
                      <span>Kitab Silsilah Ta'lim Lughah Al-Arabiyah</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Kumpulan materi Nahwu berjenjang interaktif untuk siswa Kelas 7, 8, dan 9 SMP IT Umar bin Al Khattab Cirebon.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setAddingChapter(true)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg border border-amber-500/40 text-xs font-semibold shrink-0 shadow-lg transition"
                  >
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Tambah Bab Baru</span>
                  </button>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#0B132B]/85 p-4 rounded-xl border border-emerald-900/60">
                  
                  {/* Grade Tabs */}
                  <div className="flex gap-1.5 bg-slate-950 p-1.5 rounded-lg border border-slate-800 shrink-0">
                    {[7, 8, 9].map((g) => (
                      <button
                        key={g}
                        onClick={() => {
                          setGradeFilter(g);
                          setNahwuSearch(''); // clear search on grade tab swap
                        }}
                        className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition ${
                          gradeFilter === g
                            ? 'bg-emerald-800 text-white shadow'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Kelas {g} SMP IT
                      </button>
                    ))}
                  </div>

                  {/* Search bar */}
                  <div className="relative flex-1 max-w-md w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={nahwuSearch}
                      onChange={(e) => setNahwuSearch(e.target.value)}
                      placeholder="Cari materi Nahwu (Arab / Indonesia)..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500 placeholder-slate-500"
                    />
                  </div>

                </div>

                {/* Chapters Grid List */}
                {filteredChapters.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredChapters.map((chapter) => {
                      const babNum = chapter.id.split('-')[1];
                      const formattedNum = babNum.padStart(2, '0');
                      return (
                        <div
                          key={chapter.id}
                          onClick={() => setSelectedChapter(chapter)}
                          className="bg-[#0F172A] rounded-2xl border border-slate-800 hover:border-emerald-500/50 p-5 shadow-lg flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="font-display text-3xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                                {formattedNum}
                              </span>
                              <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded border border-emerald-500/30 uppercase tracking-wider">
                                Kelas {chapter.grade}
                              </span>
                            </div>
                            
                            <h4 className="text-xl font-serif text-right text-emerald-100 font-bold mb-1 leading-relaxed" dir="rtl">
                              {chapter.titleAr}
                            </h4>
                            <h5 className="text-sm font-bold text-amber-400 group-hover:text-amber-300 transition mb-3">
                              {chapter.titleId}
                            </h5>
                            
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {chapter.definitionId}
                            </p>
                          </div>

                          <div className="border-t border-slate-800/80 mt-4 pt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                            <span className="italic uppercase">Kaidah: {chapter.kaidah.length} Poin</span>
                            <span className="text-amber-500/80 group-hover:text-amber-400 font-bold transition">Buka Materi →</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-[#0B132B]/40 p-12 rounded-xl text-center border border-slate-800 space-y-2">
                    <Layers className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">Tidak menemukan bab Nahwu yang cocok.</p>
                    <p className="text-xs text-slate-600">Coba kata kunci lain atau pilih tingkatan kelas yang berbeda.</p>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* ================= TAB 2: PERCAKAPAN (HIWAR) ================= */}
        {activeTab === 'hiwar' && (
          <div className="space-y-6">
            
            {/* If adding new hiwar */}
            {addingHiwar && (
              <HiwarForm
                onSave={handleSaveHiwar}
                onCancel={() => setAddingHiwar(false)}
              />
            )}

            {/* If editing hiwar */}
            {editingHiwar && (
              <HiwarForm
                hiwar={editingHiwar}
                onSave={handleSaveHiwar}
                onCancel={() => setEditingHiwar(null)}
              />
            )}

            {/* If looking at details */}
            {selectedHiwar && !editingHiwar && !addingHiwar && (
              <HiwarDetail
                hiwar={selectedHiwar}
                onBack={() => setSelectedHiwar(null)}
                onEdit={(h) => setEditingHiwar(h)}
                onDelete={handleDeleteHiwar}
              />
            )}

            {/* If viewing lists */}
            {!selectedHiwar && !editingHiwar && !addingHiwar && (
              <div className="space-y-6">
                
                {/* Intro card */}
                <div className="bg-gradient-to-r from-emerald-950/40 via-slate-950 to-emerald-950/40 rounded-xl border border-emerald-800/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-amber-400" />
                      <span>350 Percakapan (Hiwar) Pembiasaan</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Kamus interaktif 350 percakapan arab dengan 8 paragraf yang mudah dipahami demi melatih pelafalan uslub Nahwu & Sharaf aktif sehari-hari.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setAddingHiwar(true)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg border border-amber-500/40 text-xs font-semibold shrink-0 shadow-lg transition"
                  >
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Tambah Hiwar Baru</span>
                  </button>
                </div>

                {/* Filters & Search Row */}
                <div className="space-y-4 bg-[#0B132B]/85 p-4 rounded-xl border border-emerald-900/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Theme dropdown */}
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <span className="text-xs text-slate-400 shrink-0">Pilih Tema:</span>
                      <select
                        value={hiwarThemeFilter}
                        onChange={(e) => setHiwarThemeFilter(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 transition w-full md:w-56"
                      >
                        {hiwarThemesList.map((theme, idx) => (
                          <option key={idx} value={theme}>{theme}</option>
                        ))}
                      </select>
                    </div>

                    {/* Search input */}
                    <div className="relative flex-1 max-w-md w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={hiwarSearch}
                        onChange={(e) => setHiwarSearch(e.target.value)}
                        placeholder="Cari kata kunci hiwar (Arab / Indonesia / Tokoh)..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500 placeholder-slate-500"
                      />
                    </div>

                  </div>
                </div>

                {/* Grid List */}
                {paginatedHiwars.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {paginatedHiwars.map((hiwar) => (
                      <div
                        key={hiwar.id}
                        onClick={() => setSelectedHiwar(hiwar)}
                        className="bg-[#0F172A] rounded-2xl border border-slate-800 border-l-4 border-l-amber-500/70 hover:border-amber-500/50 p-4 cursor-pointer flex flex-col justify-between hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div>
                          <div className="flex justify-between items-start">
                            <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                              {hiwar.theme}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono font-bold">
                              8 BARIS
                            </span>
                          </div>
                          
                          <h4 className="text-sm font-bold text-slate-200 mt-2 line-clamp-1 group-hover:text-amber-400 transition">
                            {hiwar.title}
                          </h4>
                          
                          {/* Brief dialogue snippet */}
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-2 leading-relaxed" dir="rtl">
                            <strong className="text-emerald-500/90">{hiwar.lines[0]?.speaker}</strong>: {hiwar.lines[0]?.textAr}
                          </p>
                        </div>
                        
                        <div className="border-t border-slate-800/80 mt-3 pt-2 text-[9px] text-slate-500 flex justify-between items-center font-mono uppercase">
                          <span>Uslub Aktif</span>
                          <span className="text-amber-500/80 group-hover:text-amber-400 font-semibold transition">Buka Dialog →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#0B132B]/40 p-12 rounded-xl text-center border border-slate-800 space-y-2">
                    <Layers className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">Tidak menemukan percakapan yang sesuai kata kunci.</p>
                    <p className="text-xs text-slate-600">Gunakan tema lain atau persingkat kata pencarian Anda.</p>
                  </div>
                )}

                {/* Pagination Controls */}
                {filteredHiwars.length > hiwarsPerPage && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 mt-6">
                    <span className="text-xs text-slate-400">
                      Menampilkan <strong className="text-white">{(hiwarPage - 1) * hiwarsPerPage + 1} - {Math.min(hiwarPage * hiwarsPerPage, filteredHiwars.length)}</strong> dari <strong className="text-amber-400">{filteredHiwars.length}</strong> percakapan
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setHiwarPage(1)}
                        disabled={hiwarPage === 1}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded border border-slate-800 transition"
                        title="Halaman Pertama"
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setHiwarPage(p => Math.max(1, p - 1))}
                        disabled={hiwarPage === 1}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded border border-slate-800 transition"
                        title="Halaman Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <span className="text-xs px-3 text-slate-300">
                        Halaman <strong className="text-amber-400">{hiwarPage}</strong> dari <strong>{totalHiwarPages}</strong>
                      </span>

                      <button
                        onClick={() => setHiwarPage(p => Math.min(totalHiwarPages, p + 1))}
                        disabled={hiwarPage === totalHiwarPages}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded border border-slate-800 transition"
                        title="Halaman Selanjutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setHiwarPage(totalHiwarPages)}
                        disabled={hiwarPage === totalHiwarPages}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded border border-slate-800 transition"
                        title="Halaman Terakhir"
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* ================= TAB 3: BIOGRAFI PENYUSUN ================= */}
        {activeTab === 'biografi' && <BiographyView />}

        {/* ================= TAB 4: KOSAKATA (ISIM & FI'IL) ================= */}
        {activeTab === 'vocab' && (
          <VocabularyView
            isims={isims}
            fiils={fiils}
            onSaveIsim={handleSaveIsim}
            onDeleteIsim={handleDeleteIsim}
            onSaveFiil={handleSaveFiil}
            onDeleteFiil={handleDeleteFiil}
            onResetToDefault={handleResetVocabToDefault}
            onExportBackup={handleExportVocabBackup}
            onImportBackup={handleImportVocabBackup}
          />
        )}

        {/* ================= TAB 5: 100 STORIES ================= */}
        {activeTab === 'stories' && <StoriesView />}

      </main>

      {/* 3. Global Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 text-center text-xs text-slate-500 mt-12">
        <p>© 2026 SMP IT Umar bin Al Khattab Cirebon. All Rights Reserved.</p>
        <p className="mt-1">
          Aplikasi Nahwu Interaktif Berjenjang • Disusun oleh <strong className="text-slate-400">Jundi Abdul Syahid, S.Pd. (Orang Dalam Genetik Jawa)</strong>
        </p>
      </footer>

    </div>
  );
}
