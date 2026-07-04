import { NavLink } from 'react-router';
import './Header.css';

export function Header() {
  return (
    <header>
      <nav>
        <img src="logo-expanded.png" alt="Beta Files Logo" height="50" />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}