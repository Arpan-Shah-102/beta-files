import { NavLink } from 'react-router';
import { useState } from 'react';
import './Card.css'

export function Card({ item, favoriteItems, isListPage, lists, setLists, listName }) {
  const [getFavoriteItems, setFavoriteItems] = favoriteItems;
  const [isLoading, setIsLoading] = useState(true);
  let namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
  namePath = namePath.replace(/[^a-z0-9-]/g, '');

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

  function removeFromList() {
    if (confirm(`Are you sure you want to remove "${item.name}" from the list "${listName}"?`)) {
      const updatedLists = lists.map((list) => {
        if (list.name === listName) {
          const updatedItems = list.items.filter((listItem) => listItem.name !== item.name);
          return { ...list, items: updatedItems };
        }
        return list;
      });
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));
    }
  }

  if (item.filetype == "text") {return;}
  return (
    <div
      className="full-card"
    >
      <p
        className="top-thing favorite"
        data-item={namePath}
        onClick={handleFavoriteClick}
      >
        {getFavoriteItems && getFavoriteItems.includes(namePath) ? (<>★</>) : (<>☆</>)}
      </p>
      {isListPage && (
        <p
          className="top-thing remove-from-list"
          onClick={removeFromList}
        >🗑</p>
      )}
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
          {item.filetype == "video" && (<video src={item.path} preload="metadata" onLoadedData={handleLoaded} />)}
          {item.filetype == "audio" && (<audio src={item.path} controls onLoadedData={handleLoaded} />)}
          <h3>{item.name}</h3>
          <p>{item.filetype[0].toUpperCase()}{item.filetype.slice(1)}</p>
        </div>
      </NavLink>
    </div>
  )
} 