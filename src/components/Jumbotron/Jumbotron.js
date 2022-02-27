import React from 'react';
import { JumboContainer, JumboContent } from './Jumbotron.styled';
import { Wave, MyButton } from '../globalStyles/Global.styled';
import { IoMdArrowDropdown } from 'react-icons/io';

const Jumbotron = () => {
  return (
    <JumboContainer>
      <JumboContent>
        <h1>
          Zespół <span>MED</span>
        </h1>

        <MyButton>
          Więcej o Nas <br /> <IoMdArrowDropdown />
        </MyButton>
      </JumboContent>
      <Wave src='./images/wave1.svg' alt='' />{' '}
    </JumboContainer>
  );
};

export default Jumbotron;
