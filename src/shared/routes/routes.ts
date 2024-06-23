
export enum FetchRoutes {
  Quest= 'quest',
  Booking = 'booking',
  Reservation = 'reservation',
  Login = 'login',
  Logout = 'logout'
}

export enum AppRoutes {
  Catalog = '/',
  Contacts = 'contacts',
  Reservation = 'reservation',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'success',
  Reject = 'error',
}

export enum ApiActions {
  FetchDataQuestsList = 'data/fetchQuestsList',
}
