import React from "react";
import NavItem from "./NavItem";
import NavUl from "./NavUl";
import { TokenContext } from "./TokenProvider";
import logo from "../img/logo.png";
import NavLinks from "./NavLinks";

//navigation for admin
function NavigationAdmin() {
  const { handleRemoveToken } = React.useContext(TokenContext);
  const logoStyle = {
    width: "100%",
  };

  return (
    <>
      <NavUl>
        <img src={logo} alt="logo" className="logo" style={logoStyle} />
        <NavItem>
          <NavLinks exact to={"/Home"} title="Holdoversigt" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Yourteam"} title="Dine hold" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Cancelationlist"} title="Afbudsliste" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Profilinformation"} title="Profiloplysninger" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Createcourse"} title="Opret hold" />
        </NavItem>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>Logud</button>
        </NavItem>
      </NavUl>
    </>
  );
}

export default NavigationAdmin;
