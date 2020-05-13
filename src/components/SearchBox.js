import React, { useState, useEffect } from 'react';
import './SearchBox.css';

function SearchBox() {
  const [sourceData, setSourceData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://api.scryfall.com/catalog/card-names')
      .then((response) => response.json())
      .then((cards) => {
        const data = cards.data.slice(10, 15000);
        setSourceData(data);
        setFilteredData(data);
      });
  }, []);

  const onTextChange = (event) => {
    setSearchText(event.target.value);
    const regex = new RegExp(searchText, 'i');
    let data = sourceData.filter((word) => regex.test(word));
    setFilteredData(data);
  };

  const onItemClick = (value) => {
    setSearchText(value);
    setFilteredData([]);
  };

  const renderedFilterData = () => {
    if (!filteredData) return null;

    return (
      <ul style={{listStyle:"none"}}>
        {filteredData.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };


  return (
    <div className="BoxInput">
      <br />
     <div>
        <input className="box" value={searchText} onChange={onTextChange} type="text" placeholder="Search..." />
        {renderedFilterData()}
     </div>
    </div>
  );
}

export default SearchBox;
