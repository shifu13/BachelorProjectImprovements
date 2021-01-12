import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavigationAdmin from "../Component/NavigationAdmin";
import NavigationUser from "../Component/NavigationUser";
import MainContent from "../Component/MainContent";
import { Spinner, Col } from "react-bootstrap";
import TopBar from "../Component/TopBar";
import { TokenContext } from "../Component/TokenProvider";
//import axios from "../AxiosConfig";

export default function Homepage() {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  Axios.defaults.withCredentials = true;

  //checking what role you have
  const getUserMod = () => {
    setIsLoading(true);
    Axios.get("http://localhost:3001/login")
      .then((response) => {
        if (response.data.loggedIn == true) {
          setRole(response.data.user[0].IsAdmin);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  //whenever we try to access this page, we need to make this request.
  useEffect(() => {
    getUserMod();
  }, [role]);

  const { userAdmin } = React.useContext(TokenContext);

  //if loading, we will return a spinner, untill routes get found untill role is figured out.
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="dashboard">
      {role === 1 ? (
        <NavigationAdmin className="dasboard__navigation-Admin" />
      ) : (
        <NavigationUser className="dasboard__navigation-User" />
      )}
      <TopBar className="dashboard__topbar" />
      <MainContent className="dashboard__maincontent" isAdmin={userAdmin} />
    </div>
  );
}
