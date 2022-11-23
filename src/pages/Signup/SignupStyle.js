import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const SignupStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colorBG};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  input {
    display: flex;
    align-items: center;
    border: 1px solid #17313a;
    background: #102531;
    padding: 5px 10px;

    height: 40px;
    width: 300px;
    font-size: 16px;
    outline: none;
    color: white;
  }

  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #102531 inset !important;
      -webkit-text-fill-color: white !important;
      caret-color: white;
  }
  
  input:focus,
  input:focus-visible {
    border: 1px solid #d47559;
  }

  button {
    cursor: pointer;
    text-align: center;
    border-radius: 3px;
    background: #123040;
    padding: 10px;
    color: white;

    height: 40px;
    width: 300px;
    font-weight: bold;
    font-size: 16px;
  }

  a {
    color: white;
  }
`;