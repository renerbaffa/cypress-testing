import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`

const Loader = ({ show, ...others }) =>
  show ? (
    <LoaderContainer {...others}>
      <PropagateLoader
        size={15}
        color="#80D8F7"
      />
    </LoaderContainer>
  ) : null;

Loader.propTypes = {
  show: PropTypes.bool,
}

Loader.defaultProps = {
  show: false,
}

export default Loader;
