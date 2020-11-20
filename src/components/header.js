import React, {Component} from "react";
import styled from "styled-components";

import Logo from "../assets/controlfreak-logo.png";
import Navbar from "./navbar";
import {colors} from "../listProvider";

const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    background-color: ${colors.grey};
`;

const HeadContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;

const Img = styled.img`
    width: 35px;
`;

const Title = styled.div`
    padding-top: 0.5rem;
    font-size: 16px;
    font-family: "Pixeboy";
    color: white;
`;

class Header extends Component {

    render(){
        return (
            <HeadContainer>
                <Navbar/>
                <HeadContent>
                    <a href="/">
                        <Img src={Logo}></Img>
                    </a>
                    
                    <Title>Control Freak</Title>
                </HeadContent>
            </HeadContainer>
        )
    }
}

export default Header;