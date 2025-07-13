// src/components/SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // dynamic search
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} role="search">
      <label htmlFor="search" className="sr-only">Search posts</label>
      <input
        id="search"
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton} aria-label="Search">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
