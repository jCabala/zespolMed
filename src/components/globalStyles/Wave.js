import React from 'react';
import { StyledWaveContainer, Gap } from './Global.styled';
import PropTypes from 'prop-types';

const Wave = ({ colored }) => {
  return (
    <>
      <Gap />
      <StyledWaveContainer>
        <img
          src={colored ? './images/wave5.svg' : './images/wave4.svg'}
          alt=''
        />
      </StyledWaveContainer>
    </>
  );
};

Wave.propTypes = {
  colored: PropTypes.bool,
};

export default Wave;
