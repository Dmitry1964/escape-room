export enum ApiActions {
  DataFetchQuestsList = 'data/fetchQuestsList',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}
