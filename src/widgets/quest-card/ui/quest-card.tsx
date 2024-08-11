import { TQuest } from 'src/app/types/app-types';
import styles from './quest-card.module.scss';

type TQuestCardProps = {
  questCard: TQuest;
}

const QuestCard = ({ questCard }: TQuestCardProps): JSX.Element => {

  const { previewImgWebp, previewImg, title, peopleMinMax, level } = questCard;

  return (
    <article className={styles.quest_card}>
      <div className={styles.quest_card__wrapper}>
        <div className={styles.quest_card__img}>
          <picture>
            <source type='image/webp' srcSet={previewImgWebp} />
            <img src={previewImg} width={344} height={232} alt={`картинка квеста ${title}`} />
          </picture>
        </div>
        <div className={styles.quest_card__info}>
          <h3>{title}</h3>
          <ul>
            <li>
              <img src="svg/person.svg" width={13} height={16} alt="иконка персона" />
              {peopleMinMax.map((item) => (
                <span key={item}>{item}</span>
              ))}
              <span>{` чел`}</span>
            </li>
            <li>
              <img src="svg/puzzle.svg" width={16} height={16} alt="иконка персона" />
              <span>{level}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
};

export default QuestCard;
