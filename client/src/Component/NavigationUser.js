import React from "react";
import NavUl from "./NavUl";
import NavItem from "./NavItem";
import { TokenContext } from "./TokenProvider";
import NavLinks from "./NavLinks";
import logo from "../img/logo.png";

//navigation for user
function NavigationUser() {
  const { handleRemoveToken } = React.useContext(TokenContext);
  const logoStyle = {
    width: "100%",
  };

  return (
    <>
      <NavUl>
        <img src={logo} alt="logo" className="logo" style={logoStyle} />
        <NavItem>
          <NavLinks to={"/Home"} title="Holdoversigt" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Yourteam"} title="Dine hold" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Waitinglist"} title="Venteliste" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Profileinformation"} title="Profiloplysninger" />
        </NavItem>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>Logud</button>
        </NavItem>
      </NavUl>
    </>
  );
}

export default NavigationUser;
