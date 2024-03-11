import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const zipCodeRef = useRef(null);
  const countryRef = useRef(null);
  const paymentMethodRef = useRef(null);
  
  // Initialize useNavigate
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      name: fullNameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      country: countryRef.current.value,
      paymentMethod: paymentMethodRef.current.value,
    };

    console.log(formData);

    // Reset form fields
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    zipCodeRef.current.value = "";
    countryRef.current.value = "";
    paymentMethodRef.current.value = "CreditCard";

    // Navigate to the orderConfirmed route
    const queryParams = new URLSearchParams(formData).toString();

    // Navigate to the orderConfirmed route with form data as URL parameters
    navigate(`/orderConfirmed?${queryParams}`);

  };

  return (
    <div className="checkout-form-container container">
      <h2>Checkout</h2>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" ref={fullNameRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} required />
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityRef} required />
          </div>
          <div className="form-group col-6">
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" ref={zipCodeRef} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" ref={countryRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select id="paymentMethod" ref={paymentMethodRef} required>
            <option value="PayPal">PayPal</option>
            <option value="BankTransfer">Cash On Delivery</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckOut;
