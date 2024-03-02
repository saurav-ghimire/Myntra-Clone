import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

function Header() {
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
              <li> <a href="">MEN </a></li>
              <li> <a href="">WOMEN </a></li>
              <li> <a href="">KIDS </a></li>
              <li> <a href="">HOME & LIVING </a></li>
              <li> <a href="">BEAUTY </a></li>
              <li> <a href="">STUDIO <small>NEW</small></a></li>
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
                <LiaShoppingBagSolid />
                <span>Profile</span>
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