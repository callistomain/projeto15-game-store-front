import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const CartStyle = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colorBG};
  color: white;
  padding: 32px;
  margin-top: 64px;
  display:flex;
  flex-direction:column;
  align-items:center;

  .btnCheckout {
    color:white;
    font-size:25px;
    margin-top:20px;
  width:400px;
  height:70px;
  border-radius:7px;
  background-color: #102531;
  border: 1px solid #17313a;
  display:flex;
  justify-content:center;
  align-items:center;
  }
  >.totalPrice{
    height:45px;
    font-size:30px;
    border: 1px solid #17313a;
    background: #102531;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-radius:3px;
    width:60vw;
    span {
      color: #88a0a7;
    }

  }
`;