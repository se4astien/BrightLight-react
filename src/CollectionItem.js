import React from "react";

const CollectionItem = props => {
  return (
    <div className="collection-item">
      <img src={props.url} alt={props.alt} />
      <div className="collection-info">
        <h3>{props.title}</h3>
        <a href={props.urlCategory}>{props.titleCategory}</a>
      </div>
    </div>
  );
};

export default CollectionItem;
