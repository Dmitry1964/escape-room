import { TFilters, TFiltersLevel } from 'src/app/types/app-types';
import styles from './filter-item-level.module.scss';
import cn from 'classnames';

type TFiltersItemLevelProps = {
  item: TFiltersLevel;
  selectFilterLevel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filters: TFilters;
}

const FilterItemLevel = ({ item, selectFilterLevel, filters }: TFiltersItemLevelProps) => {
  const {name, value} = item;
  return (
    <label className={styles.root}>
      <input onChange={(e) => selectFilterLevel(e)} className={styles.input__field} type='radio' name='filter-level' value={value } />
      <span className={cn(styles.input__label, {[styles.isActive]: filters.level.toLowerCase() === value.toLowerCase()})}>{ name}</span>
    </label>
  );
};
export default FilterItemLevel;
