import React, { useState } from 'react';
import styled from 'styled-components';
// import InputGroup from './InputGroup';
import TodoListFooter from './TodoListFooter';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  background-color: white;
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  min-height: 60px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0.5em;
  font-style: italic;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fs.medium};
  color: ${({ theme }) => theme.color.grey};
`;

const TodoWrapper = styled(StyledInputGroup)`
  padding: 0.7em;
  gap: 0.2em;
`;
const Todo = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5em;
  // font-style: italic;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fs.medium};
  color: black;
`;

interface iTodo {
  text: string;
  id: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);
  const [text, setText] = useState('');

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
        },
      ]);
      setText('');
    }
  };
  console.log(todos);

  return (
    <StyledTodoList>
      {/* <InputGroup addTodo={addTodo} /> */}
      <StyledInputGroup>
        <MdOutlineKeyboardArrowUp
          size={'2em'}
          color="#e6e6e6"
          style={{ transform: todos.length > 0 ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
        />
        <Input
          value={text}
          onChange={handleChange}
          onKeyDown={addTodo}
        />
      </StyledInputGroup>
      <ul>
        {todos.map(({ id, text }) => {
          return (
            <TodoWrapper key={id}>
              <BsCircle
                size={'1.5em'}
                color="#e6e6e6"
              />
              <Todo>{text}</Todo>
            </TodoWrapper>
          );
        })}
      </ul>
      <TodoListFooter />
    </StyledTodoList>
  );
};

export default TodoList;
