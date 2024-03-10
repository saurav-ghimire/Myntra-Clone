import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();
  const storeItems = useSelector((store) => store.items);
  const item = storeItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-details">
      <h2>{item.title}</h2>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Discount: {item.discountPercentage}%</p>
      <p>Rating: {item.rating}</p>
      <p>Stock: {item.stock}</p>
      <p>Brand: {item.brand}</p>
      <p>Category: {item.category}</p>
      <div className="item-images">
        {item.images.map((image, index) => (
          <img key={index} src={image} alt={`Item ${item.id} Image`} />
        ))}
      </div>
    </div>
  );
}

export default ItemDetails;
