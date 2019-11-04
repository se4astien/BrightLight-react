import React from "react";

const CollectionTop = props => {
  return (
    <div className="section-top-bar">
      <a href={props.url}>
        <h3 className="section-category">{props.title}</h3>
      </a>
      <a className="see-more" href={props.urlSeeMore}>
        {props.textSeeMore}
        <ion-icon name="fastforward"></ion-icon>
      </a>
    </div>
  );
};

export default CollectionTop;
