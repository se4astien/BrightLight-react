import React from "react";

const MenuMobile = props => {
  return (
    <li>
      <a href={props.url}>{props.name}</a>
    </li>
  );
};

export default MenuMobile;
