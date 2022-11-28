import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { CheckoutStyle } from "./CheckoutStyle";
import { url } from "../../constants/urls";
import axios from "axios";
import Header from "../Header/Header";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CheckoutPage(){
    const user = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);
    const [buyerInfo, setBuyerInfo] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [showModal, setShowModal] = useState(false);
    const [saleInfo, setSaleInfo] = useState({nmae:"",gamesBought:[],payment:"",price:""});
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
        .then(p=>{console.log(p);
        setSaleInfo(p.data);
        toggleModal();
        }).catch(r=>console.log(r));
    }
    function toggleModal(){
        setShowModal(true);
    }
    return(
        <CheckoutStyle displayModal={showModal}>
            <Header/>
            <div className="totalPrice"><h3>Preco total:</h3><h3><span>R$</span>{totalPrice}</h3></div>
            <form>
                <h4>Informação de pagamento:</h4>
                <input placeholder="buyer info" required onChange={e=>setBuyerInfo(e.target.value)}></input>
            </form>
            <div className="divCheckout" onClick={handleCompra}>COMPLETAR COMPRA</div>
            <div className="backgroundShadow"></div>
            <CheckoutModal displayModal={showModal}>

                <h2>Obrigado,{saleInfo.name}, pela sua compra.</h2>
                <h2>Aqui esta sua nota fiscal.</h2>
                <ul>
                    {saleInfo.gamesBought.map((i,n)=>(<><li key={n}>{i}</li></>))}
                </ul>
                <h2>Total: R${saleInfo.price}</h2>
                <h2>Forma de pagamento: {saleInfo.payment}</h2>
                <Link to={'/'}>
                    <div className="gotoHome">Retornar a loja</div>
                </Link>
            </CheckoutModal>
        </CheckoutStyle>
    
    )
}
const CheckoutModal = styled.div`
display: ${props => props.displayModal? "flex" : "none"};
border: 2px solid #17313a;
border-radius:5px;
box-sizing:border-box;
padding:10px;
background-color:#283b46;
color:black;
flex-direction:column;
align-items:center;
position:fixed;
z-index:20;
width:50vw;
height:40vh;
top:50%;
left:50%;
margin-left:-25vw;
margin-top:-40vh;
justify-content:space-evenly;
> h2{
    width:80%;
    color:whitesmoke;
    font-size:20px;
    
}
>ul {
    width:80%;
    color:whitesmoke;
    font-size:15px;
}
.gotoHome{
    border: 2px solid #17313a;
    width:20vw;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    color:whitesmoke;
    border-radius:5px;
    background: #102531;
}
`