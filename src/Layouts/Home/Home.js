import { useContext, useState } from "react";
import { TodoListContext } from "../../Context";
import Container from 'react-bootstrap/Container';


export default function Home() {
    const [todoList, setTodoList] = useState(useContext(TodoListContext))

   
    return (
        <Container>
            oi
        
        </Container>
    )
        
   
};

