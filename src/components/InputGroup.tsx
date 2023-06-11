import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

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

interface InputGroupProps {
  addTodo?: React.KeyboardEvent<HTMLInputElement>; // form events! the generic parameter is the type of event.target
}

const InputGroup = ({ addTodo }: InputGroupProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <StyledInputGroup>
      <MdOutlineKeyboardArrowUp
        size={'2em'}
        color="#e6e6e6"
      />
      <Input
        value={text}
        onChange={handleChange}
        // onKeyDown={addTodo}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
