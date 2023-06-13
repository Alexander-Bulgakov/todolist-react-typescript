import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListFooter from './TodoListFooter';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Todo from './Todo';
import InputGroup from './InputGroup';
import TodoListItems from './TodoListItems';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 5px 0 ${(props) => props.theme.color.grey};
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  min-height: 60px;
  border-bottom: solid ${({ theme }) => theme.color.grey} 2px;
`;

const ListItem = styled.li`
  border-bottom: solid ${({ theme }) => theme.color.grey} 1px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0.5em;
  font-style: italic;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fs.medium};
  // color: ${({ theme }) => theme.color.grey};
`;

export interface iTodo {
  text: string;
  id: string;
  active: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);
  const [itemsLeft, setItemsLeft] = useState<number>(0);
  const [filter, setFilter] = useState<string | null>(null);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        text,
        id: Date.now().toString(),
        active: true,
      },
    ]);
  };

  const toggleActive = (id: any) => {
    const todosUpdated = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        active: !todo.active,
      };
    });

    setTodos(todosUpdated);
  };

  useEffect(() => {
    const todosLeft = todos.filter((todo) => todo.active === true);
    setItemsLeft(todosLeft.length);
    console.log(itemsLeft);
  }, [itemsLeft]);

  console.log(todos);
  console.log(itemsLeft);

  return (
    <StyledTodoList>
      <InputGroup addTodo={addTodo} />
      <TodoListItems
        todos={todos}
        toggleActive={toggleActive}
      />
      <TodoListFooter todos={todos} />
    </StyledTodoList>
  );
};

export default TodoList;
