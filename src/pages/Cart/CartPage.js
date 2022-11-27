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
        {cartItems.map((item,index)=>(<StyledItem key={index}><img src={item.image}/><p>{item.title}</p><p><span>R$</span>{item.price}</p></StyledItem>))}
      </ul>
      <div className="totalPrice"><h3>Preco total:</h3><h3><span>R$</span>{totalPrice}</h3></div>
      <Link to={"/checkout"} >
      <div className="btnCheckout">CHECKOUT</div>
      </Link>
    </CartStyle>
  );
}

const StyledItem = styled.li`
border: 1px solid #17313a;
box-sizing:border-box;
padding-right:20px;
padding-left:10px;
margin-bottom:10px;
width:60vw;
height:240px;
color:white;
background-color:#102531;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:5px;
>p{
  font-size:25px;
  >span {
      color: #88a0a7;
    }
  
}
> img{
  width:400px;
  height:230px;
}


`