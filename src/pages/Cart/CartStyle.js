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

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .btnCheckout {
    font-size:25px;
    margin-top:20px;
    width:400px;
    height:70px;
  }

  .totalPrice{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    width: 60vw;
    min-width: 548px;
    height: 72px;
    background-color: #102531;
    border: 1px solid #d47559;

    div {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 16px;
    }
    
    .title {
      font-weight: 500;
    }
    
    .price {
      border-left: 1px solid #17313a;
      background-color: ${colorBG};
      font-weight: 600;
      span {
        color: #88a0a7;
      }
    }
  }

  @media (max-width: 614px) {
    .totalPrice{
      width: 100%;
      min-width: 300px;
      margin: 0 32px;
    }
  }
`;