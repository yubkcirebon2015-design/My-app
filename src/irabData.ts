export interface IrabWord {
  word: string;
  transliteration: string;
  translation: string;
  role: string;       // Kedudukan: Mubtada, Khabar, Fa'il, etc.
  state: string;      // Keadaan: Marfu', Mansub, Majrur, Majzum
  sign: string;       // Tanda I'rab: Dhommah, Fathah, Alif, Wawu, etc.
  reason: string;     // Alasan: Isim Mufrad, Jamak Mudzakkar Salim, etc.
  formalAr: string;   // Lafadz I'rab Resmi Arab
  formalId: string;   // Penjelasan I'rab Resmi Indonesia
}

export interface IrabSentence {
  id: string;
  sentenceAr: string;
  sentenceId: string;
  description: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tinggi';
  category: string; // e.g. "Jumlah Ismiyyah", "Jumlah Fi'liyyah", "Kaana & Inna", "Adawatul Jزم/Nasb"
  words: IrabWord[];
}

export interface IrabRule {
  id: string;
  state: 'Marfu' | 'Mansub' | 'Majrur' | 'Majzum';
  nameAr: string;
  nameId: string;
  signAr: string;
  signId: string;
  exampleAr: string;
  exampleId: string;
  explanation: string;
  applicableTo: string; // "Isim Mufrad", "Mutsanna", etc.
}

