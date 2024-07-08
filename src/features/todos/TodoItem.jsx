import React from "react";
import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";

import ButtonIcon from "../../ui/ButtonIcon";
import { TbNotesOff } from "react-icons/tb";

const ListItem = styled.li`
  background-color: ${(props) =>
    props.$isComplete ? "var(--color-green-700)" : "var(--color-brand-600)"};
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem;
  gap: 1rem;
  border-radius: var(--border-radius-sm);
`;

const OperationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8rem;
`;

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <ListItem $isComplete={todo.completed}>
      <span style={todo.completed ? { textDecoration: "line-through" } : {}}>
        {todo.content}
      </span>

      <OperationContainer>
        <ButtonIcon onClick={() => onDeleteTodo(todo.id)}>
          <HiTrash />
        </ButtonIcon>

        <ButtonIcon onClick={() => onToggleComplete(todo)}>
          {todo.completed ? <TbNotesOff /> : <FaCheck />}
        </ButtonIcon>
      </OperationContainer>
    </ListItem>
  );
}

export default TodoItem;
