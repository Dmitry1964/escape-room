import { FiltersType } from 'src/features/filters-type';
import styles from './catalog.module.scss';
import { FiltersLevel } from 'src/features/filters-level';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { fetchQuestsList } from 'src/app/actions/api-actions';
import { useEffect } from 'react';
import { QuestCard } from 'src/widgets/quest-card';
import { Link } from 'react-router-dom';


const Catalog = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const questsList = useAppSelector((state) => state.questsList.quests);



  useEffect(() => {
    dispatch(fetchQuestsList())
  }, [dispatch]);

  return (
    <main>
      <section className={styles.catalog}>
        <h1>квесты в Санкт-Петербурге</h1>
        <h2>Выберите тематику</h2>
        <FiltersType />
        <FiltersLevel />
        <div className={styles.catalog__list}>
          {questsList.map((quest) => (
            <Link key={quest.id} to={ '#'}>
              <QuestCard questCard={quest} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
};

export default Catalog;
