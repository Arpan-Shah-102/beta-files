import { Header } from '../components/Header';
import './Favorite.css';

export function Favorite() {
  const favoriteItems = localStorage.getItem('favoriteItems');

  return (
    <>
      <Header
        title="Favorite Files"
      />

      <main>
        <h1>Favorite Files</h1>
        <p>{favoriteItems}</p>
      </main>
    </>
  );
}