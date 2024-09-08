import { TFilters } from 'src/app/types/app-types';
import styles from './filter-type.module.scss';
import FilterItemImg from 'src/shared/filter-item-img/filter-item-img';

export type TFiltersType = {
  url: string;
  name: string;
  width: number;
  height: number;
  alt: string;
  value: string;
}

const filtersType: TFiltersType[] = [
  {
    url: 'svg/all-quests.svg',
    name: 'Все квесты',
    width: 26,
    height: 30,
    alt: 'Иконка - все квесты',
    value: 'allQuests',
  },
  {
    url: 'svg/adventure.svg',
    name: 'Приключения',
    width: 36,
    height: 30,
    alt: 'Иконка - приключения',
    value: 'adventures',
  },
  {
    url: 'svg/horrors.svg',
    name: 'Ужасы',
    width: 30,
    height: 30,
    alt: 'Иконка - ужасы',
    value: 'horrors',
  },
  {
    url: 'svg/mystic.svg',
    name: 'Мистика',
    width: 30,
    height: 30,
    alt: 'Иконка - все квесты',
    value: 'mystic',
  },
  {
    url: 'svg/detective.svg',
    name: 'Детектив',
    width: 40,
    height: 30,
    alt: 'Иконка - детективы',
    value: 'detective',
  },
  {
    url: 'svg/sciFi.svg',
    name: 'Sci-fi',
    width: 28,
    height: 30,
    alt: 'Иконка - научная фантастика',
    value: 'scifi',
  },
];

type TFiltersTypeProps = {
  selectFilterType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filters: TFilters;
}

const FiltersType = ({ selectFilterType, filters }: TFiltersTypeProps) => (
  <div className={styles.filter_type}>
    <ul className={styles.filter_type__list}>
      {filtersType.map((item) => (
        <li className={styles.filter_type__item} key={item.name} tabIndex={0}>
          <FilterItemImg filterItem={item} selectFilterType={selectFilterType} filters={filters} />
        </li>
      ))}
    </ul>
  </div>
);
export default FiltersType;
