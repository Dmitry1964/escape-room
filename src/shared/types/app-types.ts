export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevelNames;
  type: QuestTypeNames;
  peopleMinMax: [number];
}

export type TDetailQuest = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export enum QuestLevelNames {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuestTypeNames {
  All = 'allQuests',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export type TFiltersType = {
  url: string;
  name: string;
  width: number;
  height: number;
  alt: string;
  value: string;
}

export type TFiltersLevel = {
  name: string;
  value: string;
}

export type TFilters = {
  type: QuestTypeNames;
  level: string;
}
