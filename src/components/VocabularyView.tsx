import React, { useState } from 'react';
import { Isim, Fiil } from '../types';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  FileDown,
  FileUp,
  Sparkles,
  BookOpen,
  Layers,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
  Check
} from 'lucide-react';

interface VocabularyViewProps {
  isims: Isim[];
  fiils: Fiil[];
  onSaveIsim: (item: Isim) => void;
  onDeleteIsim: (id: string) => void;
  onSaveFiil: (item: Fiil) => void;
  onDeleteFiil: (id: string) => void;
  onResetToDefault: () => void;
  onExportBackup: () => void;
  onImportBackup: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function VocabularyView({
  isims,
  fiils,
  onSaveIsim,
  onDeleteIsim,
  onSaveFiil,
  onDeleteFiil,
  onResetToDefault,
  onExportBackup,
  onImportBackup
}: VocabularyViewProps) {
  // Tabs: 'isim' or 'fiil'
  const [subTab, setSubTab] = useState<'isim' | 'fiil'>('isim');

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Form Modal States
  const [showIsimForm, setShowIsimForm] = useState(false);
  const [editingIsim, setEditingIsim] = useState<Isim | null>(null);

  const [showFiilForm, setShowFiilForm] = useState(false);
  const [editingFiil, setEditingFiil] = useState<Fiil | null>(null);

  // Isim Form Fields
  const [singularAr, setSingularAr] = useState('');
  const [singularId, setSingularId] = useState('');
  const [pluralAr, setPluralAr] = useState('');
  const [pluralId, setPluralId] = useState('');
  const [isimCategory, setIsimCategory] = useState('Sekolah');

  // Fiil Form Fields
  const [madhiAr, setMadhiAr] = useState('');
  const [mudhoriAr, setMudhoriAr] = useState('');
  const [amrAr, setAmrAr] = useState('');
  const [meaningId, setMeaningId] = useState('');
  const [fiilCategory, setFiilCategory] = useState('Belajar');

  // Get unique categories for dropdown
  const uniqueIsimCategories = ['Semua', ...Array.from(new Set(isims.map(i => i.category)))];
  const uniqueFiilCategories = ['Semua', ...Array.from(new Set(fiils.map(f => f.category)))];

  // Filtered data
  const filteredIsims = isims.filter(item => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.singularAr.includes(query) ||
      item.singularId.toLowerCase().includes(query) ||
      item.pluralAr.includes(query) ||
      item.pluralId.toLowerCase().includes(query);
    const matchesCategory = categoryFilter === 'Semua' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredFiils = fiils.filter(item => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.madhiAr.includes(query) ||
      item.mudhoriAr.includes(query) ||
      item.amrAr.includes(query) ||
      item.meaningId.toLowerCase().includes(query);
    const matchesCategory = categoryFilter === 'Semua' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Reset pagination on filter or tab changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter, subTab]);

  // Pagination calculation
  const totalItems = subTab === 'isim' ? filteredIsims.length : filteredFiils.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentIsims = filteredIsims.slice(startIndex, startIndex + itemsPerPage);
  const currentFiils = filteredFiils.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for Isim Form
  const handleOpenAddIsim = () => {
    setEditingIsim(null);
    setSingularAr('');
    setSingularId('');
    setPluralAr('');
    setPluralId('');
    setIsimCategory('Sekolah');
    setShowIsimForm(true);
  };

  const handleOpenEditIsim = (item: Isim) => {
    setEditingIsim(item);
    setSingularAr(item.singularAr);
    setSingularId(item.singularId);
    setPluralAr(item.pluralAr);
    setPluralId(item.pluralId);
    setIsimCategory(item.category);
    setShowIsimForm(true);
  };

  const handleSaveIsimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Isim = {
      id: editingIsim ? editingIsim.id : `isim-${Date.now()}`,
      singularAr,
      singularId,
      pluralAr,
      pluralId,
      category: isimCategory
    };
    onSaveIsim(newItem);
    setShowIsimForm(false);
    setEditingIsim(null);
  };

  // Handlers for Fiil Form
  const handleOpenAddFiil = () => {
    setEditingFiil(null);
    setMadhiAr('');
    setMudhoriAr('');
    setAmrAr('');
    setMeaningId('');
    setFiilCategory('Belajar');
    setShowFiilForm(true);
  };

  const handleOpenEditFiil = (item: Fiil) => {
    setEditingFiil(item);
    setMadhiAr(item.madhiAr);
    setMudhoriAr(item.mudhoriAr);
    setAmrAr(item.amrAr);
    setMeaningId(item.meaningId);
    setFiilCategory(item.category);
    setShowFiilForm(true);
  };

