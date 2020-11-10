import React, {Component} from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const HeadContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
    padding: 1rem 0;
    background-color: #a3bed3;
`;

const Title = styled.div`
    text-align: center;
    font-size: 2rem;
    font-family: "West_england";
`;

class Header extends Component {

    render(){
        return (
            <HeadContainer>
                <Navbar/>
                <Title>Control Freak</Title>
            </HeadContainer>
        )
    }
}

export default Header;