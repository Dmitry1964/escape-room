import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Container from 'src/shared/container/container';
import { HeaderNavigation } from 'src/features/header-navigation';
import Button from 'src/shared/button/button';

const Layout = () => (
  <Container>
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="/svg/logo.svg" width={134} height={50} alt="Логотип" />
      </div>
      <HeaderNavigation />
      <Button className={'button_login'}>
        Вход
      </Button>
      <div className={styles.header__phone}>
        <a href="">8 (000) 111-11-11</a>
      </div>
    </header>
    <Outlet />
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
);

export default Layout;
