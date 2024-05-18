
export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMax: [number];
}

export type TQuestInfo = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type TBookingInfo = {
  id: string;
  location: {
    address: string
    coords: [number]
  };
  slots: {
    today: [{
      time: string
      isAvailable: boolean
    }]
    tomorrow: [{
      time: string
      isAvailable: boolean
    }]
  }
}

export type BookingPlace = {
  date: DateQuest;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type TUserReservation = {
  date: DateQuest;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string
    coords: [number]
  };
  quest: TQuest;
}

export type TAuchStatus = {
  email: string;
  token: string;
}

export type TUserData = {
  email: string;
  password: string;
}

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export enum DateQuest {
  Today = 'today',
  Tomorrow = 'tomorrow'
}
