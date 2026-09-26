import { Header } from "../components/Header";
import { FilterGrid } from "../components/FilterGrid";
import assetData from "../data/asset-data.json";
import "./RecentlyViewed.css";

export function RecentlyViewed({ favoriteItems, recentlyViewedItems, setRecentlyViewedItems }) {
  function clearRecentlyViewed() {
    setRecentlyViewedItems([]);
    localStorage.removeItem('recentlyViewedItems');
  }

  return (
    <>
      <Header title="Recently Viewed" />
      <title>Recently Viewed</title>

      <main className="recently-viewed">
        <h2>Recently Viewed</h2>
        <button
          className="clear-recently-viewed"
          onClick={clearRecentlyViewed}
        >
          Clear
        </button>

        <FilterGrid
          filterBy="recently-viewed"
          favoriteItems={favoriteItems}
          recentlyViewedItems={recentlyViewedItems}
          items={assetData}
        />
      </main>
    </>
  )
}