import { NavLink } from 'react-router';
import './Header.css';

export function Header({ title }) {
  return (
    <header>
      <nav>
        <NavLink to="/"><img src="logo-expanded-white.png" alt="Beta Files Logo" height="50" /></NavLink>
        <h2>{title}</h2>
        <ul>
          <li><NavLink to="/">All</NavLink></li>
          <li><NavLink to="/favorite">Favorite</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}