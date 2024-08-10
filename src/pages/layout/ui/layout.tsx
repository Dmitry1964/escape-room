import styles from "./layout.module.scss";
import { Outlet } from 'react-router-dom';
import Container from 'src/shared/container/container';
import { HeaderNavigation } from 'src/features/header-navigation';
import Button from 'src/shared/button/button';
import { FiltersType } from "src/features/filters-type";
import { FiltersLevel } from "src/features/filters-level";

const Layout = () => {
  return (
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
      <FiltersType/>
      <FiltersLevel/>
      <Outlet />
      <footer></footer>
    </Container>
  );
};

// 10.31 1fr 17.85 11.61

export default Layout;
