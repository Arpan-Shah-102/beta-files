import { useState } from 'react'
import { FilterGrid } from './FilterGrid';
import './Grid.css'

export function Grid({ items, favoriteItems }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tags = ["Audio", "Video", "Image", "Filter", "Lights", "Good angle", "Conversation",
    "Bad lighting", "Bad angle", "Jacob", "Ayden", "Tyce", "Jackson", "Caught", "Backflips",
    "Freaky", "Peak", "Singing", "Spanking", "Opryland", "Pillow game", "Pillow demon",
    "White smash", "Spinning pillows", "Smashing pillows", "Action", "Caught on filter", "Hand",
    "Dead", "Landry", "Sam", "Charlie", "Cash", "Phoenix", "Braxton", "Devonte", "Football",
    "Jumping", "Filter Failed", "Caption", "Nationals", "State"];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleFilterChange = (filter) => {
    const currentFilters = [...selectedFilters];
    if (selectedFilters.includes(filter)) {
      currentFilters.splice(currentFilters.indexOf(filter), 1);
      setSelectedFilters(currentFilters);
    } else {
      currentFilters.push(filter);
      setSelectedFilters(currentFilters);
    }
  }

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  }

  return (
    <div className="grid-container">
      <div className="filters">
        <button onClick={handleDropdownToggle}>Filter by Tags</button>
        {dropdownOpen && (
          <div className="dropdown">
            {tags.map((tag, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(tag.toLowerCase())}
                  onChange={() => {handleFilterChange(tag.toLowerCase())}}
                />
                {tag}
              </label>
            ))}
          </div>
        )}

        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="name">Default</option>
            <option value="atoz">Name (A-Z)</option>
            <option value="ztoa">Name (Z-A)</option>
            <option value="late">Date (Latest)</option>
            <option value="early">Date (Earliest)</option>
          </select>
        </label>
      </div>
      <hr />

      <FilterGrid
        items={items}
        sortBy={sortBy}
        filterBy={selectedFilters}
        favoriteItems={favoriteItems}
      />
    </div>
  )
}