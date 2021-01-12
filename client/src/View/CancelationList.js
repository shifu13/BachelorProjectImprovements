import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import axios from "../AxiosConfig";

function CancelationList() {
  //usestate for course creation
  const [data, setData] = useState([]);

  Axios.defaults.withCredentials = true;

  //find course table
  useEffect(() => {
    axios.get("/getcourses").then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []);
  return (
    <Col className="cancelationlist">
      <h2>Afbudsliste</h2>

      {data.map((course) => {
        return (
          <div className="Card">
            <div className="Card__header">
              <img className="Card__image" src="" />
              <div className="Card__cross" />
            </div>
            <div className="Card__body">
              <h2 className="Card__title">{course.CourseTitle}</h2>
              <p className="Card__instructor">{course.CourseInstructorNames}</p>
              <p className="Card__instructor">{course.CourseDescription}</p>
              <p className="Card__price">{course.CoursePrice}</p>
              <p className="Card__spaces">{course.CourseSpaces}</p>
              <p className="Card__start-date">{course.CourseStartDate}</p>
              <p className="Card__end-date">{course.CourseEndDate}</p>
              <Col>
                <Row className="Card__btn-wrapper">
                  <button className="Card__btn">SEND EMAIL</button>
                </Row>
              </Col>
            </div>
          </div>
        );
      })}
    </Col>
  );
}

export default CancelationList;
