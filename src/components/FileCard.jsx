import { useState } from "react";
import "./FileCard.css";

export function FileCard({ item, favoriteItems }) {
  const namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
  const [getFavoriteItems, setFavoriteItems] = favoriteItems;
  const [isLoading, setIsLoading] = useState(true);

  function addtoFavorites() {
    setFavoriteItems([...getFavoriteItems, namePath]);
    localStorage.setItem('favoriteItems', JSON.stringify([...getFavoriteItems, namePath]));
  }
  function removeFromFavorites() {
    const updatedFavorites = getFavoriteItems.filter((name) => name !== namePath);
    setFavoriteItems(updatedFavorites);
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
  }
  function handleFavoriteClick() {
    if (getFavoriteItems && getFavoriteItems.includes(namePath)) {
      removeFromFavorites();
    } else {
      addtoFavorites();
    }
  }

  function handleFullscreenClick() {
    const wrapper = document.querySelector('.image-container');
    const buttonElement = document.querySelector('.fullscreen');

    if (document.fullscreenElement) {
      document.exitFullscreen();
      buttonElement.textContent = '⛶';
    } else {
      wrapper.requestFullscreen();
      buttonElement.textContent = '🗗';
    }
  }

  function handleLoaded() {
    console.log('File loaded successfully');
    setIsLoading(false);
  }

  return (
    <div className="file-card">
      {isLoading && (
        <div className="centerer">
          <img
            className="loading-spinner"
            src="/loading.gif"
            alt="Loading..."
          />
        </div>
      )}
      {item.filetype === "image" && (
        <div className="image-container">
          <img
            className="file-image"
            src={item.path}
            alt={item.name}
            onLoad={handleLoaded}
          />
          <button onClick={handleFullscreenClick} className="fullscreen">⛶</button>
        </div>
      )}
      {item.filetype === "video" && (
        <video
          src={item.path}
          controls
          preload="auto"
          onLoadedData={handleLoaded}
          />
        )
      }
      {item.filetype === "audio" && (
        <audio
          src={item.path}
          controls
          preload="auto"
          onLoadedData={handleLoaded}
          onError={() => {
            setIsLoading(false);
            alert('Error loading audio file. Please try again later.');
          }}
          />
        )
      }
      <p
        className="favorite"
        onClick={handleFavoriteClick}
      >
        {getFavoriteItems && getFavoriteItems.includes(namePath) ? (<>★</>) : (<>☆</>)}
      </p>
    </div>
  )
}