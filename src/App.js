import React from "react";
import styled from "styled-components";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import EasyList from "./pages/easylist";
import DailyTask from "./pages/dailytask";
import TypeOfList from "./pages/typeoflists";
import Calendar from "./pages/calendar";

import Header from "./components/header";

const data = [
  {
      id: "Easy list",
      path: EasyList,
      link: "/easylist"
  },
  {
      id: "Daily task",
      path: DailyTask,
      link: "/dailytask"
  },
  {
      id: "Special occasion",
      path: TypeOfList,
      link: "/specialoccasion"
  },
  {
      id: "Calendar",
      path: Calendar,
      link: "/calendar"
  },
]

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`

const App = () => {
    return (
    <Container>
      <Router>
        <Header/>
        <Switch>
          {data.map(item => (
            <Route key={item.id} exact path={item.link} component={item.path}/>
          ))}
        </Switch>
      </Router>
    </Container>
    );
  }

export default App;
