import { TiDelete } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { wishListActions } from "../store/wishList";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleWishList({item}) {
  
  const removeMessage = () => toast.success('Wishlist Removed!');

  const dispatch = useDispatch();
  const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
  
  const handleOnRemove  = (id) => {
    dispatch(wishListActions.removeWishList(id));
    removeMessage();

  }

  return <>
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

      <div className="remove-from-cart" onClick={() => handleOnRemove(item.id)} ><TiDelete /></div>
    </div>
    </div>
  </>;
}

export default SingleWishList;