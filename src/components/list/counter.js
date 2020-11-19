import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const MinusOrAdd = styled.button`
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
`;

const Quantity = styled.div``;


const Counter = () => {

    const [count, setCount] = useState(1)

    const ChangeCount = (inc) => {
        setCount(count + inc);
    }

    return (
        <Container>
            <MinusOrAdd onClick={() => ChangeCount(1)}>+</MinusOrAdd>
            <Quantity>{count}</Quantity>
            <MinusOrAdd onClick={() => ChangeCount(-1)}>-</MinusOrAdd>
        </Container>
    )
}

export default Counter;