import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AddTodo from "./features/todos/AddTodo";
import TodoList from "./features/todos/TodoList";
import Logo from "./ui/Logo";
import Spinner from "./ui/Spinner";

import GlobalStyles from "./styles/GlobalStyles";
import { getTodos } from "./services/ApiTodos";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-brand-200);
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("idle");

  const fetchTodos = async () => {
    setState("loading");
    const data = await getTodos();
    setState("idle");
    setTodos(data);
  };

  useEffect(function () {
    fetchTodos();
  }, []);

  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Logo />
        {/* <AddTodo onAddTodo={handleAddTodo} /> */}
        <AddTodo setTodos={setTodos} />
        {state === "loading" ? (
          <Spinner />
        ) : (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            // onToggleComplete={handleToggleComplete}
            // onDeleteTodo={handleDeleteTodo}
          />
        )}
      </StyledApp>
    </>
  );
}

export default App;
