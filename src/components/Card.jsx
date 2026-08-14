import { NavLink } from 'react-router';
import { useState } from 'react';
import './Card.css'

export function Card({ item, favoriteItems }) {
  const [getFavoriteItems, setFavoriteItems] = favoriteItems;
  const [isLoading, setIsLoading] = useState(true);
  const namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');

  function addtoFavorites(itemName) {
    setFavoriteItems([...getFavoriteItems, itemName]);
    localStorage.setItem('favoriteItems', JSON.stringify([...getFavoriteItems, itemName]));
  }
  function removeFromFavorites(itemName) {
    const updatedFavorites = getFavoriteItems.filter((name) => name !== itemName);
    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
  }

  function handleFavoriteClick(e) {
    const itemName = e.target.dataset.item;
    if (getFavoriteItems && getFavoriteItems.includes(namePath)) {
      removeFromFavorites(itemName);
      e.target.textContent = '☆';
    } else {
      addtoFavorites(itemName);
      e.target.textContent = '★';
    }
  }

  function handleLoaded() {
    setIsLoading(false);
  }

  if (item.filetype == "text") {return;}
  return (
    <div
      className="full-card"
    >
      <p
        className="favorite"
        data-item={namePath}
        onClick={handleFavoriteClick}
      >
        {getFavoriteItems && getFavoriteItems.includes(namePath) ? (<>★</>) : (<>☆</>)}
      </p>
      <NavLink
        to={`/${namePath}`}
      >
        <div
          className={`card ${item.filetype == "audio" ? "audio-card" : ""}`}
        >
          {isLoading && (
            <img
              className="loading-spinner"
              src="/loading.gif"
              alt="Loading..."
            />
          )}
          {item.filetype == "image" && (<img src={item.path} alt={item.name} onLoad={handleLoaded} />)}
          {item.filetype == "video" && (<video src={item.path} onLoadedData={handleLoaded} />)}
          {item.filetype == "audio" && (<audio src={item.path} controls onLoadedData={handleLoaded} />)}
          <h3>{item.name}</h3>
          <p>{item.filetype[0].toUpperCase()}{item.filetype.slice(1)}</p>
        </div>
      </NavLink>
    </div>
  )
} 