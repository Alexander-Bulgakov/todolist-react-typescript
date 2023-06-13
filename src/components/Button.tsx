import React from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
}

const StyledButton = styled.button<Props>`
  padding: 0.3em 0.5em;
  background-color: inherit;
  // border: 1px solid transparent;
  border-radius: 3px;
  border: ${({ active, theme }) => (!!active ? `solid ${theme.color.pearlBush} 1px` : '1px solid transparent')};
  &:hover {
    border: solid ${({ theme }) => theme.color.pearlBush} 1px;
    transition: border 0.2s;
  }
`;

const Button = ({ children, onClick, active }: any) => {
  return (
    <StyledButton
      active={active}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
