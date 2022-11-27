import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { url } from '../../constants/urls';
import { UserContext } from '../../UserContext';

export default function Header({selected}) {
  const user = useContext(UserContext);

  function logoutHandler(e) {
    localStorage.removeItem("userGameStore");
    const headers = {Authorization: "Bearer " + user.token};
    axios.delete(url.session, {headers})
    .catch(e => console.log(e));
  }

  return (
    <HeaderStyle>
      <Link to="/">
        <h1><div></div>Game<span>Store</span></h1>
      </Link>
      <div className="options">
        <Link to="/cart" className="cart">CART</Link>
        <Link to="/login" className="logout" onClick={logoutHandler}>LOGOUT</Link>
      </div>
    </HeaderStyle>
  );
}

export const HeaderStyle = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;

  background-color: #102531;
  border-bottom: 1px solid #17313a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  
  h1 {
    display: flex;
    align-items: center;

    font-size: 24px;
    font-weight: 600;
    cursor: pointer;

    div {
      display: inline-block;
      height: 30px;
      width: 6px;
      margin-right: 10px;
      background-color: #d47559;
    }

    span {
      font-weight: 300;
    }
  }

  .options {
    display: flex;
    gap: 32px;
  }

  a {
    color: inherit;
  }
`;