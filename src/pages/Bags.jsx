import { useSelector } from "react-redux";
import BagItems from "../components/BagsItems";
import BagsSummary from "../components/BagsSummary";


function Bags() {
  const bags = useSelector((store) => store.bags );
  const items = useSelector((store) => store.items );
  const finalItems = items.filter(index => {
    const itemIndex = bags.indexOf(index.id);
    return itemIndex >= 0;
  }
  );

  return <>
  <div className="container">
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.length === 0 ? <h2>No items on Cart</h2> :
        finalItems.map(item => <BagItems key={item.id} item={item} />)
        }        
        </div>
        {finalItems.length === 0 ? "" :
        <div className="bag-summary">
          <BagsSummary />
        </div>
        }
      </div>
    </div>
  </>
}

export default Bags;