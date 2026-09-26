import { Header } from '../components/Header';
import { Grid } from '../components/Grid';
import assetData from '../data/asset-data.json';

export function All({ favoriteItems }) {
  return (
    <>
      <Header
        title="All Files"
      />
      <title>All Files</title>

      <main>
        <Grid
          items={assetData}
          favoriteItems={favoriteItems}
        />
      </main>
    </>
  );
}