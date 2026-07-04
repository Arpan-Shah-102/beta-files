import { Header } from '../components/Header';
import { Grid } from '../components/Grid';
import '../App.css';

export function HomePage() {
  return (
    <>
      <Header
        title="All Files"
      />

      <main>
        <Grid
          items={[]}
        />
      </main>
    </>
  );
}