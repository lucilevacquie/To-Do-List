import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin:auto;
    box-sizing: border-box;
    width: ${(props) => props.width};
    padding: 7px;
    input{
        background-color: white;
        box-sizing: border-box;
        border: grey solid 2px;
        padding: 5px;
        width: 100%;
        font-size: inherit;
        color: ${(props) => props.color};
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

const StyledInput = ({width, color, onChange = () => {}, ...props}) => {
    return (
        <Container width={width}>
            <Square top left/>
            <Square top right/>
            <input {...props} onChange={e => onChange(e)}/>
            <Square bottom left/>
            <Square bottom right/>
        </Container>
    )
}
export default StyledInput;