import styles from './filterd-type.module.scss';

const filtersType = [
  {
    url: 'svg/all-quests,svg',
    name: 'Все квесты',
    width: 26,
    height: 30,
    alt: 'Иконка - все квесты',
  }
]

const FiltersType = () => {
  return (
    <div className={styles.root}>
      <ul>
        {filtersType.map((item) => (
          <li key={item.name}>
            <span>
              <img src={item.url} width={item.width} height={item.height} alt={item.alt} />
            </span>
            <span>

            </span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default FiltersType;
