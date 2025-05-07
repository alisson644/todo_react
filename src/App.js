import { useContext } from "react";
import { TodoListContext } from "./Context";
import Home from "./Layouts/Home/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation.js";

function App() {
  const todoList = useContext(TodoListContext);

  return (
    <TodoListContext.Provider value={todoList}>
      <Navigation />
      <Home />
    </TodoListContext.Provider>
  );
}

export default App;
