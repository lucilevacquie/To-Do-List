import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 170px;
    margin: auto;
    padding: 7px;
    input{
        background-color: transparent;
        box-sizing: border-box;
        border: grey solid 2px;
        padding: 5px;
        width: 100%;
        color: white;
    }
`;

const Square = styled.div`
    position: absolute;
    top: ${(props) => props.top ? 0 : "inherit"};
    left: ${(props) => props.left ? 0 : "inherit"};
    bottom: ${(props) => props.bottom ? 0 : "inherit"};
    right: ${(props) => props.right ? 0 : "inherit"};
    box-sixing: border-box;
    border: grey solid 2px;
    width: 4px;
    height: 4px;
`;

const StyledInput = ({name, type, placeholder}) => {
    return (
        <Container>
            <Square top left/>
            <Square top right/>
            <input
            name = {name}
            type = {type} 
            placeholder = {placeholder}/>
            <Square bottom left/>
            <Square bottom right/>
        </Container>
    )
}
export default StyledInput;