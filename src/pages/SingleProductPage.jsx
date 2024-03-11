import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { bagActions } from "../store/bagSlice";
import { toast } from "react-toastify";

function ItemDetails() {
  const { id } = useParams();

  console.log(id);
  const storeItems = useSelector((store) => store.items);
  const item = storeItems.find((item) => item.title === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  function calculateDiscountedPrice(price, discountPercentage) {
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice.toFixed(2); // Round to 2 decimal places
  }

  const dispatch = useDispatch();
  
  const addedOnCartMessage = () => toast.success('Product Added!');  
  const removeFromCartMessage = () => toast.success('Product Removed!');  

  const onHandleSUbmit = (id) => {
    dispatch(bagActions.addToCart(id));
    
    addedOnCartMessage();
    

  };

  
  const bagItems = useSelector(store => store.bags);
  const isOnBag = bagItems.indexOf(item.id) >= 0;

  const handleRemoveCart = (id) => {
    dispatch(bagActions.removeFromBag(id));
    removeFromCartMessage();
  };
  

  return (
    <div className="single-item-details">
      <div className="breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Link to="/home">Home</Link> / Products / {item.title}
                </div>
              </div>
            </div>
        </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
          <div className="item-images">
          <img src={item.thumbnail} alt={item.title} />
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Item ${item.id} Image`} />
            ))}
          </div>
          </div>
          <div className="col-6">
              <div className="single-item-content">
              <h2 className="product-title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <p className="ratings">Rating: {item.rating}⭐</p>
              <p className="stockItems">Stock: {item.stock}</p>

              

              <p className="brands">Brand: {item.brand}</p>
              <p className="categories">Category: {item.category}</p>

              {item.discountPercentage ? (
                <>
                  <h4 className="price">
                    Price: <span className="beforeDiscount">${item.price}</span>  ${calculateDiscountedPrice(item.price, item.discountPercentage)}
                  </h4>
                </>
              ) : (
                <h4 className="price">Price: ${item.price}</h4>
              )}

              <div className="single-add-to-cart">
                
                    {
                !isOnBag ? <button className="btn-add-bag" onClick={() => onHandleSUbmit(item.id)}>
                  Add to Bag
                </button> :
                  <button className="btn-add-bag btn-remove-bag" onClick={() => handleRemoveCart(item.id)}>
                    Remove From Bag
                  </button>
              }
              
                

              </div>
              </div>
          </div>
        </div>
      </div>  
      
      
      
    </div>
  );
}

export default ItemDetails;
