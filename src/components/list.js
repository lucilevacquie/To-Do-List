import React, {Component} from "react";
import styled from "styled-components";

const ListContainer = styled.div``;

const ListTitle = styled.div``;

const AddButton = styled.button`
    border-radius: 10px;
    margin-left: 1rem;
`;

const DeleteButton = styled.button`
    border-radius: 50%;
    margin-left: 1rem;
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
  
    addItem(){
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
          <br/>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          ></input>
          <AddButton
            onClick={() => this.addItem()}
          >
            Add
          </AddButton>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <DeleteButton
                    onClick={() => this.deleteItem(item.id)}
                  >X</DeleteButton>
                </li>
              )
            })}
          </ul>
        </ListContainer>
      );
    }
}

export default List;