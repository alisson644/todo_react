import { useContext, useState } from "react";
import { TodoListContext } from "../../Context";

export default function Home() {
    const list = useContext(TodoListContext)
    const [todoList, setTodoList] = useState(list)
    return (
        <div className="App">
            <h1>list: {todoList.list.name}, {todoList.list.description}, {todoList.list.checked.toString()} </h1>
        </div>
    );
};

