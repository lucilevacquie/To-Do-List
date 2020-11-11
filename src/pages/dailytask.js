import React from "react";
import styled from "styled-components";

import List from "../components/list/list_container";
import Title from "../components/list/list_title";

const Container = styled.div``;

const DailyTask = () => {

    return (
        <Container>
            <Title>Daily Tasks</Title>
            <List listKey="dailytask"/>
        </Container>
    )
}

export default DailyTask;
