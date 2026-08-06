import { Header } from '../components/Header';
import { Grid } from '../components/Grid';
import assetData from '../data/asset-data.json';
import '../App.css';

export function HomePage() {
  return (
    <>
      <Header
        title="All Files"
      />

      <main>
        <Grid
          items={assetData}
        />
      </main>
    </>
  );
}