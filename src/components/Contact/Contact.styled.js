import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  fieldset {
    border: 2px solid white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    padding: 15px;
  }

  legend {
    font-size: 2rem;
    padding: 5px;
    font-weight: 500;
    color: white;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  border: none;
  border-radius: 12px;
  font-size: 16px;
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Submit = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 500;
  color: white;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContactData = styled.div`
  min-width: 200px;
  height: 50px;
  padding: 10px;
  background: white;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;
