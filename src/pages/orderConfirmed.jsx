import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { bagActions } from "../store/bagSlice";

function OrderConfirmed() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  // Get form data from URL search params
  const name = queryParams.get("name");
  const email = queryParams.get("email");
  const address = queryParams.get("address");
  const city = queryParams.get("city");
  const zipCode = queryParams.get("zipCode");
  const country = queryParams.get("country");
  const paymentMethod = queryParams.get("paymentMethod");

  

  const bags = useSelector((store) => store.bags );

  if(bags.length <= 0 ){
    navigate('/');
  }
  const items = useSelector((store) => store.items );
  const finalItems = items.filter(index => {
    const itemIndex = bags.indexOf(index.id);
    return itemIndex >= 0;
  }
  );

  const CONVENIENCE_FEES = 99;
  
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
  
    // Calculate the discount amount based on the discount percentage
    const discountAmount = (bagItem.price * bagItem.discountPercentage) / 100;
  
    // Subtract the discount amount from the price
    totalDiscount += Math.round(bagItem.price - discountAmount);
  });
  

  const returnHome = () => {
    navigate('/')  
    dispatch(bagActions.resetCart());
  }
  return (
    <div className="order-confirmed-container container">
      <h2 className="order-heading">Order Confirmed</h2>
      <div className="order-details-container">
        <div className="customer-info">
          <h3 className="section-heading">Customer Information</h3>
          <p><span className="info-label">Name:</span> {name}</p>
          <p><span className="info-label">Email:</span> {email}</p>
          <p><span className="info-label">Address:</span> {address}</p>
          <p><span className="info-label">City:</span> {city}</p>
          <p><span className="info-label">Zip Code:</span> {zipCode}</p>
          <p><span className="info-label">Country:</span> {country}</p>
          <p><span className="info-label">Payment Method:</span> {paymentMethod}</p>
        </div>
        <div className="order-items">
          <h3 className="section-heading">Ordered Items</h3>
          <ul className="items-list">
            {finalItems.map((item) => (
              <li key={item.id} className="item">
                <span className="item-title"> {item.title} &nbsp;</span>
                <span className="item-price">Price: &nbsp; ${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-amount">
          <h3 className="section-heading">Total Amount</h3>
          <p className="total-price">${totalMRP}</p>
        </div>
      </div>
      <div className="confirmation-message">
        <p>Your order has been confirmed. Thank you for shopping with us!</p>
      </div>
      <button className="btn btn-primary" onClick={() => returnHome()}>Go Back to Home</button>
    </div>
  );
}

export default OrderConfirmed;
