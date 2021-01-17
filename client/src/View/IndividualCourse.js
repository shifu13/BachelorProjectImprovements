import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.scss";
import { Col, Row } from "react-bootstrap";
import axios from "../AxiosConfig";
import { TokenContext } from "../Component/TokenProvider";
import cardphoto from "../img/cardphoto.jpg";
//import WaitingList from "./WaitingList";

function IndividualCourse() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [wait, setWait] = useState([]);
  axios.defaults.withCredentials = true;
  const { userAdmin } = React.useContext(TokenContext);

  useEffect(() => {
    axios
      .get(`/course/singlecourse?id=${id}`, {
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/course/waitinglist?id=${id}`, {
        data: {
          id: id,
        },
      })
      .then((response) => {
        setWait(response.data);
      });
  }, []);

  return (
    <Col md={12} className="course__individual">
      {data.map((course) => {
        return (
          <Row md={12} className="course">
            <Col md={6}>
              <h2 className="course__title">{course.CourseTitle}</h2>
              <p className="course__description">{course.CourseDescription}</p>
              <p className="course__instructor">
                Instruktør: {course.CourseInstructorNames}
              </p>
              <p className="course__spaces">
                Pladser: {course.CourseBookingCount} / {course.CourseSpaces}
              </p>
              <p className="course__price">Pris: DKK {course.CoursePrice}</p>
              <p className="course__start-date">{course.CourseStartDate}</p>
              <p className="course__end-date">{course.CourseEndDate}</p>
              <p className="course__address">
                Placering: {course.CourseAddress}
              </p>
            </Col>
            <Col md={6} className="course__image-wrapper">
              <img className="course__image" src={cardphoto} alt="cardphoto" />
            </Col>
          </Row>
        );
      })}

      {wait.map((waitinglist) => {
        return (
          <>
            {userAdmin === 1 ? (
              <Col md={6} className="course-waitinglist">
                <h2 className="course-waitinglist__title">Venteliste</h2>
                <div className="course-waitinglist__body-wrapper">
                  <p className="course-waitinglist__name">
                    {waitinglist.UserFirstName} {waitinglist.UserLastName},
                  </p>
                  <p className="course-waitinglist__phone">
                    {waitinglist.UserPhone},
                  </p>
                  <p className="course-waitinglist__email">
                    {waitinglist.UserEmail},
                  </p>
                  <p className="course-waitinglist__date">
                    {waitinglist.CreatedDate}
                  </p>
                </div>
              </Col>
            ) : (
              <div></div>
            )}
          </>
        );
      })}
    </Col>
  );
}

export default IndividualCourse;
