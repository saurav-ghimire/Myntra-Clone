import { useSelector } from "react-redux";


function Bags() {
  const bags = useSelector((store) => store.bags );
  const items = useSelector((store) => store.items );
  const finalItems = items.filter(index => {
    const itemIndex = bags.indexOf(index.id);
    return itemIndex >= 0;
  }
  );

  return <>
  <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.map(item => <BagItems item={item} />)}
          
        </div>
        <div className="bag-summary">
          {/* <BagsSummary /> */}
        </div>
      </div>
    </main>
  </>
}

export default Bags;