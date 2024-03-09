import { useSelector } from "react-redux";
import SingleWishList from "../components/SingleWishList";

function WishList() {
  
  const wishListData = useSelector(store => store.wishlist);
  const itemsData = useSelector(store => store.items);

  const finalItems = itemsData.filter(index => {
    const itemIndex = wishListData.indexOf(index.id);
    return itemIndex >= 0;
  }
  );

  
  return <>
    <div className="container">
      <div className="bag-page">
        <div className="wish-items-container">
        {finalItems.length === 0 ? <h2>No items on WishList</h2> : 
        
          finalItems.map(item => <SingleWishList key={item.id} item={item} />)
        }
      </div>
    </div>
  </div>
  </>;
}

export default WishList;