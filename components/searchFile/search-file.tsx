import React, { useState } from 'react';
import styles from '../../styles/search-files.module.scss';

const SearchFile = ({ treeData }: any) => {
  const [filterValue, setFilterValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);
    setShowDropdown(true);
  };

  const handleFileSelect = (fileName: string) => {
    setFilterValue(fileName);
    setShowDropdown(false);
  };

  const filteredData = treeData.filter((node) => {
    if (node.type === 'file' && node.name.includes(filterValue)) {
      return true;
    }
    if (node.type === 'directory') {
      const filteredContents = node.contents.filter((file) => file.name.includes(filterValue));
      return filteredContents.length > 0;
    }
    return false;
  });

  return (
    <div className={styles.searchFileContainer}>
      <input
        type="text"
        className={styles.inputBox}
        placeholder="Search files..."
        value={filterValue}
        onChange={handleFilterChange}
      />
      {showDropdown && (
        <div className={styles.dropdown}>
          {filteredData.map((node) => (
            <div key={node.name} onClick={() => handleFileSelect(node.name)} className={styles.dropdownItem}>
              {node.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFile;