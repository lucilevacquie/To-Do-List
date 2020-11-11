import React from "react";
import styled from "styled-components";

import List from "../components/list/list_container";
import Title from "../components/list/list_title";

const Container = styled.div``;


const EasyList = () => {
    return (
        <Container>
            <Title>Easy List</Title>
            <List listKey="easylist"/>
        </Container>
    )
}

export default EasyList;
