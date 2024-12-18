import { QuestLevelNames, QuestTypeNames } from './types/app-types';

export const getQuestTypeNames = (param : QuestTypeNames) => {
  let questName = '';
  switch (param) {
    case QuestTypeNames.Adventures:
      questName = 'приключения';
      break;
    case QuestTypeNames.Detective:
      questName = 'детектив';
      break;
    case QuestTypeNames.Horror:
      questName = 'ужасы';
      break;
    case QuestTypeNames.Mystic:
      questName = 'мистика';
      break;
    case QuestTypeNames.SciFi:
      questName = 'фантастика';
      break;
  }

  return questName;
};

export const getQuestLevelNames = (param: QuestLevelNames) => {
  let levelName = '';
  switch (param) {
    case QuestLevelNames.Easy:
      levelName = 'лёгкий';
      break;
    case QuestLevelNames.Hard:
      levelName = 'тяжёлый';
      break;
    case QuestLevelNames.Medium:
      levelName = 'средний';
      break;
  }
  return levelName;
};

export const getQuestDateName = (param: 'today' | 'tomorrow') => {
  let dateName = '';
  switch (param) {
    case 'today':
      dateName = 'сегодня';
      break;
    case 'tomorrow':
      dateName = 'завтра';
      break;
  }
  return dateName;
};
