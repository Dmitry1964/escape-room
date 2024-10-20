import styles from './filter-item-img.module.scss';
import { TFilters, TFiltersType } from 'src/shared/types/app-types';
import cn from 'classnames';

type TFilterItemImgProps = {
  filterItem: TFiltersType;
  selectFilterType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filters: TFilters;
}

const FilterItemImg = ({ filterItem, selectFilterType, filters }: TFilterItemImgProps) => {
  const { url, name, width, height, alt, value } = filterItem;
  return (
    <label className={styles.root} >
      <input onChange={(e) => selectFilterType(e)} className={styles.input__field} type="radio" name="filter-type" value={value} />
      <span className={styles.input__icon}>
        <img src={url} alt={alt} width={width} height={height} />
      </span>
      <span className={cn(styles.input__label, {[styles.isActive]: filters.type.toLowerCase() === value.toLowerCase()})}>{name}</span>
    </label>
  );
};

export default FilterItemImg;
