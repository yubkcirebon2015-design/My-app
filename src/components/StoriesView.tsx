import React, { useState, useMemo, useEffect, useRef } from 'react';
import { getStories } from '../storiesData';
import { Story, StoryParagraph } from '../types';
import { 
  Search, BookOpen, Flame, Sparkles, Languages, Eye, EyeOff, 
  Type, ChevronRight, ChevronLeft, Volume2, ArrowLeft, CheckCircle,
  Bookmark, Play, Pause, RotateCcw, X, Maximize2, Sliders, Award, 
  Settings, Check, VolumeX, Compass, Heart, BookmarkCheck, RefreshCw
} from 'lucide-react';

export default function StoriesView() {
  const [stories] = useState<Story[]>(() => getStories());
  const [selectedStoryId, setSelectedStoryId] = useState<string>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  
  // Immersive state
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [readingTheme, setReadingTheme] = useState<'navy' | 'sepia' | 'midnight' | 'ivory'>('navy');
  const [arabicFont, setArabicFont] = useState<'amiri' | 'scheherazade' | 'naskh' | 'serif'>('amiri');
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("xl");
  const [displayMode, setDisplayMode] = useState<"both" | "arabic" | "translation">("both");
  const [lineSpacing, setLineSpacing] = useState<"normal" | "relaxed" | "loose">("relaxed");
  const [autoScrollSpeed, setAutoScrollSpeed] = useState<number>(0); // 0 = off, 1 = slow, 2 = medium, 3 = fast
  
  // Track active reading paragraph (0-9) for focus
  const [activeParaIndex, setActiveParaIndex] = useState<number | null>(null);

  // Audio & speech states
  const [isPlayingSynth, setIsPlayingSynth] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Completed stories stored persistently
  const [completedStories, setCompletedStories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ubk_completed_stories');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Load Speech Synthesis API
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Sync completed stories to local storage
  const toggleStoryCompleted = (storyId: string) => {
    let updated: string[];
    if (completedStories.includes(storyId)) {
      updated = completedStories.filter(id => id !== storyId);
    } else {
      updated = [...completedStories, storyId];
    }
    setCompletedStories(updated);
    localStorage.setItem('ubk_completed_stories', JSON.stringify(updated));
  };

  // Auto-scroll controller
  useEffect(() => {
    if (!isReadingMode || autoScrollSpeed === 0) return;
    
    let intervalTime = 160; 
    if (autoScrollSpeed === 2) intervalTime = 95; 
    if (autoScrollSpeed === 3) intervalTime = 45; 
    
    const interval = setInterval(() => {
      window.scrollBy({ top: 1, behavior: 'smooth' });
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [isReadingMode, autoScrollSpeed]);

  // Categories extraction
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("Semua");
    stories.forEach(s => cats.add(s.category));
    return Array.from(cats);
  }, [stories]);

  // Filtered stories
  const filteredStories = useMemo(() => {
    return stories.filter(s => {
      const matchSearch = 
        s.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.titleId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.id.includes(searchQuery);
      
      const matchCat = selectedCategory === "Semua" || s.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [stories, searchQuery, selectedCategory]);

  // Selected Story
  const selectedStory = useMemo(() => {
    return stories.find(s => s.id === selectedStoryId) || stories[0];
  }, [stories, selectedStoryId]);

  // Navigate to next / prev story
  const handleNextStory = () => {
    if (synthRef.current) synthRef.current.cancel();
    setIsSpeaking(false);
    
    const currentIndex = stories.findIndex(s => s.id === selectedStoryId);
    if (currentIndex < stories.length - 1) {
      setSelectedStoryId(stories[currentIndex + 1].id);
      setActiveParaIndex(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStory = () => {
    if (synthRef.current) synthRef.current.cancel();
    setIsSpeaking(false);

    const currentIndex = stories.findIndex(s => s.id === selectedStoryId);
    if (currentIndex > 0) {
      setSelectedStoryId(stories[currentIndex - 1].id);
      setActiveParaIndex(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Font family helper
  const getArabicFontFamilyClass = () => {
    switch (arabicFont) {
      case "amiri": return "font-amiri";
      case "scheherazade": return "font-scheherazade";
      case "naskh": return "font-naskh";
      case "serif": return "font-serif";
    }
  };

  // Font size helper
  const getArabicFontSizeClass = () => {
    switch (fontSize) {
      case "sm": return "text-lg";
      case "md": return "text-xl sm:text-2xl";
      case "lg": return "text-2xl sm:text-3xl";
      case "xl": return "text-3xl sm:text-4xl";
      case "2xl": return "text-4xl sm:text-5xl";
    }
  };

  // Line spacing helper
  const getLineSpacingClass = () => {
    switch (lineSpacing) {
      case "normal": return "leading-loose";
      case "relaxed": return "leading-loose sm:leading-[2.2rem]";
      case "loose": return "leading-loose sm:leading-[2.8rem] tracking-wide";
    }
  };

  // Ambient chime player
  const triggerAudioMockup = (index: number) => {
    const key = `${selectedStoryId}-${index}`;
    setIsPlayingSynth(key);
    
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const playNote = (delay: number, freq: number, duration: number) => {
        setTimeout(() => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
          osc.start();
          osc.stop(audioCtx.currentTime + duration);
        }, delay);
      };

      playNote(0, 523.25, 0.5);   // C5
      playNote(150, 659.25, 0.5); // E5
      playNote(300, 783.99, 0.7); // G5
    } catch (e) {
      // Audio fallback
    }
    
    setTimeout(() => {
      setIsPlayingSynth(curr => curr === key ? null : curr);
    }, 1800);
  };

  // TTS Reader
  const handleTTSReadAloud = (text: string, index: number) => {
    if (!synthRef.current) {
      triggerAudioMockup(index);
      return;
    }

    if (isSpeaking && activeParaIndex === index) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      return;
    }

    synthRef.current.cancel();
    setActiveParaIndex(index);

    // Clean text to avoid reading punctuation marks awkwardly
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85; // A bit slower for educational purposes
    
    const voices = synthRef.current.getVoices();
    const arVoice = voices.find(v => v.lang.startsWith('ar') || v.lang === 'ar-SA');
    if (arVoice) {
      utterance.voice = arVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
    triggerAudioMockup(index);
  };

  // Cancel any TTS reading upon exit
  const handleExitReadingMode = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
    setIsReadingMode(false);
    setAutoScrollSpeed(0);
  };

  // Dynamic progress percentage for active reading
  const readingProgressPercent = useMemo(() => {
    if (activeParaIndex === null) return 0;
    return Math.min(100, Math.round(((activeParaIndex + 1) / 10) * 100));
  }, [activeParaIndex]);

  // Styling based on Theme Selection
  const getThemeStyles = () => {
    switch (readingTheme) {
      case 'navy':
        return {
          wrapper: 'bg-[#0B132B] text-slate-100',
          container: 'bg-[#0F172A]/90 border-[#3B82F6]/30',
          accentBorder: 'border-[#E2E8F0]/10',
          paraBoxActive: 'bg-blue-600/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]',
          paraBoxNormal: 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60',
          paraNum: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
          textAr: 'text-emerald-100',
          textId: 'text-slate-300 border-blue-500/20',
          controlPanel: 'bg-slate-950/80 border-blue-500/20',
          floatingHeader: 'bg-slate-950/90 border-slate-800'
        };
      case 'sepia':
        return {
          wrapper: 'bg-[#F2E8D3] text-[#443121]',
          container: 'bg-[#FAF2DF] border-[#CBB89B]',
          accentBorder: 'border-[#D9C4A9]',
          paraBoxActive: 'bg-[#F2DFBA] border-[#B8860B] shadow-[0_4px_15px_rgba(184,134,11,0.15)]',
          paraBoxNormal: 'bg-[#FAF2DF] border-[#EADFCA] hover:border-[#D6C4A6] hover:bg-[#FDF9F0]',
          paraNum: 'bg-[#B8860B]/10 text-[#8B5A00] border-[#B8860B]/30',
          textAr: 'text-[#1B4332] font-semibold',
          textId: 'text-[#5C4033] border-[#B8860B]/20',
          controlPanel: 'bg-[#FAF2DF] border-[#CBB89B]',
          floatingHeader: 'bg-[#FAF2DF]/95 border-[#CBB89B]'
        };
      case 'midnight':
        return {
          wrapper: 'bg-[#000000] text-zinc-300',
          container: 'bg-[#080808] border-zinc-800',
          accentBorder: 'border-zinc-900',
          paraBoxActive: 'bg-yellow-950/20 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]',
          paraBoxNormal: 'bg-[#080808] border-zinc-900 hover:border-zinc-800 hover:bg-[#0C0C0C]',
          paraNum: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
          textAr: 'text-emerald-300',
          textId: 'text-zinc-400 border-yellow-500/25',
          controlPanel: 'bg-[#080808] border-zinc-800',
          floatingHeader: 'bg-black/90 border-zinc-900'
        };
      case 'ivory':
        return {
          wrapper: 'bg-[#FAF9F5] text-slate-800',
          container: 'bg-white border-slate-200 shadow-md',
          accentBorder: 'border-slate-100',
          paraBoxActive: 'bg-amber-50/70 border-amber-500 shadow-[0_2px_10px_rgba(245,158,11,0.1)]',
          paraBoxNormal: 'bg-white border-slate-150 hover:border-slate-300 hover:bg-slate-50',
          paraNum: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
          textAr: 'text-[#065F46] font-semibold',
          textId: 'text-slate-600 border-amber-500/10',
          controlPanel: 'bg-white border-slate-200 shadow-sm',
          floatingHeader: 'bg-white/95 border-slate-200'
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-1 sm:px-4">
      
      {/* ==========================================================================
         A. CATALOG MODE (LIBRARY VIEW)
         ========================================================================== */}
      {!isReadingMode && (
        <div className="space-y-6">
          
          {/* HEADER BANNER - Beautiful golden fire sunrise effect */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 text-white p-6 sm:p-8 shadow-xl border border-amber-400/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-amber-500/30 text-amber-200 text-xs px-3 py-1 rounded-full border border-amber-400/20 uppercase tracking-widest font-bold">
                  <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>Karya Sastra LIPIA</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-white">
                  100 Kisah Berbahasa Arab Balaghah
                </h1>
                <p className="text-sm sm:text-base text-amber-100 max-w-2xl leading-relaxed">
                  Kumpulan 100 cerita hikmah bersastra tinggi untuk mengasah kemampuan membaca teks Arab gundul/berharakat. Setiap cerita disusun presisi dalam <strong className="text-white">10 paragraf bertingkat</strong>.
                </p>
              </div>

              {/* Achievement Badge Board */}
              <div className="bg-slate-950/40 backdrop-blur-md border border-amber-400/30 p-4 rounded-2xl flex flex-col items-center justify-center shrink-0 min-w-[200px] text-center shadow-inner">
                <Award className="w-10 h-10 text-yellow-300 mb-1.5 animate-pulse" />
                <span className="text-[10px] text-amber-200 uppercase tracking-widest font-bold">Progress Membaca</span>
                <span className="text-2xl font-extrabold text-white my-0.5">{completedStories.length} <span className="text-xs text-slate-300">/ 100 Selesai</span></span>
                
                {/* Progress bar inside badge */}
                <div className="w-full bg-slate-900 rounded-full h-1.5 mt-2 border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(4, (completedStories.length / 100) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Filtering & Search Controls */}
          <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-amber-500/20 flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-amber-500" />
              </span>
              <input
                type="text"
                placeholder="Cari kisah lewat judul bahasa Indonesia, Arab, atau No ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-100 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border-amber-400 shadow-md font-bold"
                      : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* 100 STORIES GRID - Stunning Library Card Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredStories.length === 0 ? (
              <div className="col-span-full bg-slate-950/40 border border-slate-900 p-12 text-center rounded-2xl text-slate-400 text-sm">
                Tidak ada kisah sastra yang cocok dengan pencarian Anda. Coba kata kunci lainnya.
              </div>
            ) : (
              filteredStories.map((story) => {
                const isCompleted = completedStories.includes(story.id);
                return (
                  <div
                    key={story.id}
                    onClick={() => {
                      setSelectedStoryId(story.id);
                      setActiveParaIndex(null);
                      setIsReadingMode(true);
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    className={`relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-emerald-950/20 to-slate-950 border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_4px_15px_rgba(16,185,129,0.05)]' 
                        : 'bg-slate-950/60 border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/40 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Glow backdrop on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>
                    
                    <div className="space-y-4">
                      {/* Badge Row */}
                      <div className="flex justify-between items-center">
                        <span className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center border shrink-0 ${
                          isCompleted 
                            ? "bg-emerald-500 text-slate-950 border-emerald-400" 
                            : "bg-slate-900 text-amber-500 border-slate-800"
                        }`}>
                          {story.id}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            {story.category}
                          </span>
                          
                          {isCompleted && (
                            <span className="flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                              <Check className="w-3 h-3" />
                              <span>Selesai</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title Group */}
                      <div className="space-y-1 text-right mt-2">
                        <p dir="rtl" className="text-xl sm:text-2xl text-emerald-400 font-serif leading-relaxed line-clamp-1 group-hover:text-emerald-300 transition-colors">
                          {story.titleAr}
                        </p>
                        <h3 className="text-sm font-bold text-slate-100 text-left line-clamp-1 group-hover:text-amber-400 transition-colors">
                          {story.titleId}
                        </h3>
                      </div>

                      {/* Moral summary preview */}
                      <p className="text-xs text-slate-400 line-clamp-2 italic leading-relaxed pt-1 border-t border-slate-900">
                        "{story.moralId}"
                      </p>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="mt-5 pt-3 border-t border-slate-900 flex justify-between items-center">
                      <span className="text-[10px] text-slate-500 font-mono">10 Paragraf</span>
                      
                      <button className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 text-slate-300 group-hover:text-slate-950 border border-slate-800 group-hover:border-amber-400 shadow-sm'
                      }`}>
                        <span>Mode Baca</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Tip Box */}
          <div className="bg-slate-950/40 border border-slate-900/60 p-4 rounded-2xl text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-400 leading-relaxed">
              💡 <strong>Rekomendasi Belajar:</strong> Klik pada salah satu kisah di atas untuk langsung membuka <strong>Mode Baca Immersive</strong>. Di dalam Mode Baca, Anda dapat menggunakan auto-scroll otomatis, pengeras suara berteknologi kecerdasan buatan, penyesuaian font, dan mencatat progres belajar Anda.
            </p>
          </div>

        </div>
      )}


      {/* ==========================================================================
         B. COZY IMMERSIVE READING MODE (MODE BACA)
         ========================================================================== */}
      {isReadingMode && (
        <div className={`min-h-screen rounded-3xl p-3 sm:p-6 transition-colors duration-300 ${themeStyles.wrapper}`}>
          
          {/* 1. FLOATING CONTROL HEADER - Ultimate comfort tools */}
          <div className={`sticky top-0 z-50 rounded-2xl border p-3 sm:p-4 mb-6 shadow-xl backdrop-blur-md transition-all flex flex-col md:flex-row justify-between items-center gap-4 ${themeStyles.floatingHeader}`}>
            
            {/* Left Back to library & story info */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <button
                onClick={handleExitReadingMode}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition shadow border border-slate-800 cursor-pointer"
                title="Keluar dari Mode Baca"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Kembali</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Kisah {selectedStory.id} / 100
                </span>
                <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase shrink-0">
                  {selectedStory.category}
                </span>
              </div>
            </div>

            {/* Middle Nav Pagination bar */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handlePrevStory}
                disabled={stories.findIndex(s => s.id === selectedStoryId) === 0}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 transition cursor-pointer"
                title="Kisah Sebelumnya"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>

              <h1 className="text-xs sm:text-sm font-black truncate max-w-[150px] sm:max-w-[220px] text-center">
                {selectedStory.titleId}
              </h1>

              <button
                onClick={handleNextStory}
                disabled={stories.findIndex(s => s.id === selectedStoryId) === stories.length - 1}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 transition cursor-pointer"
                title="Kisah Selanjutnya"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Right Complete checkbox toggle & action indicator */}
            <div className="flex items-center gap-2.5 justify-end w-full md:w-auto">
              <button
                onClick={() => toggleStoryCompleted(selectedStory.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition duration-300 cursor-pointer ${
                  completedStories.includes(selectedStory.id)
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
                title="Tandai Kisah Ini Selesai Dibaca"
              >
                {completedStories.includes(selectedStory.id) ? (
                  <>
                    <Check className="w-4 h-4 text-yellow-300" />
                    <span>Selesai Dibaca</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4 text-amber-400" />
                    <span>Tandai Selesai</span>
                  </>
                )}
              </button>
              
              <button 
                onClick={handleExitReadingMode}
                className="p-2 rounded-xl bg-red-950/40 text-red-400 border border-red-900/30 hover:bg-red-900/20 cursor-pointer"
                title="Tutup Mode Baca"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* DYNAMIC PROGRESS LINE (HIGH TECH INTEGRATION) */}
          <div className="w-full bg-slate-900/30 rounded-full h-1.5 mb-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(activeParaIndex !== null ? readingProgressPercent : 4, 4)}%` }}
            ></div>
          </div>


          {/* 2. ADVANCED SETTINGS PANEL - Futuristic Dock */}
          <div className={`p-4 rounded-2xl border mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 ${themeStyles.controlPanel}`}>
            
            {/* Theme & Palette picker (3 columns) */}
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Tema Membaca (Latar)
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {(['navy', 'sepia', 'midnight', 'ivory'] as const).map((th) => (
                  <button
                    key={th}
                    onClick={() => setReadingTheme(th)}
                    className={`py-1.5 text-[10px] font-black uppercase rounded-lg border text-center transition cursor-pointer ${
                      readingTheme === th
                        ? 'border-amber-400 scale-[1.05] ring-1 ring-amber-400'
                        : 'border-slate-800'
                    } ${
                      th === 'navy' ? 'bg-[#0B132B] text-slate-100' :
                      th === 'sepia' ? 'bg-[#F2E8D3] text-[#443121]' :
                      th === 'midnight' ? 'bg-black text-zinc-300' :
                      'bg-[#FAF9F5] text-slate-800'
                    }`}
                  >
                    {th === 'navy' ? 'Navy' : th === 'sepia' ? 'Sepia' : th === 'midnight' ? 'Oled' : 'Buku'}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Style picker (2 columns) */}
            <div className="lg:col-span-2 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-amber-400" />
                Kaligrafi (Khath)
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {(['amiri', 'scheherazade', 'naskh', 'serif'] as const).map((font) => (
                  <button
                    key={font}
                    onClick={() => setArabicFont(font)}
                    className={`py-1 bg-slate-900 text-slate-300 text-[10px] font-bold rounded-lg border transition cursor-pointer ${
                      arabicFont === font
                        ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {font === 'amiri' ? 'Amiri' : font === 'scheherazade' ? 'Scheherazade' : font === 'naskh' ? 'Naskh' : 'Standar'}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size picker (2 columns) */}
            <div className="lg:col-span-2 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                Ukuran Huruf (Ukuran)
              </span>
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800/80">
                {(["sm", "md", "lg", "xl", "2xl"] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setFontSize(sz)}
                    className={`flex-1 text-center py-1 text-[9px] font-extrabold uppercase rounded-md transition cursor-pointer ${
                      fontSize === sz
                        ? "bg-amber-500 text-slate-950 font-black shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Mode Picker (2 columns) */}
            <div className="lg:col-span-2 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-amber-400" />
                Tampilan Bahasa (Mode)
              </span>
              <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800/80">
                {(["both", "arabic", "translation"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setDisplayMode(mode)}
                    className={`py-1 text-[9px] font-bold rounded-lg transition text-center cursor-pointer ${
                      displayMode === mode ? "bg-amber-500 text-slate-950 font-black" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {mode === 'both' ? 'Campur' : mode === 'arabic' ? 'Arab' : 'Indo'}
                  </button>
                ))}
              </div>
            </div>

            {/* Auto Scroll Controller (3 columns) */}
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                Auto-Gulir Otomatis (Scroll)
              </span>
              <div className="grid grid-cols-4 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800/80">
                {([0, 1, 2, 3] as const).map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setAutoScrollSpeed(spd)}
                    className={`py-1 text-[9px] font-bold rounded-lg transition text-center cursor-pointer ${
                      autoScrollSpeed === spd 
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black" 
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {spd === 0 ? 'Mati' : spd === 1 ? 'Lambat' : spd === 2 ? 'Sedang' : 'Cepat'}
                  </button>
                ))}
              </div>
            </div>

          </div>


          {/* 3. CENTER STORY CANVAS (MAGNIFICENT BOOK SHELF STYLE) */}
          <div className={`p-6 sm:p-10 rounded-3xl border-2 transition-all duration-300 space-y-8 ${themeStyles.container}`}>
            
            {/* Header Calligraphy block */}
            <div className="text-center space-y-4 pb-8 border-b border-amber-500/20 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Karya Sastra No. {selectedStory.id}</span>
              </div>

              {/* Magnificent Large Arabic Title */}
              <h2 dir="rtl" className={`text-4xl sm:text-5xl font-extrabold text-amber-500 leading-normal py-1 drop-shadow-md text-center ${getArabicFontFamilyClass()}`}>
                {selectedStory.titleAr}
              </h2>
              
              {/* Indonesian Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center justify-center gap-2">
                <span>{selectedStory.titleId}</span>
              </h3>
            </div>


            {/* 10 PARAGRAPHS - High-Comfort reading flow */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {selectedStory.paragraphs.map((p, idx) => {
                const pNum = idx + 1;
                const isFocused = activeParaIndex === idx;
                const isCurrentlyPlayingSynth = isPlayingSynth === `${selectedStoryId}-${idx}`;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveParaIndex(idx)}
                    className={`p-5 sm:p-7 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                      isFocused 
                        ? themeStyles.paraBoxActive 
                        : themeStyles.paraBoxNormal
                    }`}
                  >
                    {/* Paragraph Indicator & Audio Actions */}
                    <div className="flex justify-between items-center mb-4 text-[10px] text-slate-400 border-b border-slate-900/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full font-bold flex items-center justify-center text-xs shrink-0 ${themeStyles.paraNum}`}>
                          {pNum}
                        </span>
                        <span className="uppercase tracking-widest font-black text-[9px]">Paragraf {pNum} dari 10</span>
                      </div>

                      <div className="flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTTSReadAloud(p.arabic, idx);
                          }}
                          className={`px-2.5 py-1 rounded-lg transition duration-300 flex items-center gap-1.5 text-[10px] font-bold shadow-sm ${
                            isSpeaking && activeParaIndex === idx
                              ? 'bg-red-500 text-white animate-pulse'
                              : isCurrentlyPlayingSynth
                              ? 'bg-orange-500 text-white animate-bounce'
                              : 'bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800'
                          }`}
                          title="Putar suara lafal uslub bahasa Arab sastra"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{isSpeaking && activeParaIndex === idx ? 'Mute' : 'Putar Suara'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Paragraph Content Blocks */}
                    <div className="space-y-4">
                      {/* Arabic line (Hidden if displayMode is 'translation') */}
                      {displayMode !== "translation" && (
                        <p
                          dir="rtl"
                          className={`text-right font-medium tracking-wide leading-relaxed ${getArabicFontFamilyClass()} ${getArabicFontSizeClass()} ${getLineSpacingClass()} ${themeStyles.textAr}`}
                        >
                          {p.arabic}
                        </p>
                      )}

                      {/* Indonesian translation (Hidden if displayMode is 'arabic') */}
                      {displayMode !== "arabic" && (
                        <p className={`text-xs sm:text-sm italic leading-relaxed border-l-2 pl-3 pt-1 ${themeStyles.textId}`}>
                          {p.translation}
                        </p>
                      )}
                    </div>

                    {/* Visual Focus Bar */}
                    {isFocused && (
                      <div className="absolute top-0 right-0 w-1.5 h-full rounded-r-2xl bg-amber-500"></div>
                    )}
                  </div>
                );
              })}
            </div>


            {/* Active Story Footer - Moral Message Box (Tafsir/Hikmah) */}
            <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/30 p-6 sm:p-8 rounded-2xl space-y-3 mt-10 max-w-3xl mx-auto shadow-inner">
              <h4 className="text-sm font-extrabold text-amber-500 uppercase tracking-widest flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                <span>Pelajaran Hikmah (العِبْرَةُ مِنَ الْقِصَّةِ)</span>
              </h4>
              <p className="text-sm sm:text-base leading-relaxed font-sans italic text-center sm:text-left pl-0 sm:pl-6">
                "{selectedStory.moralId}"
              </p>
            </div>


            {/* Completed Board Stamp inside canvas */}
            <div className="text-center pt-6 max-w-md mx-auto">
              <button
                onClick={() => {
                  toggleStoryCompleted(selectedStory.id);
                  // Chime sound
                  triggerAudioMockup(9);
                }}
                className={`w-full py-4 px-6 rounded-2xl border font-black text-xs uppercase tracking-widest transition duration-500 flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:scale-[1.01] ${
                  completedStories.includes(selectedStory.id)
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 border-emerald-400'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                {completedStories.includes(selectedStory.id) ? (
                  <>
                    <Check className="w-5 h-5 text-slate-950" />
                    <span>Anda Telah Menyelesaikan Kisah Ini!</span>
                  </>
                ) : (
                  <>
                    <BookmarkCheck className="w-5 h-5 text-amber-500" />
                    <span>Selesai Membaca & Tandai Progres</span>
                  </>
                )}
              </button>
            </div>

          </div>


          {/* 4. FOOTER QUICK NAVIGATOR */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 px-2">
            
            <button
              onClick={handlePrevStory}
              disabled={stories.findIndex(s => s.id === selectedStoryId) === 0}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase text-amber-500 hover:text-amber-400 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya (Kisah {Number(selectedStory.id) - 1})</span>
            </button>

            <button
              onClick={handleExitReadingMode}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 text-xs font-black uppercase text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition cursor-pointer shadow"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Kembali Ke Perpustakaan</span>
            </button>

            <button
              onClick={handleNextStory}
              disabled={stories.findIndex(s => s.id === selectedStoryId) === stories.length - 1}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase text-amber-500 hover:text-amber-400 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow"
            >
              <span>Selanjutnya (Kisah {Number(selectedStory.id) + 1})</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
