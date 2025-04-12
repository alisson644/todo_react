import { useState } from "react";
import { TodoListContext } from "./Context";
import  Home  from "./Layouts/Home/Home.js";


function App() {
  const [todoList, setTodoList] = useState({cont_list: 1, list: [{name: 'teste', description: 'Esse é um teste de todo', checked: false}]});

  return (
    <TodoListContext.Provider value={todoList}>
      <Home />
    </TodoListContext.Provider>
  );
}


export default App;


