import styles from './quest-page.module.scss';

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchQuest } from 'src/app/actions/api-actions';
import Container from 'src/shared/container/container';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { questsType } from 'src/shared/constans';

const QuestPage = () => {
  const { questId } = useParams();
  const detailedQuest = useAppSelector((state) => state.detailedQuest.quest);
  const { title, coverImgWebp, coverImg, type, peopleMinMax, description } = detailedQuest;

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
              <img src={coverImg} width={1366} alt={`картинка квеста ${title}`} />
            </picture>
          </div>
          <div className={styles.quest__info}>
            <div className={styles.quest__info_wrapper}>
              {questsType &&
                <span className={styles.quest__type}>{questsType[type as keyof typeof questsType].toLowerCase()}</span>}
              <h2 className={styles.quest__title}>{title}</h2>
              <ul className={styles.quest__options_list}>
                <li>
                  <img src="/svg/person.svg" width={19} alt="asdsdsd" />
                  {peopleMinMax.length > 0 &&
                    <span>{`${peopleMinMax[0]} - ${peopleMinMax[0]}`}</span>}
                  <span>чел</span>
                </li>
                <li>
                  <img src="/svg/puzzle.svg" width={24} height={16} alt="иконка персона" />
                  <span></span>
                </li>
              </ul>
              <p className={styles.quest__description}>{description}</p>
              <Link className={styles.quest__link} to='#'>Забронировать</Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default QuestPage;
