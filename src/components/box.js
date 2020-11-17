import React from "react";
import styled from "styled-components";


const Boxes = styled.a`
    text-decoration: none;
    height: 100px;
    color: black;
    box-sizing: border-box;
    border: 2px solid;
    padding: 1rem;
    font-size: 20px;
`;

const Box = ({children, ...props}) => {
    return (
        <Boxes {...props}>{children}</Boxes>
    )
}

export default Box;