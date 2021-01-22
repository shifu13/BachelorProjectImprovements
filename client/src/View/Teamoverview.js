import React, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import axios from "../AxiosConfig";
import { TokenContext } from "../Component/TokenProvider";
import cardphoto from "../img/cardphoto.jpg";
//import NavLinks from "../Component/NavLinks";
import { Link } from "react-router-dom";

function Teamoverview() {
  //usestate for course creation
  const [data, setData] = useState([]);
  Axios.defaults.withCredentials = true;
  axios.defaults.withCredentials = true;
  const { userAdmin, userID } = React.useContext(TokenContext);

  //find course table
  useEffect(() => {
    axios.get("course/getcourses").then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []);

  const edit = () => {};

  const deleteCourse = (CourseID) => {
    axios
      .delete("/course/delete", {
        data: {
          courseid: CourseID,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  //function for assigning an user to a course
  const assign = (CourseID) => {
    axios
      .post("/course/assign", {
        userid: userID,
        courseid: CourseID,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Col className="teamoverview">
      <h2>Holdoversigt</h2>

      <h4>Hold</h4>

      {data.map((course) => {
        return (
          <div className="Card">
            <div className="Card__header">
              <Link to={`/course/${course.CourseID}`}>
                <img className="Card__image" src={cardphoto} alt="cardphoto" />
              </Link>
            </div>
            <Col className="Card__body">
              <h2 className="Card__title">{course.CourseTitle}</h2>
              <p className="Card__instructor">{course.CourseInstructorNames}</p>
              <p className="Card__price">DKK {course.CoursePrice}</p>
              <p className="Card__spaces">
                {course.CourseBookingCount} / {course.CourseSpaces}
              </p>
              <p className="Card__start-date">{course.CourseStartDate}</p>
              <p className="Card__end-date">{course.CourseEndDate}</p>

              <Row className="Card__btn-wrapper">
                {userAdmin === 1 ? (
                  <button className="Card__btn" onClick={edit}>
                    Rediger
                  </button>
                ) : (
                  <button
                    className="Card__btn"
                    onClick={() => {
                      assign(course.CourseID);
                    }}
                  >
                    Tilmeld
                  </button>
                )}
                {userAdmin === 1 ? (
                  <button
                    className="Card__btn"
                    onClick={() => {
                      deleteCourse(course.CourseID);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <div></div>
                )}
              </Row>
            </Col>
          </div>
        );
      })}
    </Col>
  );
}

export default Teamoverview;
