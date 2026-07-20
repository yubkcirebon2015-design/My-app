export interface Chapter {
  id: string;
  grade: number; // 7, 8, 9
  titleAr: string;
  titleId: string;
  definitionAr: string;
  definitionId: string;
  kaidah: string[];
  rumus: string;
  latihan: string[]; // 5 questions
}

export interface DialogueLine {
  speaker: string;
  textAr: string;
  textId: string;
}

export interface Hiwar {
  id: string;
  theme: string;
  title: string;
  lines: DialogueLine[]; // Must be exactly 8 paragraphs (lines)
}

export interface Biography {
  name: string;
  title: string;
  alias: string;
  description: string;
  quotes: string[];
  education: string[];
  principles: string[];
}

export interface Isim {
  id: string;
  singularAr: string;
  singularId: string;
  pluralAr: string;
  pluralId: string;
  category: string;
}

export interface Fiil {
  id: string;
  madhiAr: string;
  mudhoriAr: string;
  amrAr: string;
  meaningId: string;
  category: string;
}

export interface StoryParagraph {
  arabic: string;
  translation: string;
}

export interface Story {
  id: string;
  titleAr: string;
  titleId: string;
  category: string;
  moralId: string;
  paragraphs: StoryParagraph[]; // Exactly 10 paragraphs
}


