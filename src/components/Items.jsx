import { useSelector } from "react-redux";
import SingleItems from "./singleItems";


function Items() {
  const storeItems = useSelector(store => store.items);


  return (
    <div className="all-items">
      <div className="container">
        <div className="title-section">
          <h2>Crazy</h2>
          <h4>Deals</h4>
        </div>
        <div className="items-container">
        {storeItems.map((index) => (
        
        <SingleItems key={index.id} index={index} />

        ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
