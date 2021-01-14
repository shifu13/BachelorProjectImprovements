import React, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import axios from "../AxiosConfig";
import { TokenContext } from "../Component/TokenProvider";
import cardphoto from "../img/cardphoto.jpg";

function YourTeam() {
  //usestate for course creation
  const [data, setData] = useState([]);
  Axios.defaults.withCredentials = true;
  axios.defaults.withCredentials = true;
  const { userAdmin, userID } = React.useContext(TokenContext);

  Axios.defaults.withCredentials = true;

  //find course table
  useEffect(() => {
    axios.get("/yourcourses").then((response) => {
      setData(response.data);
    });
  }, []);

  //function for getting list of assigned users
  /*   const spaces = (CourseID) => {
    console.log(CourseID);
    axios
      .get(`/course/getassigns?id=${CourseID}`, {
        data: {
          id: CourseID,
        },
      })
      .then((response) => {
        console.log(response);
        setTest(response.data);
      });
  }; */

  //function for cancel user from assigned course
  const cancellation = (CourseID) => {
    axios
      .delete("/course/cancellation", {
        data: {
          userid: userID,
          courseid: CourseID,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Col className="yourteam">
      <h2>Dine hold</h2>

      <h4>Hold</h4>

      {data
        .filter((course) => course.UserID === userID) //filter method where course.user id has to be the same as the user.
        .map((course) => {
          return (
            <div className="Card">
              <div className="Card__header">
                <img className="Card__image" src={cardphoto} alt="cardphoto" />
              </div>
              <Col className="Card__body">
                <h2 className="Card__title">{course.CourseTitle}</h2>
                <p className="Card__instructor">
                  {course.CourseInstructorNames}
                </p>
                <p className="Card__price">DKK {course.CoursePrice}</p>
                <p className="Card__spaces">
                  {course.CourseBookingIndividual} / {course.CourseSpaces}
                </p>
                <p className="Card__start-date">{course.CourseStartDate}</p>
                <p className="Card__end-date">{course.CourseEndDate}</p>

                <Row className="Card__btn-wrapper">
                  {userAdmin === 1 ? (
                    <button className="Card__btn">Rediger</button>
                  ) : (
                    <button
                      className="Card__btn"
                      onClick={() => {
                        cancellation(course.CourseID);
                      }}
                    >
                      Afbud
                    </button>
                  )}
                </Row>
              </Col>
            </div>
          );
        })}
    </Col>
  );
}

export default YourTeam;
