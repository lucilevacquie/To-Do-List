import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
`;

const MinusOrAdd = styled.button`
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
`;

const Quantity = styled.div`
    padding: 0 4px;
`;


const Counter = () => {

    const [count, setCount] = useState(1)

    const ChangeCount = (inc) => {
        if (inc === -1 && count === 1){
            return 
        }
        setCount(count + inc);
    }

    return (
        <Container>
            <MinusOrAdd onClick={() => ChangeCount(-1)}>-</MinusOrAdd>
            <Quantity>{count}</Quantity>
            <MinusOrAdd onClick={() => ChangeCount(1)}>+</MinusOrAdd>
        </Container>
    )
}

export default Counter;