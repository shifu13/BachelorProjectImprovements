import React from "react";
import { Link, NavLink } from "react-router-dom";

//used for navigation link
function NavLinks(props) {
  return (
    <NavLink activeClassName="primary-menu-active" to={props.to}>
      {props.title}
    </NavLink>
  );
}

export default NavLinks;
