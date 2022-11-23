import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const LoginStyle = styled.div`
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
    width: 100%;
  }

  a {
    color: white;
  }
`;