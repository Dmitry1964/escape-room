import { TBookingUsersInfo } from 'src/shared/types/app-types';
import styles from './reservation-card.module.scss';
import { getQuestLevelNames, getQuestDateName } from 'src/shared/service';

type TReservationQuestProps = {
  questCard: TBookingUsersInfo;
  removeQuest: (id: string) => void;
}


const ReservationQuestCard = ({ questCard, removeQuest }: TReservationQuestProps): JSX.Element => {

  const { quest, date, time, location, peopleCount, id } = questCard;
  const { previewImg, previewImgWebp, title, level } = quest;

  return (
    <article className={styles.reservation_card}>
      <div className={styles.reservation_card__wrapper}>
        <div className={styles.reservation_card__img}>
          <picture>
            <source type='image/webp' srcSet={previewImgWebp} />
            <img src={previewImg} width={344} height={232} alt={`картинка квеста ${title}`} />
          </picture>
        </div>
        <div className={styles.reservation_card__info}>
          <h3>{title}</h3>
          <span>{`${getQuestDateName(date)} ${time} ${location.address}`}</span>
          <div className={styles.reservation_card__content}>
            <ul>
              <li>
                <img src="svg/person.svg" width={13} height={16} alt="иконка персона" />
                <span>{peopleCount}</span>
                <span>{' чел'}</span>
              </li>
              <li>
                <img src="svg/puzzle.svg" width={16} height={16} alt="иконка персона" />
                <span>{getQuestLevelNames(level)}</span>
              </li>
            </ul>
            <button
              onClick={() => removeQuest(id)}
              className={styles.reservation_card__button}
            >Отменить
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReservationQuestCard;
