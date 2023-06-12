import React from 'react';
import styled from 'styled-components';
import { iTodo } from './TodoList';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
interface Props {
  active: boolean;
}

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  min-height: 60px;
`;

const TodoWrapper = styled(StyledInputGroup)`
  padding: 0.7em;
  gap: 0.2em;
`;

const StyledTodo = styled.div<Props>`
  height: 100%;
  width: 100%;
  padding: 0.5em;
  // font-style: italic;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fs.medium};
  color: ${({ active, theme }) => (active ? 'black' : theme.color.grey)};
  text-decoration: ${({ active }) => (active ? 'none' : 'line-through')};
`;

interface iTodoProps extends iTodo {
  toggleActive: (e: React.MouseEvent<SVGAElement, MouseEvent>, id: string) => void;
}

const Todo = ({ id, text, active, toggleActive }: iTodoProps) => {
  return (
    <TodoWrapper key={id}>
      {active ? (
        <BsCircle
          size={'1.5em'}
          color="#e6e6e6"
          cursor={'pointer'}
          onClick={(e: React.MouseEvent<SVGAElement>) => toggleActive(e, id)}
        />
      ) : (
        <BsCheckCircle
          size={'1.5em'}
          color="#77c0af"
          cursor={'pointer'}
          onClick={(e: React.MouseEvent<SVGAElement>) => toggleActive(e, id)}
        />
      )}
      <StyledTodo active={active}>{text}</StyledTodo>
    </TodoWrapper>
  );
};

export default Todo;
