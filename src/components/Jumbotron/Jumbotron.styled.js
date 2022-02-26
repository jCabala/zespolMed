import styled from 'styled-components';

export const JumboContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url('./images/piano.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;
