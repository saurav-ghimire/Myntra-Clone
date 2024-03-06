import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";


function Items() {
  const storeItems = useSelector(store => store.items);

  const dispatch = useDispatch()
  const addToCartHandle = (id) => {
    dispatch(bagActions.addToCart(id));
  }

  return (
    <div className="all-items">
      <div className="container">
        <div className="title-section">
          <h2>Crazy</h2>
          <h4>Deals</h4>
        </div>
        <div className="items-container">
          {storeItems.map((index) => (
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
              <button className="btn-add-bag" onClick={() => addToCartHandle(index.id)}>
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
