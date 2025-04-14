import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {

   
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Create Task</Nav.Link>
            <Nav.Link href="#features">List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
        
   
};

