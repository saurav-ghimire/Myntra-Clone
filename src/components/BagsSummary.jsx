import { useSelector } from "react-redux";

function BagsSummary({}) {
  const bagItemIds = useSelector((state) => state.bags);
  const items = useSelector((state) => state.items);
  
  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    // Calculate discounted price if discount is available
    const discountedPrice = bagItem.price - (bagItem.price * (bagItem.discountPercentage / 100));
    
    totalMRP += discountedPrice; // Use discounted price for totalMRP
    totalDiscount += bagItem.price - discountedPrice; // Calculate total discount
  });

  let finalPayment = totalMRP + CONVENIENCE_FEES - totalDiscount; // Calculate final payment

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">${totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -${totalDiscount.toFixed(2)}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">${CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">${finalPayment.toFixed(2)}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagsSummary;
