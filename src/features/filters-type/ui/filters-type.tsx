import styles from './filter-type.module.scss';

const filtersType = [
  {
    url: 'svg/all-quests.svg',
    name: 'Все квесты',
    width: 26,
    height: 30,
    alt: 'Иконка - все квесты',
  },
  {
    url: 'svg/adventure.svg',
    name: 'Приключения',
    width: 36,
    height: 30,
    alt: 'Иконка - приключения',
  },
  {
    url: 'svg/horrors.svg',
    name: 'Ужасы',
    width: 30,
    height: 30,
    alt: 'Иконка - ужасы',
  },
  {
    url: 'svg/mystic.svg',
    name: 'Мистика',
    width: 30,
    height: 30,
    alt: 'Иконка - все квесты',
  },
  {
    url: 'svg/detective.svg',
    name: 'Детектив',
    width: 40,
    height: 30,
    alt: 'Иконка - детективы',
  },
  {
    url: 'svg/sciFi.svg',
    name: 'Sci-fi',
    width: 28,
    height: 30,
    alt: 'Иконка - научная фантастика',
  },

]

const FiltersType = () => {
  return (
    <div className={styles.filter_type}>
      <ul className={styles.filter_type__list}>
        {filtersType.map((item) => (
          <li className={styles.filter_type__item} key={item.name}>
            <span>
              <img src={item.url} width={item.width} height={item.height} alt={item.alt} />
            </span>
            <span>
              {item.name}
            </span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default FiltersType;
