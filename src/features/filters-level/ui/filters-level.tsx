import FilterItemLevel from 'src/shared/filtyer-item-level/filter-item-level';
import styles from './filters-level.module.scss';
import { TFilters, TFiltersLevel } from 'src/app/types/app-types';

const filtersLevel: TFiltersLevel[] = [
  {
    name: 'Любой',
    value: 'any'
  },
  {
    name: 'Лёгкий',
    value: 'easy'
  },
  {
    name: 'Средний',
    value: 'middle'
  },
  {
    name: 'Сложный',
    value: 'hard'
  },
];

type TFiltersLevelProps = {
  selectFilterLevel: (e:React.ChangeEvent<HTMLInputElement>) => void;
  filters: TFilters;
}

const FiltersLevel = ({selectFilterLevel, filters}: TFiltersLevelProps): JSX.Element => (
  <div className={styles.filter_level}>
    <ul className={styles.filter_level__list}>
      {filtersLevel.map((item) => (
        <li className={styles.filter_level__item} key={item.value}>
          <FilterItemLevel item = {item} selectFilterLevel={selectFilterLevel} filters={filters} />
        </li>
      ))}
    </ul>
  </div>
);

export default FiltersLevel;
