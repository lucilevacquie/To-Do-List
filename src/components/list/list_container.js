import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from 'uuid';

import ListItem from "./list";
import AddIcon from "../../assets/add-icon.png";
import StyledInput from "../input";
import ClearAll from "./clearall";

const ListContainer = styled.div`
  display: grid;
  grid-template-rows:${(props) => props.showExamples ? "80px 50px 1fr 25px" : "80px 1fr 25px"} ;
  width: 320px;
  margin: auto;
  font-family: "Roboto", sans-serif;
`;

const InputWrapper = styled.form`
  margin: auto;
  width: inherit;
  display: grid;
  grid-template-columns: 86% 14%;
`;

const AddButton = styled.button`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: end;
  align-items: center;
  width: 50px;
  height: 48px;
  background-color: transparent;
  border-color: transparent;
`;

const Add = styled.img`
  width: 30px;
  height: 30px;
`;

const ItemList = styled.ul`
  height: 100%;
  line-height: 2rem;
  padding-left: 0;
  width: inherit;
`;

const List = ({list, updateList, showExamples, showCounter}) => {

  const [newItem, setNewItem] = useState("");

  const addItem = e => {
      e.preventDefault();
      const id = v4();
      const item = {value:newItem, quantity:0, checked:false}
      updateList({
          ...list, 
          [id]:item
      })
      setNewItem("");
  }

  const updateItem = (id, property, newValue) => {
    const updatedItem = list[id];
    updatedItem[property] = newValue;
    updateList({...list, [id]:updatedItem});
  }

  const deleteList = () => {
    return updateList({});
  }

  const onChange = (e) => {
    setNewItem(e.target.value)
  }

  return (
      <ListContainer>
      
        <InputWrapper onSubmit={(event) => addItem(event)}>
          <StyledInput
            width = "240px"
            color = "black"
            name = "item"
            type = "text"
            placeholder = "Type your task here..."
            value = {newItem}
            onChange = {onChange}>
          </StyledInput>
          <AddButton type="submit">
            <Add src={AddIcon} alt="Add item"/>
          </AddButton>
        </InputWrapper>

        <ItemList>
          {Object.keys(list).map(id => {
              const item = list[id]
              return (
                  <ListItem 
                      key={id}
                      onUpdateItem={updateItem}
                      item={item} 
                      id={id}
                      showCounter = {showCounter}
                  />
              )
          })}
        </ItemList>

        {Object.keys(list).length > 0 &&
          <ClearAll onDeleteList={deleteList}/>
        }
      </ListContainer>
  )
}

export default List;