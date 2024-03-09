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
    <h1>Your Product Wishes</h1>
    {
      finalItems.map(item => <SingleWishList key={item.id} item={item} />)
    }
    
  </div>
  </>;
}

export default WishList;