export interface IrabQuizQuestion {
  id: number;
  questionAr?: string;
  questionId: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const irabSentences: IrabSentence[] = [
  {
    id: "1",
    sentenceAr: "الْعِلْمُ نُورٌ",
    sentenceId: "Ilmu adalah cahaya.",
    description: "Kalimat dasar Jumlah Ismiyyah yang terdiri dari Mubtada' dan Khabar dalam bentuk Isim Mufrad.",
    difficulty: "Mudah",
    category: "Jumlah Ismiyyah",
    words: [
      {
        word: "الْعِلْمُ",
        transliteration: "Al-'Ilmu",
        translation: "Ilmu itu",
        role: "Mubtada' (Subjek)",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Karena merupakan Isim Mufrad (kata benda tunggal)",
        formalAr: "مُبْتَدَأٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ اسْمٌ مُفْرَدٌ",
        formalId: "Mubtada' marfu' dengan tanda rafa' dhommah yang nampak di akhirnya karena merupakan Isim Mufrad."
      },
      {
        word: "نُورٌ",
        transliteration: "Nuurun",
        translation: "cahaya",
        role: "Khabar (Predikat)",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Karena merupakan Isim Mufrad (kata benda tunggal)",
        formalAr: "خَبَرُ الْمُبْتَدَأِ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ اسْمٌ مُفْرَدٌ",
        formalId: "Khabar mubtada' marfu' dengan tanda rafa' dhommah yang nampak di akhirnya karena merupakan Isim Mufrad."
      }
    ]
  },
  {
    id: "2",
    sentenceAr: "يَكْتُبُ الطَّالِبَانِ الدَّرْسَ",
    sentenceId: "Kedua siswa itu sedang menulis pelajaran.",
    description: "Jumlah Fi'liyyah yang menggunakan Fa'il berupa Isim Mutsanna (dua orang) dan Maf'ul Bih berupa Isim Mufrad.",
    difficulty: "Sedang",
    category: "Jumlah Fi'liyyah",
    words: [
      {
        word: "يَكْتُبُ",
        transliteration: "Yaktubu",
        translation: "sedang menulis",
        role: "Fi'il Mudhari'",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Karena merupakan Fi'il Mudhari' Shahihul Akhir yang sepi dari amil nashab dan jazm",
        formalAr: "فِعْلٌ مُضَارِعٌ مَرْفُوْعٌ لِتَجَرُّدِهِ عَنِ النَّاصِبِ وَالْجَازِمِ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ صَحِيْحُ الْآخِرِ",
        formalId: "Fi'il mudhari' marfu' (karena bebas dari amil nashab & jazm) dengan tanda rafa' dhommah yang nampak di akhirnya karena shahihul akhir."
      },
      {
        word: "الطَّالِبَانِ",
        transliteration: "At-Thaalibaani",
        translation: "kedua siswa itu",
        role: "Fa'il (Pelaku/Subjek)",
        state: "Marfu'",
        sign: "Alif",
        reason: "Karena merupakan Isim Mutsanna (kata benda ganda)",
        formalAr: "فَاعِلٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى، وَالنُّوْنُ عِوَضٌ عَنِ التَّنْوِيْنِ فِي الِاسْمِ الْمُفْرَدِ",
        formalId: "Fa'il marfu' dengan tanda rafa' Alif karena merupakan Isim Mutsanna, dan huruf Nun sebagai pengganti tanwin pada isim mufrad."
      },
      {
        word: "الدَّرْسَ",
        transliteration: "Ad-Darsa",
        translation: "pelajaran itu",
        role: "Maf'ul Bih (Objek)",
        state: "Mansub",
        sign: "Fathah Zhahirah",
        reason: "Karena merupakan Isim Mufrad (kata benda tunggal)",
        formalAr: "مَفْعُوْلٌ بِهِ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ اسْمٌ مُفْرَدٌ",
        formalId: "Maf'ul bih mansub dengan tanda nashab fathah yang nampak di akhirnya karena merupakan Isim Mufrad."
      }
    ]
  },
  {
    id: "3",
    sentenceAr: "يَنْصُرُ الْمُسْلِمُونَ الْمَظْلُومِينَ",
    sentenceId: "Orang-orang muslim menolong orang-orang yang dizolimi.",
    description: "Jumlah Fi'liyyah dengan Fa'il berupa Jamak Mudzakkar Salim dan Maf'ul Bih berupa Jamak Mudzakkar Salim.",
    difficulty: "Sedang",
    category: "Jumlah Fi'liyyah",
    words: [
      {
        word: "يَنْصُرُ",
        transliteration: "Yansuru",
        translation: "menolong / sedang menolong",
        role: "Fi'il Mudhari'",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Fi'il Mudhari' Shahihul Akhir",
        formalAr: "فِعْلٌ مُضَارِعٌ مَرْفُوْعٌ لِتَجَرُّدِهِ عَنِ النَّاصِبِ وَالْجَازِمِ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Fi'il mudhari' marfu' karena sepi dari amil nashab dan jazm, dengan tanda rafa' dhommah zhahirah."
      },
      {
        word: "الْمُسْلِمُونَ",
        transliteration: "Al-Muslimuuna",
        translation: "orang-orang muslim",
        role: "Fa'il (Pelaku/Subjek)",
        state: "Marfu'",
        sign: "Wawu (و)",
        reason: "Karena merupakan Jamak Mudzakkar Salim",
        formalAr: "فَاعِلٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ، وَالنُّوْنُ عِوَضٌ عَنِ التَّنْوِيْنِ فِي الِاسْمِ الْمُفْرَدِ",
        formalId: "Fa'il marfu' dengan tanda rafa' Wawu karena merupakan Jamak Mudzakkar Salim."
      },
      {
        word: "الْمَظْلُومِينَ",
        transliteration: "Al-Mazhluumiina",
        translation: "orang-orang yang dizolimi",
        role: "Maf'ul Bih (Objek)",
        state: "Mansub",
        sign: "Ya' (ي)",
        reason: "Karena merupakan Jamak Mudzakkar Salim",
        formalAr: "مَفْعُوْلٌ بِهِ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْيَاءُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ",
        formalId: "Maf'ul bih mansub dengan tanda nashab Ya' karena merupakan Jamak Mudzakkar Salim."
      }
    ]
  },
  {
    id: "4",
    sentenceAr: "كَانَ أَبُوكَ ذَا عِلْمٍ",
    sentenceId: "Dahulu ayahmu adalah pemilik ilmu.",
    description: "Kalimat yang dimasuki amil nawasikh Kaana yang merapakan Isim (Isim Kaana) dan menasabkan Khabar (Khabar Kaana). Di sini menggunakan Asma'ul Khamsah.",
    difficulty: "Tinggi",
    category: "Kaana & Inna",
    words: [
      {
        word: "كَانَ",
        transliteration: "Kaana",
        translation: "dahulu / adalah",
        role: "Fi'il Madhi Naqish (Amil Nawasikh)",
        state: "Mabni (Tidak Ber-I'rab)",
        sign: "Fathah (مَبْنِيٌّ عَلَى الْفَتْحِ)",
        reason: "Fi'il Madhi Naqish yang berfungsi merapakan isim dan menasabkan khabar",
        formalAr: "فِعْلٌ مَاضٍ نَاقِصٌ يَرْفَعُ الِاسْمَ وَيَنْصِبُ الْخَبَرَ، مَبْنِيٌّ عَلَى الْفَتْحِ الظَّاهِرِ",
        formalId: "Fi'il madhi naqish yang merapakan isim dan menasabkan khabar, mabni di atas fathah."
      },
      {
        word: "أَبُوكَ",
        transliteration: "Abuuka",
        translation: "ayahmu",
        role: "Isim Kaana",
        state: "Marfu'",
        sign: "Wawu (و)",
        reason: "Karena merupakan Asma'ul Khamsah (isim yang lima), dan Ka (ك) adalah mudhaf ilaih",
        formalAr: "أَبُو: اِسْمُ كَانَ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ وَهُوَ مُضَافٌ، وَالْكَافُ ضَمِيْرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ",
        formalId: "Abuu: Isim Kaana marfu' dengan tanda rafa' Wawu karena termasuk Asma'ul Khamsah dan ia berkedudukan sebagai mudhaf. Kaf (ka): dhamir muttasil mabni fathah di posisi jarr sebagai mudhaf ilaih."
      },
      {
        word: "ذَا",
        transliteration: "Dzaa",
        translation: "pemilik",
        role: "Khabar Kaana",
        state: "Mansub",
        sign: "Alif",
        reason: "Karena merupakan Asma'ul Khamsah dan berkedudukan sebagai mudhaf",
        formalAr: "خَبَرُ كَانَ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْأَلِفُ لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ وَهُوَ مُضَافٌ",
        formalId: "Khabar Kaana mansub dengan tanda nashab Alif karena termasuk Asma'ul Khamsah dan ia berkedudukan sebagai mudhaf."
      },
      {
        word: "عِلْمٍ",
        transliteration: "'Ilmin",
        translation: "ilmu",
        role: "Mudhaf Ilaih",
        state: "Majrur",
        sign: "Kasrah Zhahirah",
        reason: "Karena merupakan Isim Mufrad",
        formalAr: "مُضَافٌ إِلَيْهِ مَجْرُوْرٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Mudhaf ilaih majrur dengan tanda jarr kasrah yang nampak di akhirnya karena merupakan Isim Mufrad."
      }
    ]
  },
  {
    id: "5",
    sentenceAr: "إِنَّ الْمُعَلِّمَاتِ نَشِيطَاتٌ",
    sentenceId: "Sesungguhnya para guru wanita itu rajin-rajin.",
    description: "Kalimat yang dimasuki amil nawasikh Inna yang menasabkan Isim (Isim Inna) dan merapakan Khabar (Khabar Inna). Menggunakan Jamak Muannats Salim.",
    difficulty: "Tinggi",
    category: "Kaana & Inna",
    words: [
      {
        word: "إِنَّ",
        transliteration: "Inna",
        translation: "sesungguhnya",
        role: "Harf Taukid wa Nasb (Amil Nawasikh)",
        state: "Mabni (Tidak Ber-I'rab)",
        sign: "Fathah",
        reason: "Huruf penguat yang berfungsi menasabkan isim dan merapakan khabar",
        formalAr: "حَرْفُ تَوْكِيْدٍ وَنَصْبٍ يَنْصِبُ الِاسْمَ وَيَرْفَعُ الْخَبَرَ، مَبْنِيٌّ عَلَى الْفَتْحِ لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ",
        formalId: "Harf taukid dan nashab yang menasabkan isim dan merapakan khabar, mabni atas fathah, tidak memiliki kedudukan i'rab."
      },
      {
        word: "الْمُعَلِّمَاتِ",
        transliteration: "Al-Mu'allimaati",
        translation: "para guru wanita",
        role: "Isim Inna",
        state: "Mansub",
        sign: "Kasrah (Pengganti Fathah)",
        reason: "Karena merupakan Jamak Muannats Salim (jamak perempuan teratur)",
        formalAr: "اِسْمُ إِنَّ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْكَسْرَةُ نِيَابَةً عَنِ الْفَتْحَةِ لِأَنَّهُ جَمْعُ مُؤَنَّثٍ سَالِمٌ",
        formalId: "Isim Inna mansub dengan tanda kasrah sebagai pengganti fathah, karena merupakan Jamak Muannats Salim."
      },
      {
        word: "نَشِيطَاتٌ",
        transliteration: "Nashiithaatun",
        translation: "rajin-rajin",
        role: "Khabar Inna",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Karena merupakan Jamak Muannats Salim",
        formalAr: "خَبَرُ إِنَّ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Khabar Inna marfu' dengan tanda rafa' dhommah zhahirah karena merupakan Jamak Muannats Salim."
      }
    ]
  },
  {
    id: "6",
    sentenceAr: "ذَهَبْتُ إِلَى الْمَسَاجِدِ الْكَبِيرَةِ",
    sentenceId: "Aku pergi ke masjid-masjid yang besar.",
    description: "Kalimat yang mengandung Huruf Jarr, Isim Majrur berupa Jamak Taksir, dan Na'at (Sifat) berupa Isim Mufrad.",
    difficulty: "Sedang",
    category: "Majrurat bi Harf & Na'at",
    words: [
      {
        word: "ذَهَبْتُ",
        transliteration: "Dzahabtu",
        translation: "aku telah pergi",
        role: "Fi'il Madhi + Fa'il (Dhamir)",
        state: "Mabni (Fi'il) & Mahall (Dhamir)",
        sign: "Sukun (Mabni) / Marfu' (Dhamir)",
        reason: "Fi'il Madhi bersambung dengan Ta Fa'il",
        formalAr: "ذَهَبَ: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُوْنِ لِاتِّصَالِهِ بِتَاءِ الْفَاعِلِ. وَالتَّاءُ: ضَمِيْرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ رَفْعٍ فَاعِلٌ",
        formalId: "Dzahaba: Fi'il madhi mabni di atas sukun karena bersambung dengan Ta'ul fa'il. Dan Ta': dhamir muttasil mabni dhommah di posisi rafa' sebagai Fa'il."
      },
      {
        word: "إِلَى",
        transliteration: "Ilaa",
        translation: "ke / kepada",
        role: "Harf Jarr",
        state: "Mabni",
        sign: "Sukun (مَبْنِيٌّ عَلَى السُّكُوْنِ)",
        reason: "Huruf jarr peng-khafadh kata setelahnya",
        formalAr: "حَرْفُ جَرٍّ مَبْنِيٌّ عَلَى السُّكُوْنِ لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ",
        formalId: "Harf jarr, mabni di atas sukun, tidak memiliki kedudukan i'rab."
      },
      {
        word: "الْمَسَاجِدِ",
        transliteration: "Al-Masaajidi",
        translation: "masjid-masjid",
        role: "Isim Majrur (oleh Ilaa)",
        state: "Majrur",
        sign: "Kasrah Zhahirah",
        reason: "Karena merupakan Jamak Taksir (pecahan) yang kemasukan Alif Lam",
        formalAr: "اِسْمٌ مَجْرُوْرٌ بِـ (إِلَى) وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ جَمْعُ تَكْسِيْرٍ",
        formalId: "Isim majrur disebabkan oleh huruf 'ilaa', dengan tanda jarr kasrah zhahirah karena merupakan Jamak Taksir."
      },
      {
        word: "الْكَبِيرَةِ",
        transliteration: "Al-Kabiirati",
        translation: "yang besar",
        role: "Na'at / Sifat (Mengikuti kata sebelumnya)",
        state: "Majrur",
        sign: "Kasrah Zhahirah",
        reason: "Na'at dari isim majrur musti majrur",
        formalAr: "نَعْتٌ لِـ (الْمَسَاجِدِ) مَجْرُوْرٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ اسْمٌ مُفْرَدٌ",
        formalId: "Na'at (sifat) dari kata 'Al-Masajid' yang majrur, tanda jarr-nya kasrah zhahirah karena merupakan Isim Mufrad."
      }
    ]
  },
  {
    id: "7",
    sentenceAr: "لَمْ يَكْتُبْ زَيْدٌ الدَّرْسَ",
    sentenceId: "Zaid belum menulis pelajaran.",
    description: "Kalimat Fi'liyyah yang dimasuki amil jazm (Lam) sehingga fi'il mudhari'-nya berstatus majzum.",
    difficulty: "Sedang",
    category: "Adawatul Jazm/Nasb",
    words: [
      {
        word: "لَمْ",
        transliteration: "Lam",
        translation: "belum / tidak",
        role: "Harf Jazm wa Nafyi",
        state: "Mabni",
        sign: "Sukun",
        reason: "Huruf peniada dan pen-jazm fi'il mudhari'",
        formalAr: "حَرْفُ نَفْيٍ وَجَزْمٍ وَقَلْبٍ مَبْنِيٌّ عَلَى السُّكُوْنِ لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ",
        formalId: "Harf nafyi, jazm, dan qalb (membalik makna sekarang ke lampau), mabni sukun, tidak memiliki kedudukan i'rab."
      },
      {
        word: "يَكْتُبْ",
        transliteration: "Yaktub",
        translation: "menulis (dalam kondisi jazm)",
        role: "Fi'il Mudhari' Majzum",
        state: "Majzum",
        sign: "Sukun",
        reason: "Karena kemasukan amil jazm Lam dan ia Shahihul Akhir",
        formalAr: "فِعْلٌ مُضَارِعٌ مَجْزُوْمٌ بِـ (لَمْ) وَعَلَامَةُ جَزْمِهِ السُّكُوْنُ لِأَنَّهُ صَحِيْحُ الْآخِرِ",
        formalId: "Fi'il mudhari' majzum disebabkan oleh 'lam', dengan tanda jazm sukun karena ia merupakan Fi'il Shahihul Akhir."
      },
      {
        word: "زَيْدٌ",
        transliteration: "Zaidun",
        translation: "Zaid",
        role: "Fa'il (Pelaku/Subjek)",
        state: "Marfu'",
        sign: "Dhommah Zhahirah",
        reason: "Isim Mufrad",
        formalAr: "فَاعِلٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Fa'il marfu' dengan tanda rafa' dhommah zhahirah karena merupakan Isim Mufrad."
      },
      {
        word: "الدَّرْسَ",
        transliteration: "Ad-Darsa",
        translation: "pelajaran itu",
        role: "Maf'ul Bih (Objek)",
        state: "Mansub",
        sign: "Fathah Zhahirah",
        reason: "Isim Mufrad",
        formalAr: "مَفْعُوْلٌ بِهِ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Maf'ul bih mansub dengan tanda nashab fathah zhahirah karena merupakan Isim Mufrad."
      }
    ]
  },
  {
    id: "8",
    sentenceAr: "لَنْ تَنَالُوا الْبِرَّ",
    sentenceId: "Kamu sekalian tidak akan memperoleh kebajikan.",
    description: "Kutipan ayat Quran yang menggunakan Amil Nashab 'Lan' berhadapan dengan Af'alul Khamsah (Fi'il Mudhari' ber-Fa'il Wawu Jama'ah).",
    difficulty: "Tinggi",
    category: "Adawatul Jazm/Nasb",
    words: [
      {
        word: "لَنْ",
        transliteration: "Lan",
        translation: "tidak akan sekali-kali",
        role: "Harf Nashab wa Nafyi",
        state: "Mabni",
        sign: "Sukun",
        reason: "Huruf nashab untuk masa depan",
        formalAr: "حَرْفُ نَفْيٍ وَنَصْبٍ وَاسْتِقْبَالٍ مَبْنِيٌّ عَلَى السُّكُوْنِ لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ",
        formalId: "Harf nafyi, nashab, dan istiqbal (masa depan), mabni di atas sukun, tidak memiliki kedudukan i'rab."
      },
      {
        word: "تَنَالُوا",
        transliteration: "Tanaaluu",
        translation: "kamu sekalian memperoleh",
        role: "Fi'il Mudhari' Mansub",
        state: "Mansub",
        sign: "Hazfun Nuun (Terbuangnya huruf Nun)",
        reason: "Karena merupakan Af'alul Khamsah (Fi'il yang lima), bersambung dengan Wawu Jama'ah",
        formalAr: "فِعْلٌ مُضَارِعٌ مَنْصُوْبٌ بِـ (لَنْ) وَعَلَامَةُ نَصْبِهِ حَذْفُ النُّوْنِ لِأَنَّهُ مِنَ الْأَفْعَالِ الْخَمْسَةِ، وَالْوَاوُ ضَمِيْرٌ مُتَّصِلٌ فِي مَحَلِّ رَفْعٍ فَاعِلٌ",
        formalId: "Fi'il mudhari' mansub disebabkan oleh 'lan', dengan tanda nashab terbuangnya huruf Nun karena termasuk Af'alul Khamsah. Wawu: dhamir muttasil di posisi rafa' sebagai Fa'il."
      },
      {
        word: "الْبِرَّ",
        transliteration: "Al-Birra",
        translation: "kebajikan / kebaikan sempurna",
        role: "Maf'ul Bih (Objek)",
        state: "Mansub",
        sign: "Fathah Zhahirah",
        reason: "Isim Mufrad",
        formalAr: "مَفْعُوْلٌ بِهِ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ الظَّاهِرَةُ عَلَى آخِرِهِ",
        formalId: "Maf'ul bih mansub dengan tanda nashab fathah zhahirah karena merupakan Isim Mufrad."
      }
    ]
  }
];

export const irabRules: IrabRule[] = [
  // === MARFU'AT (Rafa') ===
  {
    id: "r1",
    state: "Marfu",
    nameAr: "الْمُبْتَدَأُ وَالْخَبَرُ",
    nameId: "Mubtada' dan Khabar",
    signAr: "الضَّمَّةُ / الْأَلِفُ / الْوَاوُ",
    signId: "Dhommah (Tunggal/Jamak Taksir/Jamak Muannats) / Alif (Mutsanna) / Wawu (Jamak Mudzakkar & Asma'ul Khamsah)",
    exampleAr: "الْمُسْلِمُونَ صَادِقُونَ",
    exampleId: "Orang-orang muslim itu jujur.",
    applicableTo: "Mubtada' & Khabar",
    explanation: "Mubtada' adalah subjek berupa isim makrifat di awal kalimat, sedangkan Khabar adalah penjelas predikatnya. Keduanya wajib ber-i'rab rafa' (marfu')."
  },
  {
    id: "r2",
    state: "Marfu",
    nameAr: "الْفَاعِلُ",
    nameId: "Fa'il (Pelaku)",
    signAr: "الضَّمَّةُ / الْأَلِفُ / الْوَاوُ",
    signId: "Dhommah / Alif / Wawu sesuai jenis Isim",
    exampleAr: "جَاءَ أَبُوكَ",
    exampleId: "Ayahmu telah datang.",
    applicableTo: "Isim setelah Fi'il Ma'lum",
    explanation: "Isim marfu' yang terletak setelah kata kerja aktif (fi'il ma'lum) yang menunjukkan siapa yang melakukan pekerjaan tersebut."
  },
  {
    id: "r3",
    state: "Marfu",
    nameAr: "نَائِبُ الْفَاعِلِ",
    nameId: "Na'ibul Fa'il (Pengganti Pelaku)",
    signAr: "الضَّمَّةُ / الْأَلِفُ / الْوَاوُ",
    signId: "Dhommah / Alif / Wawu sesuai jenis Isim",
    exampleAr: "قُرِئَ الْكِتَابُ",
    exampleId: "Buku itu telah dibaca.",
    applicableTo: "Isim setelah Fi'il Majhul",
    explanation: "Isim marfu' yang menggantikan posisi Fa'il yang dihapus dalam kalimat pasif (fi'il majhul), biasanya awalnya berposisi sebagai objek (maf'ul bih)."
  },
  {
    id: "r4",
    state: "Marfu",
    nameAr: "اِسْمُ كَانَ وَأَخَوَاتُهَا",
    nameId: "Isim Kaana",
    signAr: "الضَّمَّةُ / الْأَلِفُ / الْوَاوُ",
    signId: "Dhommah / Alif / Wawu sesuai jenis Isim",
    exampleAr: "كَانَ اللَّهُ غَفُورًا",
    exampleId: "Allah Maha Pengampun.",
    applicableTo: "Isim Mubtada' yang didahului Kaana",
    explanation: "Kaana dan saudara-saudaranya (seperti ashbaha, amsa, laisa) bertugas merapakan Mubtada' (menjadi Isim Kaana) dan menasabkan Khabar."
  },
  {
    id: "r5",
    state: "Marfu",
    nameAr: "خَبَرُ إِنَّ وَأَخَوَاتُهَا",
    nameId: "Khabar Inna",
    signAr: "الضَّمَّةُ / الْأَلِفُ / الْوَاوُ",
    signId: "Dhommah / Alif / Wawu sesuai jenis Isim",
    exampleAr: "إِنَّ النَّصْرَ قَرِيبٌ",
    exampleId: "Sesungguhnya pertolongan itu dekat.",
    applicableTo: "Khabar yang didahului Inna",
    explanation: "Inna dan saudara-saudaranya (seperti anna, ka-anna, lakinna) bertugas menasabkan Mubtada' (Isim Inna) dan merapakan Khabar (Khabar Inna)."
  },
  {
    id: "r6",
    state: "Marfu",
    nameAr: "التَّوَابِعُ لِلْمَرْفُوعِ",
    nameId: "At-Tawabi' lil Marfu' (Pengikut Rafa')",
    signAr: "Sesuai matbu'-nya (kata yang diikuti)",
    signId: "Mengikuti tanda kata sebelumnya (Na'at, 'Athaf, Taukid, Badal)",
    exampleAr: "جَاءَ زَيْدٌ الْعَالِمُ",
    exampleId: "Zaid yang alim telah datang (Al-Alimu mengikuti rafa'-nya Zaidun).",
    applicableTo: "Isim Pengikut (Na'at, 'Athaf, Taukid, Badal)",
    explanation: "Kumpulan isim yang ikut ber-i'rab marfu' karena mengikuti i'rab kata sebelumnya yang berstatus marfu' (terdiri atas Na'at, 'Athaf, Taukid, dan Badal)."
  },
  {
    id: "r7",
    state: "Marfu",
    nameAr: "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ",
    nameId: "Fi'il Mudhari' Marfu'",
    signAr: "الضَّمَّةُ / ثُبُوتُ النُّونِ",
    signId: "Dhommah (Shahih/Mu'tal) / Tsubutun Nuun (Af'alul Khamsah)",
    exampleAr: "تَكْتُبُونَ الدَّرْسَ",
    exampleId: "Kalian sekalian sedang menulis pelajaran.",
    applicableTo: "Fi'il Mudhari' yang sepi amil",
    explanation: "Fi'il mudhari' berhukum marfu' selama tidak didahului oleh amil penasab (amil nashab) maupun amil pen-jazm (amil jazm)."
  },
  
  // === MANSUBAT (Nashab) ===
  {
    id: "r8",
    state: "Mansub",
    nameAr: "الْمَفْعُولُ بِهِ",
    nameId: "Maf'ul Bih (Objek)",
    signAr: "الْفَتْحَةُ / الْأَلِفُ / الْيَاءُ / الْكَسْرَةُ",
    signId: "Fathah (Mufrad/Jamak Taksir) / Alif (Asma'ul Khamsah) / Ya (Mutsanna/Jamak Mudzakkar) / Kasrah (Jamak Muannats)",
    exampleAr: "رَأَيْتُ الطَّالِبَاتِ",
    exampleId: "Aku melihat para siswi perempuan.",
    applicableTo: "Isim penerima objek tindakan",
    explanation: "Isim mansub yang menjadi sasaran langsung dari tindakan pelaku (Fa'il)."
  },
  {
    id: "r9",
    state: "Mansub",
    nameAr: "الْمَفْعُولُ الْمُطْلَقُ",
    nameId: "Maf'ul Muthlaq (Masdar penegas)",
    signAr: "الْفَتْحَةُ / الْيَاءُ / الْكَسْرَةُ",
    signId: "Fathah / Ya / Kasrah sesuai jenis isim",
    exampleAr: "حَفِظْتُ الدَّرْسَ حِفْظًا",
    exampleId: "Aku benar-benar menghafal pelajaran itu dengan sungguh-sungguh.",
    applicableTo: "Isim Masdar",
    explanation: "Isim masdar mansub yang disebut setelah kata kerjanya (fi'il) guna menegaskan arti, menjelaskan jumlah, atau menerangkan sifat pekerjaan tersebut."
  },
  {
    id: "r10",
    state: "Mansub",
    nameAr: "ظَرْفُ الزَّمَانِ وَالْمَكَانِ",
    nameId: "Zharaf Zaman & Makan (Keterangan)",
    signAr: "الْفَتْحَةُ / الْيَاءُ",
    signId: "Fathah atau tanda nashab lainnya",
    exampleAr: "سَافَرْتُ لَيْلًا / جَلَسْتُ أَمَامَ الْمُعَلِّمِ",
    exampleId: "Aku bepergian di malam hari / Aku duduk di depan guru.",
    applicableTo: "Isim Keterangan Waktu/Tempat",
    explanation: "Isim mansub yang menunjukkan waktu (zaman) atau tempat (makan) terjadinya suatu perbuatan, menyimpan arti kata 'fii' (di dalam/pada)."
  },
  {
    id: "r11",
    state: "Mansub",
    nameAr: "الْحَالُ",
    nameId: "Hal (Keterangan Keadaan)",
    signAr: "الْفَتْحَةُ / الْيَاءُ / الْكَسْرَةُ",
    signId: "Fathah / Ya / Kasrah sesuai jenis isim",
    exampleAr: "جَاءَ زَيْدٌ رَاكِبًا",
    exampleId: "Zaid telah datang dalam keadaan berkendara.",
    applicableTo: "Isim Nakirah Penjelas Keadaan",
    explanation: "Isim nakirah mansub yang berfungsi menjelaskan keadaan atau kondisi pelaku (fa'il) atau objek (maf'ul bih) ketika pekerjaan tersebut berlangsung."
  },
  {
    id: "r12",
    state: "Mansub",
    nameAr: "التَّمْيِيزُ",
    nameId: "Tamyiz (Penjelas Zat/Rasio)",
    signAr: "الْفَتْحَةُ",
    signId: "Fathah Zhahirah",
    exampleAr: "اشْتَرَيْتُ عِشْرِينَ كِتَابًا",
    exampleId: "Aku telah membeli dua puluh buah buku.",
    applicableTo: "Isim Nakirah Penjelas Ketidakjelasan",
    explanation: "Isim nakirah mansub yang digunakan untuk memperjelas makna atau menghilangkan ketidakjelasan dari kata/bilangan sebelumnya yang masih samar."
  },
  {
    id: "r13",
    state: "Mansub",
    nameAr: "الْمُسْتَثْنَى",
    nameId: "Mustatsna (Pengecualian)",
    signAr: "الْفَتْحَةُ / الْيَاءُ / الْأَلِفُ",
    signId: "Fathah / Ya / Alif sesuai aturan Istitsna",
    exampleAr: "حَضَرَ الطُّلَّابُ إِلَّا عَلِيًّا",
    exampleId: "Para siswa telah hadir kecuali Ali.",
    applicableTo: "Isim setelah Huruf Istitsna (إِلَّا)",
    explanation: "Isim mansub yang terletak setelah huruf istitsna (pengecualian) seperti إِلَّا (illa) untuk mengeluarkan isim itu dari hukum kalimat sebelumnya."
  },
  {
    id: "r14",
    state: "Mansub",
    nameAr: "اِسْمُ إِنَّ وَأَخَوَاتُهَا",
    nameId: "Isim Inna",
    signAr: "الْفَتْحَةُ / الْأَلِفُ / الْيَاءُ / الْكَسْرَةُ",
    signId: "Sesuai tanda nashab masing-masing jenis isim",
    exampleAr: "إِنَّ اللَّهَ سَمِيعٌ",
    exampleId: "Sesungguhnya Allah Maha Mendengar.",
    applicableTo: "Mubtada' yang diawali Inna",
    explanation: "Isim mubtada' yang kedudukannya berubah menjadi mansub karena dimasuki oleh amil Inna atau saudara-saudaranya."
  },
  {
    id: "r15",
    state: "Mansub",
    nameAr: "خَبَرُ كَانَ وَأَخَوَاتُهَا",
    nameId: "Khabar Kaana",
    signAr: "الْفَتْحَةُ / الْأَلِفُ / الْيَاءُ / الْكَسْرَةُ",
    signId: "Sesuai tanda nashab masing-masing jenis isim",
    exampleAr: "لَيْسَ الْكَسَلُ مَحْمُودًا",
    exampleId: "Kemalasan itu tidaklah terpuji.",
    applicableTo: "Khabar Mubtada' yang diawali Kaana",
    explanation: "Khabar dari mubtada' yang kedudukannya berubah menjadi mansub karena dimasuki oleh amil Kaana atau saudara-saudaranya."
  },
  {
    id: "r16",
    state: "Mansub",
    nameAr: "الْمَفْعُولُ لِأَجْلِهِ / مِنْ أَجْلِهِ",
    nameId: "Maf'ul Liahlih (Keterangan Alasan)",
    signAr: "الْفَتْحَةُ",
    signId: "Fathah Zhahirah",
    exampleAr: "قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ",
    exampleId: "Aku berdiri sebagai bentuk penghormatan bagi ustadz.",
    applicableTo: "Isim Masdar Qalbi (Hati)",
    explanation: "Isim masdar mansub yang disebutkan guna menerangkan motif, latar belakang, atau sebab terjadinya perbuatan kata kerja sebelumnya."
  },
  {
    id: "r17",
    state: "Mansub",
    nameAr: "الْمَفْعُولُ مَعَهُ",
    nameId: "Maf'ul Ma'ah (Keterangan Penyertaan)",
    signAr: "الْفَتْحَةُ",
    signId: "Fathah Zhahirah",
    exampleAr: "سِرْتُ وَالْجَبَلَ",
    exampleId: "Aku berjalan menyusuri gunung (bersamaan dengan keberadaan gunung).",
    applicableTo: "Isim setelah Wawu Al-Ma'iyyah",
    explanation: "Isim mansub yang jatuh setelah huruf Wawu yang bermakna 'ma'a' (bersama/menyertai) yang disebut Wawu Ma'iyyah."
  },
  {
    id: "r18",
    state: "Mansub",
    nameAr: "التَّوَابِعُ لِلْمَنْصُوبِ",
    nameId: "At-Tawabi' lil Manshub (Pengikut Nashab)",
    signAr: "Sesuai matbu'-nya",
    signId: "Mengikuti tanda mansub dari kata sebelumnya",
    exampleAr: "رَأَيْتُ زَيْدًا الصَّالِحَ",
    exampleId: "Aku melihat Zaid yang shalih.",
    applicableTo: "Isim Pengikut (Na'at, 'Athaf, Taukid, Badal)",
    explanation: "Isim-isim yang berhukum mansub karena mengikuti kedudukan kata sebelumnya (matbu') yang ber-i'rab mansub."
  },
  {
    id: "r19",
    state: "Mansub",
    nameAr: "فِعْلٌ مُضَارِعٌ مَنْصُوبٌ",
    nameId: "Fi'il Mudhari' Mansub",
    signAr: "الْفَتْحَةُ / حَذْفُ النُّونِ",
    signId: "Fathah (Zhahirah/Muqaddarah) / Hazfun Nuun (Af'alul Khamsah)",
    exampleAr: "أَنْ تَفْعَلُوا الْخَيْرَ",
    exampleId: "Bahwasanya kalian melakukan kebaikan.",
    applicableTo: "Fi'il Mudhari' didahului Amil Nashab",
    explanation: "Fi'il mudhari' menjadi mansub jika didahului amil nashab seperti أَنْ (an), لَنْ (lan), إِذَنْ (idzan), كَيْ (kay), لِـ (lam ta'lil)."
  },

  // === MAJRURAT (Jarr / Khafdh) ===
  {
    id: "r20",
    state: "Majrur",
    nameAr: "الْمَجْرُورُ بِالْحَرْفِ",
    nameId: "Majrur karena Huruf Jarr",
    signAr: "الْكَسْرَةُ / الْيَاءُ / الْفَتْحَةُ",
    signId: "Kasrah (Mufrad/Jamak Taksir/Jamak Muannats) / Ya (Mutsanna/Jamak Mudzakkar/Asma'ul Khamsah) / Fathah (Ghairu Munsarif)",
    exampleAr: "فِي الْمَسَاجِدِ",
    exampleId: "Di dalam masjid-masjid.",
    applicableTo: "Isim didahului Huruf Jar",
    explanation: "Setiap isim yang terletak langsung setelah salah satu huruf jar (min, ila, 'an, 'ala, fii, rubba, ba', kaf, lam, huruf qasam)."
  },
  {
    id: "r21",
    state: "Majrur",
    nameAr: "الْمُضَافُ إِلَيْهِ / الْمَجْرُورُ بِالْإِضَافَةِ",
    nameId: "Mudhaf Ilaih",
    signAr: "الْكَسْرَةُ / الْيَاءُ / الْفَتْحَةُ",
    signId: "Kasrah / Ya / Fathah sesuai jenis Isim",
    exampleAr: "كِتَابُ الطَّالِبِ",
    exampleId: "Buku kepunyaan siswa itu.",
    applicableTo: "Isim kedua dalam Idhafah",
    explanation: "Isim yang disandarkan kepada kata sebelumnya (Mudhaf) untuk membatasi atau memperjelas makna. Mudhaf Ilaih hukumnya selalu majrur."
  },
  {
    id: "r22",
    state: "Majrur",
    nameAr: "التَّوَابِعُ لِلْمَجْرُورِ",
    nameId: "At-Tawabi' lil Majrur (Pengikut Jarr)",
    signAr: "Sesuai matbu'-nya",
    signId: "Mengikuti tanda majrur kata sebelumnya",
    exampleAr: "مَرَرْتُ بِبَكْرٍ الْكَرِيمِ",
    exampleId: "Aku berpapasan dengan Bakar yang mulia.",
    applicableTo: "Isim Pengikut (Na'at, 'Athaf, Taukid, Badal)",
    explanation: "Isim-isim yang berhukum majrur karena mengekor kata sebelumnya yang sedang berstatus majrur."
  },

  // === MAJZUMAT (Jazm) ===
  {
    id: "r23",
    state: "Majzum",
    nameAr: "الْمَجْزُومُ بِأَدَوَاتٍ تَجْزِمُ فِعْلًا وَاحِدًا",
    nameId: "Majzum Amil Satu Fi'il",
    signAr: "السُّكُونُ / حَذْفُ حَرْفِ الْعِلَّةِ / حَذْفُ النُّونِ",
    signId: "Sukun (Shahih) / Hazfu Harfil 'Illat (Mu'tal) / Hazfun Nuun (Af'alul Khamsah)",
    exampleAr: "لَمْ يَكْتُبْ زَيْدٌ",
    exampleId: "Zaid belum menulis.",
    applicableTo: "Fi'il Mudhari' didahului Lam, Lamma, dkk",
    explanation: "Fi'il mudhari' berhukum majzum karena didahului oleh amil jazm yang menjazmkan satu kata kerja saja (seperti لَمْ, لَمَّا, أَلَمْ, أَلَمَّا, لَامُ الْأَمْرِ, لَا النَّاهِيَةُ)."
  },
  {
    id: "r24",
    state: "Majzum",
    nameAr: "الْمَجْزُومُ بِأَدَوَاتٍ تَجْZِمُ فِعْلَيْنِ (أَدَوَاتُ الشَّرْطِ)",
    nameId: "Majzum Amil Dua Fi'il (Syarat)",
    signAr: "Sesuai jenis fi'il mudhari' (Sukun / Buang Huruf)",
    signId: "Sukun / Hazfu Harfil 'Illat / Hazfun Nuun pada Fi'il Syarat & Jawab Syarat",
    exampleAr: "مَنْ يَجْتَهِدْ يَنْجَحْ",
    exampleId: "Barangsiapa bersungguh-sungguh (fi'il syarat), maka ia akan berhasil (jawab syarat).",
    applicableTo: "Fi'il Syarat & Jawab Syarat",
    explanation: "Dua fi'il mudhari' yang dimajzumkan sekaligus karena dipengaruhi oleh amil syarat (seperti إِنْ, مَنْ, مَا, مَهْمَا, كَيْفَمَا, أَيَّانَ, إِذْمَا)."
  }
];

export const irabQuizQuestions: IrabQuizQuestion[] = [
  {
    id: 1,
    questionAr: "مَا هُوَ إِعْرَابُ كَلِمَةِ (الْمُعَلِّمُونَ) فِي جُمْلَةِ: (حَضَرَ الْمُعَلِّمُونَ)؟",
    questionId: "Apakah i'rab dari kata (الْمُعَلِّمُونَ) dalam kalimat: (حَضَرَ الْمُعَلِّمُونَ)?",
    options: [
      "Fa'il Marfu' dengan tanda rafa' Dhommah",
      "Fa'il Marfu' dengan tanda rafa' Wawu karena Jamak Mudzakkar Salim",
      "Maf'ul Bih Mansub dengan tanda nashab Ya'",
      "Mubtada' Marfu' dengan tanda rafa' Alif"
    ],
    correctAnswerIndex: 1,
    explanation: "Dalam kalimat 'حَضَرَ الْمُعَلِّمُونَ' (para guru telah hadir), kata 'الْمُعَلِّمُونَ' terletak setelah fi'il aktif 'حَضَرَ', sehingga ia berkedudukan sebagai Fa'il (pelaku). Karena merupakan Jamak Mudzakkar Salim, tanda rafa'-nya adalah huruf Wawu (و)."
  },
  {
    id: 2,
    questionAr: "مَا عَلَامَةُ نَصْبِ الْأَسْمَاءِ الْخَمْسَةِ؟",
    questionId: "Apakah tanda nashab untuk Asma'ul Khamsah (Isim yang Lima)?",
    options: [
      "Fathah Zhahirah",
      "Ya' (ي)",
      "Alif (أ)",
      "Kasrah Zhahirah"
    ],
    correctAnswerIndex: 2,
    explanation: "Asma'ul Khamsah (أبو، أخو، حمو، فو، ذو) dirafakan dengan Wawu, dinasabkan dengan Alif (seperti: ذَا عِلْمٍ، أَبَاكَ), dan dijarkan dengan Ya' (seperti: أَبِيكَ)."
  },
  {
    id: 3,
    questionAr: "فِي جُمْلَةِ: (إِنَّ الطَّالِبَاتِ نَشِيطَاتٌ)، لِمَاذَا كَلِمَةُ (الطَّالِبَاتِ) بِالْكَسْرَةِ؟",
    questionId: "Dalam kalimat: (إِنَّ الطَّالِبَاتِ نَشِيطَاتٌ), mengapa kata (الطَّالِبَاتِ) berharakat kasrah?",
    options: [
      "Karena didahului huruf jarr",
      "Karena berkedudukan sebagai mudhaf ilaih",
      "Karena ia Isim Inna yang mansub, dan tanda nashab Jamak Muannats Salim adalah Kasrah",
      "Karena merupakan Jamak Taksir"
    ],
    correctAnswerIndex: 2,
    explanation: "Kata 'الطَّالِبَاتِ' adalah Isim Inna dari 'إِنَّ' yang hukumnya wajib mansub. Karena ia merupakan Jamak Muannats Salim (kata benda jamak perempuan teratur), tanda nashab-nya adalah kasrah sebagai pengganti fathah."
  },
  {
    id: 4,
    questionAr: "عَلَامَةُ جَزْمِ الْفِعْلِ الْمُضَارِعِ الْمُعْتَلِّ الْآخِرِ هِيَ...",
    questionId: "Tanda jazm untuk Fi'il Mudhari' yang Mu'tal Akhir (berakhiran huruf penyakit/illat) adalah...",
    options: [
      "Sukun di akhirnya",
      "Hazfu Harfil 'Illah (membuang huruf penyakit di akhirnya)",
      "Hazfun Nuun (membuang huruf Nun)",
      "Fathah yang diperkirakan"
    ],
    correctAnswerIndex: 1,
    explanation: "Fi'il Mudhari' Mu'tal Akhir (yang berakhiran Alif, Wawu, atau Ya', contoh: يَدْعُو، يَرْمِي، يَسْعَى) jika majzum tanda jazm-nya adalah dengan membuang huruf penyakit tersebut (Hazfu Harfil 'Illah), sehingga menjadi: لَمْ يَدْعُ، لَمْ يَرْمِ، لَمْ يَسْعَ."
  },
  {
    id: 5,
    questionAr: "مَا هُوَ إِعْرَابُ كَلِمَةِ (الدَّرْسَ) فِي: (لَمْ يَكْتُبْ زَيْدٌ الدَّرْسَ)؟",
    questionId: "Apakah i'rab dari kata (الدَّرْسَ) dalam kalimat: (لَمْ يَكْتُبْ زَيْدٌ الدَّرْسَ)?",
    options: [
      "Fa'il marfu' dengan dhommah",
      "Mubtada' marfu' dengan dhommah",
      "Maf'ul Bih mansub dengan fathah zhahirah",
      "Mudhaf ilaih majrur dengan kasrah"
    ],
    correctAnswerIndex: 2,
    explanation: "Kata 'الدَّرْسَ' (pelajaran itu) berkedudukan sebagai Maf'ul Bih (objek penderita) karena ia dikenai tindakan menulis oleh Zaid. Maf'ul Bih ber-i'rab Mansub, dan karena ia Isim Mufrad, tandanya adalah fathah zhahirah di akhirnya."
  },
  {
    id: 6,
    questionAr: "تُرْفَعُ الْأَفْعَالُ الْخَمْسَةُ بِـ...",
    questionId: "Fi'il-fi'il yang lima (Af'alul Khamsah) dirafakan dengan tanda...",
    options: [
      "Dhommah Zhahirah",
      "Alif",
      "Tsubutun Nuun (tetap adanya huruf Nun)",
      "Wawu Jama'ah"
    ],
    correctAnswerIndex: 2,
    explanation: "Af'alul Khamsah (seperti: يفعلان، تفعلان، يفعلون، تفعلون، تفعلين) dirafakan dengan tetap adanya huruf Nun (Tsubutun Nuun) di akhirnya, dan dinasabkan serta dimajzumkan dengan membuang huruf Nun (Hazfun Nuun)."
  },
  {
    id: 7,
    questionAr: "مَا هُوَ الْأَمِلُ الَّذِي يَرْفَعُ الِاسْمَ وَيَنْصِبُ الْخَبَرَ؟",
    questionId: "Amil manakah yang berfungsi merapakan Isim dan menasabkan Khabar?",
    options: [
      "إِنَّ وَأَخَوَاتُهَا (Inna dan saudaranya)",
      "حُرُوفُ الْجَرِّ (Huruf-huruf Jarr)",
      "كَانَ وَأَخَوَاتُهَا (Kaana dan saudaranya)",
      "أَدَوَاتُ الْجَزْمِ (Alat-alat pen-jazm)"
    ],
    correctAnswerIndex: 2,
    explanation: "Kaidah nahwu berbunyi: 'كَانَ تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ' (Kaana merapakan mubtada' sebagai Isim-nya dan menasabkan khabar sebagai Khabar-nya). Kebalikannya adalah Inna yang menasabkan isim dan merapakan khabar."
  },
  {
    id: 8,
    questionAr: "مَا إِعْرَابُ كَلِمَةِ (عِلْمٍ) فِي جُمْلَةِ: (ذَهَبْتُ إِلَى طَالِبِ عِلْمٍ)؟",
    questionId: "Apakah i'rab dari kata (عِلْمٍ) dalam kalimat: (ذَهَبْتُ إِلَى طَالِبِ عِلْمٍ)?",
    options: [
      "Mudhaf Ilaih, Majrur dengan tanda jarr Kasrah Zhahirah",
      "Na'at (sifat), Majrur dengan kasrah",
      "Maf'ul Bih, Mansub dengan fathah",
      "Isim Majrur oleh huruf Jarr Ilaa"
    ],
    correctAnswerIndex: 0,
    explanation: "Susunan 'طَالِبِ عِلْمٍ' adalah susunan Idhafah (penyandaran). 'طَالِبِ' adalah Mudhaf (yang majrur karena kemasukan huruf Jarr 'ilaa'), dan 'عِلْمٍ' adalah Mudhaf Ilaih. Mudhaf Ilaih hukumnya wajib majrur, dalam hal ini bertanda kasrah karena Isim Mufrad."
  },
  {
    id: 9,
    questionAr: "عَلَامَةُ جَرِّ الْإِسْمِ الْمَمْنُوعِ مِنَ الصَّرْفِ إِذَا لَمْ يُضَفْ وَلَمْ تَدْخُلْ عَلَيْهِ (أَلْ) هِيَ...",
    questionId: "Tanda jarr untuk Isim Mamnu' minas Sharf (isim yang dilarang bertanwin) ketika tidak di-idhafah-kan dan tidak kemasukan Alif Lam adalah...",
    options: [
      "Kasrah Zhahirah",
      "Fathah sebagai pengganti kasrah",
      "Ya' (ي)",
      "Sukun"
    ],
    correctAnswerIndex: 1,
    explanation: "Isim Mamnu' minas Sharf (seperti: أَحْمَد، عُمَر، مَسَاجِد) ketika ber-i'rab majrur, tanda jarr-nya adalah Fathah sebagai pengganti kasrah, dengan syarat tidak ber-Alif Lam dan tidak menjadi Mudhaf. Contoh: صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ."
  },
  {
    id: 10,
    questionAr: "أَيُّ كَلِمَةٍ مِمَّا يَلِي مَرْفُوعَةٌ بِالْأَلِفِ؟",
    questionId: "Kata manakah di bawah ini yang berstatus marfu' dengan tanda Alif?",
    options: [
      "الْمُسْلِمُونَ (Al-Muslimuuna)",
      "أَبُوكَ (Abuuka)",
      "الْكِتَابَانِ (Al-Kitaabaani)",
      "الْمُعَلِّمَاتُ (Al-Mu'allimaatu)"
    ],
    correctAnswerIndex: 2,
    explanation: "Isim Mutsanna (kata ganda, contoh: الْكِتَابَانِ - dua buah buku) dirafakan dengan tanda Alif (ا). Sedangkan Jamak Mudzakkar Salim (الْمُسْلِمُونَ) dan Asma'ul Khamsah (أَبُوكَ) dirafakan dengan Wawu, dan Jamak Muannats Salim (الْمُعَلِّمَاتُ) dirafakan dengan Dhommah."
  },
  {
    id: 11,
    questionAr: "مَا هِيَ الْكَلِمَةُ الَّتِي تَعْنِي (الْمَبْنِيُّ) فِي النَّحْوِ؟",
    questionId: "Apakah arti dari istilah (Mabni) dalam tata bahasa Arab?",
    options: [
      "Kata yang harakat akhirnya selalu berubah sesuai posisinya",
      "Kata yang tetap harakat akhirnya dan tidak pernah berubah meskipun posisinya berbeda",
      "Kata benda yang berjenis perempuan",
      "Kata kerja perintah"
    ],
    correctAnswerIndex: 1,
    explanation: "Mabni (مَبْنِي) adalah kata yang harakat atau huruf akhirnya tetap teguh dan tidak mengalami perubahan walaupun dimasuki amil-amil yang berbeda. Kebalikannya adalah Mu'rab (مُعْرَب) yang harakatnya fleksibel berubah."
  },
  {
    id: 12,
    questionAr: "أَيُّ الْأَدَوَاتِ التَّالِيَةِ تَنْصِبُ الْفِعْلَ الْمُضَارِعَ؟",
    questionId: "Alat (huruf) manakah di bawah ini yang menasabkan Fi'il Mudhari'?",
    options: [
      "لَمْ (Lam)",
      "لَنْ (Lan)",
      "لَا النَّاهِيَةُ (Laa Nahi)",
      "فِي (Fi)"
    ],
    correctAnswerIndex: 1,
    explanation: "Amil pen-nashab fi'il mudhari' di antaranya adalah 'لَنْ' (Lan - tidak akan sekali-kali). Sementara 'لَمْ' dan 'لاَ' nahi adalah amil pen-jazm, sedangkan 'فِي' adalah huruf jarr khusus untuk isim."
  },
  {
    id: 13,
    questionAr: "مَا إِعْرَابُ كَلِمَةِ (عُمَرُ) فِي جُمْلَةِ: (ذَهَبَ عُمَرُ إِلَى الْمَدْرَسَةِ)؟",
    questionId: "Apakah i'rab dari kata (عُمَرُ) dalam kalimat: (ذَهَبَ عُمَرُ إِلَى الْمَدْرَسَةِ)?",
    options: [
      "Fa'il Marfu' dengan dhommah zhahirah",
      "Mubtada' Marfu' dengan dhommah",
      "Maf'ul Bih Mansub dengan fathah",
      "Isim Majrur dengan kasrah"
    ],
    correctAnswerIndex: 0,
    explanation: "Kata 'عُمَرُ' berkedudukan sebagai Fa'il (pelaku) setelah kata kerja aktif 'ذَهَبَ'. Hukum Fa'il adalah Marfu', dan tandanya adalah dhommah zhahirah (tunggal, tanpa tanwin karena mamnu' minas sharf)."
  },
  {
    id: 14,
    questionAr: "عَلَامَةُ رَفْعِ الْأَسْمَاءِ الْخَمْسَةِ هِيَ...",
    questionId: "Tanda rafa' (marfu') untuk Asma'ul Khamsah (Isim yang lima) adalah...",
    options: [
      "Dhommah",
      "Alif",
      "Wawu (و)",
      "Nun"
    ],
    correctAnswerIndex: 2,
    explanation: "Asma'ul Khamsah dirafakan dengan huruf Wawu (seperti: أَبُوكَ، أَخُوكَ، ذُو مَالٍ), dinasabkan dengan Alif (أَبَاكَ), dan dijarkan dengan Ya' (أَبِيكَ)."
  },
  {
    id: 15,
    questionAr: "مَا هُوَ إِعْرَابُ (الْكِتَابُ) فِي: (الْكِتَابُ جَدِيدٌ)؟",
    questionId: "Apakah i'rab dari kata (الْكِتَابُ) dalam kalimat: (الْكِتَابُ جَدِيدٌ)?",
    options: [
      "Khabar Mubtada' marfu' dengan dhommah",
      "Mubtada' Marfu' dengan tanda rafa' Dhommah Zhahirah",
      "Fa'il marfu' dengan dhommah",
      "Isim Inna mansub dengan fathah"
    ],
    correctAnswerIndex: 1,
    explanation: "Kata 'الْكِتَابُ' adalah isim makrifat berharakat dhommah di awal kalimat, sehingga berkedudukan sebagai Mubtada' (subjek). Mubtada' hukumnya marfu', dan tandanya dhommah zhahirah karena Isim Mufrad."
  }
];

// Data helper for I'rab Builder/Synthesis formulation
export const builderData = {
  wordTypes: [
    { id: "mufrad", label: "Isim Mufrad (Kata Tunggal)", arabic: "اِسْمٌ مُفْرَدٌ" },
    { id: "mutsanna", label: "Isim Mutsanna (Kata Ganda)", arabic: "مُثَنًّى" },
    { id: "jamak_mudzakkar", label: "Jamak Mudzakkar Salim (Laki-laki Jamak)", arabic: "جَمْعُ مُذَكَّرٍ سَالِمٌ" },
    { id: "jamak_muannats", label: "Jamak Muannats Salim (Perempuan Jamak)", arabic: "جَمْعُ مُؤَنَّثٍ سَالِمٌ" },
    { id: "jamak_taksir", label: "Jamak Taksir (Jamak Pecahan)", arabic: "جَمْعُ تَكْسِيْرٍ" },
    { id: "asma_khamsah", label: "Asma'ul Khamsah (Isim yang Lima)", arabic: "الْأَسْمَاءُ الْخَمْسَةُ" },
    { id: "mamnu_sharf", label: "Isim Ghairu Munsarif / Mamnu' minas Sharf", arabic: "الْمَمْنُوْعُ مِنَ الصَّرْفِ" },
    { id: "fiil_shahih", label: "Fi'il Mudhari' Shahihul Akhir", arabic: "فِعْلٌ مُضَارِعٌ صَحِيْحُ الْآخِرِ" },
    { id: "fiil_mutal", label: "Fi'il Mudhari' Mu'tal Akhir", arabic: "فِعْلٌ مُضَارِعٌ مُعْتَلُّ الْآخِرِ" },
    { id: "afal_khamsah", label: "Af'alul Khamsah (Fi'il yang Lima)", arabic: "الْأَفْعَالُ الْخَمْسَةُ" }
  ],
  states: [
    { id: "marfu", label: "Marfu' (Keadaan Rafa')", arabic: "مَرْفُوْعٌ" },
    { id: "mansub", label: "Mansub (Keadaan Nashab)", arabic: "مَنْصُوْبٌ" },
    { id: "majrur", label: "Majrur / Makhfudh (Keadaan Jarr)", arabic: "مَجْرُوْرٌ" },
    { id: "majzum", label: "Majzum (Keadaan Jazm)", arabic: "مَجْزُوْمٌ" }
  ],
  roles: [
    { id: "mubtada", label: "Mubtada' (Subjek di awal)", state: "marfu", arabic: "مُبْتَدَأٌ" },
    { id: "khabar", label: "Khabar (Predikat Mubtada')", state: "marfu", arabic: "خَبَرُ الْمُبْتَدَأِ" },
    { id: "fail", label: "Fa'il (Pelaku kata kerja aktif)", state: "marfu", arabic: "فَاعِلٌ" },
    { id: "naibul_fail", label: "Na'ibul Fa'il (Pengganti pelaku pasif)", state: "marfu", arabic: "نَائِبُ الْفَاعِلِ" },
    { id: "isim_kaana", label: "Isim Kaana (Subjek Kaana)", state: "marfu", arabic: "اِسْمُ كَانَ" },
    { id: "khabar_inna", label: "Khabar Inna (Predikat Inna)", state: "marfu", arabic: "خَبَرُ إِنَّ" },
    
    { id: "maful_bih", label: "Maf'ul Bih (Objek)", state: "mansub", arabic: "مَفْعُوْلٌ بِهِ" },
    { id: "isim_inna", label: "Isim Inna (Subjek Inna)", state: "mansub", arabic: "اِسْمُ إِنَّ" },
    { id: "khabar_kaana", label: "Khabar Kaana (Predikat Kaana)", state: "mansub", arabic: "خَبَرُ كَانَ" },
    { id: "hal", label: "Hal (Penjelas keadaan pelaku/objek)", state: "mansub", arabic: "حَالٌ" },
    { id: "tamyiz", label: "Tamyiz (Penjelas ketidakjelasan)", state: "mansub", arabic: "تَمْيِيْزٌ" },
    { id: "zharaf_zaman", label: "Zharaf Zaman (Keterangan waktu)", state: "mansub", arabic: "ظَرْفُ زَمَانٍ" },
    { id: "zharaf_makan", label: "Zharaf Makan (Keterangan tempat)", state: "mansub", arabic: "ظَرْفُ مَكَانٍ" },
    
    { id: "majrur_harf", label: "Isim Majrur oleh Huruf Jarr", state: "majrur", arabic: "اِسْمٌ مَجْرُوْرٌ بِالْحَرْفِ" },
    { id: "mudhaf_ilah", label: "Mudhaf Ilaih (Kata yang disandarkan)", state: "majrur", arabic: "مُضَافٌ إِلَيْهِ" },
    
    { id: "fiil_marfu", label: "Fi'il Mudhari' Marfu' (bebas amil)", state: "marfu", arabic: "فِعْلٌ مُضَارِعٌ" },
    { id: "fiil_mansub", label: "Fi'il Mudhari' Mansub (diawali amil nashab)", state: "mansub", arabic: "فِعْلٌ مُضَارِعٌ مَنْصُوْبٌ" },
    { id: "fiil_majzum", label: "Fi'il Mudhari' Majzum (diawali amil jazm)", state: "majzum", arabic: "فِعْلٌ مُضَارِعٌ مَجْزُوْمٌ" }
  ],
  signs: [
    { id: "dhommah_zhahirah", label: "Dhommah Zhahirah (ـُ)", state: ["marfu"], arabic: "الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ" },
    { id: "dhommah_muqaddarah", label: "Dhommah Muqaddarah (diperkirakan)", state: ["marfu"], arabic: "الضَّمَّةُ الْمُقَدَّرَةُ" },
    { id: "alif", label: "Huruf Alif (ا)", state: ["marfu"], arabic: "الْأَلِفُ" },
    { id: "wawu", label: "Huruf Wawu (و)", state: ["marfu"], arabic: "الْوَاوُ" },
    { id: "tsubut_nun", label: "Tsubutun Nuun (ثبوت النون)", state: ["marfu"], arabic: "ثُبُوْتُ النُّوْنِ" },
    
    { id: "fathah_zhahirah", label: "Fathah Zhahirah (ـَ)", state: ["mansub"], arabic: "الْفَتْحَةُ الظَّاهِرَةُ عَلَى آخِرِهِ" },
    { id: "fathah_muqaddarah", label: "Fathah Muqaddarah", state: ["mansub"], arabic: "الْفَتْحَةُ الْمُقَدَّرَةُ" },
    { id: "alif_nasb", label: "Huruf Alif (ا)", state: ["mansub"], arabic: "الْأَلِفُ" },
    { id: "ya_nasb_jarr", label: "Huruf Ya' (ي)", state: ["mansub", "majrur"], arabic: "الْيَاءُ" },
    { id: "kasrah_nasb", label: "Kasrah Zhahirah (ـِ) pengganti Fathah", state: ["mansub"], arabic: "الْكَسْرَةُ نِيَابَةً عَنِ الْفَتْحَةِ" },
    { id: "hazf_nun", label: "Hazfun Nuun (حذف النون)", state: ["mansub", "majzum"], arabic: "حَذْفُ النُّوْنِ" },
    
    { id: "kasrah_zhahirah", label: "Kasrah Zhahirah (ـِ)", state: ["majrur"], arabic: "الْكَسْرَةُ الظَّاهِرَةُ عَلَى آخِرِهِ" },
    { id: "fathah_jarr", label: "Fathah Zhahirah (ـَ) pengganti Kasrah", state: ["majrur"], arabic: "الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ" },
    
    { id: "sukun", label: "Sukun (ـْ)", state: ["majzum"], arabic: "السُّكُوْنُ" },
    { id: "hazf_illah", label: "Hazfu Harfil 'Illah (حذف حرف العلة)", state: ["majzum"], arabic: "حَذْفُ حَرْفِ الْعِلَّةِ" }
  ]
};

// Help map specific combinations to check for correctness
export function checkCombinationValidity(wordType: string, state: string, sign: string): { isValid: boolean; recommendedSign?: string; comment: string } {
  const map: Record<string, Record<string, string>> = {
    mufrad: { marfu: "dhommah_zhahirah", mansub: "fathah_zhahirah", majrur: "kasrah_zhahirah" },
    mutsanna: { marfu: "alif", mansub: "ya_nasb_jarr", majrur: "ya_nasb_jarr" },
    jamak_mudzakkar: { marfu: "wawu", mansub: "ya_nasb_jarr", majrur: "ya_nasb_jarr" },
    jamak_muannats: { marfu: "dhommah_zhahirah", mansub: "kasrah_nasb", majrur: "kasrah_zhahirah" },
    jamak_taksir: { marfu: "dhommah_zhahirah", mansub: "fathah_zhahirah", majrur: "kasrah_zhahirah" },
    asma_khamsah: { marfu: "wawu", mansub: "alif_nasb", majrur: "ya_nasb_jarr" },
    mamnu_sharf: { marfu: "dhommah_zhahirah", mansub: "fathah_zhahirah", majrur: "fathah_jarr" },
    fiil_shahih: { marfu: "dhommah_zhahirah", mansub: "fathah_zhahirah", majzum: "sukun" },
    fiil_mutal: { marfu: "dhommah_muqaddarah", mansub: "fathah_zhahirah", majzum: "hazf_illah" },
    afal_khamsah: { marfu: "tsubut_nun", mansub: "hazf_nun", majzum: "hazf_nun" }
  };

  const allowedState = map[wordType];
  if (!allowedState) {
    return { isValid: false, comment: "Kombinasi jenis kata tidak valid." };
  }

  const expectedSignId = allowedState[state];
  if (!expectedSignId) {
    return { isValid: false, comment: `Jenis kata ini tidak menerima i'rab ${state.toUpperCase()}.` };
  }

  if (expectedSignId === sign) {
    return { isValid: true, comment: "Luar biasa! Kombinasi I'rab ini 100% akurat sesuai kaidah bahasa Arab." };
  } else {
    return { 
      isValid: false, 
      recommendedSign: expectedSignId, 
      comment: "Tanda I'rab kurang tepat untuk jenis kata dan keadaan ini." 
    };
  }
}

// Generate the beautiful Arabic I'rab formulation string
export function generateFormalIrabString(params: {
  wordAr: string;
  roleAr: string;
  stateAr: string;
  signAr: string;
  reasonAr: string;
}): { arabic: string; indonesian: string } {
  // Synthesize Arabic phrase
  // e.g. "الْعِلْمُ: مُبْتَدَأٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ لِأَنَّهُ اِسْمٌ مُفْرَدٌ"
  const isFiil = params.roleAr.includes("فِعْلٌ");
  const isMajrur = params.stateAr === "مَجْرُوْرٌ";
  const stateActionWordAr = params.stateAr === "مَرْفُوْعٌ" ? "رَفْعِهِ" :
                            params.stateAr === "مَنْصُوْبٌ" ? "نَصْبِهِ" :
                            isMajrur ? "جَرِّهِ" : "جَزْمِهِ";
                            
  const arabic = `${params.wordAr || "الْكَلِمَةُ"}: ${params.roleAr} ${params.stateAr} وَعَلَامَةُ ${stateActionWordAr} ${params.signAr} لِأَنَّهُ ${params.reasonAr}`;
  
  // Synthesize Indonesian explanation
  const indonesian = `${params.wordAr || "Kata tersebut"} berkedudukan sebagai ${params.roleAr.replace(/[ٌٌ]/g, "")} yang berstatus ${params.stateAr.replace(/[ٌٌ]/g, "")} dengan tanda i'rab berupa ${params.signAr.replace(/[َُِْ]/g, "")} karena ia termasuk dalam kategori ${params.reasonAr.replace(/[ٌٌ]/g, "")}.`;

  return { arabic, indonesian };
}
