import { Card } from './Card'
import './FilterGrid.css';

export function FilterGrid({ items, sortBy, filterBy, favoriteItems}) {
  const getFavoriteItems = favoriteItems[0];
  const sortedItems = [];
  const newItems = [];

  if (sortBy == "default") {
    sortedItems.push(...Object.values(items));
  } else {
    sortedItems.push(...Object.values(items)); // temporary
  }
  
  if (filterBy == "favorite") {
    if (getFavoriteItems && getFavoriteItems.length > 0) {
      Object.values(sortedItems).filter((item) => {
        const namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
        if (getFavoriteItems.includes(namePath)) {
          newItems.push(item);
        }
      });
    }
  } else if (filterBy.length > 0) {
    console.log("Filtering by tags:", filterBy);

    newItems.push(...Object.values(sortedItems)); // temporary
  } else {
    newItems.push(...Object.values(sortedItems));
  }

  return (
    <div className="grid">
      {newItems.map((item, index) => (
        <Card
          key={index}
          item={item}
          favoriteItems={favoriteItems}
        />
      ))}
    </div>
  )
}