import styled from 'styled-components';
import { colorBG } from '../../constants/colors';

export const CheckoutStyle = styled.div`
color:white;
height:100vh;
width:100vw;
margin-top:64px;
background-color: ${colorBG};
display:flex;
flex-direction:column;
align-items:center;
padding-left:10vw;
padding-right:10vw;
padding-top:5vh;
box-sizing:border-box;
.backgroundShadow{
    display: ${props=>props.displayModal? "block":"none"};
    opacity: 0.4;
    left:0px;
    top:0px;
    z-index:11;
    position:fixed;
    background-color:black;
    width:100vw;
    height:100vh;
}
>form{
    margin-top:20px;
    background: #102531;
    border: 1px solid #17313a;
    width:60vw;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
    padding:20px;
    >h4{
        font-size:30px;
        margin-bottom:15px;
    }
    >input{
        width:100%;
        margin: 0 32px;
        height:50px;
        padding-left:10px;
        box-sizing:border-box;
        border: 1px solid #17313a;
        border-radius:3px;
        font-size:25px;
        color:whitesmoke;
        background-color:#283b46
    }
}
> .divCheckout:hover{
    cursor: pointer;
}
>.divCheckout{
    margin-top:20px;
    border: 1px solid #17313a;
    background: #102531;
    height:60px;
    font-size:30px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-radius:3px;
    width:60vw;
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
`