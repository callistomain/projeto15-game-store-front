import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Header from "../Header/Header";
import { CartStyle } from "./CartStyle";
import { url } from "../../constants/urls";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { colorBG } from "../../constants/colors";
import { numFormat } from "../../constants/format";
import { Button } from "../../components/Button";
import LoadingPage from "../Loading/LoadingPage";

export default function CartPage({setUser}) {
  const user = useContext(UserContext);
  const [cartItems, setCartItems] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(()=>{
    const headers = {
        Authorization: "Bearer " + user.token
    };

    axios.get(url.cart, {headers})
    .then(r => {
      setCartItems(r.data.games);
      setTotalPrice(r.data.totalPrice)
    })
    .catch(e => console.log(e));
  }, [user]);

  if (cartItems === null || totalPrice === null) return (<LoadingPage/>);

  return (
    <CartStyle>
      <Header setUser={setUser}/>
      <ul>
        {cartItems.map((item, index) => (
          <StyledItem key={index}>
            <img src={item.image} alt=""/>
            <div className="item-info">
              <div className="title">{item.title}</div>
              <div className="price"><span>R$</span>{numFormat(item.price)}</div>
            </div>
          </StyledItem>
        ))}
      </ul>
      <div className="totalPrice">
        <div className="title">Preco total:</div>
        <div className="price"><span>R$</span>{numFormat(totalPrice)}</div>
      </div>
      <Link to={"/checkout"} >
      <Button className="btnCheckout">Finalizar Compra</Button>
      </Link>
    </CartStyle>
  );
}

const StyledItem = styled.li`
  border: 1px solid #17313a;
  width: 60vw;
  min-width: 548px;
  height: 72px;
  color: white;
  background-color: #102531;
  display: flex;

  img {
    height: 100%;
  }

  .item-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      height: 100%;
      border-left: 1px solid #17313a;
      padding: 16px;
    }

    .title {
      font-weight: 500;
    }

    .price {
      background-color: ${colorBG};
      font-weight: 600;
      span {
        color: #88a0a7;
      }
    }
  }

  @media (max-width: 614px) {
    width: 100%;
    min-width: 300px;
    margin: 0 32px;

    img {
      display: none;
    }
  }
`