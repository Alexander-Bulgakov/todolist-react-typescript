import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { ITodo } from '../types/data';

const ListItem = styled.li`
  border-bottom: solid ${({ theme }) => theme.color.grey} 1px;
`;

interface ITodoListItemsProps {
  todos: ITodo[];
  toggleStatus?: any;
}

const TodoListItems: React.FC<ITodoListItemsProps> = ({ todos, toggleStatus }) => {
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

export default React.memo(TodoListItems);
// export default TodoListItems;
