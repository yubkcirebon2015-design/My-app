import { Hiwar, DialogueLine } from './types';

// Lists of variables to create highly realistic variations across 350 items
const themes = [
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
  "Olahraga & Kesehatan"
];

const namePairs = [
  { p1: "أَحْمَدُ (Ahmad)", p2: "خَالِدٌ (Khalid)" },
  { p1: "طَارِقٌ (Thariq)", p2: "يَاسِرٌ (Yasir)" },
  { p1: "فَاطِمَةُ (Fatimah)", p2: "عَائِشَةُ (Aisyah)" },
  { p1: "عُمَرُ (Umar)", p2: "عُثْمَانُ (Utsman)" },
  { p1: "عَلِيٌّ (Ali)", p2: "حُسَيْنٌ (Husain)" },
  { p1: "زَيْنَبُ (Zainab)", p2: "مَرْيَمُ (Maryam)" },
  { p1: "إِبْرَاهِيمُ (Ibrahim)", p2: "إِسْمَاعِيلُ (Ismail)" },
  { p1: "يُوسُفُ (Yusuf)", p2: "يَعْقُوبُ (Ya'qub)" },
  { p1: "سُلَيْمَانُ (Sulaiman)", p2: "دَاوُدُ (Dawud)" },
  { p1: "يَحْيَى (Yahya)", p2: "زَكَرِيَّا (Zakariya)" }
];

const subjects = [
  { ar: "النَّحْوِ", id: "Nahwu" },
  { ar: "الصَّرْفِ", id: "Sharaf" },
  { ar: "اللُّغَةِ الْعَرَبِيَّةِ", id: "Bahasa Arab" },
  { ar: "الْحَدِيثِ النَّبَوِيِّ", id: "Hadits Nabi" },
  { ar: "الْفِقْهِ الْإِسْلَامِيِّ", id: "Fiqih Islam" },
  { ar: "التَّفْسِيرِ", id: "Tafsir" },
  { ar: "التَّارِيخِ الْإِسْلَامِيِّ", id: "Sejarah Islam" },
  { ar: "الْعَقِيدَةِ", id: "Aqidah" }
];

const locations = [
  { ar: "الْفَصْلِ", id: "kelas" },
  { ar: "الْمَكْتَبَةِ", id: "perpustakaan" },
  { ar: "الْمَسْجِدِ", id: "masjid" },
  { ar: "سَاحَةِ الْمَدْرَسَةِ", id: "halaman sekolah" },
  { ar: "الْمُخْتَبَرِ", id: "laboratorium" },
  { ar: "الْقَاعَةِ", id: "aula" }
];

