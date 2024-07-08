import React, { useMemo } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { deleteTodo, toggleComplete } from "../../services/ApiTodos";

const Container = styled.div`
  place-self: center;
  width: 350px;
  min-height: 450px;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--color-grey-50);
`;

const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function TodoList({ todos, setTodos }) {
  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  async function handleDeleteTodo(todoId) {
    deleteTodo(todoId);
    console.log(deleteTodo);
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }

  async function handleToggleComplete(todo) {
    toggleComplete(todo);
    setTodos((todos) =>
      todos.map((task) =>
        task.id === todo.id ? { ...todo, completed: !todo.completed } : task
      )
    );
  }

  return (
    <Container>
      <StyledTodoList>
        {todos.map(
          (todo) =>
            !todo.completed && (
              <TodoItem
                todo={todo}
                key={todo.id}
                onToggleComplete={handleToggleComplete}
                onDeleteTodo={handleDeleteTodo}
              />
            )
        )}
      </StyledTodoList>

      {/* // Completed Todos */}
      <StyledTodoList>
        {completedTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </StyledTodoList>
    </Container>
  );
}

export default TodoList;
