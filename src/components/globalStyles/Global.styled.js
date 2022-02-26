import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    a{
      text-decoration: none;
    }

    html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
`;

export const Img = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 10px;
  width: ${({ big }) => (big ? '350px' : '250px')};
  height: ${({ big }) => (big ? '250px' : '200px')};
  object-fit: cover;
  &:hover {
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const MyButton = styled.div`
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;

  height: 50px;
  width: 200px;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Section = styled.section`
  position: relative;
  background: ${({ theme, color }) => (color ? 'white' : theme.colors.primary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  h1 {
    text-align: center;
    font-size: 3rem;
    color: ${({ color, theme }) => (color ? theme.colors.primary : 'white')};
  }
`;

export const Divider = styled.div`
  background-color: ${({ color, theme }) =>
    color ? theme.colors.primary : 'white'};

  width: 100px;
  height: 10px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 30px;

  border-radius: 12px;
`;

export const Gap = styled.div`
  height: 150px;
`;
