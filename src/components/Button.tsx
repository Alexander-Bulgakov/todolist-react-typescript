import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.3em 0.5em;
  background-color: inherit;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border: solid ${({ theme }) => theme.color.pearlBush} 1px;
    transition: border 0.2s;
  }
`;

const Button = ({ children }: any) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
