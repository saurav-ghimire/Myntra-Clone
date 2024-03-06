import { useDispatch } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { bagActions } from "../store/bagSlice";
import { CiStar } from "react-icons/ci";

function BagItems({ item }) {
  // console.log(item);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  // Calculate discounted price if discount is available
  const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));

  return (
    <div className="item-container">
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.thumbnail} alt="Product Thumbnail" />
      </div>
      <div className="item-right-part">
        <div className="company">{item.brand}</div>
        <div className="item-name">{item.title}</div>
        <div className="price-container">
          <span className="current-price">Rs {discountedPrice}</span>
          {item.discountPercentage > 0 && (
            <>
              <span className="original-price">Rs {item.price}</span>
              <span className="discount-percentage">({item.discountPercentage}% OFF)</span>
            </>
          )}
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.rating} <CiStar /></span> Ratings
        </div>
        <div className="delivery-details">
          Total Stock
          <span className="delivery-details-days">{item.stock}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemoveItem}><TiDelete /></div>
    </div>
    </div>

  );
}

export default BagItems;
