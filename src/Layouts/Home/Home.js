import { useContext, useState } from "react";
import { TodoListContext } from "../../Context";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Home() {
  const todoList = useContext(TodoListContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveTask = () => {
    if (title && description){
        todoList.push({ id: todoList.length, title, description, checked: false });
        handleClose();
    } 
  };

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <Container>
      <Button variant="primary" className="mr-auto" onClick={handleShow}>
        Create Task
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>checked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((x) => {
            return (
              <tr key={x.id}>
                <td> {x.title} </td>
                <td> {x.description}</td>
                <td> {x.checked ? 'is checked' : 'not checked'}</td>
                <td> edit e remove </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>Title</InputGroup.Text>
              <Form.Control
                value={title}
                onChange={handleChangeTitle}
                aria-label="Title"
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control
                value={description}
                onChange={handleChangeDescription}
                as="textarea"
                aria-label="Description"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTask}>
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
