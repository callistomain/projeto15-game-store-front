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
  const [items, setItems] = useState([])

  useEffect(()=>{
    const headers = {Authorization: "Bearer " + user.token};

    axios.get(url.products, {headers})
    .then(r => {
      setItems(r.data);
    })
    .catch(e => console.log(e));

    axios.get(url.cart, {headers})
    .then(r => {
      console.log(r);
      setCartItems(r.data.data);
    })
    .catch(e => console.log(e));
  },[])
  return (
    <CartStyle>
      <Header/>
      <ul>
        {cartItems.map((item,index)=>(<StyledItem key={index}>{items[parseInt(item)].title}</StyledItem>))}
      </ul>
      <Link to={"/checkout"} state={{cartItems:cartItems}} >
      <div>CHECKOUT</div>
      </Link>
    </CartStyle>
  );
}

const StyledItem = styled.li`
color:black;
background-color:pink;
`