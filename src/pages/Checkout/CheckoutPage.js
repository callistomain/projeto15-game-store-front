import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { CheckoutStyle } from "./CheckoutStyle";
import { url } from "../../constants/urls";
import axios from "axios";
import Header from "../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";

export default function CheckoutPage(){
    const user = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);
    const [buyerInfo, setBuyerInfo] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const navigate = useNavigate();

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
    function handleCompra(e){
        const headers = {Authorization: "Bearer " + user.token};
        const gamesBoughtIds = cartItems.map(i=> {return  i._id})
        const sale ={
            buyerInfo: buyerInfo,
            gamesBoughtIds: gamesBoughtIds
        }

        axios.post(url.sales,sale,{headers})
        .then(p=>{console.log(p);navigate('/')}).catch(r=>console.log(r));
    }
    return(
        <CheckoutStyle>
            <Header/>
            <div className="totalPrice"><h3>Preco total:</h3><h3><span>R$</span>{totalPrice}</h3></div>
            <form>
                <h4>Informação de pagamento:</h4>
                <input placeholder="buyer info" required onChange={e=>setBuyerInfo(e.target.value)}></input>
            </form>
            <div className="divCheckout" onClick={handleCompra}>COMPLETAR COMPRA</div>
        </CheckoutStyle>
    )
}