import React from "react";

const Menu = props => {
  return (
    <li className="menu-items">
      <a href={props.url}>{props.name}</a>
    </li>
  );
};

export default Menu;
