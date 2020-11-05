import React from "react";
import styled from "styled-components";
import PenIcon from "../../assets/pen-icon.png";

const Container = styled.div `
    width: 20px;
    height: 20px;
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

const Edit = ({editText}) => {

    return (
        <Container onClick={editText}>
            <Icon src={PenIcon} alt="Edit item"/>
        </Container>
    )
}

export default Edit;