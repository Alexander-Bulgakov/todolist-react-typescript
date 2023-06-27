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
  todosLeft: number;
  deleteComplitedTodos: () => void;
}

const TodoListFooter: React.FC<IFooterProps> = ({ todosLeft, deleteComplitedTodos }) => {
  return (
    <StyledTodoListFooter>
      <span>{todosLeft} items left</span>
      <FiltersGroup />
      <Button onClick={deleteComplitedTodos}>Clear complited</Button>
    </StyledTodoListFooter>
  );
};

export default React.memo(TodoListFooter);
