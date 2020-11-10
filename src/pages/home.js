import React from "react";
import styled from "styled-components";

import Title from "../components/list/list_title";
import ChoiceBoard from "../components/choice_board";
import {useLoginContext} from "../loginProvider";

const data = [
    {
        id: "Easy list",
        link: "/easylist"
    },
    {
        id: "Daily task",
        link: "/dailytask"
    },
    {
        id: "Special occasion",
        link: "/specialoccasion"
    },
    {
        id: "Calendar",
        link: "/calendar"
    },
]

const Container = styled.div``;

const Home = () => {

    const {username} = useLoginContext()

    return (
        <Container>
            <Title>Hello {username}!</Title>
            <Title>What kind of Control Freak you want to be today?</Title>
            <ChoiceBoard data={data}/>
        </Container>
    )
}

export default Home;