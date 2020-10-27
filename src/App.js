import React, {Component} from "react";
import styled from "styled-components";
import List from "./components/list";
import Header from "./components/header";
import Navbar from "./components/navbar";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #f1e4da;
`

class App extends Component {

  render(){
    return (
    <Container>
      <Header/>
      <Navbar/>
      <List/>
    </Container>
    );
  }
}

export default App;
