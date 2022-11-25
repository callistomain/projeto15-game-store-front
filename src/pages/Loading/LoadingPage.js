import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const LoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colorBG};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 64px;
  font-weight: bold;
  color: white;
`;