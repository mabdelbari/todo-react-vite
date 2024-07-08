import React, { useState } from "react";
import styled from "styled-components";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { addTodo } from "../../services/ApiTodos";

const FormContainer = styled.div`
  padding: 2.8rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const h3Styles = {
  textAlign: "center",
};

function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    const newTodo = { id: `${Date.now()}`, content: todo, completed: false };
    addTodo(newTodo);
    setTodos((todos) => [...todos, newTodo]);
    setTodo("");
  }

  return (
    <FormContainer>
      <h3 style={h3Styles}>What do you need to do today?</h3>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="task.."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <Button>Add</Button>
      </Form>
    </FormContainer>
  );
}

export default AddTodo;
