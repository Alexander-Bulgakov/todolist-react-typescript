import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ITodo } from '../types/data';
import FiltersGroup from './FiltersGroup';
import Button from './Button';

const StyledTodoListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  font-size: ${({ theme }) => theme.fs.small};
`;

interface IFooterProps {
  todos: ITodo[];
  deleteComplitedTodos: () => void;
}

const TodoListFooter: React.FC<IFooterProps> = ({ todos, deleteComplitedTodos }) => {
  const [todosLeft, setTodosLeft] = useState<ITodo[]>([]);
  useEffect(() => {
    setTodosLeft(todos.filter((todo: ITodo) => todo.status === 'active'));
  }, [todos]);
  return (
    <StyledTodoListFooter>
      <span>{todosLeft.length} items left</span>
      <FiltersGroup />
      <Button onClick={deleteComplitedTodos}>Clear complited</Button>
    </StyledTodoListFooter>
  );
};

export default React.memo(TodoListFooter);
