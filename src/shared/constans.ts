export enum ApiActions {
  DataFetchQuestsList = 'data/fetchQuestsList',
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
