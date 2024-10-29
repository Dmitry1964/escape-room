import styles from './layout.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from 'src/shared/container/container';
import { HeaderNavigation } from 'src/features/header-navigation';
import Button from 'src/shared/button/button';
import { AppRoutes } from 'src/shared/routes/routes';
import cn from 'classnames';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.page}>
      <Container>
        <header className={cn(styles.header, {[styles.header__absolute]: pathname !== AppRoutes.Catalog as string})}>
          {pathname === AppRoutes.Catalog as string &&
            <div className={styles.header__logo}>
              <img src="/svg/logo.svg" width={134} height={50} alt="Логотип" />
            </div>}
          {pathname !== AppRoutes.Catalog as string && (
            <Link to={AppRoutes.Catalog}>
              <div className={styles.header__logo}>
                <img src="/svg/logo.svg" width={134} height={50} alt="Логотип" />
              </div>
            </Link>
          )}
          <HeaderNavigation />
          <Button className={'button_login'}>
            Вход
          </Button>
          <div className={styles.header__phone}>
            <a href="">8 (000) 111-11-11</a>
          </div>
        </header>
      </Container>
      <Outlet />
      <Container>
        <footer className={styles.footer}>
          <ul>
            <li>
              <a href="#">
                <img src="svg/skype-default.svg" width={28} height={28} alt="иконка skype" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="svg/vk-default.svg" width={28} height={28} alt="иконка skype" />
              </a>
            </li>
          </ul>
        </footer>
      </Container>

    </div >
  );
};

export default Layout;
