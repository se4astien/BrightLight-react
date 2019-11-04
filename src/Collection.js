import React from "react";

const Collection = () => {
  return (
    <section className="collection">
      {/* <!-- shipping bar --> */}
      <div className="shipping-bar">
        <p>Free shipping</p>
        <a href="#">
          <ion-icon name="close"></ion-icon>
        </a>
      </div>

      <div className="section-top-bar">
        <a href="#">
          <h3 className="section-category">Collection</h3>
        </a>
        <a className="see-more" href="#">
          See more
          <ion-icon name="fastforward"></ion-icon>
        </a>
      </div>

      <div className="collection-items">
        {/* <!-- item 01 --> */}
        <div className="collection-item">
          <img src="https://picsum.photos/id/1019/600/750" alt="product" />
          <div className="collection-info">
            <h3>best sellers</h3>
            <a href="#">explore</a>
          </div>
        </div>
        {/* <!-- item 02 --> */}
        <div className="collection-item">
          <img src="https://picsum.photos/id/1032/600/750" alt="product" />
          <div className="collection-info">
            <h3>cat eyes style</h3>
            <a href="#">explore</a>
          </div>
        </div>
        {/* <!-- item 03 --> */}
        <div className="collection-item">
          <img src="https://picsum.photos/id/1035/600/750" alt="product" />
          <div className="collection-info">
            <h3>classNameic</h3>
            <a href="#">explore</a>
          </div>
        </div>
        {/* <!-- item 04 --> */}
        <div className="collection-item">
          <img src="https://picsum.photos/id/1037/600/750" alt="product" />
          <div className="collection-info">
            <h3>retro</h3>
            <a href="#">explore</a>
          </div>
        </div>
        {/* <!-- item 05 --> */}
        <div className="collection-item">
          <img src="https://picsum.photos/id/1039/600/750" alt="product" />
          <div className="collection-info">
            <h3>rounded</h3>
            <a href="#">explore</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
