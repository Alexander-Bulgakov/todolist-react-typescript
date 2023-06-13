import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { iTodo } from './TodoList';

const ListItem = styled.li`
  border-bottom: solid ${({ theme }) => theme.color.grey} 1px;
`;

interface TodoListItemsProps {
  todos?: iTodo[];
  toggleActive?: any;
}

const TodoListItems = ({ todos, toggleActive }: TodoListItemsProps) => {
  return (
    <ul>
      {todos?.map(({ id, text, status }) => {
        return (
          <ListItem key={id}>
            <Todo
              id={id}
              text={text}
              status={status}
              toggleActive={() => toggleActive(id)}
            />
          </ListItem>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
