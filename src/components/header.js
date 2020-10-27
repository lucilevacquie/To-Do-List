import React, {Component} from "react";
import styled from "styled-components";

const HeadContainer = styled.div`
    margin: 0;
`;

const Title = styled.div`
    text-align: center;
    font-size: 2rem;
`;

class Header extends Component {

    render(){
        return (
            <HeadContainer>
                <Title>Control Freak</Title>
            </HeadContainer>
        )
    }
}

export default Header;