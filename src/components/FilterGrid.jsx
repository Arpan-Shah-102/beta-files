import { Card } from './Card'
import './FilterGrid.css';

export function FilterGrid({ items, sortBy, searchTerm, filterBy, favoriteItems}) {
  const getFavoriteItems = favoriteItems[0];
  const sortedItems = [];
  let newItems = [];

  if (sortBy == "default") {
    sortedItems.push(...Object.values(items));
  } else if (sortBy == "atoz") {
    sortedItems.push(...Object.values(items).sort((a, b) => a.name.localeCompare(b.name)));
  } else if (sortBy == "ztoa") {
    sortedItems.push(...Object.values(items).sort((a, b) => b.name.localeCompare(a.name)));
  } else if (sortBy == "early") {
    sortedItems.push(...Object.values(items).sort((a, b) => a.date - b.date));
  } else if (sortBy == "late") {
    sortedItems.push(...Object.values(items).sort((a, b) => b.date - a.date));
  } else {
    sortedItems.push(...Object.values(items));
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
    newItems = [...sortedItems];
    const mediaFilters = ['audio', 'image', 'video'];

    const filteredItems = sortedItems.filter((item) => {
      const selectedMediaFilters = filterBy.filter((filter) =>
        mediaFilters.includes(filter)
      );
      const selectedTagFilters = filterBy.filter((filter) =>
        !mediaFilters.includes(filter)
      );

      const matchesMedia =
        selectedMediaFilters.length === 0 ||
        selectedMediaFilters.includes(item.filetype);

      const matchesTags =
        selectedTagFilters.length === 0 ||
        selectedTagFilters.every((selectedTag) =>
          item.tags?.some((tag) => tag.toLowerCase() === selectedTag)
        );

      return matchesMedia && matchesTags;
    });
    newItems = filteredItems;
  } else {
    newItems.push(...Object.values(sortedItems));
  }

  if (searchTerm && searchTerm.trim() != "") {
    const search = searchTerm.toLowerCase().trim();
  
    newItems = newItems.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
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