import { NavLink } from 'react-router';
import './Header.css';

export function Header({ title }) {
  return (
    <header>
      <nav>
        <NavLink to="/"><img src="/logo-expanded-white.png" alt="Beta Files Logo" height="50" /></NavLink>
        <h1>{title}</h1>
        <ul>
          <li><NavLink to="/all">All</NavLink></li>
          <li><NavLink to="/favorite">Favorite</NavLink></li>
          <li><NavLink to="/more">More</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}