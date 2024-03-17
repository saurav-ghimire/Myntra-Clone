  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import BagItems from "../components/BagsItems";
  import { Link } from "react-router-dom";
  import { IoMdClose } from "react-icons/io";
import { FloatingCartActions } from "../store/FloatingCart";

  function FloatingCart() {
    
    const floatingSituation = useSelector((store) => store.floating);   

    const bags = useSelector((store) => store.bags);
    const items = useSelector((store) => store.items);
    

    const finalItems = items.filter((item) => bags.includes(item.id));

    const dispatch = useDispatch();
    const handleOnClose = () => {
      dispatch(FloatingCartActions.toggleFloat())
    }
    
    return (
      <div className={`sidebar-cart ${floatingSituation ? "active" : ""}`}>

        <span className="close-btn" onClick={() => handleOnClose() }>
        <IoMdClose />
        </span>


        <h3>Our Cart</h3>

            <div className="sidebar-items">
            {finalItems.length === 0 ? (
            <h2>No items on Cart</h2>
          ) : (
            finalItems.map((item) => <BagItems key={item.id} item={item} />)
          )}
        </div>

        <div className="checkout-button">
        <Link to='/checkout'><button>View Checkout</button></Link>
        <Link to='/bags'><button>View Cart</button></Link>
        </div>
      </div>
    );
  }

  export default FloatingCart;
