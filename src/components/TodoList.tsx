import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListFooter from './TodoListFooter';
import InputGroup from './InputGroup';
import TodoListItems from './TodoListItems';
import { iTodo } from '../types/data';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 5px 0 ${(props) => props.theme.color.grey};
`;

interface iContext {
  filter: string;
  setFilter: (filter: string) => void;
}

export const Context = createContext<iContext | null>(null);

const TodoList = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);
  const [itemsLeft, setItemsLeft] = useState<number>(0);
  const [filter, setFilter] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const deleteComplitedTodos = () => {
    const activeTodos = todos.filter(({ status }) => status === 'active');
    setTodos(activeTodos);
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos);
      return;
    }

    const filtered = todos.filter((todo) => todo.status === filter);
    setFilteredTodos(filtered);
  }, [filter]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        text,
        id: Date.now().toString(),
        status: 'active',
      },
    ]);
  };

  const toggleStatus = (id: any) => {
    const todosUpdated = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        status: todo.status === 'active' ? 'complited' : 'active',
      };
    });

    setTodos(todosUpdated);
  };

  const value = { filter, setFilter, deleteComplitedTodos };

  console.log(todos);
  console.log(itemsLeft);

  return (
    <StyledTodoList>
      <InputGroup
        addTodo={addTodo}
        todosLength={filteredTodos.length}
      />
      <TodoListItems
        todos={filteredTodos}
        toggleStatus={toggleStatus}
      />
      <Context.Provider value={value}>
        <TodoListFooter
          todos={todos}
          deleteComplitedTodos={deleteComplitedTodos}
        />
      </Context.Provider>
    </StyledTodoList>
  );
};

export default TodoList;
