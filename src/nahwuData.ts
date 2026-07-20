import { Chapter } from './types';

export const initialChapters: Chapter[] = [
  // ==================== KELAS 7 (15 BAB) ====================
  {
    id: "7-1",
    grade: 7,
    titleAr: "الْكَلَامُ وَأَقْسَامُهُ",
    titleId: "Kalam dan Pembagiannya",
    definitionAr: "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ، وَأَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى.",
    definitionId: "Kalam adalah lafadz yang tersusun yang memberikan faidah lengkap dalam bahasa Arab. Pembagiannya ada tiga: Isim (kata benda), Fi'il (kata kerja), dan Harf (huruf yang memiliki makna).",
    kaidah: [
      "Isim (اِسْم) memiliki tanda seperti tanwin, alif lam (ال), dan diawali huruf jarr.",
      "Fi'il (فِعْل) terbagi menjadi Madhi, Mudhari', dan Amr.",
      "Harf (حَرْف) tidak memiliki tanda khusus dan maknanya sempurna bersama kata lain."
    ],
    rumus: "الْكَلَامُ = اِسْمٌ + فِعْلٌ + حَرْفٌ (Contoh: ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ)",
    latihan: [
      "Sebutkan pembagian kalam beserta contohnya masing-masing!",
      "Tentukan jenis kata pada kata 'كِتَابٌ' dan sebutkan tandanya!",
      "Tunjukkan Fi'il dalam kalimat: 'قَرَأَ زَيْدٌ الدَّرْسَ'!",
      "Buatlah kalimat yang mengandung huruf 'فِي'!",
      "Apa perbedaan utama antara Isim dan Fi'il dalam kaitannya dengan waktu?"
    ]
  },
  {
    id: "7-2",
    grade: 7,
    titleAr: "الْجُمْلَةُ الْمُفِيدَةُ",
    titleId: "Al-Jumlah Al-Mufidah (Kalimat Sempurna)",
    definitionAr: "الْجُمْلَةُ الْمُفِيدَةُ هِيَ التَّرْكِيبُ الَّذِي يُفِيدُ فَائِدَةً تَامَّةً يَحْسُنُ السُّكُوتُ عَلَيْهَا.",
    definitionId: "Jumlah Mufidah adalah susunan kata yang memberikan pemahaman yang utuh dan sempurna sehingga pendengar tidak lagi menunggu kelanjutannya.",
    kaidah: [
      "Tersusun minimal dari dua kata (Isim + Isim atau Fi'il + Isim).",
      "Memberikan arti yang lengkap dan tidak menggantung.",
      "Contoh: 'الْعِلْمُ نُورٌ' (Ilmu adalah cahaya) adalah Jumlah Mufidah."
    ],
    rumus: "كَلِمَةٌ + كَلِمَةٌ = جُمْلَةٌ مُفِيدَةٌ (Contoh: جَلَسَ الْأُسْتَاذُ)",
    latihan: [
      "Apakah susunan 'إِنْ ذَهَبْتَ...' termasuk Jumlah Mufidah? Jelaskan!",
      "Ubah kata 'الْمَدْرَسَةُ' menjadi sebuah Jumlah Mufidah!",
      "Sebutkan unsur minimal pembentuk Jumlah Mufidah!",
      "Berikan contoh Jumlah Mufidah yang menggunakan kata kerja (Fi'il)!",
      "Terjemahkan ke dalam bahasa Arab: 'Halaman sekolah itu luas'."
    ]
  },
  {
    id: "7-3",
    grade: 7,
    titleAr: "الْجُمْلَةُ الْاِسْمِيَّةُ",
    titleId: "Al-Jumlah Al-Ismiyyah",
    definitionAr: "الْجُمْلَةُ الْاِسْمِيَّةُ هِيَ كُلُّ جُمْلَةٍ تَبْتَدِئُ بِاسْمٍ، وَتَتَكَوَّنُ مِنْ رُكْنَيْنِ أَسَاسِيَّيْنِ هُمَا: الْمُبْتَدَأُ وَالْخَبَرُ.",
    definitionId: "Jumlah Ismiyyah adalah setiap kalimat yang diawali dengan Isim (kata benda), dan terdiri dari dua rukun utama yaitu Mubtada' dan Khabar.",
    kaidah: [
      "Mubtada' (مُبْتَدَأ): Isim marfu' yang terletak di awal kalimat sebagai subjek.",
      "Khabar (خَبَر): Bagian yang menyempurnakan makna Mubtada' sebagai predikat.",
      "Khabar harus menyesuaikan dengan Mubtada' dalam hal jenis (mudzakkar/muannats) dan jumlah."
    ],
    rumus: "الْجُمْلَةُ الْاِسْمِيَّةُ = مُبْتَدَأٌ + خَبَرٌ (Contoh: السَّاحَةُ نَظِيفَةٌ)",
    latihan: [
      "Tentukan Mubtada' dan Khabar pada kalimat 'الْكِتَابُ مُفِيدٌ'!",
      "Lengkapilah Mubtada' berikut dengan Khabar yang sesuai: 'الطَّالِبَانِ ...'!",
      "Mengapa Khabar pada kalimat 'الْمُعَلِّمَةُ نَشِيطَةٌ' berbentuk muannats?",
      "Buatlah 3 contoh Jumlah Ismiyyah bertema lingkungan sekolah!",
      "Analisislah harakat akhir dari Mubtada' dan Khabar, harakat apa yang digunakan?"
    ]
  },
  {
    id: "7-4",
    grade: 7,
    titleAr: "الْجُمْلَةُ الْفِعْلِيَّةُ",
    titleId: "Al-Jumlah Al-Fi'liyyah",
    definitionAr: "الْجُمْلَةُ الْفِعْلِيَّةُ هِيَ كُلُّ جُمْلَةٍ تَبْتَدِئُ بِفِعْلٍ، وَتَتَكَوَّنُ مِنْ فِعْلٍ وَفَاعِلٍ.",
    definitionId: "Jumlah Fi'liyyah adalah setiap kalimat yang diawali dengan Fi'il (kata kerja), dan terdiri dari komponen minimal Fi'il dan Fa'il (pelaku).",
    kaidah: [
      "Harus diawali dengan kata kerja (Fi'il), baik Madhi, Mudhari', maupun Amr.",
      "Fa'il (pelaku) diletakkan setelah Fi'il dan ber-i'rab marfu'.",
      "Fi'il tetap dalam bentuk tunggal (mufrad) meskipun Fa'il-nya berbentuk mutsanna atau jamak."
    ],
    rumus: "الْجُمْلَةُ الْفِعْلِيَّةُ = فِعْلٌ + فَاعِلٌ (Contoh: حَضَرَ الْمُعَلِّمُ)",
    latihan: [
      "Tentukan Fi'il dan Fa'il pada kalimat 'سَافَرَ الطُّلَّابُ'!",
      "Ubah Jumlah Ismiyyah 'الطَّالِبُ نَجَحَ' menjadi Jumlah Fi'liyyah!",
      "Mengapa kata kerja tetap tunggal pada kalimat 'يَكْتُبُ الْمُسْلِمُونَ الْقُرْآنَ'?",
      "Buatlah Jumlah Fi'liyyah dengan menggunakan kata kerja lampau (Fi'il Madhi)!",
      "Tuliskan terjemahan dari kalimat 'حَضَرَ الْوَالِدُ إِلَى الْبَيْتِ'!"
    ]
  },
  {
    id: "7-5",
    grade: 7,
    titleAr: "أَقْسَامُ الْفِعْلِ: مَاضٍ وَمُضَارِعٌ وَأَمْرٌ",
    titleId: "Pembagian Fi'il (Madhi, Mudhari', dan Amr)",
    definitionAr: "الْفِعْلُ بِاعْتِبَارِ الزَّمَنِ ثَلَاثَةُ أَقْسَامٍ: مَاضٍ (مَا دَلَّ عَلَى عَمَلٍ قَبْلَ زَمَنِ التَّكَلُّمِ)، مُضَارِعٌ (مَا دَلَّ عَلَى عَمَلٍ فِي زَمَنِ التَّكَلُّمِ أَوْ بَعْدَهُ)، وَأَمْرٌ (مَا يُطْلَبُ بِهِ عَمَلٌ فِي الْمُسْتَقْبَلِ).",
    definitionId: "Fi'il ditinjau dari segi waktu pengerjaannya dibagi menjadi tiga: Madhi (lampau), Mudhari' (sedang/akan datang), dan Amr (perintah).",
    kaidah: [
      "Fi'il Madhi: Kata kerja lampau, contoh 'كَتَبَ' (telah menulis).",
      "Fi'il Mudhari': Kata kerja sekarang/akan datang, diawali huruf mudhara'ah (أَنَيْتُ), contoh 'يَكْتُبُ' (sedang menulis).",
      "Fi'il Amr: Kata kerja perintah, contoh 'اُكْتُبْ' (tuliskanlah!)."
    ],
    rumus: "الْفِعْلُ = مَاضٍ (كَتَبَ) / مُضَارِعٌ (يَكْتُبُ) / أَمْرٌ (اُكْتُبْ)",
    latihan: [
      "Sebutkan huruf-huruf mudhara'ah yang mengawali Fi'il Mudhari'!",
      "Ubah Fi'il Madhi 'ذَهَبَ' menjadi Fi'il Mudhari' dan Fi'il Amr!",
      "Tentukan jenis Fi'il pada kata 'اِقْرَأْ'!",
      "Sebutkan arti dari kalimat 'سَيَذْهَبُ عُمَرُ إِلَى مَكَّةَ' dan tentukan jenis kata kerjanya!",
      "Buatlah kalimat perintah (Fi'il Amr) untuk teman laki-lakimu!"
    ]
  },
  {
    id: "7-6",
    grade: 7,
    titleAr: "الْفَاعِلُ",
    titleId: "Al-Fa'il (Pelaku/Subjek)",
    definitionAr: "الْفَاعِلُ هُوَ اسْمٌ مَرْفُوعٌ تَقَدَّمَهُ فِعْلٌ مَبْنِيٌّ لِلْمَعْلُومِ وَدَلَّ عَلَى مَنْ فَعَلَ الْفِعْلَ.",
    definitionId: "Fa'il adalah isim marfu' yang didahului oleh kata kerja aktif (fi'il ma'lum) dan menunjukkan pihak yang melakukan perbuatan tersebut.",
    kaidah: [
      "Fa'il harus selalu marfu' (tanda dasarnya adalah dhammah).",
      "Fa'il terletak setelah kata kerja (Fi'il), tidak boleh mendahuluinya.",
      "Jika Fa'il muannats, maka Fi'il harus ditambahi tanda muannats (ta' ta'nits)."
    ],
    rumus: "فِعْلٌ + فَاعِلٌ مُرْتَفِعٌ (Contoh: جَاءَ الْقَاضِي / كَتَبَتْ فَاطِمَةُ)",
    latihan: [
      "Cari Fa'il pada kalimat 'سَافَرَتْ عَائِشَةُ إِلَى الْمَدِينَةِ'!",
      "Mengapa kata kerja 'كَتَبَتْ' menggunakan huruf Ta' di akhirnya pada kalimat 'كَتَبَتْ هِنْدٌ'?",
      "Tentukan tanda rafa' pada Fa'il kalimat 'يَجْتَهِدُ الطُّلَّابُ'!",
      "Betulkan kalimat berikut: 'ذَهَبَ زَيْنَبُ إِلَى الْفَصْلِ'!",
      "Buatlah kalimat dengan Fa'il berupa isim mutsanna (dua orang)!"
    ]
  },
  {
    id: "7-7",
    grade: 7,
    titleAr: "الْمَفْعُولُ بِهِ",
    titleId: "Al-Maf'ul Bihi (Objek Penderita)",
    definitionAr: "الْمَفْعُولُ بِهِ هُوَ اسْمٌ مَنْصُوبٌ يَقَعُ عَلَيْهِ فِعْلُ الْفَاعِلِ.",
    definitionId: "Maf'ul Bihi adalah isim manshub yang menjadi sasaran atau objek dari tindakan yang dilakukan oleh pelaku (Fa'il).",
    kaidah: [
      "Hukum i'rab Maf'ul Bihi adalah manshub (tanda dasarnya adalah fathah).",
      "Bisa berupa isim dhamir (kata ganti) maupun isim zhahir (kata tampak).",
      "Contoh: 'شَرِبَ الطِّفْلُ اللَّبَنَ' (Anak itu meminum susu), kata 'اللَّبَنَ' adalah Maf'ul Bihi."
    ],
    rumus: "فِعْلٌ + فَاعِلٌ + مَفْعُولٌ بِهِ مَنْصُوبٌ (Contoh: خَلَقَ اللَّهُ الْأَرْضَ)",
    latihan: [
      "Tentukan objek (Maf'ul Bihi) pada kalimat 'قَرَأَ الطَّالِبُ الدَّرْسَ'!",
      "Berikan harakat yang benar untuk kata 'الْقَلَمَ' dalam kalimat 'أَخَذَ عَلِيٌّ الْقَلَمَ'!",
      "Buatlah kalimat yang terdiri dari Fi'il, Fa'il, dan Maf'ul Bihi bertema makanan!",
      "Apakah Maf'ul Bihi boleh diletakkan sebelum Fa'il? Berikan contoh jika bisa!",
      "Terjemahkan kalimat ini ke bahasa Arab: 'Zaid sedang memukul anjing'."
    ]
  },
  {
    id: "7-8",
    grade: 7,
    titleAr: "حُرُوفُ الْجَرِّ",
    titleId: "Huruf-Huruf Jarr",
    definitionAr: "حُرُوفُ الْجَرِّ هِيَ حُرُوفٌ تَخْتَصُّ بِالدُّخُولِ عَلَى الْأَسْمَاءِ فَقَطْ، وَتَجْعَلُهَا مَجْرُورَةً.",
    definitionId: "Huruf Jarr adalah huruf-huruf khusus yang masuk ke dalam isim saja, dan menjadikannya ber-i'rab majrur (tanda dasarnya kasrah).",
    kaidah: [
      "Huruf jarr yang terkenal antara lain: مِنْ (dari), إِلَى (ke), عَنْ (dari/tentang), عَلَى (di atas), فِي (di dalam), بِ (dengan), لِ (untuk/milik).",
      "Isim yang terletak setelah huruf jarr disebut 'Isim Majrur'.",
      "Contoh: 'الْقَلَمُ فِي الْحَقِيبَةِ' (Pena itu di dalam tas)."
    ],
    rumus: "حَرْفُ جَرٍّ + اِسْمٌ مَجْرُورٌ (Contoh: عَلَى الْمَكْتَبِ)",
    latihan: [
      "Sebutkan 5 huruf jarr yang kamu ketahui beserta artinya!",
      "Sebutkan harakat akhir isim majrur dalam kalimat 'ذَهَبْتُ إِلَى الْمَسْجِدِ'!",
      "Lengkapilah kalimat berikut dengan huruf jarr yang tepat: 'الْكِتَابُ ... الْمَكْتَبِ'!",
      "Buatlah kalimat yang mengandung huruf jarr 'بِ' (dengan)!",
      "Analisislah kalimat: 'أَخَذْتُ الْعِلْمَ عَنِ الْأُسْتَاذِ' (Mana huruf jarr dan isim majrurnya)?"
    ]
  },
  {
    id: "7-9",
    grade: 7,
    titleAr: "الْمُضَافُ وَالْمُضَافُ إِلَيْهِ",
    titleId: "Al-Mudhaf dan Al-Mudhaf Ilaih (Idhafah)",
    definitionAr: "الْإِضَافَةُ نِسْبَةٌ بَيْنَ اسْمَيْنِ عَلَى تَقْدِيرِ حَرْفِ الْجَرِّ، الْأَوَّلُ يُسَمَّى مُضَافًا وَالثَّانِي مُضَافًا إِلَيْهِ مَجْرُورًا دَائِمًا.",
    definitionId: "Idhafah adalah penyandaran suatu isim (Mudhaf) kepada isim lain (Mudhaf Ilaih). Isim pertama disebut Mudhaf dan yang kedua disebut Mudhaf Ilaih yang selalu majrur.",
    kaidah: [
      "Mudhaf tidak boleh menggunakan Alif Lam (ال) dan tidak boleh bertanwin.",
      "Mudhaf Ilaih hukumnya selalu majrur (tanda dasarnya kasrah).",
      "Contoh: 'كِتَابُ اللَّهِ' (Kitab Allah/Al-Qur'an), 'كِتَابُ' adalah Mudhaf dan 'اللَّهِ' adalah Mudhaf Ilaih."
    ],
    rumus: "مُضَافٌ (tanpa ال/tanwin) + مُضَافٌ إِلَيْهِ مَجْرُورٌ (Contoh: بَابُ الْمَسْجِدِ)",
    latihan: [
      "Tentukan Mudhaf dan Mudhaf Ilaih pada frasa 'سَيَّارَةُ الْمُدِيرِ'!",
      "Mengapa kata 'قَلَمُ' pada kalimat 'هَذَا قَلَمُ الطَّالِبِ' tidak boleh ditanwin?",
      "Betulkan kesalahan pada susunan berikut: 'الْكِتَابُ الطَّالِبِ'!",
      "Buatlah contoh Idhafah yang menggunakan nama orang sebagai Mudhaf Ilaih!",
      "Terjemahkan ke bahasa Arab: 'Kunci rumah itu hilang'."
    ]
  },
  {
    id: "7-10",
    grade: 7,
    titleAr: "الْمُعْرَبُ وَالْمَبْنِيُّ مِنَ الْأَسْمَاءِ",
    titleId: "Isim Mu'rab dan Isim Mabni",
    definitionAr: "الْمُعْرَبُ هُوَ مَا يَتَغَيَّرُ آخِرُهُ بِسَبَبِ الْعَوَامِلِ، وَالْمَبْنِيُّ هُوَ مَا لَا يَتَغَيَّرُ آخِرُهُ مَهْمَا اخْتَلَفَتِ الْعَوَامِلُ.",
    definitionId: "Mu'rab adalah kata yang harakat/keadaan akhirnya berubah karena perbedaan kedudukannya dalam kalimat. Mabni adalah kata yang harakat akhirnya selalu tetap/konstan dalam semua keadaan.",
    kaidah: [
      "Kebanyakan isim adalah Mu'rab, contoh: مُحَمَّدٌ (bisa menjadi مُحَمَّدًا atau مُحَمَّدٍ).",
      "Isim Mabni meliputi: Isim Dhamir (kata ganti), Isim Isyarah (kata tunjuk), Isim Maushul (kata sambung), dan Isim Istifham (kata tanya).",
      "Isim Mabni tidak berubah harakat akhirnya meskipun kemasukan huruf jarr."
    ],
    rumus: "الْمُعْرَبُ (يَتَغَيَّرُ آخِرُهُ) vs الْمَبْنِيُّ (يَلْزَمُ حَالَةً وَاحِدَةً)",
    latihan: [
      "Tentukan apakah kata 'هَذَا' termasuk isim Mu'rab atau Mabni!",
      "Tunjukkan isim Mu'rab dalam kalimat 'التِّلْمِيذُ نَشِيطٌ'!",
      "Sebutkan 3 jenis isim yang selalu berstatus Mabni!",
      "Bagaimana bentuk kata 'مَنْ' jika diletakkan setelah huruf jarr? Jelaskan!",
      "Berikan contoh perubahan harakat kata 'زَيْدٌ' dalam tiga keadaan i'rab yang berbeda!"
    ]
  },
  {
    id: "7-11",
    grade: 7,
    titleAr: "الْمُعْرَبُ وَالْمَبْنِيُّ مِنَ الْأَفْعَالِ",
    titleId: "Fi'il Mu'rab dan Fi'il Mabni",
    definitionAr: "الْأَفْعَالُ مِنْهَا مَبْنِيٌّ وَهُوَ الْمَاضِي وَالْأَمْرُ دَائِمًا، وَمِنْهَا مُعْرَبٌ وَهُوَ الْمُضَارِعُ إِلَّا إِذَا اتَّصَلَتْ بِهِ نُونُ النِّسْوَةِ أَوْ نُونُ التَّوْكِيدِ.",
    definitionId: "Fi'il terbagi menjadi Mabni (yaitu Fi'il Madhi dan Fi'il Amr yang selalu konstan) dan Mu'rab (yaitu Fi'il Mudhari' yang bisa berubah, kecuali jika bersambung dengan Nun Niswah atau Nun Taukid).",
    kaidah: [
      "Fi'il Madhi selalu mabni (biasanya di atas fathah, contoh: كَتَبَ).",
      "Fi'il Amr selalu mabni (biasanya di atas sukun, contoh: اُكْتُبْ).",
      "Fi'il Mudhari' berstatus mu'rab (bisa marfu', manshub, atau majzum), contoh: يَكْتُبُ / لَنْ يَكْتُبَ / لَمْ يَكْتُبْ."
    ],
    rumus: "مَبْنِيٌّ = مَاضٍ وَأَمْرٌ | مُعْرَبٌ = مُضَارِعٌ (غالباً)",
    latihan: [
      "Sebutkan status i'rab/mabni dari kata kerja 'ذَهَبُوا'!",
      "Ubah Fi'il Mudhari' mu'rab 'يَقْرَأُ' menjadi majzum dengan menambahkan 'لَمْ'!",
      "Apakah Fi'il Amr bisa berstatus mu'rab? Jelaskan pendapatmu!",
      "Tentukan fi'il mu'rab pada kalimat berikut: 'الطَّالِبُ يَفْهَمُ الدَّرْسَ'!",
      "Sebutkan keadaan di mana Fi'il Mudhari' berubah menjadi Mabni!"
    ]
  },
  {
    id: "7-12",
    grade: 7,
    titleAr: "الْمُفْرَدُ وَالْمُثَنَّى",
    titleId: "Isim Mufrad dan Isim Mutsanna",
    definitionAr: "الْمُفْرَدُ هُوَ مَا دَلَّ عَلَى وَاحِدٍ أَوْ وَاحِدَةٍ، وَالْمُثَنَّى هُوَ مَا دَلَّ عَلَى اثْنَيْنِ أَوِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَنُونٍ أَوْ يَاءٍ وَنُونٍ فِي آخِرِهِ.",
    definitionId: "Mufrad adalah kata yang menunjukkan jumlah tunggal (satu). Mutsanna adalah kata yang menunjukkan jumlah ganda (dua), dengan menambahkan alif & nun (انِ) atau ya' & nun (يْنِ) di akhirnya.",
    kaidah: [
      "Tanda rafa' isim Mutsanna adalah Alif, sedangkan tanda nasb dan jarr-nya adalah Ya'.",
      "Contoh Mufrad: كِتَابٌ (satu buku).",
      "Contoh Mutsanna: كِتَابَانِ (dua buku - saat rafa') atau كِتَابَيْنِ (dua buku - saat nasb/jarr)."
    ],
    rumus: "مُثَنَّى = مُفْرَدٌ + (انِ / يْنِ) (Contoh: طَالِبٌ -> طَالِبَانِ / طَالِبَيْنِ)",
    latihan: [
      "Ubah kata 'مُعَلِّمٌ' menjadi isim Mutsanna dalam kondisi rafa'!",
      "Tentukan bentuk mufrad dari kata 'مَدْرَسَتَيْنِ'!",
      "Analisislah i'rab kata 'الْوَلَدَانِ' dalam kalimat 'لَعِبَ الْوَلَدَانِ'!",
      "Tuliskan kalimat yang mengandung kata 'كِتَابَيْنِ' sebagai objek (Maf'ul Bihi)!",
      "Apa tanda i'rab jarr untuk isim mutsanna?"
    ]
  },
  {
    id: "7-13",
    grade: 7,
    titleAr: "جَمْعُ الْمُذَكَّرِ السَّالِمُ",
    titleId: "Jamak Mudzakkar Salim",
    definitionAr: "جَمْعُ الْمُذَكَّرِ السَّالِمُ هُوَ مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ بِزِيَادَةِ وَاوٍ وَنُونٍ أَوْ يَاءٍ وَنُونٍ فِي آخِرِهِ، صَالِحٌ لِلتَّجْرِيدِ.",
    definitionId: "Jamak Mudzakkar Salim adalah kata yang menunjukkan jumlah banyak (lebih dari dua) khusus untuk laki-laki berakal, dengan menambahkan wawu & nun (وُنَ) atau ya' & nun (ِينَ) di akhirnya.",
    kaidah: [
      "Menggunakan akhiran wawu & nun (ون) ketika rafa' (contoh: مُسْلِمُونَ).",
      "Menggunakan akhiran ya' & nun (ين) ketika nasb dan jarr (contoh: مُسْلِمِينَ).",
      "Tanda i'rabnya adalah huruf (Wawu untuk rafa', Ya' untuk nasb/jarr) bukan harakat."
    ],
    rumus: "جَمْعُ مُذَكَّرٍ = مُفْرَدٌ + (وُنَ / يِينَ) (Contoh: مُهَنْدِسٌ -> مُهَنْدِسُونَ)",
    latihan: [
      "Ubah kata 'مُؤْمِنٌ' menjadi Jamak Mudzakkar Salim saat kedudukannya rafa'!",
      "Tentukan tanda nasb untuk Jamak Mudzakkar Salim dalam kalimat 'رَأَيْتُ الْمُعَلِّمِينَ'!",
      "Apakah kata 'شَيَاطِينُ' termasuk Jamak Mudzakkar Salim? Jelaskan alasanmu!",
      "Buatlah kalimat dengan pelaku (Fa'il) berupa Jamak Mudzakkar Salim!",
      "Sebutkan syarat isim yang bisa diubah menjadi Jamak Mudzakkar Salim!"
    ]
  },
  {
    id: "7-14",
    grade: 7,
    titleAr: "جَمْعُ الْمُؤَنَّثِ السَّالِمُ",
    titleId: "Jamak Muannats Salim",
    definitionAr: "جَمْعُ الْمُؤَنَّثِ السَّالِمُ هُوَ مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَتَيْنِ بِزِيَادَةِ أَلِفٍ وَتَاءٍ فِي آخِرِهِ.",
    definitionId: "Jamak Muannats Salim adalah kata yang menunjukkan jumlah banyak (lebih dari dua) untuk perempuan, dengan menambahkan alif dan ta' (ات) di akhir kata mufradnya.",
    kaidah: [
      "Tanda rafa' Jamak Muannats Salim adalah dhammah (ُ).",
      "Tanda nasb dan jarr-nya adalah kasrah (ِ). PERHATIAN: Jamak Muannats Salim tidak pernah berharakat fathah!",
      "Contoh: الْمُعَلِّمَاتُ (saat rafa'), الْمُعَلِّمَاتِ (saat nasb/jarr)."
    ],
    rumus: "جَمْعُ مُؤَنَّثٍ = مُفْرَدٌ (dibuang ة) + اتٌ (Contoh: طَالِبَةٌ -> طَالِبَاتٌ)",
    latihan: [
      "Ubah kata 'مُسْلِمَةٌ' menjadi Jamak Muannats Salim!",
      "Tentukan harakat akhir kata 'الطَّالِبَاتِ' dalam kalimat 'رَأَيْتُ الطَّالِبَاتِ'!",
      "Mengapa Jamak Muannats Salim tidak boleh diberi harakat fathah saat nasb?",
      "Buatlah Jumlah Ismiyyah yang Mubtada' dan Khabar-nya berupa Jamak Muannats Salim!",
      "Analisislah i'rab kata 'الْمُؤْمِنَاتِ' dalam frasa 'لِلْمُؤْمِنَاتِ'!"
    ]
  },
  {
    id: "7-15",
    grade: 7,
    titleAr: "جَمْعُ التَّكْسِيرِ",
    titleId: "Jamak Taksir (Jamak Tidak Beraturan)",
    definitionAr: "جَمْعُ التَّكْسِيرِ هُوَ مَا دَلَّ عَلَى أَكْثَرَ مِنِ اثْنَيْنِ أَوِ اثْنَتَيْنِ مَعَ تَغَيُّرِ صِيغَةِ مُفْرَدِهِ.",
    definitionId: "Jamak Taksir adalah bentuk jamak yang berubah dari bentuk tunggalnya (tidak beraturan), baik dengan menambah huruf, mengurangi, atau merubah harakat.",
    kaidah: [
      "Tidak memiliki rumus akhiran yang tetap seperti jamak salim.",
      "Tanda i'rabnya sama seperti isim mufrad: Dhammah (rafa'), Fathah (nasb), Kasrah (jarr).",
      "Contoh: كِتَابٌ (buku) -> كُتُبٌ (buku-buku), قَلَمٌ (pena) -> أَقْلَامٌ (pena-pena)."
    ],
    rumus: "جَمْعُ تَكْسِيرٍ = تَغَيُّرُ لَفْظِ الْمُفْرَدِ (Contoh: رَجُلٌ -> رِجَالٌ)",
    latihan: [
      "Sebutkan bentuk Jamak Taksir dari kata 'عَالِمٌ' dan 'مَسْجِدٌ'!",
      "Tentukan i'rab kata 'الْأَوْلَادُ' dalam kalimat 'لَعِبَ الْأَوْلَادُ'!",
      "Apakah perbedaan mendasar antara Jamak Taksir dengan Jamak Salim?",
      "Sebutkan tanda nasb untuk Jamak Taksir beserta contohnya dalam kalimat!",
      "Carilah Jamak Taksir dalam kalimat: 'قَرَأْتُ كُتُبًا كَثِيرَةً'!"
    ]
  },

  // ==================== KELAS 8 (15 BAB) ====================
  {
    id: "8-1",
    grade: 8,
    titleAr: "عَلَامَاتُ الْإِعْرَابِ الْأَصْلِيَّةُ",
    titleId: "Tanda-Tanda I'rab Asli",
    definitionAr: "الْعَلَامَاتُ الْأَصْلِيَّةُ لِلْإِعْرَابِ هِيَ أَرْبَعٌ: الضَّمَّةُ لِلرَّفْعِ، وَالْفَتْحَةُ لِلنَّصْبِ، وَالْكَسْرَةُ لِلْجَرِّ، وَالسُّكُونُ لِلْجَزْمِ.",
    definitionId: "Tanda i'rab asli ada empat jenis: Dhammah untuk keadaan Rafa', Fathah untuk keadaan Nasb, Kasrah untuk keadaan Jarr, dan Sukun untuk keadaan Jazm.",
    kaidah: [
      "Dhammah (ُ) adalah tanda asli Rafa' pada Isim Mufrad, Jamak Taksir, Jamak Muannats Salim, dan Fi'il Mudhari' Shahih Akhir.",
      "Fathah (َ) adalah tanda asli Nasb pada Isim Mufrad, Jamak Taksir, dan Fi'il Mudhari' jika kemasukan penashab.",
      "Kasrah (ِ) adalah tanda asli Jarr khusus pada Isim yang menerima kasrah.",
      "Sukun (ْ) adalah tanda asli Jazm khusus pada Fi'il Mudhari' Shahih Akhir."
    ],
    rumus: "أَصْلِيَّةٌ = رَفْعٌ (ضَمَّة) | نَصْبٌ (فَتْحَة) | جَرٌّ (كَسْرَة) | جَزْمٌ (سُكُون)",
    latihan: [
      "Sebutkan 4 tanda i'rab asli beserta kedudukannya masing-masing!",
      "Berikan contoh kalimat yang mengandung kata ber-i'rab majrur dengan tanda asli kasrah!",
      "Kapan Fi'il Mudhari' mendapatkan tanda i'rab sukun?",
      "Tunjukkan kata-kata yang menggunakan tanda asli dalam kalimat: 'يَكْتُبُ مُحَمَّدٌ الدَّرْسَ'!",
      "Apakah isim bisa berada dalam keadaan Jazm? Jelaskan alasannya!"
    ]
  },
  {
    id: "8-2",
    grade: 8,
    titleAr: "عَلَامَاتُ الْإِعْرَابِ الْفَرْعِيَّةُ",
    titleId: "Tanda-Tanda I'rab Cabang (Niyabah)",
    definitionAr: "الْعَلَامَاتُ الْفَرْعِيَّةُ هِيَ الَّتِي تَنُوبُ عَنِ الْعَلَامَاتِ الْأَصْلِيَّةِ فِي بَعْضِ الْأَبْوَابِ النَّحْوِيَّةِ كَالْأَسْمَاءِ الْخَمْسَةِ وَالْمُثَنَّى وَالْجُمُوعِ.",
    definitionId: "Tanda i'rab cabang adalah tanda-tanda yang menggantikan tanda asli dalam beberapa bab nahwu tertentu seperti isim mutsanna, jamak mudzakkar salim, asma'ul khamsah, dll.",
    kaidah: [
      "Huruf Alif menggantikan Dhammah pada isim Mutsanna saat rafa'.",
      "Huruf Wawu menggantikan Dhammah pada Jamak Mudzakkar Salim dan Asma'ul Khamsah saat rafa'.",
      "Huruf Ya' menggantikan Fathah/Kasrah pada Mutsanna dan Jamak Mudzakkar Salim saat nasb/jarr.",
      "Kasrah menggantikan Fathah pada Jamak Muannats Salim saat nasb."
    ],
    rumus: "فَرْعِيَّةٌ = حُرُوفٌ (ا، و، ي) أَوْ حَرَكَاتٌ نَائِبَةٌ",
    latihan: [
      "Sebutkan apa saja tanda i'rab cabang (fer'i) yang berupa huruf!",
      "Mengapa kata 'الْمُعَلِّمُونَ' menggunakan huruf Wawu ketika berkedudukan sebagai pelaku?",
      "Tentukan tanda i'rab kata 'أَبَاكَ' dalam kalimat 'رَأَيْتُ أَبَاكَ'!",
      "Sebutkan contoh isim yang memiliki tanda nasb berupa kasrah!",
      "Apa tanda jarr cabang untuk isim mutsanna?"
    ]
  },
  {
    id: "8-3",
    grade: 8,
    titleAr: "الْأَسْمَاءُ الْخَمْسَةُ",
    titleId: "Asma'ul Khamsah (Isim-Isim yang Lima)",
    definitionAr: "الْأَسْمَاءُ الْخَمْسَةُ هِيَ: أَبٌ، أَخٌ، حَمٌ، فُو، ذُو بِمَعْنَى صَاحِبٍ. تُرْفَعُ بِالْوَاوِ، وَتُنْصَبُ بِالْأَلِفِ، وَتُجَرُّ بِالْيَاءِ.",
    definitionId: "Asma'ul Khamsah adalah lima isim khusus yaitu: Abun (Ayah), Akhun (Saudara), Hamun (Ipar), Fuu (Mulut), Dzuu (Pemilik). Menggunakan i'rab huruf: Wawu (rafa'), Alif (nasb), Ya' (jarr).",
    kaidah: [
      "Syarat i'rab dengan huruf: Isim-isim ini harus berbentuk tunggal (mufrad), disandarkan (idhafah) kepada selain Ya' Mutakallim.",
      "Contoh Rafa': جَاءَ أَبُوكَ (Telah datang ayahmu).",
      "Contoh Nasb: رَأَيْتُ أَبَاكَ (Saya melihat ayahmu).",
      "Contoh Jarr: مَرَرْتُ بِأَبِيكَ (Saya berpapasan dengan ayahmu)."
    ],
    rumus: "أَبُوكَ (رَفْع - و) | أَبَاكَ (نَصْب - ا) | أَبِيكَ (جَرّ - ي)",
    latihan: [
      "Sebutkan kelima kata yang termasuk Asma'ul Khamsah beserta artinya!",
      "Sebutkan syarat agar Asma'ul Khamsah bisa di-i'rab dengan menggunakan huruf!",
      "Tentukan kedudukan dan tanda i'rab kata 'ذُو' dalam 'عَلِيٌّ ذُو عِلْمٍ'!",
      "Analisislah i'rab kalimat 'أَطِعْ أَبَاكَ'!",
      "Mengapa kata 'أَبِي' (ayahku) tidak di-i'rab dengan tanda cabang huruf?"
    ]
  },
  {
    id: "8-4",
    grade: 8,
    titleAr: "الْأَفْعَالُ الْخَمْسَةُ",
    titleId: "Al-Af'alul Khamsah (Fi'il-Fi'il yang Lima)",
    definitionAr: "الْأَفْعَالُ الْخَمْسَةُ هِيَ كُلُّ فِعْلٍ مُضَارِعٍ اتَّصَلَتْ بِهِ أَلِفُ الِاثْنَيْنِ، أَوْ وَاوُ الْجَمَاعَةِ، أَوْ يَاءُ الْمُخَاطَبَةِ.",
    definitionId: "Al-Af'alul Khamsah adalah setiap Fi'il Mudhari' yang bersambung dengan Alif Tatsniyah (menunjukkan 2 orang), Wawu Jama'ah (banyak orang), atau Ya' Mukhatabah (kamu perempuan).",
    kaidah: [
      "Bentuk polanya ada 5: يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ.",
      "Tanda rafa'-nya adalah tetapnya huruf Nun (ثُبُوتُ النُّونِ).",
      "Tanda nasb dan jazm-nya adalah dengan menghapus huruf Nun (حَذْفُ النُّونِ)."
    ],
    rumus: "رَفْعٌ = ثُبُوتُ النُّونِ (يَكْتُبُونَ) | نَصْبٌ/جَزْمٌ = حَذْفُ النُّونِ (لَمْ يَكْتُبُوا)",
    latihan: [
      "Tuliskan 5 wazan/pola dari Al-Af'alul Khamsah menggunakan kata kerja 'ذَهَبَ'!",
      "Apa tanda jazm untuk Al-Af'alul Khamsah? Berikan satu contoh kalimat!",
      "Tentukan i'rab kata 'تَعْمَلِينَ' dalam kalimat 'أَنْتِ تَعْمَلِينَ نَشِيطَةً'!",
      "Ubah kalimat 'الْمُعَلِّمُونَ يَشْرَحُونَ' menjadi manshub dengan menyisipkan huruf 'لَنْ'!",
      "Sebutkan alasan mengapa fi'il-fi'il tersebut dinamakan 'Fi'il yang Lima'!"
    ]
  },
  {
    id: "8-5",
    grade: 8,
    titleAr: "نَائِبُ الْفَاعِلُ",
    titleId: "Na'ib Al-Fa'il (Deputi/Pengganti Pelaku)",
    definitionAr: "نَائِبُ الْفَاعِلِ هُوَ اسْمٌ مَرْفُوعٌ يَحُلُّ مَحَلَّ الْفَاعِلِ بَعْدَ حَذْفِهِ، وَيُغَيَّرُ مَعَهُ صِيغَةُ الْفِعْلِ إِلَى الْمَبْنِيِّ لِلْمَجْهُولِ.",
    definitionId: "Na'ib al-Fa'il adalah isim marfu' yang menempati posisi Fa'il setelah Fa'il-nya dihapus, dan kata kerjanya diubah ke dalam bentuk pasif (Fi'il Majhul).",
    kaidah: [
      "I'rab Na'ib al-Fa'il adalah marfu' (sebagaimana Fa'il asli).",
      "Ketika dijadikan pasif, objek (Maf'ul Bihi) berubah kedudukannya menjadi Na'ib al-Fa'il.",
      "Contoh Aktif: كَتَبَ عَلِيٌّ الدَّرْسَ -> Pasif: كُتِبَ الدَّرْسُ (Pelajaran itu telah ditulis)."
    ],
    rumus: "فِعْلٌ مَجْهُولٌ + نَائِبُ فَاعِلٍ مَرْفُوعٍ (Contoh: قُرِئَ الْكِتَابُ)",
    latihan: [
      "Ubah kalimat aktif 'فَتَحَ الطَّالِبُ الْبَابَ' menjadi kalimat pasif (majhul)!",
      "Tentukan Na'ib al-Fa'il pada kalimat 'يُكْرَمُ الضَّيْفُ'!",
      "Bagaimana rumus mengubah kata kerja Mudhari' 'يَشْرَبُ' menjadi pasif?",
      "Sebutkan i'rab dan tanda rafa' kata 'الْقُرْآنُ' dalam kalimat 'يُقْرَأُ الْقُرْآنُ'!",
      "Buatlah kalimat pasif yang subjek penggantinya berupa isim mutsanna (dua orang)!"
    ]
  },
  {
    id: "8-6",
    grade: 8,
    titleAr: "كَانَ وَأَخَوَاتُهَا",
    titleId: "Kana dan Saudara-Saudaranya (Nawasikh)",
    definitionAr: "كَانَ وَأَخَوَاتُهَا أَفْعَالٌ نَاسِخَةٌ تَدْخُلُ عَلَى الْجُمْلَةِ الْاِسْمِيَّةِ، فَتَرْفَعُ الْمُبْتَدَأَ وَيُسَمَّى اسْمَهَا، وَتَنْصَبُ الْخَبَرَ وَيُسَمَّى خَبَرَهَا.",
    definitionId: "Kana dan saudara-saudaranya adalah fi'il amalan perusak yang masuk ke Jumlah Ismiyyah. Fungsinya adalah me-rafa'-kan Mubtada' (menjadi Isim Kana) dan men-nasb-kan Khabar (menjadi Khabar Kana).",
    kaidah: [
      "Saudara-saudara Kana yang populer: أَصْبَحَ (di waktu pagi), أَضْحَى (waktu dhuha), ظَلَّ (siang hari), أَمْسَى (sore hari), بَاتَ (malam hari), لَيْسَ (bukan/tidak), صَارَ (menjadi).",
      "Contoh: الْجَوُّ بَارِدٌ -> كَانَ الْجَوُّ بَارِدًا (Dahulu cuaca itu dingin)."
    ],
    rumus: "كَانَ + اِسْمُ كَانَ (مَرْفُوع) + خَبَرُ كَانَ (مَنْصُوب) (Contoh: لَيْسَ الْكَذِبُ نَافِعًا)",
    latihan: [
      "Sebutkan amalan dari 'كَانَ وَأَخَوَاتُهَا' terhadap Mubtada' dan Khabar!",
      "Sebutkan 5 saudara Kana beserta arti atau keterangan waktunya!",
      "Tentukan isim dan khabar Kana pada kalimat 'أَصْبَحَ الطَّالِبُ نَشِيطًا'!",
      "Masukkan kata 'لَيْسَ' pada kalimat 'الْقَلَمُ مَكْسُورٌ' dan berikan harakat yang tepat!",
      "Terjemahkan ke dalam bahasa Arab: 'Zaid dahulu adalah seorang dokter'."
    ]
  },
  {
    id: "8-7",
    grade: 8,
    titleAr: "إِنَّ وَأَخَوَاتُهَا",
    titleId: "Inna dan Saudara-Saudaranya",
    definitionAr: "إِنَّ وَأَخَوَاتُهَا حُرُوفٌ نَاسِخَةٌ تَدْخُلُ عَلَى الْجُمْلَةِ الْاِسْمِيَّةِ، فَتَنْصَبُ الْمُبْتَدَأَ وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الْخَبَرَ وَيُسَمَّى خَبَرَهَا.",
    definitionId: "Inna dan saudara-saudaranya adalah huruf-huruf pengubah yang masuk ke Jumlah Ismiyyah. Fungsinya adalah kebalikan dari Kana, yaitu men-nasb-kan Mubtada' (Isim Inna) dan me-rafa'-kan Khabar (Khabar Inna).",
    kaidah: [
      "Saudaranya yaitu: إِنَّ (sesungguhnya), أَنَّ (bahwa), كَأَنَّ (seakan-akan), لَكِنَّ (tetapi), لَعَلَّ (semoga/agar), لَيْتَ (andaikan).",
      "Berfungsi memberikan penekanan (taukid), penyerupaan (tasybih), atau pengharapan.",
      "Contoh: اللَّهُ غَفُورٌ -> إِنَّ اللَّهَ غَفُورٌ."
    ],
    rumus: "إِنَّ + اِسْمُ إِنَّ (مَنْصُوب) + خَبَرُ إِنَّ (مَرْفُوع) (Contoh: لَعَلَّ النَّصْرَ قَرِيبٌ)",
    latihan: [
      "Sebutkan fungsi/amalan dari 'إِنَّ وَأَخَوَاتُهَا'!",
      "Sebutkan arti masing-masing huruf berikut: 'كَأَنَّ'، 'لَعَلَّ'، 'لَيْتَ'!",
      "Tentukan isim dan khabar Inna pada kalimat 'إِنَّ الْعِلْمَ نُورٌ'!",
      "Betulkan harakat kalimat ini: 'إِنَّ الْمُعَلِّمُ نَشِيطٌ'!",
      "Buatlah kalimat menggunakan kata 'لَعَلَّ' bertema kelulusan ujian!"
    ]
  },
  {
    id: "8-8",
    grade: 8,
    titleAr: "ظَنَّ وَأَخَوَاتُهَا",
    titleId: "Zhanna dan Saudara-Saudaranya",
    definitionAr: "ظَنَّ وَأَخَوَاتُهَا أَفْعَالٌ نَاسِخَةٌ تَدْخُلُ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ فَتَنْصَبُهُمَا جَمِيعًا عَلَى أَنَّهُمَا مَفْعُولَانِ لَهَا.",
    definitionId: "Zhanna dan saudara-saudaranya adalah kata kerja yang merusak susunan Jumlah Ismiyyah dengan men-nasb-kan kedua rukun (Mubtada' & Khabar) sekaligus sebagai Maf'ul kesatu dan Maf'ul kedua.",
    kaidah: [
      "Terbagi menjadi kata kerja keraguan/dugaan (ظَنَّ، حَسِبَ، خَالَ) dan keyakinan/perubahan (رَأَى، عَلِمَ، وَجَدَ، اتَّخَذَ، جَعَلَ).",
      "Contoh: الْاِمْتِحَانُ سَهْلٌ -> ظَنَّ الطَّالِبُ الْاِمْتِحَانَ سَهْلًا (Siswa itu mengira ujian itu mudah)."
    ],
    rumus: "ظَنَّ + فَاعِلٌ + مَفْعُولٌ 1 (مَنْصُوب) + مَفْعُولٌ 2 (مَنْصُوب)",
    latihan: [
      "Sebutkan apa amalan dari 'ظَنَّ وَأَخَوَاتُهَا'!",
      "Tentukan Maf'ul 1 dan Maf'ul 2 pada kalimat 'رَأَيْتُ الْعِلْمَ نَافِعًا'!",
      "Sebutkan 3 kata kerja yang bermakna keyakinan (Yaqin) dalam bab ini!",
      "Masukkan kata 'حَسِبَ' ke dalam kalimat 'الْأُسْتَاذُ غَائِبٌ' lengkap dengan subjek pelaku!",
      "Analisislah i'rab kalimat: 'جَعَلَ اللَّهُ الطِّينَ خَزَفًا'!"
    ]
  },
  {
    id: "8-9",
    grade: 8,
    titleAr: "النَّعْتُ وَالْمَنْعُوتُ",
    titleId: "An-Na'at dan Al-Man'ut (Kata Sifat)",
    definitionAr: "النَّعْتُ هُوَ لَفْظٌ يَدُلُّ عَلَى صِفَةٍ فِي اسْمٍ قَبْلَهُ يُسَمَّى الْمَنْعُوتَ، وَيَتْبَعُهُ فِي الْإِعْرَابِ وَالتَّعْرِيفِ وَالتَّنْكِيرِ وَالنَّوْعِ وَالْعَدَدِ.",
    definitionId: "Na'at (sifat) adalah kata yang menunjukkan sifat dari isim sebelumnya yang disebut Man'ut (yang disifati). Na'at harus mengikuti Man'ut dalam i'rab, ma'rifah/nakirah, mudzakkar/muannats, dan jumlahnya.",
    kaidah: [
      "Wajib sama dalam 4 hal dari 10 pilihan: I'rab (rafa/nasb/jarr), kejelasan (ma'rifah/nakirah), jenis (laki/perempuan), bilangan (mufrad/mutsanna/jamak).",
      "Contoh: 'جَاءَ الطَّالِبُ النَّشِيطُ' (Telah datang siswa yang rajin itu)."
    ],
    rumus: "مَنْعُوتٌ + نَعْتٌ (يَتَطَابَقَانِ فِي كُلِّ شَيْءٍ) (Contoh: هَذَا كِتَابٌ جَدِيدٌ)",
    latihan: [
      "Tentukan Na'at dan Man'ut pada kalimat 'مَرَرْتُ بِالْمُعَلِّمِ الْفَاضِلِ'!",
      "Mengapa kata 'جَدِيدَةٌ' berbentuk muannats pada kalimat 'هَذِهِ مَدْرَسَةٌ جَدِيدَةٌ'?",
      "Betulkan kesalahan pada kalimat: 'رَأَيْتُ رَجُلًا الصَّالِحَ'!",
      "Buatlah kalimat yang mengandung Na'at ber-i'rab rafa' bertema kendaraan!",
      "Sebutkan 4 hal kesamaan yang harus dipenuhi antara Na'at dan Man'ut!"
    ]
  },
  {
    id: "8-10",
    grade: 8,
    titleAr: "الْعَطْفُ",
    titleId: "Al-'Atf (Penyambungan Kata)",
    definitionAr: "الْعَطْفُ هُوَ تَابِعٌ يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَطْفِ لِيُشْرِكَهُ فِي الْإِعْرَابِ.",
    definitionId: "Atf adalah pengikut yang dihubungkan dengan kata sebelumnya menggunakan salah satu huruf atf (kata penghubung) agar memiliki status i'rab yang sama.",
    kaidah: [
      "Kata sebelum huruf atf disebut Ma'tuf 'Alaih, sedangkan kata setelahnya disebut Ma'tuf.",
      "Huruf Atf yang penting: وَ (dan), فَ (lalu - cepat), ثُمَّ (kemudian - lambat), أَوْ (atau).",
      "Contoh: 'خَرَجَ الطَّالِبُ وَالْمُعَلِّمُ' (Siswa dan guru itu telah keluar)."
    ],
    rumus: "مَعْطُوفٌ عَلَيْهِ + حَرْفُ عَطْفٍ + مَعْطُوفٌ (Contoh: كَتَبْتُ الرِّسَالَةَ ثُمَّ الْقِصَّةَ)",
    latihan: [
      "Tentukan Ma'tuf 'Alaih, huruf atf, dan Ma'tuf pada kalimat 'أَكَلْتُ الْتُّفَّاحَ وَالْمَوْزَ'!",
      "Sebutkan perbedaan makna penggunaan antara huruf atf 'فَ' dan 'ثُمَّ'!",
      "Berikan harakat yang benar untuk kata 'خَالِدٌ' dalam kalimat 'جَاءَ مُحَمَّدٌ فَخَالِد...'!",
      "Buatlah kalimat pilihan menggunakan huruf atf 'أَوْ'!",
      "Apakah fi'il (kata kerja) juga bisa di-atf-kan kepada fi'il lainnya? Berikan contoh!"
    ]
  },
  {
    id: "8-11",
    grade: 8,
    titleAr: "التَّوْكِيدُ",
    titleId: "At-Tawkid (Penegasan)",
    definitionAr: "التَّوْكِيدُ تَابِعٌ يُذْكَرُ فِي الْكَلَامِ لِيَدْفَعَ عَنِ الْمُخَاطَبِ الشَّكَّ أَوِ السَّهْوَ، وَهُوَ نَوْعَانِ: لَفْظِيٌّ وَمَعْن thoseِيٌّ.",
    definitionId: "Tawkid adalah pengikut yang disebutkan dalam kalimat untuk menghilangkan keraguan atau kelalaian dari pendengar. Tawkid dibagi dua: Lafdzi (pengulangan lafadz) dan Ma'nawi (menggunakan kata khusus).",
    kaidah: [
      "Tawkid Lafdzi: Mengulang kata yang sama, contoh: 'جَاءَ الْأُسْتَاذُ الْأُسْتَاذُ'.",
      "Tawkid Ma'nawi: Menggunakan kata khusus yang disandarkan ke dhamir, seperti: نَفْسٌ (diri), عَيْنٌ (diri), كُلٌّ (semua), جَمِيعٌ (seluruh).",
      "Contoh: 'حَضَرَ الرَّئِيسُ نَفْسُهُ' (Presiden itu sendiri telah hadir)."
    ],
    rumus: "مُؤَكَّدٌ + تَوْكِيدٌ (Contoh: جَاءَ الطُّلَّابُ كُلُّهُمْ)",
    latihan: [
      "Sebutkan pembagian Tawkid beserta contoh sederhana masing-masing!",
      "Tentukan kata penegas (Tawkid) pada kalimat 'جَاءَتْ فَاطِمَةُ نَفْسُهَا'!",
      "Mengapa kata penegas pada kalimat 'أَكَلْتُ الطَّعَامَ كُلَّهُ' berharakat fathah?",
      "Buatlah contoh kalimat dengan Tawkid Lafdzi berupa pengulangan kata kerja (Fi'il)!",
      "Sebutkan 4 kata yang biasa digunakan untuk Tawkid Ma'nawi!"
    ]
  },
  {
    id: "8-12",
    grade: 8,
    titleAr: "الْبَدَلُ",
    titleId: "Al-Badal (Kata Pengganti)",
    definitionAr: "الْبَدَلُ هُوَ التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ الَّذِي يُسَمَّى مُبْدَلًا مِنْهُ.",
    definitionId: "Badal adalah kata pengikut yang menjadi sasaran utama hukum kalimat tanpa perantara huruf penghubung, diletakkan setelah kata yang digantikannya (Mubdal Minhu).",
    kaidah: [
      "Badal mengikuti Mubdal Minhu dalam hal i'rab (rafa'/nasb/jarr).",
      "Jenis Badal yang populer: Badal Kul min Kul (pengganti utuh, contoh: 'أَخُوكَ مُحَمَّدٌ'), Badal Ba'dh min Kul (sebagian, contoh: 'أَكَلْتُ الرَّغِيفَ ثُلُثَهُ' - aku makan roti sepertiganya).",
      "Contoh: 'قَالَ الْخَلِيفَةُ عُمَرُ' (Khalifah Umar telah berkata), kata 'عُمَرُ' adalah Badal dari 'الْخَلِيفَةُ'."
    ],
    rumus: "مُبْدَلٌ مِنْهُ + بَدَلٌ (Contoh: نَفَعَنِي الْأُسْتَاذُ عِلْمُهُ)",
    latihan: [
      "Tentukan Badal dan Mubdal Minhu pada kalimat 'زَارَنِي الصَّدِيقُ خَالِدٌ'!",
      "Sebutkan jenis badal pada kalimat 'سَقَطَ الْبَيْتُ سَقْفُهُ' (Rumah itu runtuh atapnya)!",
      "Analisislah i'rab kata 'عُمَرَ' pada kalimat 'أَطَعْتُ الْأَمِيرَ عُمَرَ'!",
      "Buatlah kalimat yang mengandung Badal Ba'dh min Kul (sebagian dari keseluruhan)!",
      "Apa perbedaan utama antara Badal dengan Na'at (kata sifat)?"
    ]
  },
  {
    id: "8-13",
    grade: 8,
    titleAr: "النَّصْبُ فِي الْفِعْلِ الْمُضَارِعِ",
    titleId: "Nasb pada Fi'il Mudhari'",
    definitionAr: "يُنْصَبُ الْفِعْلُ الْمُضَارِعُ إِذَا سَبَقَهُ حَرْفٌ مِنْ حُرُوفِ النَّصْبِ، وَعَلَامَةُ نَصْبِهِ الْأَصْلِيَّةُ هِيَ الْفَتْحَةُ.",
    definitionId: "Fi'il Mudhari' dibaca manshub jika didahului oleh salah satu huruf amil penashab. Tanda nasb aslinya adalah fathah, sedangkan tanda cabangnya adalah pembuangan huruf Nun.",
    kaidah: [
      "Huruf penashab yang utama: أَنْ (bahwa/untuk), لَنْ (tidak akan pernah), كَيْ (supaya), إِذَنْ (kalau begitu), حَتَّى (hingga/sampai).",
      "Contoh: 'أُرِيدُ أَنْ أَقْرَأَ' (Saya ingin membaca).",
      "Jika berbentuk Al-Af'alul Khamsah, tanda nasbnya adalah hilangnya Nun, contoh: 'لَنْ تَذْهَبُوا'."
    ],
    rumus: "أَدَاةُ نَصْبٍ + فِعْلٌ مُضَارِعٌ مَنْصُوبٌ (Contoh: لَنْ يَنْجَحَ الْكَسْلَانُ)",
    latihan: [
      "Sebutkan 4 amil penashab yang masuk ke Fi'il Mudhari'!",
      "Tentukan tanda nasb fi'il mudhari' pada kalimat 'لَنْ تَنَالُوا الْبِرَّ'!",
      "Berikan harakat akhir yang benar untuk kata 'يَذْهَبُ' setelah dimasuki 'كَيْ'!",
      "Buatlah kalimat yang mengandung harapan belajar menggunakan huruf 'أَنْ'!",
      "Terjemahkan ke dalam bahasa Arab: 'Kami tidak akan pernah menyerah'."
    ]
  },
  {
    id: "8-14",
    grade: 8,
    titleAr: "الْجَزْمُ فِي الْفِعْلِ الْمُضَارِعِ",
    titleId: "Jazm pada Fi'il Mudhari'",
    definitionAr: "يُجْزَمُ الْفِعْلُ الْمُضَارِعُ إِذَا سَبَقَهُ حَرْفٌ مِنْ حُرُوفِ الْجَزْمِ، وَعَلَامَةُ جَزْمِهِ الْأَصْلِيَّةُ السُّكُونُ.",
    definitionId: "Fi'il Mudhari' dibaca majzum (sukun) jika didahului oleh salah satu amil penjazm. Tanda jazm aslinya adalah sukun, dan tanda lainnya adalah membuang huruf akhir/Nun.",
    kaidah: [
      "Amil penjazm satu fi'il yang populer: لَمْ (tidak/belum), لَمَّا (belum), لَامُ الْأَمْرِ (harus/hendaklah), لَا النَّاهِيَةُ (jangan).",
      "Jika kata kerja berakhiran huruf illah (alif, wawu, ya), tanda jazm-nya dengan membuang huruf illah tersebut (حَذْفُ حَرْفِ الْعِلَّةِ).",
      "Contoh: 'لَا تَكْتُبْ عَلَى الْجِدَارِ' (Jangan menulis di dinding!)."
    ],
    rumus: "أَدَاةُ جَزْمٍ + فِعْلٌ مُضَارِعٌ مَجْزُومٌ (Contoh: لَمْ يَحْضُرْ زَيْدٌ)",
    latihan: [
      "Sebutkan 4 amil penjazm yang biasa masuk ke dalam satu Fi'il Mudhari'!",
      "Tentukan tanda jazm pada kalimat 'لَمْ يَدْعُ كَافِرٌ رَبَّهُ' (asal kata 'يَدْعُو')!",
      "Apa perbedaan antara 'لا الناهية' (jangan) dan 'لا النافية' (tidak) dalam amalan nahwu?",
      "Ubah kata 'تَذْهَبُونَ' menjadi majzum dengan menggunakan amil 'لَمْ'!",
      "Buatlah kalimat larangan keras menggunakan 'لَا النَّاهِيَةُ' bertema akhlak!"
    ]
  },
  {
    id: "8-15",
    grade: 8,
    titleAr: "الْمَبْنِيُّ لِلْمَجْهُولِ",
    titleId: "Al-Mabni lil Majhul (Kalimat Pasif)",
    definitionAr: "الْفِعْلُ الْمَبْنِيُّ لِلْمَجْهُولِ هُوَ الْفِعْلُ الَّذِي حُذِفَ فَاعِلُهُ وَجُعِلَ الْمَفْعُولُ بِهِ نَائِبًا عَنْهُ.",
    definitionId: "Fi'il Mabni lil Majhul adalah kata kerja yang disembunyikan/dihapus pelaku aslinya, lalu objek kalimat naik pangkat menduduki posisi pelaku (menjadi Na'ib Fa'il).",
    kaidah: [
      "Rumus Fi'il Madhi Pasif: Didhommahkan awal dan dikasrahkan sebelum akhir. Contoh: كَتَبَ (aktif) -> كُتِبَ (pasif).",
      "Rumus Fi'il Mudhari' Pasif: Didhommahkan awal dan difathahkan sebelum akhir. Contoh: يَكْتُبُ (aktif) -> يُكْتَبُ (pasif).",
      "Subjek pelaku tidak boleh disebutkan lagi di dalam kalimat."
    ],
    rumus: "مَاضٍ مَجْهُول (فُعِلَ) | مُضَارِعٌ مَجْهُول (يُفْعَلُ)",
    latihan: [
      "Bagaimana rumus merubah Fi'il Madhi aktif menjadi bentuk pasif (majhul)?",
      "Ubah kata kerja 'نَصَرَ' dan 'يَنْصُرُ' menjadi bentuk majhul pasif!",
      "Analisislah kalimat pasif: 'يُقْطَعُ الشَّجَرُ' (Mana fi'il majhul dan na'ib fa'ilnya)?",
      "Mengapa pelaku (Fa'il) harus dihapus ketika kita memakai Fi'il Majhul?",
      "Terjemahkan ke dalam bahasa Arab: 'Pintu gerbang sekolah telah dibuka'."
    ]
  },

  // ==================== KELAS 9 (15 BAB) ====================
  {
    id: "9-1",
    grade: 9,
    titleAr: "الْمَفْعُولُ الْمُطْلَقُ",
    titleId: "Al-Maf'ul Al-Mutlaq (Objek Mutlak)",
    definitionAr: "الْمَفْعُولُ الْمُطْلَقُ هُوَ مَصْدَرٌ مَنْصُوبٌ يُذْكَرُ بَعْدَ فِعْلٍ مِنْ لَفْظِهِ لِتَوْكِيدِهِ أَوْ بَيَانِ نَوْعِهِ أَوْ عَدَدِهِ.",
    definitionId: "Maf'ul Mutlaq adalah isim masdar manshub yang disebutkan setelah kata kerja yang seakar/selafadz dengannya, bertujuan untuk menguatkan arti, menjelaskan jenis, atau jumlah tindakan.",
    kaidah: [
      "Berfungsi menguatkan (Taukid): 'ضَرَبْتُهُ ضَرْبًا' (Saya benar-benar memukulnya).",
      "Berfungsi menjelaskan jenis (Bayan nau'): 'ذَهَبْتُ ذَهَابَ الصَّالِحِينَ' (Saya pergi seperti perginya orang shalih).",
      "Berfungsi menjelaskan jumlah (Bayan 'adad): 'سَجَدْتُ سَجْدَتَيْنِ' (Saya sujud dua kali)."
    ],
    rumus: "فِعْلٌ + فَاعِلٌ + مَصْدَرٌ مَنْصُوبٌ (Contoh: جَرَى الْوَلَدُ جَرْيًا سَرِيعًا)",
    latihan: [
      "Sebutkan tiga fungsi utama dari Maf'ul Mutlaq beserta contohnya!",
      "Tentukan Maf'ul Mutlaq pada kalimat 'كَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا'!",
      "Apa kedudukan i'rab dan tanda harakat dari kata 'سَجْدَتَيْنِ' dalam 'سَجَدْتُ سَجْدَتَيْنِ'?",
      "Buatlah kalimat yang mengandung Maf'ul Mutlaq bertema keseriusan belajar!",
      "Mengapa kata 'جَرْيًا' pada kalimat 'جَرَى مُحَمَّدٌ جَرْيًا' berharakat fathah?"
    ]
  },
  {
    id: "9-2",
    grade: 9,
    titleAr: "الْمَفْعُولُ لِأَجْلِهِ",
    titleId: "Al-Maf'ul Li-Ajlih (Objek Alasan)",
    definitionAr: "الْمَفْعُولُ لِأَجْلِهِ هُوَ مَصْدَرٌ مَنْصُوبٌ يُذْكَرُ لِبَيَانِ سَبَبِ وُقُوعِ الْفِعْلِ.",
    definitionId: "Maf'ul Li-ajlih adalah isim masdar manshub yang disebutkan dalam kalimat untuk menerangkan sebab/alasan terjadinya suatu perbuatan.",
    kaidah: [
      "Biasanya menjawab pertanyaan 'Mengapa?' (لِمَاذَا؟) perbuatan tersebut dilakukan.",
      "Hukumnya adalah manshub dengan tanda fathah.",
      "Contoh: 'قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ' (Aku berdiri karena menghormati ustadz). Kata 'إِجْلَالًا' menerangkan alasan berdiri."
    ],
    rumus: "الْفِعْلُ + سَبَبُ الْفِعْلِ (مَصْدَر مَنْصُوب) (Contoh: صَلَّيْتُ طَمَعًا فِي الْجَنَّةِ)",
    latihan: [
      "Tentukan Maf'ul Li-ajlih pada kalimat 'تَصَدَّقْتُ ابْتِغَاءَ مَرْضَاةِ اللَّهِ'!",
      "Bagaimanakah cara kita mendeteksi keberadaan Maf'ul Li-ajlih dalam kalimat?",
      "Buatlah kalimat dengan kata 'خَوْفًا' (karena takut) sebagai Maf'ul Li-ajlih!",
      "Analisislah i'rab kalimat: 'سَافَرْتُ طَلَبًا لِلْعِلْمِ'!",
      "Terjemahkan ke bahasa Arab: 'Siswa itu belajar keras demi mengharapkan kesuksesan'."
    ]
  },
  {
    id: "9-3",
    grade: 9,
    titleAr: "الْمَفْعُولُ فِيهِ: ظَرْفُ الزَّمَانِ وَالْمَكَانِ",
    titleId: "Al-Maf'ul Fih (Keterangan Waktu & Tempat)",
    definitionAr: "الْمَفْعُولُ فِيهِ (الظَّرْفُ) هُوَ اسْمٌ مَنْصُوبٌ يُذْكَرُ لِبَيَانِ زَمَانِ الْفِعْلِ أَوْ مَكَانِهِ.",
    definitionId: "Maf'ul Fih (atau disebut juga Zharaf) adalah isim manshub yang disebutkan untuk menerangkan waktu (Zaman) atau tempat (Makan) terjadinya suatu perbuatan.",
    kaidah: [
      "Zharaf Zaman (Waktu): غَدًا (besok), لَيْلًا (malam hari), يَوْمَ (hari), صَبَاحًا (pagi hari).",
      "Zharaf Makan (Tempat): أَمَامَ (di depan), خَلْفَ (di belakang), فَوْقَ (di atas), تَحْتَ (di bawah).",
      "Contoh: 'جَلَسْتُ خَلْفَ الْقَائِدِ' (Aku duduk di belakang komandan)."
    ],
    rumus: "الْفِعْلُ + زَمَن / مَكَان الْفِعْلِ (Contoh: سَافَرْتُ لَيْلًا | الطَّائِرُ فَوْقَ الشَّجَرِ)",
    latihan: [
      "Sebutkan pembagian Zharaf beserta 3 contoh kata untuk masing-masing bagian!",
      "Tentukan Zharaf pada kalimat 'قَرَأْتُ الْكِتَابَ يَوْمَ الْخَمِيسِ'!",
      "Berikan harakat akhir kata 'أَمَامَ' dalam kalimat 'وَقَفَ الْإِمَامُ أَمَامَ الْمَأْمُومِينَ'!",
      "Buatlah kalimat yang menggunakan keterangan tempat 'تَحْتَ' (di bawah)!",
      "Apa arti kalimat berikut: 'سَأَرْجِعُ إِلَى الْبَيْتِ مَسَاءً'?"
    ]
  },
  {
    id: "9-4",
    grade: 9,
    titleAr: "الْحَالُ",
    titleId: "Al-Hal (Keterangan Keadaan)",
    definitionAr: "الْحَالُ هُوَ اسْمٌ نَكِرَةٌ مَنْصُوبٌ يُبَيِّنُ هَيْئَةَ الْفَاعِلِ أَوِ الْمَفْعُولِ بِهِ عِنْدَ صُدُورِ الْفِعْلِ، وَيُسَمَّى صَاحِبُهُ 'صَاحِبَ الْحَالِ'.",
    definitionId: "Hal adalah isim nakirah manshub yang menjelaskan keadaan/situasi Fa'il (pelaku) atau Maf'ul Bihi (objek) ketika suatu perbuatan berlangsung. Pemilik keadaan tersebut dinamakan Shahibul Hal.",
    kaidah: [
      "Hal wajib berbentuk Nakirah (tidak ber-Alif Lam) dan manshub.",
      "Shahibul Hal harus berbentuk Ma'rifah.",
      "Contoh: 'جَاءَ الطَّالِبُ ضَاحِكًا' (Siswa itu datang dalam keadaan tertawa). Kata 'ضَاحِكًا' adalah Hal."
    ],
    rumus: "الْفِعْلُ + صَاحِبُ الْحَالِ (مَعْرِفَة) + الْحَالُ (نَكِرَة مَنْصُوب) (Contoh: جَرَى النَّهْرُ صَافِيًا)",
    latihan: [
      "Tentukan Hal dan Shahibul Hal pada kalimat 'شَرِبْتُ الْمَاءَ بَارِدًا'!",
      "Mengapa kata 'ضَاحِكًا' berkedudukan nakirah sedangkan 'الطَّالِبُ' ma'rifah?",
      "Ubah kata 'نَشِيطٌ' menjadi Hal yang tepat untuk kalimat 'ذَهَبَ الْعُمَّالُ إِلَى الْعَمَلِ ...'!",
      "Buatlah kalimat yang menggambarkan keadaan guru memasuki kelas!",
      "Terjemahkan ke dalam bahasa Arab: 'Saya shalat dalam keadaan khusyuk'."
    ]
  },
  {
    id: "9-5",
    grade: 9,
    titleAr: "التَّمْيِيزُ",
    titleId: "At-Tamyiz (Penjelas Zat/Spesifikasi)",
    definitionAr: "التَّمْيِيزُ هُوَ اسْمٌ نَكِرَةٌ مَنْصُوبٌ يُذْكَرُ لِإِزَالَةِ الْإِبْهَامِ عَنْ ذَاتٍ أَوْ نِسْبَةٍ قَبْلَهُ.",
    definitionId: "Tamyiz adalah isim nakirah manshub yang didatangkan untuk memperjelas maksud dari kata atau hubungan kalimat sebelumnya yang masih samar/samu.",
    kaidah: [
      "Tamyiz Dzati (Mufrad): Menjelaskan ketidakjelasan angka, takaran, timbangan, atau ukuran. Contoh: 'اشْتَرَيْتُ عِشْرِينَ كِتَابًا'.",
      "Tamyiz Nisbah (Jumlah): Menjelaskan kesamaran kalimat. Contoh: 'عَلِيٌّ أَكْثَرُ مِنْكَ عِلْمًا' (Ali lebih banyak darimu dalam hal ilmunya).",
      "Kata setelah angka 11-99 wajib berkedudukan sebagai Tamyiz."
    ],
    rumus: "مُبْهَمٌ (samar) + تَمْيِيزٌ مَنْصُوبٌ (Contoh: مَلَأْتُ الْإِنَاءَ مَاءً)",
    latihan: [
      "Apakah fungsi utama dari Tamyiz dalam struktur kalimat bahasa Arab?",
      "Tentukan Tamyiz pada kalimat 'فَاضَ الْقَلْبُ سُرُورًا'!",
      "Sebutkan i'rab kata 'طَالِبًا' pada kalimat 'فِي الْفَصْلِ خَمْسَةَ عَشَرَ طَالِبًا'!",
      "Buatlah kalimat perbandingan dengan pola 'أَكْثَرُ ... تَمْيِيز'!",
      "Sebutkan perbedaan mendasar antara Hal dan Tamyiz!"
    ]
  },
  {
    id: "9-6",
    grade: 9,
    titleAr: "الْمُسْتَثْنَى بِإِلَّا",
    titleId: "Pengecualian dengan 'Illa' (Istitsna)",
    definitionAr: "الِاسْتِثْنَاءُ هُوَ إِخْرَاجُ مَا بَعْدَ أَدَاةِ الِاسْتِثْنَاءِ مِنْ حُكْمِ مَا قَبْلَهَا، وَالْمُسْتَثْنَى بِإِلَّا لَهُ ثَلَاثَةُ أَحْكَامٍ تَبَعًا لِنَوْعِ الْجُمْلَةِ.",
    definitionId: "Istitsna adalah mengeluarkan kata setelah perangkat pengecualian dari ketetapan kalimat sebelumnya. Mustasna bi-Illa memiliki 3 hukum tergantung jenis kalimatnya.",
    kaidah: [
      "Kondisi Tam Mujab (Lengkap Positif): Wajib manshub. Contoh: 'حَضَرَ الطُّلَّابُ إِلَّا زَيْدًا'.",
      "Kondisi Tam Manfi (Lengkap Negatif): Boleh manshub atau menjadi badal. Contoh: 'مَا حَضَرَ الطُّلَّابُ إِلَّا زَيْدًا / زَيْدٌ'.",
      "Kondisi Naqish Manfi (Kurang Negatif): Di-i'rab sesuai posisi aslinya seolah-olah Illa tidak ada. Contoh: 'مَا حَضَرَ إِلَّا زَيْدٌ' (Zaid berkedudukan sebagai Fa'il)."
    ],
    rumus: "مُسْتَثْنَى مِنْهُ + إِلَّا + مُسْتَثْنَى (Contoh: قَرَأْتُ الْكُتُبَ إِلَّا كِتَابًا)",
    latihan: [
      "Sebutkan 3 rukun penyusun kalimat pengecualian (Istitsna)!",
      "Tentukan hukum i'rab Mustasna pada kalimat 'سَافَرَ الرِّجَالُ إِلَّا عَلِيًّا'!",
      "Bagaimanakah cara meng-i'rab kalimat 'مَا رَأَيْتُ إِلَّا مُحَمَّدًا'?",
      "Buatlah kalimat Istitsna berkondisi lengkap positif (Tam Mujab)!",
      "Terjemahkan ke dalam bahasa Arab: 'Semua siswa lulus kecuali Hamid'."
    ]
  },
  {
    id: "9-7",
    grade: 9,
    titleAr: "الْمُسْتَثْنَى بِغَيْرٍ وَسِوَى",
    titleId: "Pengecualian dengan 'Ghair' dan 'Siwa'",
    definitionAr: "الْمُسْتَثْنَى بِغَيْرٍ وَسِوَى يَكُونُ مَجْرُورًا بِالْإِضَافَةِ دَائِمًا، وَتَأْخُذُ 'غَيْرُ' وَ'سِوَى' إِعْرَابَ الِاسْمِ الْوَاقِعِ بَعْدَ 'إِلَّا'.",
    definitionId: "Mustasna setelah kata Ghair (غَيْر) dan Siwa (سِوَى) selalu majrur sebagai Mudhaf Ilaih. Namun, kata 'Ghair' dan 'Siwa' itu sendiri yang menyerap kedudukan i'rab seolah mereka adalah mustasna.",
    kaidah: [
      "Kata setelah 'غَيْر' atau 'سِوَى' hukumnya SELALU majrur berharakat kasrah.",
      "I'rab kata 'غَيْر' mengikuti 3 kondisi i'rab Mustasna bi-Illa (wajib nasb, boleh badal, atau sesuai posisi).",
      "Contoh: 'نَجَحَ الْأَوْلَادُ غَيْرَ وَاحِدٍ' ('غَيْرَ' dibaca manshub, 'وَاحِدٍ' dibaca majrur)."
    ],
    rumus: "غَيْرَ / غَيْرُ / غَيْرِ + اِسْمٍ مَجْرُورٍ بِالْإِضَافَةِ (Contoh: مَا جَاءَ غَيْرُ زَيْدٍ)",
    latihan: [
      "Bagaimana kedudukan i'rab isim yang terletak setelah kata 'غَيْرُ'?",
      "Tentukan i'rab kata 'غَيْر' pada kalimat 'مَا حَضَرَ الْمُعَلِّمُونَ غَيْرُ خَالِدٍ'!",
      "Berikan harakat lengkap untuk kalimat 'ذَهَبَ الطُّلَّابُ غَيْرَ سَعِيدٍ'!",
      "Buatlah contoh kalimat pengecualian menggunakan kata 'سِوَى'!",
      "Mengapa kata setelah 'غَيْر' selalu dibaca majrur? Jelaskan hubungannya dengan Idhafah!"
    ]
  },
  {
    id: "9-8",
    grade: 9,
    titleAr: "الْمُنَادَى",
    titleId: "Al-Munada (Kata yang Dipanggil)",
    definitionAr: "الْمُنَادَى هُوَ اسْمٌ يُذْكَرُ بَعْدَ حَرْفٍ مِنْ حُرُوفِ النِّدَاءِ لِطَلَبِ إِقْبَالِهِ أَوْ انْتِبَاهِهِ.",
    definitionId: "Munada adalah isim yang disebutkan setelah huruf panggilan (Nida) dengan maksud memanggil orang tersebut agar memperhatikan pembicara.",
    kaidah: [
      "Huruf panggilan yang paling terkenal adalah 'يَا' (wahai).",
      "Hukum i'rab Munada terbagi dua: 1) Manshub jika berupa Mudhaf (يَا عَبْدَ اللَّهِ), Syabih bil Mudhaf, atau Nakirah Ghair Maqshudah. 2) Mabni atas dhommah jika berupa Mufrad Alam (يَا مُحَمَّدُ) atau Nakirah Maqshudah (يَا رَجُلُ)."
    ],
    rumus: "يَا + مُنَادَى مَنْصُوبٌ أَوْ مَبْنِيٌّ عَلَى الضَّمِّ (Contoh: يَا طَالِبَ الْعِلْمِ)",
    latihan: [
      "Sebutkan pembagian Munada beserta hukum harakatnya masing-masing!",
      "Mengapa kata 'مُحَمَّدُ' pada kalimat 'يَا مُحَمَّدُ اجْتَهِدْ' dibaca dhommah tanpa tanwin?",
      "Analisislah harakat kata 'خَالِدَ' pada panggilan 'يَا خَالِدَ ابْنَ الْوَلِيدِ'!",
      "Buatlah kalimat panggilan untuk seorang guru yang sedang berdiri (mudhaf)!",
      "Bagaimana cara memanggil nama orang yang diawali dengan Alif Lam (ال)?"
    ]
  },
  {
    id: "9-9",
    grade: 9,
    titleAr: "الْمَمْنُوعُ مِنَ الصَّرْفِ عِلَّةٌ وَاحِدَةٌ",
    titleId: "Ghair Munsharif dengan 1 Sebab (Mamnu' minas Sharf)",
    definitionAr: "الْمَمْنُوعُ مِنَ الصَّرْفِ هُوَ اسْمٌ لَا يَقْبَلُ التَّنْوِينَ، وَيُجَرُّ بِالْفَتْحَةِ نِيَابَةً عَنِ الْكَسْرَةِ، وَيُمْنَعُ لِعِلَّةٍ وَاحِدَةٍ فِي ثَلَاثِ حَالَاتٍ.",
    definitionId: "Isim Ghair Munsharif adalah kata benda yang tidak boleh ditanwin dan ber-i'rab jarr dengan tanda fathah (bukan kasrah). Kelompok pertama dicegah dari tanwin karena 1 sebab saja.",
    kaidah: [
      "Sebab 1: Shighah Muntahal Jumu' (jamak dengan pola khusus, contoh: مَسَاجِدُ، مَفَاتِيحُ).",
      "Sebab 2: Isim yang berakhiran Alif Ta'nits Maqshurah (مثال: حُبْلَى، مَرْضَى).",
      "Sebab 3: Isim yang berakhiran Alif Ta'nits Mamdudah (مثال: صَحْرَاءُ، حَمْرَاءُ)."
    ],
    rumus: "اِسْمٌ غَيْرُ مُنْصَرِفٍ = لَا تَنْوِينَ + جَرٌّ بِالْفَتْحَةِ (Contoh: صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ)",
    latihan: [
      "Apakah definisi dari Isim Ghair Munsharif (Mamnu' minas Sharf)?",
      "Sebutkan 3 keadaan isim yang dilarang bertanwin karena satu sebab saja!",
      "Mengapa kata 'مَسَاجِدَ' dalam kalimat 'صَلَّيْتُ فِي مَسَاجِدَ' berharakat fathah padahal ada huruf jarr?",
      "Sebutkan bentuk tunggal (mufrad) dari kata 'مَصَابِيحُ'!",
      "Kapan Isim Ghair Munsharif kembali ber-i'rab jarr dengan kasrah asli?"
    ]
  },
  {
    id: "9-10",
    grade: 9,
    titleAr: "الْمَمْنُوعُ مِنَ الصَّرْفِ عِلَّتَانِ",
    titleId: "Ghair Munsharif dengan 2 Sebab",
    definitionAr: "يُمْنَعُ الْاِسْمُ مِنَ الصَّرْفِ لِعِلَّتَيْنِ (سَبَبَيْنِ) إِذَا كَانَ عَلَمًا مَعَ سَبَبٍ آخَرَ، أَوْ صِفَةً مَعَ سَبَبٍ آخَرَ.",
    definitionId: "Isim dilarang ditanwin karena 2 sebab sekaligus apabila berupa Nama ('Alam) yang disertai sebab tambahan, atau berupa Kata Sifat (Sifat) yang disertai sebab tambahan.",
    kaidah: [
      "Nama + Sebab Lain: Nama perempuan (عَائِشَةُ), Nama asing/non-Arab (إِبْرَاهِيمُ), Nama berakhiran alif-nun (عُثْمَانُ), Nama berwazan fi'il (يَزِيدُ).",
      "Sifat + Sebab Lain: Sifat berwazan 'Af'alu' (أَحْمَرُ / أَكْبَرُ), Sifat berakhiran alif-nun berwazan 'Fa'lanu' (عَطْشَانُ)."
    ],
    rumus: "عَلَمٌ / صِفَةٌ + عِلَّةٌ أُخْرَى = مَمْنُوعٌ مِنَ الصَّرْفِ (Contoh: سَافَرْتُ مَعَ عُمَرَ)",
    latihan: [
      "Sebutkan sebab-sebab pencegahan tanwin untuk kata 'إِبْرَاهِيمُ' dan 'عُمَرُ'!",
      "Mengapa kata 'عَطْشَانُ' (yang haus) tidak boleh diakhiri dengan tanwin?",
      "Analisislah harakat jarr kata 'فَاطِمَةَ' pada kalimat 'كِتَابُ فَاطِمَةَ جَمِيلٌ'!",
      "Sebutkan 3 contoh nama non-Arab (A'jami) yang termasuk ghair munsharif!",
      "Tuliskan kalimat yang mengandung kata sifat berwazan 'أَفْعَلُ' saat ber-i'rab jarr!"
    ]
  },
  {
    id: "9-11",
    grade: 9,
    titleAr: "الْأَسْمَاءُ الْمَقْصُورَةُ وَالْمَنْقُوصَةُ",
    titleId: "Isim Maqshur dan Isim Manqush",
    definitionAr: "الْمَقْصُورُ هُوَ اسْمٌ مُعْرَبٌ آخِرُهُ أَلِفٌ لَازِمَةٌ مُقَدَّرَةٌ عَلَيْهَا جَمِيعُ الْحَرَكَاتِ، وَالْمَنْقُوصُ هُوَ اسْمٌ مُعْرَبٌ آخِرُهُ يَاءٌ لَازِمَةٌ مَكْسُورٌ مَا قَبْلَهَا.",
    definitionId: "Maqshur adalah isim mu'rab berakhiran alif lazimah (tetap), seluruh harakatnya ditaksirkan (disembunyikan). Manqush adalah isim mu'rab berakhiran ya' lazimah asli yang didahului kasrah.",
    kaidah: [
      "Isim Maqshur: الْفَتَى (pemuda), الْمُسْتَشْفَى (rumah sakit). Harakat rafa/nasb/jarr tidak tampak (muqaddarah).",
      "Isim Manqush: الْقَاضِي (hakim), الدَّاعِي (penyeru). Harakat rafa dan jarr disembunyikan, namun harakat fathah (nasb) tampak jelas (contoh: رَأَيْتُ الْقَاضِيَ)."
    ],
    rumus: "مَقْصُورٌ = أَلِف (الْمُصْطَفَى) | مَنْقُوصٌ = يَاء (الْهَادِي)",
    latihan: [
      "Sebutkan perbedaan mendasar antara struktur kata Isim Maqshur dan Isim Manqush!",
      "Tentukan jenis kata 'الدُّنْيَا' dan bagaimanakah tanda rafa'nya!",
      "Mengapa harakat fathah tampak pada kalimat 'رَأَيْتُ الْمُحَامِيَ'?",
      "Kapan huruf Ya' pada Isim Manqush (seperti 'قَاضِي') wajib dibuang?",
      "Buatlah kalimat yang menggunakan kata 'الْمُسْتَشْفَى' diletakkan setelah huruf jarr!"
    ]
  },
  {
    id: "9-12",
    grade: 9,
    titleAr: "اسْمُ التَّفْضِيلِ",
    titleId: "Isim Tafdhil (Kata Perbandingan)",
    definitionAr: "اسْمُ التَّفْضِيلِ هُوَ اسْمٌ مُشْتَقٌّ عَلَى وَزْنِ 'أَفْعَلَ' لِلدَّلَالَةِ عَلَى أَنَّ شَيْئَيْنِ اشْتَرَكَا فِي صِفَةٍ وَزَادَ أَحَدُهُمَا عَلَى الْآخَرِ.",
    definitionId: "Isim Tafdhil adalah isim bentukan (musthaq) berwazan 'Af'ala' (أَفْعَلَ) untuk menunjukkan bahwa dua hal bersekutu dalam suatu sifat, lalu salah satunya melebihi yang lain (lebih/paling).",
    kaidah: [
      "Menggunakan pola utama 'أَفْعَلُ' untuk mudzakkar dan 'فُعْلَى' untuk muannats.",
      "Jika diikuti kata 'مِنْ', berfungsi sebagai pembanding 'lebih ... daripada'. Contoh: 'خَالِدٌ أَكْبَرُ مِنْ حَسَنٍ'.",
      "Jika diawali alif lam (ال) atau mudhaf, bermakna superlatif 'paling/ter ...'. Contoh: 'الْقُرْآنُ أَفْضَلُ الْكُتُبِ'."
    ],
    rumus: "أَفْعَلُ + مِنْ (Lebih ... dari) | أَفْعَلُ + مُضَاف إِلَيْهِ (Ter / Paling)",
    latihan: [
      "Tuliskan wazan/pola Isim Tafdhil beserta fungsinya dalam struktur kalimat!",
      "Ubah kata sifat 'سَرِيعٌ' (cepat) menjadi Isim Tafdhil!",
      "Terjemahkan ke dalam bahasa Arab: 'Zaid lebih pintar daripada Umar'!",
      "Tentukan Isim Tafdhil pada kalimat 'الْمَسْجِدُ الْحَرَامُ أَكْبَرُ الْمَسَاجِدِ'!",
      "Apakah Isim Tafdhil termasuk isim yang boleh ditanwin? Jelaskan alasannya!"
    ]
  },
  {
    id: "9-13",
    grade: 9,
    titleAr: "اسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ",
    titleId: "Isim Fa'il dan Isim Maf'ul",
    definitionAr: "اسْمُ الْفَاعِلِ اسْمٌ مُشْتَقٌّ لِلدَّلَالَةِ عَلَى مَنْ قَامَ بِالْفِعْلِ، وَاسْمُ الْمَفْعُولِ اسْمٌ مُشْتَقٌّ لِلدَّلَالَةِ عَلَى مَنْ وَقَعَ عَلَيْهِ الْفِعْلُ.",
    definitionId: "Isim Fa'il adalah isim bentukan untuk menunjukkan pelaku perbuatan (pola: فَاعِلٌ). Isim Maf'ul adalah isim bentukan untuk menunjukkan korban/penerima perbuatan (pola: مَفْعُولٌ).",
    kaidah: [
      "Dari kata kerja 3 huruf (Tsulatsi): Isim Fa'il berpola 'فَاعِلٌ' (contoh: كَاتِبٌ - penulis), Isim Maf'ul berpola 'مَفْعُولٌ' (contoh: مَكْتُوبٌ - yang ditulis).",
      "Dari kata kerja di atas 3 huruf: Menggunakan awalan huruf Mim ber-dhommah (مُ) dan harakat kasrah sebelum akhir untuk Fa'il (مُعَلِّمٌ) atau fathah untuk Maf'ul (مُعَلَّمٌ)."
    ],
    rumus: "فَاعِلٌ (Pelaku) | مَفْعُولٌ (Korban) (Contoh: خَالِقٌ / مَخْلُوقٌ)",
    latihan: [
      "Tentukan bentuk Isim Fa'il dan Isim Maf'ul dari kata kerja 'قَرَأَ'!",
      "Apa arti dari kata 'مَفْتُوحٌ' ditinjau dari ilmu Nahwu dan Sharaf?",
      "Tentukan Isim Fa'il dari kata kerja 'سَافَرَ' (di atas 3 huruf)!",
      "Buatlah kalimat yang mengandung kata 'مَنْصُورٌ' (yang ditolong)!",
      "Sebutkan wazan/pola standar Isim Maf'ul untuk fi'il tsulatsi!"
    ]
  },
  {
    id: "9-14",
    grade: 9,
    titleAr: "لَا الَّتِي لِنَفْيِ الْجِنْسِ",
    titleId: "Laa Nafiyah lil Jinsi (Peniadaan Mutlak)",
    definitionAr: "لَا الَّتِي لِنَفْيِ الْجِنْسِ هِيَ الَّتِي تَدُلُّ عَلَى نَفْيِ الْخَبَرِ عَنْ جِنْسِ اسْمِهَا كُلِّهِ، وَتَعْمَلُ عَمَلَ 'إِنَّ' بِشُرُوطٍ.",
    definitionId: "Laa Nafiyah lil Jinsi adalah huruf 'Laa' peniada yang bermakna meniadakan secara total jenis dari isim tersebut. Ia beramal seperti amalan 'Inna' (men-nasb-kan isim, me-rafa'-kan khabar) dengan beberapa syarat.",
    kaidah: [
      "Syarat: Isim dan Khabarnya wajib nakirah, tidak ada pemisah antara 'Laa' dengan isimnya, dan tidak kemasukan huruf jarr.",
      "Isimnya biasanya mabni atas fathah jika berupa mufrad.",
      "Contoh: 'لَا رَجُلَ فِي الدَّارِ' (Sama sekali tidak ada laki-laki di dalam rumah)."
    ],
    rumus: "لَا + اِسْمَ لَا (نَكِرَة مَنْصُوب/مَبْنِي) + خَبَرُ لَا (مَرْفُوع) (Contoh: لَا إِلَهَ إِلَّا اللَّهُ)",
    latihan: [
      "Apakah arti dari amalan 'Laa Nafiyah lil Jinsi'?",
      "Sebutkan 3 syarat wajib agar huruf 'Laa' dalam bab ini bisa beramal seperti Inna!",
      "Tentukan kedudukan dan i'rab kata 'رَيْبَ' dalam ayat 'لَا رَيْبَ فِيهِ'!",
      "Analisislah kalimat 'لَا طَالِبَ كَسْلَانُ'!",
      "Mengapa huruf 'Laa' pada 'لَا فِي الْفَصْلِ رَجُلٌ' tidak beramal men-nasb-kan?"
    ]
  },
  {
    id: "9-15",
    grade: 9,
    titleAr: "التَّعَجُّبُ",
    titleId: "Shighah Ta'ajjub (Gaya Bahasa Kagum)",
    definitionAr: "التَّعَجُّبُ هُوَ شُعُورٌ دَاخِلِيٌّ يَنْشَأُ عَنِ اسْتِعْظَامِ أَمْرٍ نَادِرٍ أَوْ خَفِيٍّ، وَلَهُ صِيغَتَانِ قِيَاسِيَّتَانِ.",
    definitionId: "Ta'ajjub adalah ekspresi kekaguman mendalam atas suatu sifat yang menonjol atau luar biasa. Memiliki dua pola rumus standar (Qiyasi) yang disepakati ulama.",
    kaidah: [
      "Pola 1: مَا أَفْعَلَهُ! (Maa Af'alahu!). Contoh: 'مَا أَجْمَلَ السَّمَاءَ!' (Alangkah indahnya langit itu!).",
      "Pola 2: أَفْعِلْ بِهِ! (Af'il bihi!). Contoh: 'أَجْمِلْ بِالسَّمَاءِ!' (Betapa indahnya langit itu!).",
      "Isim setelah pola pertama dibaca manshub sebagai objek (Mutata'ajjab minhu)."
    ],
    rumus: "مَا أَعْظَمَ + اِسْمًا مَنْصُوبًا! | أَعْظِمْ بِـ + اِسْمٍ مَجْرُورٍ! (Contoh: مَا أَحْسَنَ الصِّدْقَ!)",
    latihan: [
      "Sebutkan 2 pola qiyasi (standar) untuk mengungkapkan kekaguman (Ta'ajjub)!",
      "Ubah kata 'الْقَمَرُ جَمِيلٌ' (Rembulan itu indah) menggunakan pola 'مَا أَفْعَلَهُ!'!",
      "Tentukan harakat kata 'الْخُلُقَ' dalam ekspresi 'مَا أَحْسَنَ الْخُلُقَ!'!",
      "Berikan contoh Ta'ajjub menggunakan pola kedua 'أَفْعِلْ بِهِ!' bertema kejujuran!",
      "Terjemahkan ke dalam bahasa Arab: 'Alangkah luasnya lapangan sekolah itu!'"
    ]
  }
];
