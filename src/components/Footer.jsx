import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} The Beta Files. All rights reserved.</p>
    </footer>
  );
}