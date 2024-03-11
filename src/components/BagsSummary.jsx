import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function BagsSummary({}) {

  const bagItemIds = useSelector((state) => state.bags);
  
  const items = useSelector((state) => state.items);
  
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
  
    // Calculate the discount amount based on the discount percentage
    const discountAmount = (bagItem.price * bagItem.discountPercentage) / 100;
  
    // Subtract the discount amount from the price
    totalDiscount += Math.round(bagItem.price - discountAmount);
  });
  

  let finalPayment = Math.round(totalMRP - totalDiscount + CONVENIENCE_FEES);


  return <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">${totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -${totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">$99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">${finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni"><Link to="/checkout">PLACE ORDER</Link></div>
      </button>
  </>;
}

export default BagsSummary;