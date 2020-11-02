import React, {Component} from "react";
import styled from "styled-components";
import List from "./components/list_container";
import Header from "./components/header";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`

class App extends Component {

  render(){
    return (
    <Container>
      <Header/>
      <List/>
    </Container>
    );
  }
}

export default App;
