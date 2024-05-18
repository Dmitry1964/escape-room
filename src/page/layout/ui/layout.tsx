import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { AppRoutes } from "src/shared";
const Layout = (): JSX.Element => {
  return (
    <div className="wpapper">
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <span className="header__logo">
              <svg width="134" height="52" aria-hidden="true">
                <use xlinkHref="#logo"></use>
              </svg>
            </span>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to={AppRoutes.Catalog}>
                    Квесты
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to={AppRoutes.Contacts}>
                    Контакты
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to={AppRoutes.Reservation}>
                    Мои бронирования
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className="header__btn">
              Выйти
            </button>
            <a className="header__phone" href="tel:80001111111">8 (000) 111-11-11</a>
          </div>
        </div>

      </header>
      <Outlet />
      <footer>

      </footer>
    </div>
  );
};

export default Layout;
