import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledFiltersGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const FiltersGroup = () => {
  return (
    <StyledFiltersGroup>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Complited</Button>
    </StyledFiltersGroup>
  );
};

export default FiltersGroup;
