import styled from 'styled-components';

export const InputText = styled.input`
  display: flex;
  align-items: center;
  border: 1px solid #17313a;
  background: #102531;
  padding: 5px 10px;

  width: 100%;
  max-width: 300px;

  height: 40px;
  font-size: 16px;
  outline: none;
  color: white;

  &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #102531 inset !important;
      -webkit-text-fill-color: white !important;
      caret-color: white;
  }
  
  &:focus,
  &:focus-visible {
    border: 1px solid #d47559;
  }
`;