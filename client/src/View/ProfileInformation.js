import React, { useEffect, useState } from "react";
import Axios from "axios";
import { TokenContext } from "../Component/TokenProvider";
import { Col } from "react-bootstrap";
import axios from "../AxiosConfig";

function ProfileInformation() {
  const {
    token,
    userID,
    handleRemoveToken,
    userFirstName,
    userLastName,
    userPhoneNumber,
  } = React.useContext(TokenContext);
  const [firstname, setFirstname] = useState(userFirstName);
  const [lastname, setLastname] = useState([userLastName]);
  const [phonenumber, setPhonenumber] = useState([userPhoneNumber]);
  const [password, setPassword] = useState([]);

  Axios.defaults.withCredentials = true;
  axios.defaults.withCredentials = true;

  const updateUser = () => {
    axios
      .put("/user/update", {
        userid: userID,
        headers: { "Content-Type": "application/json" },
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert("Profilinformationer er blevet opdateret");
      });
  };

  const deleteUser = () => {
    axios
      .delete("/user/delete", {
        data: {
          userid: userID,
        },
      })
      .then((response) => {
        handleRemoveToken();
        console.log(response);
        alert("Profilen er blevet slettet");
      });
  };

  return (
    <Col className="profileinformation">
      <h2 className="profileinformation__title">Profiloplysninger</h2>
      <label className="profileinformation__firstname-label">Fornavn</label>
      <input
        className="profileinformation__firstname-input"
        type="text"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <label className="profileinformation__lastname-label">Efternavn</label>
      <input
        className="profileinformation__lastname-input"
        type="text"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <label className="profileinformation__phone-label">Telefonnummer</label>
      <input
        className="profileinformation__phone-input"
        type="text"
        value={phonenumber}
        onChange={(e) => {
          setPhonenumber(e.target.value);
        }}
      />
      <label className="profileinformation__password-label">Kodeord</label>
      <input
        className="profileinformation__password-input"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="profileinformation__btn-wrapper">
        <button className="profileinformation__delete-btn" onClick={deleteUser}>
          Slet
        </button>
        <button
          className="profileinformation__update-btn"
          onClick={() => {
            updateUser();
          }}
        >
          Gem
        </button>
      </div>
    </Col>
  );
}

export default ProfileInformation;
