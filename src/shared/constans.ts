export enum ApiActions {
  DataFetchQuestsList = 'data/fetchQuestsList',
  DataFetchQuest = 'data/fetchQuest',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}

export enum FilterTypeNames {
  All = 'All',
  Adventure = 'Adventure',
  Horror = 'Horror',
  Mystic = 'Mystic',
  Detective = 'Detective',
  SciFi = 'SciFi',
}

export const questsType = {
  'adventure': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Научная фантастика',
};

