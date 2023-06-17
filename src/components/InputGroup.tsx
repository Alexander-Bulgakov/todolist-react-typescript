import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  min-height: 60px;
  border-bottom: solid ${({ theme }) => theme.color.grey} 2px;
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

interface InputGroupProps {
  addTodo: (text: string) => void;
  todosLength: number;
}

const InputGroup = ({ addTodo, todosLength }: InputGroupProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, text: string) => {
    if (e.key === 'Enter' && text !== '') {
      addTodo(text);
      setText('');
    }
  };
  return (
    <StyledInputGroup>
      <MdOutlineKeyboardArrowUp
        size={'2em'}
        color="#e6e6e6"
        style={
          todosLength > 0
            ? { transform: 'rotate(180deg)', transition: 'transform 0.3s' }
            : { transition: 'transform 0.3s' }
        }
      />
      <Input
        value={text}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, text)}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
