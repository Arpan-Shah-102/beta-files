import { NavLink } from 'react-router';
import './Card.css'

export function Card({ item }) {
  const favoriteItems = localStorage.getItem('favoriteItems');

  if (item.filetype == "text") {return;}
  return (
    <NavLink
      className={item.filetype == "audio" ? "audio-card" : ""}
      to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="card">
        {item.filetype == "image" && (<img src={item.path} alt={item.name} />)}
        {item.filetype == "video" && (<video src={item.path} />)}
        <h3>{item.name}</h3>
        <p>{item.filetype[0].toUpperCase()}{item.filetype.slice(1)}</p>
        {favoriteItems && favoriteItems.includes(item.name) ? (
          <p className="favorite">★</p>
        ) : (
          <p className="favorite">☆</p>
        )}
      </div>
    </NavLink>
  )
} 