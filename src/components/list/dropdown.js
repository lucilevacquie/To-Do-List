import React, {useState} from "react";
import styled from "styled-components";

import Label from "../../assets/label-icon.png";

const Colors = [    
    {
        id: "Black",
        value: "#000000"
    },
    {
        id: "Red",
        value: "#FF0000"
    },
    {
        id: "Orange",
        value: "#ff6600"
    },
    {
        id: "Pink",
        value: "#ff0066"
    },
    {
        id: "Purple",
        value: "#990099"
    },
    {
        id: "Blue",
        value: "#3333cc"
    },
    {
        id: "Green",
        value: "#00FF00"
    },
]

const Container = styled.div`
    width: 20px;
    position: relative;
`;

const Title = styled.div`
    width: 20px;
    height: 20px;
`;

const LabelIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const Options = styled.div`
    height: ${(props) => props.showPanel ? "auto" : "0"};
    overflow: hidden;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    margin-top: 7px;
    background-color: white;
    z-index: 1;
    right: 0;
    top: -8px;
`;

const Option = styled.option`
    background-color:${(props) => props.value};
    box-sizing: border-box;
    width: 17px;
    height: 17px;
    margin: 3px;
`;


const ColorDropdown = ({onSetColor}) => {

    const [show, setShow] = useState(false);

    const changeColor = (e) => {
        onSetColor(e.target.value)
        setShow(!show)
    };

    return(
        <Container>
            <Title onClick={() => setShow(!show)}>
                <LabelIcon src={Label} alt="Change color"/>
            </Title>
            <Options onChange={changeColor} showPanel={show}>
                {Colors.map((item) => (
                    <Option key={item.id} value={item.value} onClick={changeColor}></Option>
                ))}
            </Options>
        </Container>
    )
}

export default ColorDropdown;