  const handleSaveFiilSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Fiil = {
      id: editingFiil ? editingFiil.id : `fiil-${Date.now()}`,
      madhiAr,
      mudhoriAr,
      amrAr,
      meaningId,
      category: fiilCategory
    };
    onSaveFiil(newItem);
    setShowFiilForm(false);
    setEditingFiil(null);
  };

  return (
    <div className="bg-transparent py-4 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-br from-emerald-900/40 to-[#0F172A] rounded-2xl border border-emerald-500/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-display">Gudang Kosakata Mandiri</h2>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                Bebas Sandi
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Daftar kosakata interaktif berisi <strong className="text-amber-400 font-mono">500 Kata Benda (Isim & Jamak)</strong> serta <strong className="text-amber-400 font-mono">150 Kata Kerja (Fi'il Madhi, Mudhori', Amr)</strong> pendukung silsilah kitab LIPIA di SMP IT Umar bin Al Khattab Cirebon.
            </p>
          </div>
          
          {/* Quick Administration Actions */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={onExportBackup}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-800/80 hover:bg-emerald-700 text-white rounded-xl border border-emerald-500/30 text-xs font-bold uppercase tracking-wider transition duration-300 shadow hover:shadow-emerald-500/20 cursor-pointer"
              title="Ekspor Kosakata Ke JSON"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Ekspor</span>
            </button>
            
            <div className="relative">
              <input
                type="file"
                accept=".json"
                onChange={onImportBackup}
                id="vocab-file-import"
                className="hidden"
              />
              <label
                htmlFor="vocab-file-import"
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 text-xs font-bold uppercase tracking-wider transition duration-300 shadow cursor-pointer"
                title="Impor Kosakata Dari JSON"
              >
                <FileUp className="w-4 h-4 text-amber-400" />
                <span>Impor</span>
              </label>
            </div>

            <button
              onClick={onResetToDefault}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-950/60 hover:bg-red-900 text-red-200 rounded-xl border border-red-900/50 text-xs font-bold uppercase tracking-wider transition duration-300 shadow cursor-pointer"
              title="Kembalikan Ke Data Asli 500 Isim & 150 Fi'il"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tab (Isim vs Fiil) & Statistics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex gap-2">
          <button
            onClick={() => { setSubTab('isim'); setSearchQuery(''); setCategoryFilter('Semua'); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer border ${
              subTab === 'isim'
                ? 'bg-emerald-700 text-white border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>500 Isim & Jamak</span>
            <span className="bg-slate-950/80 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono">
              {isims.length}
            </span>
          </button>

          <button
            onClick={() => { setSubTab('fiil'); setSearchQuery(''); setCategoryFilter('Semua'); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition duration-300 cursor-pointer border ${
              subTab === 'fiil'
                ? 'bg-emerald-700 text-white border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>150 Fi'il (Madhi/Mudhori/Amr)</span>
            <span className="bg-slate-950/80 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono">
              {fiils.length}
            </span>
          </button>
        </div>

        {/* Dynamic Add Button */}
        <div>
          {subTab === 'isim' ? (
            <button
              onClick={handleOpenAddIsim}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition duration-300 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Isim Baru</span>
            </button>
          ) : (
            <button
              onClick={handleOpenAddFiil}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition duration-300 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Fi'il Baru</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Filter controls bar */}
      <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder={subTab === 'isim' ? "Cari Mufrod, Jamak, atau Terjemahan..." : "Cari Madhi, Mudhori, Amr, atau Arti..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/70 transition"
          />
        </div>

        {/* Category dropdown filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 shrink-0 font-display">Kategori:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full sm:w-48 bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/70 transition"
          >
            {subTab === 'isim' ? (
              uniqueIsimCategories.map((cat, idx) => (
                <option key={idx} value={cat} className="bg-slate-950">{cat}</option>
              ))
            ) : (
              uniqueFiilCategories.map((cat, idx) => (
                <option key={idx} value={cat} className="bg-slate-950">{cat}</option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* 4. Display Content Grid */}
      {subTab === 'isim' ? (
        // ================= ISIM (KATA BENDA) VIEW =================
        filteredIsims.length === 0 ? (
          <div className="text-center py-12 bg-[#0F172A] rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada kosakata Isim yang cocok dengan pencarian Anda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentIsims.map((item) => (
              <div
                key={item.id}
                className="bg-[#0F172A] rounded-2xl border border-slate-800 hover:border-emerald-500/30 p-5 shadow-lg flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)]"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900/40 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      {item.category}
                    </span>
                    
                    <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition duration-200">
                      <button
                        onClick={() => handleOpenEditIsim(item)}
                        className="p-1 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition"
                        title="Edit Kosakata"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Yakin ingin menghapus kata "${item.singularId}"?`)) {
                            onDeleteIsim(item.id);
                          }
                        }}
                        className="p-1 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                        title="Hapus Kosakata"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Vocabulary card structure */}
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-800/50 pb-4">
                    {/* Singular (Mufrod) */}
                    <div className="text-right border-r border-slate-800/80 pr-2">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block font-mono mb-1">Mufrod (Sg)</span>
                      <h4 className="text-xl font-serif font-bold text-amber-400 leading-relaxed" dir="rtl">{item.singularAr}</h4>
                      <p className="text-xs text-slate-300 mt-1 italic font-medium">{item.singularId}</p>
                    </div>

                    {/* Plural (Jamak) */}
                    <div className="text-right pl-2">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block font-mono mb-1">Jamak (Pl)</span>
                      <h4 className="text-xl font-serif font-bold text-emerald-300 leading-relaxed" dir="rtl">{item.pluralAr}</h4>
                      <p className="text-xs text-slate-300 mt-1 italic font-medium">{item.pluralId}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[9px] text-slate-500 font-mono text-center uppercase tracking-wider">
                  {item.id}
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        // ================= FI'IL (KATA KERJA) VIEW =================
        filteredFiils.length === 0 ? (
          <div className="text-center py-12 bg-[#0F172A] rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada kosakata Fi'il yang cocok dengan pencarian Anda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentFiils.map((item) => (
              <div
                key={item.id}
                className="bg-[#0F172A] rounded-2xl border border-slate-800 hover:border-amber-500/30 p-5 shadow-lg flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.05)]"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900/40 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      {item.category}
                    </span>
                    
                    <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition duration-200">
                      <button
                        onClick={() => handleOpenEditFiil(item)}
                        className="p-1 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition"
                        title="Edit Kosakata"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Yakin ingin menghapus kata "${item.meaningId}"?`)) {
                            onDeleteFiil(item.id);
                          }
                        }}
                        className="p-1 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                        title="Hapus Kosakata"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 3 Forms: Madhi, Mudhori, Amr */}
                  <div className="grid grid-cols-3 gap-2 border-b border-slate-800/50 pb-4 text-center">
                    <div>
                      <span className="text-[8px] text-slate-500 font-bold uppercase block font-mono mb-1">Amr (Perintah)</span>
                      <h4 className="text-lg font-serif font-bold text-red-400 leading-relaxed" dir="rtl">{item.amrAr}</h4>
                    </div>

                    <div className="border-x border-slate-800/80">
                      <span className="text-[8px] text-slate-500 font-bold uppercase block font-mono mb-1">Mudhori' (Sdg)</span>
                      <h4 className="text-lg font-serif font-bold text-amber-400 leading-relaxed" dir="rtl">{item.mudhoriAr}</h4>
                    </div>

                    <div>
                      <span className="text-[8px] text-slate-500 font-bold uppercase block font-mono mb-1">Madhi (Lampau)</span>
                      <h4 className="text-lg font-serif font-bold text-emerald-300 leading-relaxed" dir="rtl">{item.madhiAr}</h4>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-200 font-medium font-display">{item.meaningId}</span>
                  <span className="text-[8px] text-slate-500 font-mono uppercase tracking-wider">{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* 5. Pagination component */}
      {totalPages > 1 && (
        <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-mono">
            Menampilkan <strong className="text-white">{startIndex + 1} - {Math.min(startIndex + itemsPerPage, totalItems)}</strong> dari <strong className="text-amber-400">{totalItems}</strong> kosakata
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1.5 bg-slate-950/40 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-800 transition cursor-pointer"
              title="Pertama"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 bg-slate-950/40 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-800 transition cursor-pointer"
              title="Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs px-3 text-slate-300 font-mono">
              Halaman <strong className="text-amber-400">{currentPage}</strong> dari <strong>{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 bg-slate-950/40 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-800 transition cursor-pointer"
              title="Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-1.5 bg-slate-950/40 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-800 transition cursor-pointer"
              title="Terakhir"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}


      {/* ================= MODAL: FORM ISIM ================= */}
      {showIsimForm && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] w-full max-w-lg rounded-2xl border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-gradient-to-br from-emerald-900/30 to-[#0F172A] p-5 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-display">
                {editingIsim ? 'Edit Kosakata Isim' : 'Tambah Kosakata Isim Baru'}
              </h3>
              <button
                onClick={() => setShowIsimForm(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveIsimSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Singular Ar */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-amber-400 font-display">Mufrod (Arab)</label>
                  <input
                    type="text"
                    required
                    value={singularAr}
                    onChange={(e) => setSingularAr(e.target.value)}
                    placeholder="كِتَابٌ"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-right font-serif text-lg text-white focus:outline-none focus:border-amber-500"
                    dir="rtl"
                  />
                </div>

                {/* Singular Id */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-amber-400 font-display">Terjemah Mufrod</label>
                  <input
                    type="text"
                    required
                    value={singularId}
                    onChange={(e) => setSingularId(e.target.value)}
                    placeholder="Buku"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Plural Ar */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-emerald-400 font-display">Jamak (Arab)</label>
                  <input
                    type="text"
                    required
                    value={pluralAr}
                    onChange={(e) => setPluralAr(e.target.value)}
                    placeholder="كُتُبٌ"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-right font-serif text-lg text-white focus:outline-none focus:border-emerald-500"
                    dir="rtl"
                  />
                </div>

                {/* Plural Id */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase font-bold text-emerald-400 font-display">Terjemah Jamak</label>
                  <input
                    type="text"
                    required
                    value={pluralId}
                    onChange={(e) => setPluralId(e.target.value)}
                    placeholder="Buku-buku"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold text-slate-400 font-display">Kategori</label>
                <input
                  type="text"
                  required
                  value={isimCategory}
                  onChange={(e) => setIsimCategory(e.target.value)}
                  placeholder="Sekolah, Rumah, dll"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/70"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowIsimForm(false)}
                  className="px-4 py-2 bg-slate-900 text-slate-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-slate-800 hover:bg-slate-800 transition duration-300 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-emerald-500/30 transition duration-300 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* ================= MODAL: FORM FIIL ================= */}
      {showFiilForm && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] w-full max-w-lg rounded-2xl border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="bg-gradient-to-br from-emerald-900/30 to-[#0F172A] p-5 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-display">
                {editingFiil ? 'Edit Kosakata Fi\'il' : 'Tambah Kosakata Fi\'il Baru'}
              </h3>
              <button
                onClick={() => setShowFiilForm(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveFiilSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {/* Madhi Ar */}
                <div className="space-y-1">
                  <label className="block text-[8px] uppercase font-bold text-emerald-400 font-display">Madhi (Arab)</label>
                  <input
                    type="text"
                    required
                    value={madhiAr}
                    onChange={(e) => setMadhiAr(e.target.value)}
                    placeholder="كَتَبَ"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-2 py-2 text-center font-serif text-lg text-white focus:outline-none focus:border-emerald-500"
                    dir="rtl"
                  />
                </div>

                {/* Mudhori Ar */}
                <div className="space-y-1">
                  <label className="block text-[8px] uppercase font-bold text-amber-400 font-display">Mudhori' (Arab)</label>
                  <input
                    type="text"
                    required
                    value={mudhoriAr}
                    onChange={(e) => setMudhoriAr(e.target.value)}
                    placeholder="يَكْتُبُ"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-2 py-2 text-center font-serif text-lg text-white focus:outline-none focus:border-amber-500"
                    dir="rtl"
                  />
                </div>

                {/* Amr Ar */}
                <div className="space-y-1">
                  <label className="block text-[8px] uppercase font-bold text-red-400 font-display">Amr (Arab)</label>
                  <input
                    type="text"
                    required
                    value={amrAr}
                    onChange={(e) => setAmrAr(e.target.value)}
                    placeholder="اُكْتُبْ"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-2 py-2 text-center font-serif text-lg text-white focus:outline-none focus:border-red-500"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Meaning Id */}
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold text-slate-300 font-display">Arti Bahasa Indonesia</label>
                <input
                  type="text"
                  required
                  value={meaningId}
                  onChange={(e) => setMeaningId(e.target.value)}
                  placeholder="Menulis"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Category */}
              <div className="space-y-1">
                <label className="block text-[10px] uppercase font-bold text-slate-400 font-display">Kategori</label>
                <input
                  type="text"
                  required
                  value={fiilCategory}
                  onChange={(e) => setFiilCategory(e.target.value)}
                  placeholder="Belajar, Ibadah, dll"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/70"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowFiilForm(false)}
                  className="px-4 py-2 bg-slate-900 text-slate-400 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-slate-800 hover:bg-slate-800 transition duration-300 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-emerald-500/30 transition duration-300 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
