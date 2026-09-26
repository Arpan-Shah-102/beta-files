import { useState } from 'react'
import { Routes, Route } from 'react-router';
import assetData from './data/asset-data.json';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { All } from './pages/All';
import { Favorite } from './pages/Favorite';
import { More } from './pages/More';
import { Contact } from './pages/Contact';
import { RecentlyViewed } from './pages/RecentlyViewed';
import { Lists } from './pages/Lists';
import { ListItemPage } from './pages/ListItemPage';
import { ErrorPage } from './pages/ErrorPage';
import { FilePage } from './pages/FilePage';
import './App.css';

function App() {
  const favoriteItems = useState(JSON.parse(localStorage.getItem('favoriteItems')) || []);
  const [recentlyViewedItems, setRecentlyViewedItems] = useState(JSON.parse(localStorage.getItem('recentlyViewedItems')) || []);
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem('lists')) || []);

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage
              favoriteItems={favoriteItems}
              recentlyViewedItems={recentlyViewedItems}
              lists={lists}
            />
          }
        />
        <Route 
          path="/all" 
          element={
            <All 
              favoriteItems={favoriteItems}
            />
          }
        />
        <Route 
          path="/favorite" 
          element={
          <Favorite
            favoriteItems={favoriteItems}
            />
          }
        />
        <Route
          path="/recently-viewed"
          element={
            <RecentlyViewed
              recentlyViewedItems={recentlyViewedItems}
              setRecentlyViewedItems={setRecentlyViewedItems}
              favoriteItems={favoriteItems}
            />
          }
        />
        <Route
          path="/lists"
          element={
            <Lists
              lists={lists}
              setLists={setLists}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />

        {Object.values(assetData).map((item, index) => {
          let namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
          namePath = namePath.replace(/[^a-z0-9-]/g, '');
          return (
            <Route
              key={index}
              path={`/${namePath}`}
              element={
                <FilePage
                  item={item}
                  favoriteItems={favoriteItems}
                  recentlyViewedItems={recentlyViewedItems}
                  setRecentlyViewedItems={setRecentlyViewedItems}
                  lists={lists}
                  setLists={setLists}
                />
              }
            />
          )
        })}
        {lists.map((list, index) => {
          const listSlug = list.name.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '');
          return (
            <Route
              key={index}
              path={`/lists/${listSlug}`}
              element={
                <ListItemPage
                  lists={lists}
                  setLists={setLists}
                  index={index}
                  favoriteItems={favoriteItems}
                />
              }
            />
          )
        })}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
