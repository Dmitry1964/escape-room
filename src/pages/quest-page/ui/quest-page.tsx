import styles from './quest-page.module.scss';

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchQuest } from 'src/app/actions/api-actions';
import Container from 'src/shared/container/container';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';

const QuestPage = () => {
  const { questId } = useParams();
  const { title, coverImgWebp, coverImg } = useAppSelector((state) => state.detailedQuest.quest);

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
              <span className={styles.quest__type}>ужасы</span>
              <h2 className={styles.quest__title}>маньяк</h2>
              <ul>
                <li>
                  <img src="/svg/person.svg" width={19} alt="asdsdsd" />
                  <span>3 - 5</span>
                  <span>чел</span>
                </li>
                <li>
                  <img src="/svg/puzzle.svg" width={24} height={16} alt="иконка персона" />
                  <span>Сложный</span>
                </li>
              </ul>
              <p>В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связанным, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?</p>
              <Link className={styles.quest__link} to='#'>Забронировать</Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default QuestPage;
