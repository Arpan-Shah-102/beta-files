import { NavLink } from "react-router";
import "./ListPreview.css";

export function ListPreview({ listItem }) {
  let namePath = listItem.name.toLowerCase().replace(/[\s/]+/g, '-');
  namePath = namePath.replace(/[^a-z0-9-]/g, '');

  return (
    <NavLink to={`/lists/${namePath}`}>
      <div className="list-preview-item">
        <h3>{listItem.name}</h3>
        <p>{listItem.updatedDate}</p>
        <p>{listItem.items.length} {listItem.items.length === 1 ? "item" : "items"}</p>
      </div>
    </NavLink>
  )
}