import React from "react";
import { Col } from "react-bootstrap";
import { TokenContext } from "./TokenProvider";

function TopBar() {
  const { userFirstName, userLastName } = React.useContext(TokenContext);
  const fullName = `${userFirstName} ${userLastName}`;

  return (
    <Col className="dashboard__topbar">
      <p className="dashboard__logo-title">Jordnær Yoga</p>
      <p className="dashboard__fullname">{fullName}</p>
    </Col>
  );
}

export default TopBar;