export function generate350Hiwars(): Hiwar[] {
  const result: Hiwar[] = [];

  for (let i = 1; i <= 350; i++) {
    const themeIdx = (i - 1) % themes.length;
    const nameIdx = (i - 1) % namePairs.length;
    const subjIdx = (i - 1) % subjects.length;
    const locIdx = (i - 1) % locations.length;

    const theme = themes[themeIdx];
    const names = namePairs[nameIdx];
    const sub = subjects[subjIdx];
    const loc = locations[locIdx];

    const title = `Hiwar ${i}: ${theme} - Bagian ${Math.ceil(i / 15)}`;
    const lines: DialogueLine[] = [];

    // Construct 8 dialog exchanges (lines) based on the theme
    switch (themeIdx) {
      case 0: // Pendidikan & Sekolah
        lines.push(
          { speaker: names.p1, textAr: `السَّلَامُ عَلَيْكُمْ يَا صَدِيقِي، كَيْفَ حَالُكَ الْيَوْمَ؟`, textId: `Assalamu'alaikum wahai sahabatku, bagaimana kabarmu hari ini?` },
          { speaker: names.p2, textAr: `وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ، أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ.`, textId: `Wa'alaikumussalam warahmatullah, saya baik-baik saja, alhamdulillah.` },
          { speaker: names.p1, textAr: `هَلْ أَنْتَ مُسْتَعِدٌّ لِلذَّهَابِ إِلَى ${loc.ar} الْآنَ؟`, textId: `Apakah kamu siap untuk pergi ke ${loc.id} sekarang?` },
          { speaker: names.p2, textAr: `نَعَمْ، أَنَا جَاهِزٌ لِأَنَّنَا سَنَدْرُسُ مَادَّةَ ${sub.ar} مَعَ الْأُسْتَاذِ.`, textId: `Ya, saya siap karena kita akan belajar materi ${sub.id} bersama ustadz.` },
          { speaker: names.p1, textAr: `مَا شَاءَ اللَّهُ، هَذِهِ الْمَادَّةُ مُهِمَّةٌ جِدًّا لِفَهْمِ الدِّينِ.`, textId: `Masya Allah, materi ini sangat penting untuk memahami agama.` },
          { speaker: names.p2, textAr: `صَدَقْتَ، وَتُعَلِّمُنَا كَيْفَ نَقْرَأُ الْكُتُبَ الْعَرَبِيَّةَ بِشَكْلٍ صَحِيحٍ.`, textId: `Kamu benar, dan ini mengajarkan kita cara membaca kitab-kitab Arab dengan benar.` },
          { speaker: names.p1, textAr: `أَتَمَنَّى لَنَا التَّوْفِيقَ وَالنَّجَاحَ فِي هَذَا الْيَوْمِ الدِّرَاسِيِّ.`, textId: `Aku berharap kita mendapatkan kemudahan dan kesuksesan di hari sekolah ini.` },
          { speaker: names.p2, textAr: `آمِينَ يَا رَبَّ الْعَالَمِينَ، هَيَّا بِنَا نَدْخُلْ سَرِيعًا!`, textId: `Aamiin ya Rabbal 'Alamin, mari kita masuk segera!` }
        );
        break;

      case 1: // Keutamaan Ilmu
        lines.push(
          { speaker: names.p1, textAr: `مَاذَا تَقْرَأُ فِي هَذَا الْوَقْتِ يَا صَدِيقِي الْمَحْبُوبَ؟`, textId: `Apa yang sedang kamu baca saat ini wahai sahabat tercinta?` },
          { speaker: names.p2, textAr: `أَقْرَأُ كِتَابًا يَتَحَدَّثُ عَنْ فَضْلِ طَلَبِ الْعِلْمِ فِي الْإِسْلَامِ.`, textId: `Aku sedang membaca buku yang membahas tentang keutamaan menuntut ilmu dalam Islam.` },
          { speaker: names.p1, textAr: `نَعَمْ، طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ وَمُسْلِمَةٍ.`, textId: `Ya, menuntut ilmu adalah kewajiban bagi setiap muslim laki-laki dan perempuan.` },
          { speaker: names.p2, textAr: `وَالْعِلْمُ يَرْفَعُ صَاحِبَهُ دَرَجَاتٍ كَثِيرَةً فِي الدُّنْيَا وَالْآخِرَةِ.`, textId: `Dan ilmu itu mengangkat pemiliknya beberapa derajat yang tinggi di dunia dan akhirat.` },
          { speaker: names.p1, textAr: `أَيْنَ تُرِيدُ أَنْ تَطْلُبَ الْعِلْمَ بَعْدَ التَّخَرُجِ مِنَ الْمَدْرَسَةِ؟`, textId: `Di mana kamu ingin menuntut ilmu setelah lulus dari sekolah nanti?` },
          { speaker: names.p2, textAr: `أُرِيدُ أَنْ أَدْخُلَ جَامِعَةَ لِيبْيَا فِي جَاكَرْتَا لِتَعَلُّمِ ${sub.ar}.`, textId: `Aku ingin masuk ke Universitas LIPIA di Jakarta untuk belajar ${sub.id}.` },
          { speaker: names.p1, textAr: `هَذَا هَدَفٌ رَائِعٌ، سَأَدْعُو اللَّهَ أَنْ يُيَسِّرَ أُمُورَكَ.`, textId: `Itu adalah cita-cita yang luar biasa, aku akan berdoa kepada Allah agar memudahkan urusanmu.` },
          { speaker: names.p2, textAr: `جَزَاكَ اللَّهُ خَيْرًا، وَأَتَمَنَّى لَكَ الْخَيْرَ أَيْضًا.`, textId: `Semoga Allah membalasmu dengan kebaikan, dan aku mengharapkan kebaikan pula untukmu.` }
        );
        break;

      case 2: // Safar & Rihlah
        lines.push(
          { speaker: names.p1, textAr: `سَمِعْتُ أَنَّكَ سَتُسَافِرُ فِي الْأُسْبُوعِ الْمُقْبِلِ، إِلَى أَيْنَ؟`, textId: `Aku mendengar bahwa kamu akan melakukan perjalanan minggu depan, ke mana?` },
          { speaker: names.p2, textAr: `نَعَمْ، سَأُسَافِرُ مَعَ أُسْرَتِي إِلَى مَدِينَةِ سِيرِبُون (Cirebon).`, textId: `Ya, aku akan bepergian bersama keluargaku ke kota Cirebon.` },
          { speaker: names.p1, textAr: `هَلْ سَتَزُورُ مَدْرَسَةَ عُمَرَ بْنِ الْخَطَّابِ (SMP IT UBK) هُنَاكَ؟`, textId: `Apakah kamu akan mengunjungi sekolah Umar bin Al Khattab (SMP IT UBK) di sana?` },
          { speaker: names.p2, textAr: `بِالتَّأْكِيدِ، فَهِيَ مَدْرَسَةٌ مَعْرُوفَةٌ بِالْجِدِّ وَتَعْلِيمِ ${sub.ar}.`, textId: `Tentu saja, karena itu adalah sekolah yang terkenal dengan kesungguhannya dan pengajaran ${sub.id}.` },
          { speaker: names.p1, textAr: `كَيْفَ تَذْهَبُونَ إِلَى هُنَاكَ؟ هَلْ بِالسَّيَّارَةِ أَمْ بِالْقِطَارِ؟`, textId: `Bagaimana kalian pergi ke sana? Apakah naik mobil atau kereta api?` },
          { speaker: names.p2, textAr: `سَنَذْهَبُ بِالْقِطَارِ لِأَنَّهُ أَسْرَعُ وَأَكْثَرُ رَاحَةً لَنَا.`, textId: `Kami akan pergi naik kereta api karena lebih cepat dan lebih nyaman untuk kami.` },
          { speaker: names.p1, textAr: `أَتَمَنَّى لَكُمْ رِحْلَةً سَعِيدَةً وَسَفَرًا مُبَارَكًا يَا أَخِي.`, textId: `Aku mendoakan kalian perjalanan yang menyenangkan dan safar yang penuh berkah wahai saudaraku.` },
          { speaker: names.p2, textAr: `شُكْرًا جَزِيلًا لَكَ، أَرَاكَ عَلَى خَيْرٍ بَعْدَ الْعَوْدَةِ إِنْ شَاءَ اللَّه.`, textId: `Terima kasih banyak, sampai jumpa kembali dalam keadaan baik setelah pulang nanti, insya Allah.` }
        );
        break;

      case 3: // Adab Belajar
        lines.push(
          { speaker: names.p1, textAr: `لِمَاذَا تَكْتُبُ كُلَّ مَا يَقُولُهُ الْمُعَلِّمُ فِي ${loc.ar}؟`, textId: `Mengapa kamu menulis semua yang diucapkan oleh guru di ${loc.id}?` },
          { speaker: names.p2, textAr: `لِأَنَّ قَيْدَ الْعِلْمِ الْكِتَابَةُ، كَمَا قَالَ الْعُلَمَاءُ قَدِيمًا.`, textId: `Karena pengikat ilmu adalah tulisan, sebagaimana dikatakan para ulama terdahulu.` },
          { speaker: names.p1, textAr: `هَذَا صَحِيحٌ، وَلَكِنْ هَلْ تَفْهَمُ كُلَّ الدُّرُوسِ سَرِيعًا؟`, textId: `Itu benar, tetapi apakah kamu memahami semua pelajaran dengan cepat?` },
          { speaker: names.p2, textAr: `لَيْسَ دَائِمًا، إِذَا لَمْ أَفْهَمْ، أَسْأَلُ الْأُسْتَاذَ بِأَدَبٍ وَاحْتِرَامٍ.`, textId: `Tidak selalu, jika saya tidak paham, saya bertanya kepada ustadz dengan santun dan rasa hormat.` },
          { speaker: names.p1, textAr: `أَدَبُ الطَّالِبِ مَعَ أُسْتَاذِهِ هُوَ مِفْتَاحُ الْبَرَكَةِ فِي الْعِلْمِ.`, textId: `Adab seorang murid kepada ustadznya adalah kunci keberkahan dalam ilmu.` },
          { speaker: names.p2, textAr: `بِالْفِعْلِ، مَنْ لَا أَدَبَ لَهُ لَا عِلْمَ لَهُ يَنْفَعُهُ.`, textId: `Tepat sekali, barangsiapa yang tidak memiliki adab, maka tidak ada ilmu yang bermanfaat baginya.` },
          { speaker: names.p1, textAr: `هَيَّا نُرَاجِعْ مَادَّةَ ${sub.ar} مَعًا قَبْلَ دُخُولِ الْفَصْلِ.`, textId: `Mari kita mengulang pelajaran ${sub.id} bersama sebelum masuk kelas.` },
          { speaker: names.p2, textAr: `فِكْرَةٌ مُمْتَازَةٌ، جَلَسْنَا هُنَا لِلْمُذَاكَرَةِ النَّافِعَةِ.`, textId: `Ide yang luar biasa, mari kita duduk di sini untuk belajar yang bermanfaat.` }
        );
        break;

      case 4: // Bahasa Arab
        lines.push(
          { speaker: names.p1, textAr: `لِمَاذَا تَجْتَهِدُ فِي تَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ يَا أَخِي؟`, textId: `Mengapa kamu bersungguh-sungguh dalam mempelajari bahasa Arab wahai saudaraku?` },
          { speaker: names.p2, textAr: `لِأَنَّ اللُّغَةَ الْعَرَبِيَّةَ هِيَ لُغَةُ الْقُرْآنِ الْكَرِيمِ وَالْحَدِيثِ الشَّرِيفِ.`, textId: `Karena bahasa Arab adalah bahasa Al-Qur'an yang mulia dan hadits yang agung.` },
          { speaker: names.p1, textAr: `وَهِيَ لُغَةٌ جَمِيلَةٌ لَهَا قَوَاعِدُ دَقِيقَةٌ مِثْلُ ${sub.ar}.`, textId: `Dan ia adalah bahasa yang indah yang memiliki kaidah-kaidah yang presisi seperti ${sub.id}.` },
          { speaker: names.p2, textAr: `نَعَمْ، وَكِتَابُ سِلْسِلَةِ تَعْلِيمِ اللُّغَةِ الْعَرَبِيَّةِ يُسَاعِدُنَا كَثِيرًا.`, textId: `Ya, dan buku Silsilah Ta'lim Lughah Al-Arabiyah sangat membantu kita.` },
          { speaker: names.p1, textAr: `هَلْ تَتَحَدَّثُ بِالْعَرَبِيَّةِ فِي بَيْتِكَ مَعَ أُسْرَتِكَ؟`, textId: `Apakah kamu berbicara bahasa Arab di rumahmu bersama keluargamu?` },
          { speaker: names.p2, textAr: `أُحَاوِلُ ذَلِكَ مَعَ أَخِي الصَّغِيرِ لِيَعْتَادَ عَلَيْهَا.`, textId: `Aku mencobanya bersama adik laki-lakiku agar dia terbiasa dengannya.` },
          { speaker: names.p1, textAr: `أَنْتَ طَالِبٌ مِثَالِيٌّ، اللَّهُ يَحْفَظُكَ وَيَزِيدُكَ عِلْمًا.`, textId: `Kamu adalah murid yang patut dicontoh, semoga Allah menjagamu dan menambah ilmumu.` },
          { speaker: names.p2, textAr: `شُكْرًا لَكَ عَلَى هَذَا التَّشْجِيعِ، بَارَكَ اللَّهُ فِيكَ!`, textId: `Terima kasih atas motivasi ini, semoga Allah memberkahimu!` }
        );
        break;

      case 5: // Di Perpustakaan
        lines.push(
          { speaker: names.p1, textAr: `أَرَاكَ كَثِيرًا فِي الْمَكْتَبَةِ هَذِهِ الْأَيَّامَ، مَا السَّبَبُ؟`, textId: `Aku sering melihatmu di perpustakaan hari-hari ini, apa sebabnya?` },
          { speaker: names.p2, textAr: `أَبْحَثُ عَنْ كُتُبٍ نَحْوِيَّةٍ تُوَضِّحُ كِتَابَ سِلْسِلَةِ التَّعْلِيمِ.`, textId: `Aku sedang mencari buku-buku Nahwu yang menjelaskan kitab Silsilah Ta'lim.` },
          { speaker: names.p1, textAr: `هَلْ وَجَدْتَ كِتَابًا مُنَاسِبًا لِلْمُبْتَدِئِينَ فِي هَذَا الْمَوْضُوعِ؟`, textId: `Apakah kamu menemukan buku yang cocok untuk pemula dalam tema ini?` },
          { speaker: names.p2, textAr: `نَعَمْ، وَجَدْتُ كُتُبًا كَثِيرَةً جَاءَتْ بِعِنَايَةِ الْأُسْتَاذِ جُنْدِي عَبْدِ الشَّاهِدِ.`, textId: `Ya, aku menemukan banyak buku yang disusun di bawah asuhan Ustadz Jundi Abdul Syahid.` },
          { speaker: names.p1, textAr: `الْأُسْتَاذُ جُنْدِي مُعَلِّمٌ رَائِعٌ يُبَسِّطُ لَنَا قَوَاعِدَ ${sub.ar}.`, textId: `Ustadz Jundi adalah guru yang hebat, beliau menyederhanakan kaidah-kaidah ${sub.id} untuk kita.` },
          { speaker: names.p2, textAr: `صَحِيحٌ، هُوَ يَسْتَخْدِمُ أُسْلُوبًا سَهْلًا يُنَاسِبُ عُقُولَنَا.`, textId: `Benar, beliau menggunakan uslub yang mudah yang sesuai dengan pemikiran kita.` },
          { speaker: names.p1, textAr: `هَلْ يُمْكِنُنِي اسْتِعَارَةُ هَذَا الْكِتَابِ بَعْدَ أَنْ تَنْتَهِيَ مِنْهُ؟`, textId: `Apakah aku boleh meminjam buku ini setelah kamu selesai membacanya?` },
          { speaker: names.p2, textAr: `بِكُلِّ سُرُورٍ، سَأُعْطِيكَ إِيَّاهُ فِي صَبَاحِ الْغَدِ إِنْ شَاءَ اللَّه.`, textId: `Dengan senang hati, aku akan memberikannya kepadamu besok pagi, insya Allah.` }
        );
        break;

      case 6: // Persahabatan
        lines.push(
          { speaker: names.p1, textAr: `الصَّدَاقَةُ فِي اللَّهِ هِيَ مِنْ أَعْظَمِ النِّعَمِ فِي الْحَيَاةِ.`, textId: `Persahabatan karena Allah adalah salah satu nikmat terbesar dalam hidup.` },
          { speaker: names.p2, textAr: `نَعَمْ، الصَّدِيقُ الصَّالِحُ يُعِينُ صَدِيقَهُ عَلَى طَاعَةِ اللَّهِ وَطَلَبِ الْعِلْمِ.`, textId: `Ya, sahabat yang shalih membantu sahabatnya dalam ketaatan kepada Allah dan menuntut ilmu.` },
          { speaker: names.p1, textAr: `كَمَا نَحْنُ نَفْعَلُ الْآنَ فِي مُذَاكَرَةِ قَوَاعِدِ ${sub.ar}.`, textId: `Sebagaimana yang sedang kita lakukan sekarang dalam mengulang kaidah-kaidah ${sub.id}.` },
          { speaker: names.p2, textAr: `بِالْفِعْلِ، نَتَعَاوَنُ عَلَى فَهْمِ عِبَارَاتِ الْكِتَابِ الدِّرَاسِيِّ.`, textId: `Tepat sekali, kita saling tolong menolong memahami redaksi kitab pelajaran.` },
          { speaker: names.p1, textAr: `هَلْ تَشْعُرُ بِالْمَلَلِ عِنْدَمَا تَدْرُسُ لِسَاعَاتٍ طَوِيلَةٍ؟`, textId: `Apakah kamu merasa bosan ketika belajar selama berjam-jam?` },
          { speaker: names.p2, textAr: `لَا، لِأَنَّ وُجُودَكَ مَعِي يُشَجِّعُنِي وَيَجْعَلُ الْوَقْتَ مُفِيدًا.`, textId: `Tidak, karena keberadaanmu bersamaku memotivasiku dan membuat waktu menjadi bermanfaat.` },
          { speaker: names.p1, textAr: `الْحَمْدُ لِلَّهِ الَّذِي جَعَلَنَا زُمَلَاءَ فِي مَدْرَسَةِ عُمَرَ بْنِ الْخَطَّابِ.`, textId: `Alhamdulillah yang telah menjadikan kita teman satu sekolah di SMP IT Umar bin Al Khattab.` },
          { speaker: names.p2, textAr: `أَسْأَلُ اللَّهَ أَنْ يُدِيمَ هَذِهِ الصَّدَاقَةَ إِلَى الْجَنَّةِ.`, textId: `Aku memohon kepada Allah agar mengekalkan persahabatan ini hingga ke surga.` }
        );
        break;

      case 7: // Ujian & Persiapan
        lines.push(
          { speaker: names.p1, textAr: `الِامْتِحَانُ النِّهَائِيُّ سَيَبْدَأُ بَعْدَ أَيَّامٍ قَلِيلَةٍ، هَلْ خِفْتَ؟`, textId: `Ujian akhir semester akan dimulai beberapa hari lagi, apakah kamu takut?` },
          { speaker: names.p2, textAr: `أَشْعُرُ بِقَلِيلٍ مِنَ الْقَلَقِ، وَلَكِنَّنِي اسْتَعْدَدْتُ لَهُ جَيِّدًا.`, textId: `Aku merasa sedikit cemas, namun aku telah mempersiapkan diri dengan baik.` },
          { speaker: names.p1, textAr: `مَا هِيَ خِطَّتُكَ لِمُرَاجَعَةِ مَادَّةِ ${sub.ar} الدَّقِيقَةِ؟`, textId: `Bagaimana rencanamu untuk mengulang materi ${sub.id} yang sangat rinci ini?` },
          { speaker: names.p2, textAr: `سَأَقْرَأُ التَّلْخِيصَاتِ وَأَحُلُّ التَّمَارِينَ الْمَوْجُودَةَ فِي الْكِتَابِ.`, textId: `Aku akan membaca ringkasan dan menyelesaikan latihan-latihan yang ada di buku.` },
          { speaker: names.p1, textAr: `هَلْ حَلَلْتَ الْأَسْئِلَةَ الْخَمْسَةَ لِكُلِّ بَابٍ مِنْ أَبْوَابِ النَّحْوِ؟`, textId: `Apakah kamu telah mengerjakan 5 pertanyaan latihan untuk setiap bab Nahwu?` },
          { speaker: names.p2, textAr: `نَعَمْ، كَتَبْتُ جَمِيعَ الْإِجَابَاتِ فِي كُرَّاسَتِي الْخَاصَّةِ كَمَا طَلَبَ الْمُعَلِّمُ.`, textId: `Ya, aku telah menulis semua jawaban di buku tulis khususku seperti yang diminta guru.` },
          { speaker: names.p1, textAr: `مُنْتَازٌ! مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ كَمَا نَعْرِفُ.`, textId: `Hebat! Siapa yang bersungguh-sungguh pasti akan berhasil, dan siapa yang menanam pasti menuai.` },
          { speaker: names.p2, textAr: `بِالتَّأْكِيدِ، التَّوَكُلُ عَلَى اللَّهِ بَعْدَ الْبَذْلِ هُوَ سَبِيلُ النَّجَاحِ.`, textId: `Tentu saja, bertawakal kepada Allah setelah berikhtiar adalah jalan kesuksesan.` }
        );
        break;

      case 8: // Ibadah & Masjid
        lines.push(
          { speaker: names.p1, textAr: `أَذَّنَ الْمُؤَذِّنُ لِصَلَاةِ الظُّهْرِ، هَلْ نَذْهَبُ مَعًا إِلَى الْمَسْجِدِ؟`, textId: `Muazin telah mengumandangkan azan Zuhur, apakah kita pergi bersama ke masjid?` },
          { speaker: names.p2, textAr: `نَعَمْ، التَّقَدُّمُ إِلَى الصَّفِّ الْأَوَّلِ فِيهِ أَجْرٌ عَظِيمٌ.`, textId: `Ya, bersegera ke shaf pertama memiliki pahala yang sangat besar.` },
          { speaker: names.p1, textAr: `مَدْرَسَتُنَا مَدْرَسَةٌ لِلْيَوْمِ الْكَامِلِ (Full Day School)، وَهَذَا جَمِيلٌ.`, textId: `Sekolah kita adalah sekolah sehari penuh (Full Day School), dan ini sangat menyenangkan.` },
          { speaker: names.p2, textAr: `نَعَمْ، لِأَنَّنَا نُصَلِّي جَمَاعَةً وَنَتَعَلَّمُ الْأَدَبَ الْإِسْلَامِيَّ مَعَ الْأَسَاتِذَةِ.`, textId: `Ya, karena kita shalat berjamaah dan mempelajari adab Islami bersama para ustadz.` },
          { speaker: names.p1, textAr: `هَلْ سَمِعْتَ خُطْبَةَ الْأُسْتَاذِ فِي مَسْجِدِ الْيَوْمِ؟`, textId: `Apakah kamu mendengar khutbah ustadz di masjid hari ini?` },
          { speaker: names.p2, textAr: `نَعَمْ، تَكَلَّمَ عَنِ اسْتِعْمَالِ النَّحْوِ فِي فَهْمِ كَلَامِ اللَّهِ.`, textId: `Ya, beliau berbicara tentang penggunaan ilmu Nahwu dalam memahami kalam Allah.` },
          { speaker: names.p1, textAr: `مَا شَاءَ اللَّهُ، الْعِلْمُ وَالْعِبَادَةُ لَا يَنْفَصِلَانِ أَبَدًا.`, textId: `Masya Allah, ilmu dan ibadah tidak pernah terpisahkan sama sekali.` },
          { speaker: names.p2, textAr: `آمَنْتُ بِاللَّهِ، هَيَّا نَتَوَضَّأْ لِلصَّلَاةِ بِخُشُوعٍ.`, textId: `Aku beriman kepada Allah, mari kita berwudhu untuk shalat dengan khusyuk.` }
        );
        break;

      default: // Other fallback themes dynamically generated with continuous variations
        const dynamicTopic = theme;
        lines.push(
          { speaker: names.p1, textAr: `مَا أَجْمَلَ الْحَدِيثَ عَنْ ${dynamicTopic} فِي مَدْرَسَتِنَا الْغَالِيَةِ!`, textId: `Alangkah indahnya berbicara tentang ${dynamicTopic} di sekolah kita yang berharga!` },
          { speaker: names.p2, textAr: `نَعَمْ، فَالْبِيئَةُ هُنَا تُسَاعِدُ الطُّلَّابَ عَلَى التَّرْكِيزِ فِي ${sub.ar}.`, textId: `Ya, karena lingkungan di sini membantu murid-murid berkonsentrasi pada ${sub.id}.` },
          { speaker: names.p1, textAr: `هَلْ تَعْلَمُ أَنَّ هَذِهِ الْحِوَارَاتِ هِيَ جُزْءٌ مِنَ الْمَنْهَجِ الدِّرَاسِيِّ؟`, textId: `Apakah kamu tahu bahwa dialog-dialog ini merupakan bagian dari kurikulum sekolah?` },
          { speaker: names.p2, textAr: `أَعْلَمُ ذَلِكَ، فَهِيَ تُعَلِّمُنَا التَّحَدُّثَ بِالْأَسَالِيبِ الْفَصِيحَةِ جِدًّا.`, textId: `Aku tahu hal itu, karena ia mengajarkan kita berbicara dengan gaya bahasa yang sangat fasih.` },
          { speaker: names.p1, textAr: `كَيْفَ تَجِدُ صُعُوبَةَ هَذِهِ الْأُسْلُوبِ النَّحْوِيِّ؟`, textId: `Bagaimana kamu mendapati tingkat kesulitan gaya bahasa Nahwu ini?` },
          { speaker: names.p2, textAr: `لَا أَرَى فِيهَا صُعُوبَةً لِأَنَّ الْأُسْتَاذَ جُنْدِي عَبْدَ الشَّاهِدِ جَعَلَهَا مَحْبُوبَةً.`, textId: `Aku tidak melihat kesulitan di dalamnya karena Ustadz Jundi Abdul Syahid menjadikannya dicintai.` },
          { speaker: names.p1, textAr: `نَسْأَلُ اللَّهَ أَنْ يُجْزِيَ كُلَّ مَنْ سَاهَمَ فِي نَشْرِ هَذَا الْعِلْمِ نَفْعًا.`, textId: `Kita memohon kepada Allah agar membalas setiap orang yang berkontribusi menyebarkan ilmu yang bermanfaat ini.` },
          { speaker: names.p2, textAr: `آمِينَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ عَلَى نِعْمَةِ الْإِسْلَامِ وَالْعِلْمِ.`, textId: `Aamiin, dan segala puji bagi Allah Tuhan semesta alam atas nikmat Islam dan ilmu pengetahuan.` }
        );
        break;
    }

    result.push({
      id: `hiwar-${i}`,
      theme,
      title,
      lines
    });
  }

  return result;
}
