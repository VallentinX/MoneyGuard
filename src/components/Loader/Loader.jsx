import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { StyledLoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
