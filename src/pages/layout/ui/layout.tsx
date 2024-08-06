import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Container from "src/shared/container/container";
import { HeaderNavigation } from "src/features/header-navigation";

const Layout = () => {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__logo}>
            <img src="/svg/logo.svg" width={134} height={50} alt="Логотип"/>
        </div>
        <HeaderNavigation/>
      </header>
      <Outlet />
      <footer></footer>
    </Container>
  );
};

// 10.31 1fr 17.85 11.61

export default Layout;
