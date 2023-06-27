import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ITodo } from '../types/data';
import TodoListFooter from './TodoListFooter';
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

interface IContext {
  filter: string;
  setFilter: (filter: string) => void;
}

export const FiltersContext = createContext<IContext | null>(null);

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const [todosLeft, setTodosLeft] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodosLeft(todos.filter((todo: ITodo) => todo.status === 'active'));
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos);
      return;
    }

    const filtered = todos.filter((todo) => todo.status === filter);
    setFilteredTodos(filtered);
  }, [filter]);

  const deleteComplitedTodos = useCallback((): void => {
    const activeTodos = todos.filter(({ status }) => status === 'active');
    setTodos(activeTodos);
  }, [todos]);

  const addTodo = useCallback(
    (text: string): void => {
      const trimmedText = text.trim();
      if (trimmedText !== '') {
        setTodos([
          ...todos,
          {
            text: trimmedText,
            id: Date.now(),
            status: 'active',
          },
        ]);
      }
    },
    [filteredTodos],
  );

  const toggleStatus = useCallback(
    (id: number): void => {
      const todosUpdated = todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          status: todo.status === 'active' ? 'complited' : 'active',
        };
      });

      setTodos(todosUpdated);
    },
    [todos],
  );

  const toggleListVisible = useCallback((): void => {
    setVisible((visible) => !visible);
  }, []);

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter, setFilter],
  );

  return (
    <StyledTodoList>
      <InputGroup
        addTodo={addTodo}
        toggleListVisible={toggleListVisible}
        visible={visible}
      />
      {visible ? (
        <TodoListItems
          todos={filteredTodos}
          toggleStatus={toggleStatus}
        />
      ) : null}

      <FiltersContext.Provider value={value}>
        <TodoListFooter
          todosLeft={todosLeft.length}
          deleteComplitedTodos={deleteComplitedTodos}
        />
      </FiltersContext.Provider>
    </StyledTodoList>
  );
};

export default TodoList;
