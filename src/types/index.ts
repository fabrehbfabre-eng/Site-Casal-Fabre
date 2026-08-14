export interface ChapterItem {
  number: string;
  title: string;
  subtitle: string;
  highlight: string;
  theme: string;
  actionSummary: string;
}

export interface BonusItem {
  id: number;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  focus?: string;
  format?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface InsideBookFeature {
  title: string;
  tag: string;
  description: string;
  example: string;
}
