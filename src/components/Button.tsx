import React from 'react';
import styled from 'styled-components';

type TStyledButtonProps = {
  active?: boolean;
};

const StyledButton = styled.button<TStyledButtonProps>`
  padding: 0.3em 0.5em;
  background-color: inherit;
  border-radius: 3px;
  border: ${({ active, theme }) => (active ? `solid ${theme.color.pearlBush} 1px` : '1px solid transparent')};
  &:hover {
    border: solid ${({ theme }) => theme.color.pearlBush} 1px;
    transition: border 0.2s;
  }
`;
interface IButtonProps {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, active }) => {
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
