import { useContext, useState } from "react";
import { TodoListContext } from "../../Context";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

export default function Home() {
  const [todoList, setTodoList] = useState(useContext(TodoListContext));
  const [show, setShow] = useState(false);
  const [lengthId, setLengthId] = useState(0);
  const [alertClose, setAlertClose] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setId(null);
    setIsEdit(false);
  };

  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const setPrimaryKey = () => {
    var x = lengthId + 1;
    setLengthId(x);
    return lengthId;
  };

  const saveTask = () => {
    if (title && description && !isEdit) {
      todoList.push({
        id: setPrimaryKey(),
        title,
        description,
        checked: false,
      });
      handleClose();
    } else {
      todoList.map((task) => {
        if (task.id === id) {
          task.title = title;
          task.description = description;
          task.checked = isChecked;
        }
        return 0;
      });
      handleClose();
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChecked = (e) => {
    setIsChecked(!isChecked);
  };

  const deleteTask = (task) => {
    let arr = todoList.filter((item) => item.id !== task.id);
    setTodoList(arr);
  };

  const handleEditShow = (x) => {
    setDescription(x.description);
    setTitle(x.title);
    setId(x.id);
    setIsChecked(x.checked);
    setIsEdit(true);
    handleShow();
  };
  const doneTask = (x) => {
    todoList.map((task) => {
      if (task.id === x.id) {
        task.checked = !task.checked;
      }
    });
    setAlertClose(true);
    setTimeout(() => {
      setAlertClose(false);
    }, 1000);
  };

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
                <td> {x.checked ? "Done" : "Not done"}</td>
                <td>
                  {" "}
                  <Button
                    variant="warning"
                    className="mr-auto"
                    onClick={() => handleEditShow(x)}
                  >
                    Edit Task
                  </Button>{" "}
                  <Button
                    variant="info"
                    className="mr-auto"
                    onClick={() => doneTask(x)}
                  >
                    {x.checked ? "Not Done Task" : " Done Task"}
                  </Button>{" "}
                  <Button
                    variant="danger"
                    className="mr-auto"
                    onClick={() => deleteTask(x)}
                  >
                    Delete Task
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Task" : "Create Task"}</Modal.Title>
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
            {isEdit && (
              <InputGroup>
                <Form.Check
                  type={"checkbox"}
                  id={"default-checkbox"}
                  label={"Done"}
                  checked={isChecked}
                  onChange={handleChecked}
                />
              </InputGroup>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTask}>
            {isEdit ? "Edit Task" : "Create Task"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Alert
        show={alertClose}
        key={"info"}
        variant={"info"}
        onClose={() => setAlertClose(false)}
        dismissible
      >
        This task is Alter
      </Alert>
    </Container>
  );
}
