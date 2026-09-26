import { NavLink } from "react-router";
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { ListPreview } from '../components/ListPreview';
import assetData from '../data/asset-data.json';
import "./HomePage.css";

export function HomePage({ favoriteItems, recentlyViewedItems, lists }) {
  const sortedRecentlyViewedItems = recentlyViewedItems
    .map((itemIndex) => Object.values(assetData).find((item) => item.index === itemIndex[0]))
    .filter((item) => item !== undefined)
    .sort((a, b) => b.index - a.index);
  const sortedLists = [...lists].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));

  return (
    <>
      <Header
        title="The Beta Files"
      />
      <title>The Beta Files</title>

      <main>
        <h2>Welcome to The Beta Files</h2>
        <NavLink to="/all">Browse All Files →</NavLink>
        
        <div className="large-scroll-preview">
          <div className="preview-scroll">
            <NavLink to="/recently-viewed">Recently Viewed →</NavLink>
            <div className="scroll-container">
              <div className="scroll-thing">
                {sortedRecentlyViewedItems.length > 0 ? (
                  sortedRecentlyViewedItems.map((item, index) => (
                    <Card
                      key={index}
                      item={item}
                      favoriteItems={favoriteItems}
                    />
                  ))
                ) : (
                  <div className="no-recently-viewed">
                    <h2>No Recently Viewed Items</h2>
                    <p>Start browsing files to see them here.</p>
                    <NavLink to="/all">Browse Files →</NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="preview-scroll">
            <NavLink to="/lists">My Lists →</NavLink>
            <div className="scroll-container">
              <div className="scroll-thing lists">
                {sortedLists.length > 0 ? (
                  sortedLists.map((list, index) => (
                    <ListPreview
                      key={index}
                      listItem={list}
                    />
                  ))
                ) : (
                  <div className="no-recently-viewed">
                    <h2>No Lists Found</h2>
                    <p>Create a list to see them here.</p>
                    <NavLink to="/lists">Browse Lists →</NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}