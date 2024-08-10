import { FiltersType } from 'src/features/filters-type';
import styles from './catalog.module.scss';
import { FiltersLevel } from 'src/features/filters-level';
import { useAppDispatch } from 'src/shared/hooks';
import { fetchQuestsList } from 'src/app/actions/api-actions';
import { useEffect } from 'react';


const Catalog = () : JSX.Element => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestsList())
  }, [dispatch]);

  return (
    <section className={styles.catalog}>
      <h1>квесты в Санкт-Петербурге</h1>
      <h2>Выберите тематику</h2>

      <FiltersType/>
      <FiltersLevel />
    </section>
  )
};

export default Catalog;
