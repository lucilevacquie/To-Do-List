import React, {useEffect} from "react";
import styled from "styled-components";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Welcome from "./pages/welcome";
import Home from "./pages/home";
import EasyList from "./pages/easylist";
import DailyTask from "./pages/dailytask";
import Travel from "./pages/travel";
import Shopping from "./pages/shopping";
import ChoiceBoardHome from "./pages/choiceboard-home";

import Header from "./components/header";
import {useLoginContext} from "./loginProvider";
import ListProvider from "./listProvider";

const data = [
  {
    id: "Welcome",
    auth: false,
    component: Welcome,
    path: "/"
  },
  {
    id: "Home",
    auth: true,
    component: Home,
    path: "/"
  },
  {
    id: "Easy list",
    auth: true,
    component: EasyList,
    path: "/easylist"
  },
  {
    id: "Daily task",
    auth: true,
    component: DailyTask,
    path: "/dailytask"
  },
  {
    id: "Travel List",
    auth: true,
    component: Travel,
    path: "/travel"
  },
  {
    id: "Shopping List",
    auth: true,
    component: Shopping,
    path: "/shopping"
  },
  {
    id: "Choice Board Home",
    auth: true,
    component: ChoiceBoardHome,
    path: "/newlist"
  },
]

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`

const App = () => {

  const {isLoggedIn, login} = useLoginContext()

  const getRoute = (item) => {
    if ((item.auth && isLoggedIn) || (!item.auth && !isLoggedIn)){
      return <Route key={item.id} exact path={item.path} component={item.component}/>
    } 
  }

  useEffect(() => {
    const username = localStorage.getItem("username")
    if (username){
      login(username)
    } 
  }, [login])

  return (
  <Container>
    <ListProvider>
      <Router>
        {isLoggedIn && 
          <Header/>
        }
        <Switch>
          {data.map(item => getRoute(item))}
        </Switch>
      </Router> 
    </ListProvider>
  </Container>
  );
}

export default App;
