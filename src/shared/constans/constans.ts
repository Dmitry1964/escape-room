import { TSortTypeItem } from "../types/app-types";

export const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
export const TIME_OUT = 5000;

export const sortType : TSortTypeItem[] = [
  {
    id: 'icon-all-quests',
    name: 'Все квесты',
    width: '23',
    height: '30',
  },
  {
    id: 'icon-adventure',
    name: 'Приключения',
    width: '36',
    height: '30',
  },
  {
    id: 'icon-horror',
    name: 'Ужасы',
    width: '30',
    height: '30',
  },
  {
    id: 'icon-mystic',
    name: 'Мистика',
    width: '30',
    height: '30',
  },
  {
    id: 'icon-detective',
    name: 'Детектив',
    width: '40',
    height: '26' ,

  },
  {
    id: 'icon-sci-fi',
    name: 'Sci-fi',
    width: '28',
    height: '30',
  },
]

export const sortLevel = ['Любой', 'Лёгкий', 'Средний', 'Сложный'];
