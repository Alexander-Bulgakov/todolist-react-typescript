import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListFooter from './TodoListFooter';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Todo from './Todo';

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
  const [text, setText] = useState('');
  const [itemsLeft, setItemsLeft] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text !== '') {
      setTodos([
        ...todos,
        {
          text,
          id: Date.now().toString(),
          active: true,
        },
      ]);
      setText('');
    }
  };

  const toggleActive = (e: React.MouseEvent<SVGAElement, MouseEvent>, id: any) => {
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
      <StyledInputGroup>
        <MdOutlineKeyboardArrowUp
          size={'2em'}
          color="#e6e6e6"
          style={{ transform: todos.length > 0 ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
        />
        <Input
          placeholder="What needs to be done?"
          value={text}
          onChange={handleChange}
          onKeyDown={addTodo}
        />
      </StyledInputGroup>
      <ul>
        {todos.map(({ id, text, active }) => {
          return (
            <ListItem key={id}>
              <Todo
                id={id}
                text={text}
                active={active}
                toggleActive={toggleActive}
              />
            </ListItem>
          );
        })}
      </ul>
      <TodoListFooter todos={todos} />
    </StyledTodoList>
  );
};

export default TodoList;
