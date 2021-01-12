import React from "react";

//Used for navigation ul
function NavUl(props) {
  return <ul className="primary-menu">{props.children}</ul>;
}

export default NavUl;
