import { Outlet } from "react-router-dom";
import './layout.css'
const Layout = (): JSX.Element => {
  return (
    <div className="wpapper">
      <header className="header">
        <div className="header__container"></div>

      </header>
      <Outlet />
      <footer>

      </footer>
    </div>
  );
};

export default Layout;
