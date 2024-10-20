import { Link, useLocation } from 'react-router-dom';
import styles from './header-navigation.module.scss';
import { AppRoutes } from 'src/shared/routes/routes';
import cn from 'classnames';

const HeaderNavigation = (): JSX.Element => {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={cn(styles.header__link, {[styles.active] : location.pathname === AppRoutes.Catalog})} to={AppRoutes.Catalog}>Квесты</Link>
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
