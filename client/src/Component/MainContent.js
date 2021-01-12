import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateCourse from "../View/CreateCourse";
import Teamoverview from "../View/Teamoverview";
import YourTeam from "../View/YourTeam";
import ProfileInformation from "../View/ProfileInformation";
import WaitingList from "../View/WaitingList";
import CancelationList from "../View/CancelationList";
import { TokenContext } from "./TokenProvider";
import { propTypes } from "react-bootstrap/esm/Image";

//render det content der skal være på siden, i forhold til den route man er på
//vise det rigtige content ift. URL
//Det ændrer sig ikke, så derfor har vi det, og så skal man re'render menuen hele tiden, hvis man satte den ind

function MainContent(props) {
  //admin
  //const { userAdmin } = React.useContext(TokenContext);

  if (props.isAdmin) {
    return (
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/Home" />
        </Route>

        <Route path={"/Home"} exact>
          <Teamoverview />
        </Route>

        <Route path={"/Yourteam"} exact>
          <YourTeam />
        </Route>

        <Route path={"/Cancelationlist"} exact>
          <CancelationList />
        </Route>

        <Route path={"/Profilinformation"} exact>
          <ProfileInformation />
        </Route>

        <Route path={"/Createcourse"} exact>
          <CreateCourse />
        </Route>
      </Switch>
    );
  }

  //use the following route if you're not admin
  return (
    <>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/Home" />
        </Route>
        <Route path={"/Home"} exact>
          <Teamoverview />
        </Route>
        <Route path={"/Yourteam"} exact>
          <YourTeam />
        </Route>
        <Route path={"/Waitinglist"} exact>
          <WaitingList />
        </Route>
        <Route path={"/Profileinformation"} exact>
          <ProfileInformation />
        </Route>
        <Route path={"/Logout"} exact></Route>
      </Switch>
    </>
  );
}

export default MainContent;
