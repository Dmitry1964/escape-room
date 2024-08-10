import { FiltersType } from 'src/features/filters-type';
import styles from './catalog.module.scss';
import { FiltersLevel } from 'src/features/filters-level';


const Catalog = () : JSX.Element => {
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
