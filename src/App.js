import React from "react";
import styled from "styled-components";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Home from "./pages/home";
import EasyList from "./pages/easylist";
import DailyTask from "./pages/dailytask";
import TypeOfList from "./pages/typeoflists";
import Calendar from "./pages/calendar";
import Travel from "./pages/travel";
import Shopping from "./pages/shopping";

import Header from "./components/header";

const data = [
  {
    id: "Home",
    path: Home,
    link: "/"
  },
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
  {
    id: "Travel List",
    path: Travel,
    link: "/travel"
  },
  {
    id: "Shopping List",
    path: Shopping,
    link: "/shopping"
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
