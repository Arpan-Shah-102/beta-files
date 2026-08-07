import { Header } from '../components/Header';
import { Grid } from '../components/Grid';
import assetData from '../data/asset-data.json';
import '../App.css';

export function HomePage({ favoriteItems }) {
  return (
    <>
      <Header
        title="All Files"
      />

      <main>
        <Grid
          items={assetData}
          favoriteItems={favoriteItems}
        />
      </main>
    </>
  );
}