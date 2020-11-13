import React, {Component} from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const HeadContainer = styled.div`
    display: grid;
    grid-template-columns: 22% 78%;
    align-items: center;
    padding: 1rem 0;
    background-color: #a3bed3;
`;

const Title = styled.div`
    padding-left: 1rem;
    font-size: 1.8rem;
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