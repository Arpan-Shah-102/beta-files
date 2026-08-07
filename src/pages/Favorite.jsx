import { Header } from '../components/Header';
import { FilterGrid } from '../components/FilterGrid';
import assetData from '../data/asset-data.json';
import './Favorite.css';

export function Favorite({ favoriteItems }) {
  const getFavoriteItems = favoriteItems[0];

  return (
    <>
      <Header
        title="Favorite Files"
      />

      <main>
        {getFavoriteItems && getFavoriteItems.length > 0 ? (
            <FilterGrid
              items={assetData}
              sortBy="default"
              filterBy="favorite"
              favoriteItems={favoriteItems}
            />
          ) : (
            <>
              <h2>You have no favorite files.</h2>
              <h3>Add some favorite files to see them here.</h3>
            </>
          )
        }
      </main>
    </>
  );
}