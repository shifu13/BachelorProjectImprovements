import { React, useState } from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";

function Button() {
  const elem = ducment.getElementById("buttonTest");

  return (
    <div>
      <button
        className="buttonTest"
        value="Tilmeld"
        onClick={() => {
          button(course.CourseID);
        }}
      ></button>
    </div>
  );

  function button(e) {
    return (
      <>
        {(function () {
          switch (e.target.value) {
            //show b2b
            case "button-b2b":
              return ReactDOM.render(
                <CardB2b />,
                document.getElementById("empty")
              );

            //show b2c
            case "button-b2c":
              return ReactDOM.render(
                <CardB2c />,
                document.getElementById("empty")
              );

            //show e-handel
            case "button-ehandel":
              return ReactDOM.render(
                <CardEhandel />,
                document.getElementById("empty")
              );

            //show all be default
            default:
              return ReactDOM.render(
                <CardAll />,
                document.getElementById("empty")
              );
          }
        })()}
      </>
    );
  }
}

//function for displaying join, cancellation & waitinglist
const buttontest = (e) => {
  switch (expression) {
    case "Tilmeld":
      break;
    case "":
      break;
    default:
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
  }
};

export default Button;
