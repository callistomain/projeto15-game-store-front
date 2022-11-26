import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { CheckoutStyle } from "./CheckoutStyle";
import { url } from "../../constants/urls";
import axios from "axios";
import { useLocation } from 'react-router-dom'

export default function CheckoutPage(){
    const user = useContext(UserContext);
    const {cartItems} = useLocation().state;
    const [items, setItems] = useState([])
    const [buyerInfo, setBuyerInfo] = useState([]);
    useEffect(()=>{
        const headers = {Authorization: "Bearer " + user.token};
        axios.get(url.products, {headers})
        .then(r => {
          setItems(r.data);
        })
        .catch(e => console.log(e));
    })
    function handleCompra(e){
        const headers = {Authorization: "Bearer " + user.token};
        let totalVal=0;
        cartItems.map((i)=>totalVal += parseFloat(items[i].price))
        const sale ={
            buyerInfo: buyerInfo,
            totalPrice: totalVal
        }
        
        axios.post(url.sales,sale,{headers})
        .then(p=>console.log(p)).catch(r=>console.log(r));
    }
    return(
        <CheckoutStyle>
            <h1>ESSA EH A TELA DE CHECKOUT</h1>
            <input placeholder="buyer info" onChange={e=>setBuyerInfo(e.target.value)}></input>
            <br/>
            <br/>
            <br/>
            <div onClick={handleCompra}>FAZER CHECKOUT/REALIZAR COMPRA</div>
        </CheckoutStyle>
    )
}