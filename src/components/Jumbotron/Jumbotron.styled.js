import styled from 'styled-components';

export const JumboContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url('./images/piano.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: relative;
`;

export const JumboContent = styled.div`
  margin-bottom: 150px;
  color: white;
  max-width: 700px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
