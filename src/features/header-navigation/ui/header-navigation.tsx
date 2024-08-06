import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./header-navigation.module.scss";
import { AppRoutes } from "src/app/routes/routes";
import cn from 'classnames';

const HeaderNavigation = (): JSX.Element => {
  const location = useLocation();
  console.log(location);
  
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink className={cn(styles.header__link, {[styles.active] : location.pathname === AppRoutes.Catalog})} to={AppRoutes.Catalog}>Квесты</NavLink>
      </li>
      <li className={styles.item}>
        <Link className={cn(styles.header__link, {[styles.active] : location.pathname === AppRoutes.Contacts})} to={AppRoutes.Contacts}>Контакты</Link>
      </li>
      <li className={styles.item}>
        <Link className={cn(styles.header__link, {[styles.active] : location.pathname === AppRoutes.Booking})} to={AppRoutes.Quest}>Мои бронирования</Link>
      </li>
    </ul>
  )
}

export default HeaderNavigation;
