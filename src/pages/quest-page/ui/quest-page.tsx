import styles from './quest-page.module.scss';

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchQuest } from 'src/app/actions/api-actions';
import Container from 'src/shared/container/container';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { questsType } from 'src/shared/constans';
import { getQuestTypeNames, getQuestLevelNames } from 'src/shared/service';
import { AuthStatus } from 'src/shared/types/app-types';
import { AppRoutes } from 'src/shared/routes/routes';

const QuestPage = () => {
  const { questId } = useParams();
  const { title, coverImgWebp, coverImg, type, peopleMinMax, description, level } = useAppSelector((state) => state.detailedQuest.quest);
  const authStatus = useAppSelector((state) => state.userAuthStatus.authStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuest(questId));
    }
  }, [dispatch, questId]);

  return (
    <main>
      <Container>
        <section className={styles.quest} >
          <div className={styles.quest__image}>
            <picture>
              <source type='image/webp' srcSet={coverImgWebp} />
              <img src={coverImg} alt={`картинка квеста ${title}`} />
            </picture>
          </div>
          <div className={styles.quest__info}>
            <div className={styles.quest__info_wrapper}>
              {questsType &&
                <span className={styles.quest__type}>{getQuestTypeNames(type)}</span>}
              <h2 className={styles.quest__title}>{title}</h2>
              <ul className={styles.quest__options_list}>
                <li>
                  <img src="/svg/person.svg" width={19} alt="asdsdsd" />
                  {peopleMinMax.length &&
                    <span>{`${peopleMinMax[0]} - ${peopleMinMax[1]}`}</span>}
                  <span>чел</span>
                </li>
                <li>
                  <img src="/svg/puzzle.svg" width={24} height={16} alt="иконка персона" />
                  <span>{getQuestLevelNames(level)}</span>
                </li>
              </ul>
              <p className={styles.quest__description}>{description}</p>
              {authStatus === AuthStatus.NoAuth &&
                <Link className={styles.quest__link} to={AppRoutes.Login}>Забронировать</Link>}
              {authStatus === AuthStatus.Auth &&
                <Link className={styles.quest__link} to={AppRoutes.Booking}>Забронировать</Link>}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default QuestPage;
