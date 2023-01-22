import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem.js";
import InputArea from "./components/InputArea.js";

function App() {
  const [items, setItems] = useState([]);
  function addItems(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className = "container">
      <div className = "heading">
        <h1>To Do List</h1>
      </div>
      <InputArea addItems ={ addItems } />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem 
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
