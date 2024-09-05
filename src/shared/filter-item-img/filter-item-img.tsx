import { TFiltersType } from 'src/features/filters-type/ui/filters-type';
import styles from './filter-item-img.module.scss';

type TFilterItemImgProps = {
  filterItem: TFiltersType;
}

const FilterItemImg = ({ filterItem }: TFilterItemImgProps) => {
  const { url, name, width, height, alt, value } = filterItem;
  return (
    <label className={styles.root} >
      <input className={styles.input__field} type="radio" name="filter-type" value={value} />
      <span className={styles.input__icon}>
        <img src={url} alt={alt} width={width} height={height} />
      </span>
      <span className={styles.input__label}>{name}</span>
    </label>
  );
};

export default FilterItemImg;
