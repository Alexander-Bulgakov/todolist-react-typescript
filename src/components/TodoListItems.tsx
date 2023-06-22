import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { iTodo } from '../types/data';

const ListItem = styled.li`
  border-bottom: solid ${({ theme }) => theme.color.grey} 1px;
`;

interface TodoListItemsProps {
  todos: iTodo[];
  toggleStatus?: any;
}

const TodoListItems = ({ todos, toggleStatus }: TodoListItemsProps) => {
  return (
    <ul>
      {todos?.map(({ id, text, status }) => {
        return (
          <ListItem key={id}>
            <Todo
              id={id}
              text={text}
              status={status}
              toggleStatus={() => toggleStatus(id)}
            />
          </ListItem>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
