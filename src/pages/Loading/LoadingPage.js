import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';
import { colorBG } from '../../constants/colors';


export default function LoadingPage() {
  return (
    <LoadingStyle>
      <MoonLoader color="#ffffff" />
    </LoadingStyle>
  );
}

export const LoadingStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colorBG};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;