import React, { useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import { TokenContext } from "../Component/TokenProvider";
import { useHistory } from "react-router-dom";
import NavLinks from "../Component/NavLinks";
//import axios from "../AxiosConfig";

function Login() {
  const { handleSetToken } = React.useContext(TokenContext); //obj destruction

  //usestate for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //usestate for loginstatus
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const history = useHistory();

  //login method
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        handleSetToken(response.data.token);
        setLoginStatus(true);
        history.push("/");
      }
    });
  };

  /*  const userAuthentication = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  }; */

  return (
    <>
      <Container className="login">
        <h1 className="login__title">Login</h1>
        <label className="login__email-label">Email</label>
        <input
          className="login__email-input"
          type="text"
          placeholder="Email.."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="login__password-label">Password</label>
        <input
          className="login__password-input"
          type="password"
          placeholder="Pasword.."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Col>
          <Row className="login__login-password-wrapper">
            <NavLinks to={"/Registration"} title="Opret bruger" />
            <a href="/">Glemt password</a>
          </Row>
        </Col>
        <button className="login__btn" onClick={login}>
          Login
        </button>
      </Container>

      {/*{loginStatus && (
        <button onClick={userAuthentication}> Check if authenticated</button>
      )} */}
    </>
  );
}

export default Login;
