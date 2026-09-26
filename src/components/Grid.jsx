import { useState } from 'react'
import { FilterGrid } from './FilterGrid';
import './Grid.css'

export function Grid({ items, favoriteItems }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tags = ["Nationals", "State", "Video", "Image", "Audio", "Filter", "Lights", "Good Angle", "Jacob", "Ayden", "Jackson", "Tyce",
    "Conversation", "Sam", "Bad Angle", "Bad Lighting", "Freaky", "Pillow Demon",
    "White Smash", "Peak", "Backflips", "Caught", "Cash", "Landry", "Braxton", "Just Dance",
    "Singing", "Charlie", "Audio", "Action", "Fishing", "Spanking", "Sleeping", "Engineering",
    "Competition", "Dead", "Phoenix", "Opryland", "Mogging", "Spinning Pillows", "Smashing Pillows",
    "John", "Unlegible", "Fights", "Rizz", "Jayvian", "Mrs Spear", "Addy"
  ];

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

  function search(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  return (
    <div className="grid-container">
      <div className="filters">

        <div className="dropdown-container">
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
        </div>

        <input onChange={search} className="searchbar" type="text" placeholder="Search..." />

        <label className="sortby">
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
        searchTerm={searchTerm}
        filterBy={selectedFilters}
        favoriteItems={favoriteItems}
      />
    </div>
  )
}