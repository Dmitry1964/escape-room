import styles from './quest-card.module.scss';

// type TQueatCardProps = {
//   questCard: TQuest;
// }

const QuestCard = (): JSX.Element => {

  // const {id} = questCard;
  return (
    <article className={styles.quest_card}>
      <div className={styles.quest_card__wrapper}>
        <div className={styles.quest_card__img}>
          <picture>
          <img src="content/tomb.jpg" width={344} height={232} alt="aaa" />
          </picture>
        </div>
        <div className={styles.quest_card__info}>
          <h3>Склеп</h3>
          <ul>
            <li>
              <img src="svg/person.svg" width={13} height={16} alt="иконка персона" />
              <span>2-5 чел</span>
            </li>
            <li>
            <img src="svg/puzzle.svg" width={16} height={16} alt="иконка персона" />
            <span>сложный</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
};

export default QuestCard;
