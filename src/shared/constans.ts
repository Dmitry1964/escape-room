import L from 'leaflet';

export enum ApiActions {
  DataFetchQuestsList = 'data/fetchQuestsList',
  DataFetchQuest = 'data/fetchQuest',
  CheckUserAuth = 'user/checkStatus',
  SetUserAuth = 'user/setAuthorization',
  RemoveUserAuth = 'user/removeAuthorization',
  InfoFetchBookingQuest = 'info/fetchBookingQuest',
  UserBookQuest = 'user/bookQuest',
  DataReservationList = 'data/fetchReservationList',
  RemoveReservationQuest = 'quest/deleteReservation',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error',
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

export const questLevel = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий',
};

export const defaultIcon = L.icon({
  iconUrl: 'svg/marker.svg',
  iconSize: [23, 42],
  iconAnchor: [12, 42],
});

export const activeIcon = L.icon({
  iconUrl: 'svg/activeMarker.svg',
  iconSize: [23, 42],
  iconAnchor: [12, 42],
});
