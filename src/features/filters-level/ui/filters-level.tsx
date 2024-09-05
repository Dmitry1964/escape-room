import styles from './filters-level.module.scss';


enum QuestLevel {
  Any = 'Любой',
  Soft = 'Лёгкий',
  Hard = 'Сложный',
  Middle = 'Средний',
}


const FiltersLevel = (): JSX.Element => (
  <div className={styles.filter_level}>
    <ul className={styles.filter_level__list}>
      <li className={styles.filter_level__item}>
        <label>
          <input className={styles.input__field} type='radio' name='filter-level' value={QuestLevel.Any} />
          <span className={styles.input__label}>{QuestLevel.Any}</span>
        </label>
      </li>
      <li className={styles.filter_level__item}>
        <label>
          <input className={styles.input__field} type='radio' name='filter-level' value={QuestLevel.Soft} />
          <span className={styles.input__label}>{QuestLevel.Soft}</span>
        </label>
      </li>
      <li className={styles.filter_level__item} >
        <label>
          <input className={styles.input__field} type='radio' name='filter-level' value={QuestLevel.Middle} />
          <span className={styles.input__label}>{QuestLevel.Middle}</span>
        </label>
      </li>
      <li className={styles.filter_level__item}>
        <label>
          <input className={styles.input__field} type='radio' name='filter-level' value={QuestLevel.Hard} />
          <span className={styles.input__label}>{QuestLevel.Hard}</span>
        </label>
      </li>
    </ul>
  </div>
);

export default FiltersLevel;
