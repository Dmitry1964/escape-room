import { FiltersType } from 'src/features/filters-type';
import styles from './catalog.module.scss';
import { FiltersLevel } from 'src/features/filters-level';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { fetchQuestsList } from 'src/app/actions/api-actions';
import React, { useEffect, useState } from 'react';
import { QuestCard } from 'src/widgets/quest-card';
import { Link } from 'react-router-dom';
import { QuestTypeNames, QuestLevelNames, TFilters} from 'src/app/types/app-types';

const Catalog = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const questsList = useAppSelector((state) => state.questsList.quests);

  const [filters, setFilters] = useState<TFilters>({ type: QuestTypeNames.All, level: QuestLevelNames.Any });

  const handleFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.closest('input')?.value;

    if (value) {
      setFilters({ ...filters, type: value as QuestTypeNames });
    }
  };

  const handleFilterLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.closest('input')?.value;
    if (value) {
      setFilters({ ...filters, level: value as QuestLevelNames });
    }
  };
  const filteredQuestByType = () => {
    if (filters.type.toLowerCase() === QuestTypeNames.All.toLowerCase()) {
      return questsList;
    } else {
      return [...questsList]
        .filter((item) => item.type.toLowerCase() === filters.type.toLowerCase());
    }
  };

  const filteredQuest = () => {
    const quests = filteredQuestByType();
    if (filters.level.toLowerCase() === QuestLevelNames.Any.toLowerCase()) {
      return quests;
    } else {
      return [...quests].filter((item) => item.level.toLowerCase() === filters.level.toLowerCase());
    }
  };

  useEffect(() => {
    dispatch(fetchQuestsList());
  }, [dispatch, filters]);

  return (
    <main>
      <section className={styles.catalog}>
        <h1>квесты в Санкт-Петербурге</h1>
        <h2>Выберите тематику</h2>
        <FiltersType selectFilterType={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterType(e)} filters={filters} />
        <FiltersLevel selectFilterLevel={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterLevel(e)} filters={filters} />
        <div className={styles.catalog__list}>
          {filteredQuest()?.map((quest) => (
            <Link key={quest.id} to={'#'}>
              <QuestCard questCard={quest} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Catalog;
