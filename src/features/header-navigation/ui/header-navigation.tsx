import { Link } from "react-router-dom";
import styles from "./header-navigation.module.scss";
import { AppRoutes } from "src/app/routes/routes";

const HeaderNavigation = (): JSX.Element => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to={AppRoutes.Catalog}>Квесты</Link>
      </li>
      <li className={styles.item}>
        <Link to={AppRoutes.Contacts}>Контакты</Link>
      </li>
      <li className={styles.item}>
        <Link to={AppRoutes.Quest}>Мои бронирования</Link>
      </li>
    </ul>
  )
}

export default HeaderNavigation;
