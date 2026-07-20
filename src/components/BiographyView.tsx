import React from 'react';
import { User, Award, Quote, BookOpen, GraduationCap, Flame, Star } from 'lucide-react';

export default function BiographyView() {
  const bio = {
    name: "Jundi Abdul Syahid, S.Pd.",
    title: "Guru Pengampu Ilmu Nahwu & Sharaf",
    alias: "Orang Dalam Genetik Jawa",
    philosophy: "Nahu adalah kunci pelindung lisan dari kesalahan ucapan dan kunci utama untuk membuka gerbang samudra pemahaman Al-Qur'an serta Sunnah Nabi Muhammad ﷺ.",
    school: "SMP IT Umar bin Al Khattab Cirebon (Full Day School)",
    about: "Ustadz Jundi Abdul Syahid, S.Pd., adalah seorang pendidik profesional yang mendedikasikan hidupnya untuk menyebarluaskan kecintaan terhadap bahasa Arab di kalangan generasi muda Indonesia, khususnya di SMP IT Umar bin Al Khattab Cirebon. Dikenal dengan julukan akrab 'Orang Dalam Genetik Jawa', beliau memadukan kesabaran, kedisiplinan tinggi, dan struktur berpikir sistematis khas budaya Jawa dalam menyampaikan kaidah Nahwu yang rumit menjadi formula yang ringkas, mudah dipahami, dan aplikatif bagi siswa sekolah sehari penuh (Full Day School).",
    education: [
      "Sarjana Pendidikan (S.Pd.) dalam program studi Pendidikan Bahasa Arab dengan predikat Sangat Memuaskan.",
      "Mendalami kurikulum bahasa Arab komprehensif dari Silsilah Ta'lim Lughah Al-Arabiyah yang diadaptasi dari LIPIA Jakarta.",
      "Berpengalaman membina santri dan siswa dalam percepatan membaca kitab kuning dan percakapan (Hiwar) aktif sehari-hari."
    ],
    principles: [
      { title: "Mudah & Praktis", text: "Menghindari perdebatan khilafiyah mazhab Nahwu (Kufah vs Bashrah) untuk tingkat pemula, berfokus pada uslub praktis dari kitab Silsilah LIPIA." },
      { title: "Berjenjang (Gradual)", text: "Materi disusun bertingkat dari Kelas 7 (pengenalan kata/jumlah), Kelas 8 (I'rab & Nawasikh), hingga Kelas 9 (penajaman Manshubat & Maqshur)." },
      { title: "Aktif & Aplikatif", text: "Menggunakan 350 hiwar bertema sekolah dan safar agar kaidah Nahwu langsung dipraktikkan dalam percakapan lisan sehari-hari." },
      { title: "Disiplin Full Day", text: "Mengoptimalkan ritme belajar full day school dengan mengintegrasikan hafalan kaidah pagi hari dan setoran latihan soal di sore hari." }
    ],
    quotes: [
      { ar: "النَّحْوُ فِي الْكَلَامِ كَالْمِلْحِ فِي الطَّعَامِ", id: "Ilmu Nahwu dalam perkataan bagaikan garam dalam makanan. Tanpanya, kata-kata kehilangan rasa dan maknanya." },
      { ar: "مَنْ جَدَّ وَجَدَ وَمَنْ صَبَرَ ظَفِرَ", id: "Barangsiapa bersungguh-sungguh akan berhasil, dan barangsiapa bersabar akan beruntung." },
      { ar: "اللُّغَةُ الْعَرَبِيَّةُ مِفْتَاحُ فَهْمِ الدِّينِ", id: "Bahasa Arab adalah kunci utama untuk memahami rincian syariat dan keindahan wahyu." }
    ]
  };

  return (
    <div className="bg-transparent py-4 space-y-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Profile Card Banner */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-[#0F172A] rounded-2xl border border-emerald-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Avatar Placeholder */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-amber-500/40 flex items-center justify-center shadow-lg">
                <User className="w-16 h-16 text-amber-400" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 font-bold text-[9px] px-2.5 py-1 rounded-full uppercase border border-white tracking-wider flex items-center gap-1 shadow-md">
                <Award className="w-3 h-3" />
                <span>Penyusun</span>
              </div>
            </div>
 
            {/* Title Info */}
            <div className="text-center md:text-left space-y-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
                <h2 className="text-3xl font-extrabold text-white tracking-tight font-display">{bio.name}</h2>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs px-2.5 py-1 rounded-full font-bold">
                  {bio.alias}
                </span>
              </div>
              <p className="text-emerald-400 font-medium text-sm sm:text-base font-display">
                {bio.title} • {bio.school}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed italic">
                "{bio.philosophy}"
              </p>
            </div>
          </div>
        </div>
 
        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left: About & Education (2 cols in desktop) */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Tentang Ustadz */}
            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-3 hover:border-emerald-500/30 transition duration-300">
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-800 pb-2 flex items-center gap-2 font-display">
                <Star className="w-5 h-5 text-amber-400" />
                <span>Mengenal Ustadz Jundi Abdul Syahid, S.Pd.</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                {bio.about}
              </p>
            </div>
 
            {/* Latar Belakang Pendidikan */}
            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-3 hover:border-emerald-500/30 transition duration-300">
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-800 pb-2 flex items-center gap-2 font-display">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Latar Belakang & Kompetensi Akademik</span>
              </h3>
              <ul className="space-y-3">
                {bio.education.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
 
          </div>
 
          {/* Right Column: Quotes & Info (1 col in desktop) */}
          <div className="space-y-6">
            
            {/* Kalimat Mutiara / Quotes */}
            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6 hover:border-emerald-500/30 transition duration-300">
              <h3 className="text-md font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 font-display">
                <Quote className="w-5 h-5 text-amber-400" />
                <span>Mahfuzhat & Nasehat</span>
              </h3>
 
              <div className="space-y-4">
                {bio.quotes.map((q, idx) => (
                  <div key={idx} className="border-l-2 border-amber-500 pl-4 space-y-1">
                    <p className="text-lg font-serif text-amber-300 leading-relaxed text-right" dir="rtl">
                      {q.ar}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "{q.id}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
            {/* School Info Quick Stats */}
            <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4 text-center hover:border-emerald-500/30 transition duration-300">
              <h4 className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold font-display">SMP IT Umar bin Al Khattab Cirebon</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Menyelenggarakan program Full Day School bermutu, memadukan kurikulum nasional dan kepesantrenan guna membentuk generasi berkarakter Robbani dan mandiri.
              </p>
              <div className="border-t border-slate-800/80 pt-3 flex justify-around text-center">
                <div>
                  <span className="block text-xl font-bold text-amber-400 font-display">7-9</span>
                  <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Tingkatan</span>
                </div>
                <div className="border-l border-slate-800/80 h-8"></div>
                <div>
                  <span className="block text-xl font-bold text-amber-400 font-display">45</span>
                  <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Bab Nahwu</span>
                </div>
                <div className="border-l border-slate-800/80 h-8"></div>
                <div>
                  <span className="block text-xl font-bold text-amber-400 font-display">350</span>
                  <span className="text-[8px] text-slate-400 uppercase font-bold tracking-wider">Hiwar Aktif</span>
                </div>
              </div>
            </div>
 
          </div>
 
        </div>
 
        {/* 4 Metode Pengajaran (Bottom Full Width) */}
        <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6 hover:border-emerald-500/30 transition duration-300">
          <div className="text-center">
            <h3 className="text-lg font-bold text-amber-400 flex items-center justify-center gap-2 font-display">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>4 Pilar Metode Pengajaran Nahwu Ustadz Jundi</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Dirancang khusus untuk mengoptimalkan ritme belajar siswa Full Day School SMP IT UBK Cirebon</p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {bio.principles.map((pr, idx) => (
              <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-1.5 hover:border-amber-500/40 hover:bg-slate-950/80 transition duration-300">
                <span className="text-amber-500 font-bold text-xs uppercase tracking-wider block">0{idx + 1}. {pr.title}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{pr.text}</p>
              </div>
            ))}
          </div>
        </div>
 
      </div>
    </div>
  );
}
