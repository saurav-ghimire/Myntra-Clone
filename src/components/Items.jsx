import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Items() {
  const StoreItems = useSelector(store => store.items);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      console.log(data.posts)
    })
  }, [])

  return <>
  <div className="all-items">
    <div className="container">
      <div className="title-section">
        <h2>Crazy</h2>
        <h4>Deals</h4>
      </div>
      <div className="items-container">
      <div className="item-container">
          <div className="item-image-wrapper">
            <img className="item-image" src="images/1.jpg" alt="item image" />
            <div className="rating">4.5 ⭐ | 1400</div>
          </div>
          
          <div className="company-name">Carlton London</div>
          <div className="item-name">Rhodium-Plated CZ Floral Studs</div>
          <div className="price"><span className="current-price">Rs 606</span><span className="original-price">Rs 1045</span><span className="discount">(42% OFF)</span></div>
          <button className="btn-add-bag">
            
            Add to Bag
          </button>
      </div>
    </div>
  </div>
</div>

  </>;
}

export default Items;