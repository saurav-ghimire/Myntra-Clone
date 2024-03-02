function Items() {
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
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path>
                <path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
            </svg>
            Add to Bag
          </button>
      </div>
    </div>
  </div>
</div>

  </>;
}

export default Items;