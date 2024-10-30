import { QuestTypeNames } from './types/app-types';

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
