import { useState } from 'react'
import { Card } from './Card'
import './Grid.css'

export function Grid({ items }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tags = ["Filter", "Lights", "Good angle", "Conversation", "Bad lighting", "Bad angle",
    "Jacob", "Ayden", "Tyce", "Jackson", "Caught", "Backflips", "Freaky", "Peak", "Singing",
    "Spanking", "Opryland", "Pillow game", "Pillow demon", "White smash", "Spinning pillows",
    "Smashing pillows", "Action", "Caught on filter", "Hand", "Dead", "Landry", "Sam", "Charlie",
    "Cash", "Phoenix", "Braxton", "Devonte", "Football", "Jumping", "Filter Failed", "Caption",
    "Audio", "Video", "Image", "Nationals", "State"];

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
          <select>
            <option value="name">Name (A-Z)</option>
            <option value="name">Name (Z-A)</option>
            <option selected value="date">Date (Latest)</option>
            <option value="date">Date (Earliest)</option>
          </select>
        </label>
      </div>
      <hr />

      <div className="grid">
        {Object.values(items).map((item, index) => (
          <Card
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}