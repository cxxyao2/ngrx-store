export interface Article {
  id: number;
  title: string;
  category: string;
}

export const JAVA_ARTICLES: Article[] = [
  { id: 1, title: 'Java Article1', category: 'Java' },
  { id: 2, title: 'Java Article2', category: 'Java' },
  { id: 3, title: 'Java Article3', category: 'Java' },
];

export const ANGULAR_ARTICLES: Article[] = [
  { id: 1, title: 'Angular Article1', category: 'Angular' },
  { id: 2, title: 'Angular Article2', category: 'Angular' },
  { id: 3, title: 'Angular Article3', category: 'Angular' },
];

export const FAVORITE_ARTICLES: Article[] = [
  { id: 1, title: 'Java Article1', category: 'Java' },
  { id: 2, title: 'Angular Article2', category: 'Angular' },
];
