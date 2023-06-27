import React, { useContext, useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { FiltersContext } from './TodoList';

const StyledFiltersGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const FiltersGroup: React.FC = () => {
  const [activeButtonIndex, setactiveButtonIndex] = useState(0);

  const context = useContext(FiltersContext);

  const buttons = [
    { text: 'All', filter: 'all' },
    { text: 'Active', filter: 'active' },
    { text: 'Complited', filter: 'complited' },
  ];

  const toggleFilter = (e: React.MouseEvent<HTMLButtonElement>, buttonFilter: string, index: number): void => {
    context?.setFilter(buttonFilter);
    setactiveButtonIndex(index);
  };

  return (
    <StyledFiltersGroup>
      {buttons.map((button, index) => (
        <Button
          key={index}
          active={index === activeButtonIndex ? true : false}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => toggleFilter(e, button.filter, index)}
        >
          {button.text}
        </Button>
      ))}
    </StyledFiltersGroup>
  );
};

export default React.memo(FiltersGroup);
