import { Link, useLocation } from 'react-router-dom';
import styles from './header-navigation.module.scss';
import { AppRoutes } from 'src/shared/routes/routes';
import cn from 'classnames';
import { AuthStatus } from 'src/shared/types/app-types';

type THeaderNaigationProps = {
  authStatus: AuthStatus;
}

const HeaderNavigation = ({ authStatus }: THeaderNaigationProps): JSX.Element => {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={cn(styles.header__link, { [styles.active]: location.pathname === AppRoutes.Catalog as string })} to={AppRoutes.Catalog}>Квесты</Link>
      </li>
      <li className={styles.item}>
        <Link className={cn(styles.header__link, { [styles.active]: location.pathname === AppRoutes.Contacts as string })} to={AppRoutes.Contacts}>Контакты</Link>
      </li>
      {authStatus === AuthStatus.Auth &&
        <li className={styles.item}>
          <Link className={cn(styles.header__link, { [styles.active]: location.pathname === AppRoutes.Booking as string })} to={AppRoutes.Quest}>Мои бронирования</Link>
        </li>}
    </ul>
  );
};

export default HeaderNavigation;
