import react, { useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "../AxiosConfig";
//import logo from "../img/logo.png";

function Registration() {
  //usestate for registration
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  Axios.defaults.withCredentials = true;

  const history = useHistory();

  //sending register request to backend - register method
  const register = () => {
    axios
      .post("/register", {
        email: emailReg,
        password: passwordReg,
        firstname: firstNameReg,
        lastname: lastNameReg,
        number: numberReg,
      })
      .then((response) => {
        console.log(response);
        alert("Tillykke din bruger er blevet oprettet - Du kan nu gå tilbage");
      });
  };

  const back = () => {
    history.push("/login");
  };

  return (
    <>
      <Container className="registration">
        <h1 className="registration__title">Opret bruger</h1>
        {/* <div className="registration__logo-wrapper">
          <img className="registration__logo" src={logo} alt="logo" />
        </div> */}
        <form className="registration__form">
          <label className="registration__email-label">Email</label>
          <input
            className="registration__email-input"
            type="text"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <label className="registration__password-label">Password</label>
          <input
            className="registration__password-input"
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <label className="registration__firstName-label">Fornavn</label>
          <input
            className="registration__firstName-input"
            type="text"
            onChange={(e) => {
              setFirstNameReg(e.target.value);
            }}
          ></input>
          <label className="registration__lastName-label">Efternavn</label>
          <input
            className="registration__lastName-input"
            type="text"
            onChange={(e) => {
              setLastNameReg(e.target.value);
            }}
          ></input>
          <label className="registration__phone-label">Telefonnummer</label>
          <input
            className="registration__phone-input"
            type="text"
            onChange={(e) => {
              setNumberReg(e.target.value);
            }}
          ></input>
          <div className="registration__btn-wrapper">
            <button className="registration-back__btn" onClick={back}>
              Tilbage
            </button>
            <button className="registration-confirm__btn" onClick={register}>
              Registrer
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Registration;
