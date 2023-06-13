import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iTodo } from './TodoList';
import FiltersGroup from './FiltersGroup';
import Button from './Button';

const StyledTodoListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  font-size: ${({ theme }) => theme.fs.small};
`;

interface TodosProps {
  todos: iTodo[];
  deleteComplitedTodos: () => void;
}

const TodoListFooter = ({ todos, deleteComplitedTodos }: TodosProps) => {
  const [todosLeft, setTodosLeft] = useState<iTodo[]>([]);
  useEffect(() => {
    setTodosLeft(todos.filter((todo: iTodo) => todo.status === 'active'));
  }, [todos]);
  return (
    <StyledTodoListFooter>
      <span>{todosLeft.length} items left</span>
      <FiltersGroup />
      <Button onClick={deleteComplitedTodos}>Clear complited</Button>
    </StyledTodoListFooter>
  );
};

export default TodoListFooter;
