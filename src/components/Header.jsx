import React, { useState } from "react";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const cartItems = useSelector((store) => store.bags);
  const wishListItems = useSelector((store) => store.wishlist);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Show search results only if query is not empty
    setShowSearchResults(query !== "");
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  return (
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
                    <li> <Link to="">HOME </Link></li>
                    <li> <Link to="/category/smartphones">smartphones </Link></li>
                    <li> <Link to="/category/laptops">laptops </Link></li>
                    <li> <Link to="/category/fragrances">fragrances </Link></li>
                    <li> <Link to="/category/skincare">Skin Care </Link></li>
                    <li> <Link to="/shop">Shop <small>NEW</small></Link></li>
                  </ul>
                </div>
              </div>
              <div className="profile-section">
                <div className="search-bar-wrapper">
                  <div className="search-bar">
                    <span><CiSearch /></span>
                    <input
                      type="text"
                      placeholder="Search For Product..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                  {showSearchResults && <Search query={searchQuery} clearSearchQuery={clearSearchQuery} />}
                </div>
                <div className="profiles">
                  <div className="profile-single-block">
                    <Link to="/login">
                      <CiUser />
                      <span>Profile</span>
                    </Link>
                  </div>
                  <div className="profile-single-block">
                    <Link to="/wishlist">
                      <CiHeart />
                      <span>Wishlist</span>
                      <span className="bagCount">{wishListItems.length}</span>
                    </Link>
                  </div>
                  <div className="profile-single-block">
                    <Link to="/bags">
                      <LiaShoppingBagSolid />
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
  );
}

export default Header;
