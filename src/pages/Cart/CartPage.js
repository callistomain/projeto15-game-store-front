import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Header from "../Header/Header";
import { CartStyle } from "./CartStyle";
import { url } from "../../constants/urls";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CartPage() {
  const user = useContext(UserContext);
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()

  useEffect(()=>{
    const headers = {
      Authorization: "Bearer " + user.token
  };

    axios.get(url.cart, {headers})
    .then(r => {
      console.log(r);
      setCartItems(r.data.games);
      setTotalPrice(r.data.totalPrice)
    })
    .catch(e => console.log(e));
  },[])
  return (
    <CartStyle>
      <Header/>
      <ul>
        {cartItems.map((item,index)=>(<StyledItem key={index}><p>{item.title}</p><p>{item.price}</p></StyledItem>))}
      </ul>
      <h3>Preco total: {totalPrice}</h3>
      <Link to={"/checkout"} state={{cartItems:cartItems}} >
      <div>CHECKOUT</div>
      </Link>
    </CartStyle>
  );
}

const StyledItem = styled.li`
color:black;
background-color:pink;
display:flex;
justify-content:space-between;

`