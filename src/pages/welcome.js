import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: linear-gradient(#6eaae4, #d9b9a2);
`;

const Content = styled.div`
    padding-top: 3rem;
`;

const Description = styled.p`
    text-align: center;
`;

const Name = styled.p`
    text-align: center;
`;

const Form = styled.form`
    text-align: center;
`;


const Welcome = () => {
    return (
        <Container>
            <Content>
                <Title>Welcome to Control Freak!</Title>
                <Description>This app is going to help you showing your true nature.</Description>
                <Name>If you don't want us to call you Love, <br/> enter your name here</Name>
                <Form>
                    <input></input>
                </Form>
            </Content>
        </Container>
    )
}

export default Welcome;