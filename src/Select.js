import React from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled(ReactSelect)`
  width: 300px;
`;

const Select = props => (
  <SelectContainer>
    <StyledSelect id="my-select" {...props} />
  </SelectContainer>
);

export default Select;
