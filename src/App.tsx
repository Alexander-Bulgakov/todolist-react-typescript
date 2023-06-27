import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const StyledHeader = styled.h1`
  width: 100%;
  padding: 0.3em;
  backgound-color: inherit;
  text-align: center;
  font-size: ${({ theme }) => theme.fs.big};
  font-weight: 300;
  color: ${({ theme }) => theme.color.pearlBush};
`;

const App: React.FC = () => {
  return (
    <>
      <StyledHeader>todos</StyledHeader>
      <TodoList />
    </>
  );
};

export default App;
