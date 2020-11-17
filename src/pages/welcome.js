import React from "react";
import styled from "styled-components";

import {useLoginContext} from "../loginProvider";
import StyledInput from "../components/input";
import Logo from "../assets/controlfreak-logo.png";
import {colors} from "../listProvider";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${colors.grey};
`;

const Content = styled.div`
    display: grid;
    grid-template-rows: 170px auto;
    margin: 1.5rem;
    color: white;
`;

const LogoImg = styled.img`
    justify-self:center;
    align-self: center;
    width: 150px;
`;

const Title = styled.div`
    font-family: "Pixeboy";
    font-size: 34px;
    text-align: center;
    align-self: center;
    padding-top: 1rem;
`;

const Description = styled.div`
    text-align: center;
    align-self: center;
    font-size: 17px;
    line-height: 1.8rem;
    font-family: "Roboto", sans-serif;
    padding-top: 1rem;
`;

const Form = styled.form`
    text-align: center;
    align-self: center;
    padding-top: 1rem;
    font-family: "Roboto", sans-serif;
    button{
        padding: 8px;
        background-color:${colors.red};
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
                <LogoImg src={Logo}></LogoImg>
                <Title>Welcome to <br/> Control Freak!</Title>
                <Description>This TO DO LIST app is going to help you showing your true nature.</Description>
                <Description>If you don't want us to call you Freak, <br/> enter your name here</Description>
                <Form onSubmit={onSubmitForm}>
                    <StyledInput
                    name = "username"
                    type = "text" 
                    placeholder = "Your name"
                    required/>
                    <br/>
                    <button type="submit">Let's go!</button>
                </Form>
            </Content>
        </Container>
    )
}

export default Welcome;