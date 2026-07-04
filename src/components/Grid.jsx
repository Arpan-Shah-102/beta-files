import { useState } from 'react'
import { Card } from './Card'
import './Grid.css'

export function Grid({ items }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.includes('state')}
                onChange={() => {handleFilterChange('state')}}
              />
              State
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.includes('nationals')}
                onChange={() => {handleFilterChange('nationals')}}
              />
              Nationals
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.includes('photos')}
                onChange={() => {handleFilterChange('photos')}}
              />
              Photos
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.includes('videos')}
                onChange={() => {handleFilterChange('videos')}}
              />
              Videos
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.includes('audio')}
                onChange={() => {handleFilterChange('audio')}}
              />
              Audio
            </label>

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
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}