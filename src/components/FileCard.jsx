import "./FileCard.css";

export function FileCard({ item, favoriteItems }) {
  const namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
  const [getFavoriteItems, setFavoriteItems] = favoriteItems;

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

  return (
    <div className="file-card">
      {item.filetype === "image" && (
        <div className="image-container">
          <img className="file-image" src={item.path} alt={item.name} />
          <button onClick={handleFullscreenClick} className="fullscreen">⛶</button>
        </div>
      )}
      {item.filetype === "video" && (<video src={item.path} controls />)}
      {item.filetype === "audio" && (<audio src={item.path} controls />)}
      <p
        className="favorite"
        onClick={handleFavoriteClick}
      >
        {getFavoriteItems && getFavoriteItems.includes(namePath) ? (<>★</>) : (<>☆</>)}
      </p>
    </div>
  )
}