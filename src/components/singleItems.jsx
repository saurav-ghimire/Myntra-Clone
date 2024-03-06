import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

function SingleItems({index}) {
  
  const dispatch = useDispatch()
  const bagItems = useSelector(store => store.bags)
  const isOnBag = bagItems.indexOf(index.id) >= 0;
  
  const addToCartHandle = (id) => {
    dispatch(bagActions.addToCart(id));
  }

  return <>      
    <div className="item-container" key={index.id}>
      <div className="item-image-wrapper">
        <img className="item-image" src={index.thumbnail} alt="item image" />
        <div className="rating">{index.rating} ⭐ | {index.stock} in stock</div>
      </div>
      
      <div className="company-name">{index.brand}</div>
      <div className="item-name">{index.title}</div>
      <div className="price">
        <span className="current-price">
          $ {(index.price - (index.price * (index.discountPercentage / 100))).toFixed(2)}
        </span>
        <span className="original-price">
          $ {index.price.toFixed(2)}
        </span>
        <span className="discount">({index.discountPercentage}% OFF)</span>
      </div>
      {
        !isOnBag ? <button className="btn-add-bag" onClick={() => addToCartHandle(index.id)}>
        Add to Bag
      </button> :
      <button className="btn-add-bag btn-remove-bag" onClick={() => addToCartHandle(index.id)}>
      Remove From Bag
    </button>
      }
      
    </div>
            
  </>;
}

export default SingleItems;