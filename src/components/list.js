import React, {Component} from "react";
import styled from "styled-components";
import Dropdown from "./dropdown";

const ListContainer = styled.div`
    display: grid;
    grid-template-rows: 50px 50px 1fr;
`;

const ListTitle = styled.div`
    text-align: center;
    margin-top: 1rem;
    font-size: 24px;
`;

const InputWrapper = styled.form`
    text-align: center;
    padding: 1rem 0;
    input {
        border: none;
        border-bottom: solid grey 1px;
        background-color: transparent;
    }
`;

const AddButton = styled.button`
    border-radius: 50%;
    margin-left: 1rem;
    width: 28px;
    height: 28px;
    text-align: center;
    border: none;
    background-color: #c53334;
    color: white;
    font-size: 18px;
    font-style: bold;
`;


const ItemList = styled.ul`
    margin: 1.5rem;
    padding-left: 1.5rem;
    height: 100%;
`;

const Item = styled.li`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 100%;
`;

const Value = styled.div`
    font-size: 18px;
`;

const DeleteButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: #c53334;
    color: white;
    font-size: 14px;
`;

class List extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        newItem:"",
        list:[]
      }
    }
  
    updateInput(key, value){
      this.setState({
        [key]: value
      });
    }
  
    addItem(event){
        event.preventDefault();
      const newItem ={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
  
      const list = [...this.state.list];
  
      list.push(newItem);
  
      this.setState({
        list,
        newItem:""
      });
    }
  
    deleteItem(id){
      const list = [...this.state.list];
  
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({list: updatedList});
    }
  
    render(){
      return (
        <ListContainer>
            <ListTitle>To Do List</ListTitle>
          <InputWrapper onSubmit={(event) => this.addItem(event)}>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          >
          </input>
          <AddButton type="submit"
          >+</AddButton>
          </InputWrapper>
          
          <ItemList>
            {this.state.list.map(item => {
              return (
                <Item key={item.id}>
                    <DeleteButton
                    onClick={() => this.deleteItem(item.id)}
                    >X</DeleteButton>
                    <Value>{item.value}</Value>
                    <Dropdown/>
                </Item>
              )
            })}
          </ItemList>
        </ListContainer>
      );
    }
}

export default List;