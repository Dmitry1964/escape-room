import styles from './filters-level.module.scss';


enum QuestLevel {
  Any = 'Любой',
  Soft = 'Легкий',
  Middle = 'Средний',
  Hard = 'Сложный',
}

const FiltersLevel = () : JSX.Element => {
  return (
    <div className={styles.filter_level}>
      <ul className={styles.filter_level__list}>
        {Object.values(QuestLevel).map((item) => (
          <li className={styles.filter_level__item} key={item}>
            <span>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default FiltersLevel;
