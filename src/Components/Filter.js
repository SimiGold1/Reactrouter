import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={onTitleChange}
        style={{ backgroundColor: 'khaki'}}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="1"
        max="10"
        value={rate}
        onChange={onRateChange}
        style={{ width: '15rem'}}
      />
    </div>
  );
};

export default Filter;