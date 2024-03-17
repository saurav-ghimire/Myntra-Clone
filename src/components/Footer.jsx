import { CiFacebook, CiInstagram, CiTwitter, CiYoutube, CiShoppingCart } from "react-icons/ci";
import { FloatingCartActions } from "../store/FloatingCart";
import { useDispatch } from "react-redux";

function Footer() {
  const dispatch = useDispatch();

  const handleFloating = () => {
    dispatch(FloatingCartActions.toggleFloat());
  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 col-md-4">
            <h3>Online Shopping</h3>
            <div className="custom-links">
              <ul>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Home & Living</a></li>
                <li><a href="">Beauty</a></li>
                <li><a href="">Gift Cards</a></li>
                <li><a href="">Myntra Insider</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-4">
            <h3>Customer Policies</h3>
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">T&C</a></li>
              <li><a href="">Terms Of Use</a></li>
              <li><a href="">Track Orders</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Cancellation</a></li>
              <li><a href="">Returns</a></li>
              <li><a href="">Privacy policy</a></li>
              <li><a href="">Grievance Officer</a></li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <h3>Expirence Myntra App on Mobile</h3>
            <div className="brands">
              <img src="./images/android.png" alt="" />
              <img src="./images/apple.png" alt="" />
            </div>
            <div className="keep-in-touch">
              <h3>Keep in touch</h3>
              <div className="social-medias">
                <a href=""><CiFacebook /></a>
                <a href=""><CiInstagram /></a>
                <a href=""><CiTwitter /></a>
                <a href=""><CiYoutube /></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="whyus">
              <div className="whyus-single">
                <span>
                  <img src="./images/original.png" alt="" />
                </span>
                <p>
                  <strong>100% ORIGINAL guarantee</strong> for all products at myntra.com
                </p>
              </div>
              <div className="whyus-single">
                <span>
                  <img src="./images/return.png" alt="" />
                </span>
                <p>
                  <strong>Return within 14 days</strong> of receiving your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-icon" onClick={handleFloating}>
        <CiShoppingCart />
      </div>
    </footer>
  );
}

export default Footer;
