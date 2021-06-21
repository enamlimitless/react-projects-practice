import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button onClick={() => filterItems('all')} className="filter-btn">All</button>
      <button onClick={() => filterItems('breakfast')} className="filter-btn">Breakfast</button>
      <button onClick={() => filterItems('lunch')} className="filter-btn">Lunch</button>
      <button onClick={() => filterItems('shakes')} className="filter-btn">Shakes</button>
    </div>
  );
};

export default Categories;
