import React from 'react';
import { BookOpen, MessageCircle, User, Settings, Info, Layers, Flame, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  chapterCount: number;
  hiwarCount: number;
  theme: 'dark' | 'fire';
  setTheme: (theme: 'dark' | 'fire') => void;
}

export default function Navbar({ activeTab, setActiveTab, chapterCount, hiwarCount, theme, setTheme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-[#0B1221]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto bg-emerald-900/10 border border-amber-500/30 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.15)] p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-slate-950 text-xl shadow-[0_0_15px_rgba(245,158,11,0.4)] shrink-0 font-display">
              UBK
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-amber-400 font-display">SMP IT Umar bin Al Khattab</h1>
                <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-500/40 font-semibold uppercase tracking-wider">
                  Full Day School
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Aplikasi Nahwu Berjenjang Silsilah LIPIA • Cirebon
              </p>
              <p className="text-[10px] text-amber-200/80 italic font-medium">
                Penyusun: Jundi Abdul Syahid, S.Pd. (Orang Dalam Genetik Jawa)
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('nahwu')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'nahwu'
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-500/50'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Materi Nahwu</span>
              <span className="bg-emerald-950/80 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-bold font-mono">
                {chapterCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('hiwar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'hiwar'
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-500/50'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>350 Hiwar</span>
              <span className="bg-emerald-950/80 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-bold font-mono">
                {hiwarCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('biografi')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'biografi'
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-500/50'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Penyusun</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'vocab'
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-500/50'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Isim & Fi'il</span>
            </button>

            <button
              onClick={() => setActiveTab('irab')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'irab'
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-500/50'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>I'rab Nahwu</span>
            </button>

            <button
              onClick={() => setTheme(theme === 'fire' ? 'dark' : 'fire')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                theme === 'fire'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-pulse'
                  : 'bg-slate-950/60 hover:bg-slate-900 text-amber-400 hover:text-amber-300 border border-amber-500/30'
              }`}
              title={theme === 'fire' ? "Aktif: Mode Api Keemasan (Terang)" : "Aktif: Mode Klasik (Gelap)"}
            >
              {theme === 'fire' ? (
                <>
                  <Flame className="w-3.5 h-3.5 text-red-100 fill-amber-300" />
                  <span>Api Keemasan</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>Mode Gelap</span>
                </>
              )}
            </button>
          </nav>

        </div>
      </div>
    </header>

  );
}
