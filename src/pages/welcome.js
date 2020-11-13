import React from "react";
import styled from "styled-components";

import {useLoginContext} from "../loginProvider";
import Logo from "../assets/controlfreak-logo.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: linear-gradient(#6eaae4, #d9b9a2);
`;

const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 100px);
    padding-top: 1.5rem;
    margin: 1.5rem;
`;

const Title = styled.div`
    font-family: "West_england";
    font-size: 26px;
    text-align: center;
    align-self: center;
`;

const LogoImg = styled.img`
    justify-self:center;
    align-self: center;
    width: 100px;
`;

const Description = styled.p`
    text-align: center;
    align-self: center;
    font-size: 17px;
    line-height: 1.8rem;
`;

const Form = styled.form`
    text-align: center;
    align-self: center;
    input{
        background-color: transparent;
        border: none;
        border-bottom: black solid 1px;
        font-size: 16px;
    }
    button{
        margin-left: 10px;
    }
`;


const Welcome = () => {

    const {login} = useLoginContext()

    const onSubmitForm = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const username = formdata.get("username");
        
        localStorage.setItem("username", username);

        login(username)
    }


    return (
        <Container>
            <Content>
                <Title>Welcome to <br/> Control Freak!</Title>
                <Description>This app is going to help you showing your true nature.</Description>
                <Description>If you don't want us to call you Freak, <br/> enter your name here</Description>
                <Form onSubmit={onSubmitForm}>
                    <input
                    name = "username"
                    type="text" 
                    placeholder="Your name"
                    required/>
                    <button type="submit">Let's go!</button>
                </Form>
                <LogoImg src={Logo}></LogoImg>
            </Content>
        </Container>
    )
}

export default Welcome;