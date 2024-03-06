import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  
  const cartItems = useSelector((store) => store.bags)


  return <>
  <header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="header">
          <div className="menu-section">
            <div className="logo">
          <img src="./images/myntra_logo.webp" alt="" />
            </div>
            <div className="custom-menu">
              <ul>
              <li> <Link to="">MEN </Link></li>
              <li> <Link to="">WOMEN </Link></li>
              <li> <Link to="">KIDS </Link></li>
              <li> <Link to="">HOME & LIVING </Link></li>
              <li> <Link to="">BEAUTY </Link></li>
              <li> <Link to="">STUDIO <small>NEW</small></Link></li>
              </ul>
            </div>
          </div>
          <div className="profile-section">
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <span><CiSearch /></span>
                <input type="text" placeholder="Search For Product Brands More" />
              </div>
            </div>
            <div className="profiles">
              <div className="profile-single-block">
                <CiUser />
                <span>Profile</span>
              </div>
              <div className="profile-single-block">
                <CiHeart />
                <span>Wishlist</span>
              </div>
              <div className="profile-single-block">
                <Link to="/bags"><LiaShoppingBagSolid />
                <span className="bagCount">{cartItems.length}</span>
                <span>Bag</span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>;
}

export default Header;