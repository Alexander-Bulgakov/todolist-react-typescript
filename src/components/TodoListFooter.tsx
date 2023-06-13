import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iTodo } from './TodoList';

const StyledTodoListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  font-size: ${({ theme }) => theme.fs.small};
`;

interface TodosProps {
  todos: iTodo[];
}

const TodoListFooter = ({ todos }: TodosProps) => {
  const [todosLeft, setTodosLeft] = useState<iTodo[]>([]);
  useEffect(() => {
    setTodosLeft(todos.filter((todo: iTodo) => todo.active));
  }, [todos]);
  return (
    <StyledTodoListFooter>
      <span>{todosLeft.length} items left</span>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Complited</button>
      </div>
      <button>clear</button>
    </StyledTodoListFooter>
  );
};

export default TodoListFooter;
