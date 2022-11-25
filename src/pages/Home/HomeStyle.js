import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const HomeStyle = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colorBG};
  color: white;

  padding: 32px;
  margin-top: 64px;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
    align-items: stretch;
  }
`;