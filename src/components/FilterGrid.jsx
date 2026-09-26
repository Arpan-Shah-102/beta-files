import { Card } from './Card'
import './FilterGrid.css';

export function FilterGrid({ lists, setLists, listName, items, sortBy, searchTerm, filterBy, favoriteItems, recentlyViewedItems }) {
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
        let namePath = item.name.toLowerCase().replace(/[\s/]+/g, '-');
        namePath = namePath.replace(/[^a-z0-9-]/g, '');
        if (getFavoriteItems.includes(namePath)) {
          newItems.push(item);
        }
      });
    }
  } else if (filterBy == "recently-viewed") {
    if (recentlyViewedItems && recentlyViewedItems.length > 0) {
      Object.values(sortedItems).filter((item) => {
        if (recentlyViewedItems.includes(item.index)) {
          newItems.push(item);
        }
      });
    }
  } else if (filterBy.length > 0 && filterBy != "list") {
    newItems = [...sortedItems];
    const mediaFilters = ['audio', 'image', 'video'];
    const locationFilters = ['nationals', 'state'];
  
    const filteredItems = sortedItems.filter((item) => {
      const itemFileType = (item.filetype || item.fileType || '').toLowerCase();
      const itemLocation = (item.type || item.location || '').toLowerCase();
  
      const selectedMediaFilters = filterBy.filter((f) => mediaFilters.includes(f));
      const selectedLocationFilters = filterBy.filter((f) => locationFilters.includes(f));
      const selectedTagFilters = filterBy.filter(
        (f) => !mediaFilters.includes(f) && !locationFilters.includes(f)
      );
  
      const matchesMedia =
        selectedMediaFilters.length === 0 || selectedMediaFilters.includes(itemFileType);
  
      const matchesLocation =
        selectedLocationFilters.length === 0 || selectedLocationFilters.includes(itemLocation);
  
      const matchesTags =
        selectedTagFilters.length === 0 ||
        selectedTagFilters.every((selectedTag) =>
          item.tags?.some((tag) => tag.toLowerCase() === selectedTag)
        );
  
      return matchesMedia && matchesLocation && matchesTags;
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
      {newItems.length === 0 ? (
        <div className="no-results">
          <h3>{filterBy == "list" ? "No Items in List" : "No Results Found"}</h3>
        </div>
      ) : filterBy == "list" ? (
        newItems.map((item, index) => (
          <Card
            key={index}
            item={item}
            favoriteItems={favoriteItems}
            isListPage={filterBy == "list"}
            lists={lists}
            setLists={setLists}
            listName={listName}
          />
        ))
      ) : (
        newItems.map((item, index) => (
          <Card
            key={index}
            item={item}
            favoriteItems={favoriteItems}
          />
        ))
      )}
    </div>
  );
}