import { Link, Outlet } from 'react-router-dom';
import style from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex' }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
