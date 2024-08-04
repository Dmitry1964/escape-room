export type TQuest = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: QuestLevel;
    type: QuestType;
    peopleMinMax: [number];
}

export type TDetailQuest = TQuest & {
    description: string;
    coverImg: string;
    coverImgWebp: string;
}


export enum QuestLevel {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export enum QuestType {
    Adventures = 'adventures',
    Horror = 'horror',
    Mystic = 'mystic',
    Detective = 'detective',
    SciFi = 'sci-fi'
}