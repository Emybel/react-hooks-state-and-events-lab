import React, { useState, useEffect } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  // Update filteredItems whenever selectedCategory changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(items);
    } else {
      const newFilteredItems = items.filter((item) => selectedCategory === item.category);
      setFilteredItems(newFilteredItems);
    }
  }, [selectedCategory, items]);

  const handleOption = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOption} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;