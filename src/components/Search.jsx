import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleItems from "../components/singleItems";

function Search({ query, clearSearchQuery }) {
  const items = useSelector((store) => store.items);

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemClick = () => {
    // Clear search query when an item is clicked
    clearSearchQuery();
  };

  return (
    <div className="search-results">
      {filteredItems.map((item) => (
        <Link key={item.id} to={`/products/${item.title}`} className="search-result-item" onClick={handleItemClick}>
          {item.title}
        </Link>
      ))}
      {filteredItems.length === 0 && <div>No results found</div>}
    </div>
  );
}

export default Search;
