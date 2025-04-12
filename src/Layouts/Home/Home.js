import { useContext, useState } from "react";
import { TodoListContext } from "../../Context";

export default function Home() {
    const [todoList, setTodoList] = useState(useContext(TodoListContext))

   
    return (
        <div className="App">
            list: {todoList.list.map((data, idx) => {
            return <p key={idx}>{data.name} - {data.description}</p>
        })}
        </div>
    );
};

