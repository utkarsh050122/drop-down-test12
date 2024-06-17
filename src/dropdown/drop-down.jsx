import { useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouse = () => {
    setIsOpen(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div 
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouse}
    >
      <button className="dropdown-button">
        {selectedItem}
        <span className="arrow">&#9662;</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Dropdown;
