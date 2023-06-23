import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListFooter from './TodoListFooter';
import InputGroup from './InputGroup';
import TodoListItems from './TodoListItems';
import { ITodo } from '../types/data';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 5px 0 ${(props) => props.theme.color.grey};
`;

interface IContext {
  filter: string;
  setFilter: (filter: string) => void;
}

export const Context = createContext<IContext | null>(null);

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const deleteComplitedTodos = (): void => {
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

  const addTodo = (text: string): void => {
    setTodos([
      ...todos,
      {
        text,
        id: Date.now(),
        status: 'active',
      },
    ]);
  };

  const toggleStatus = (id: number): void => {
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
