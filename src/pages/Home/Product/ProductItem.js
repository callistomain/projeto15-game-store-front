import axios from 'axios';
import { useContext } from 'react';
import styled from 'styled-components';
import { colorBG } from '../../../constants/colors';
import { numFormat } from '../../../constants/format';
import { url } from '../../../constants/urls';
import { UserContext } from '../../../UserContext';

export default function ProductItem({data, selected, setSelected}) {
  const user = useContext(UserContext);
  const {id, title, price, image} = data;
  

  function eventHandler(e) {
    setSelected(obj => {
      const newObj = {...obj};
      newObj[id] = !selected;

      const arrPost = [];
      for (const item in newObj) {
        if (newObj[item]) arrPost.push(item);
      }

      const headers = {Authorization: "Bearer " + user.token};
      axios.post(url.cart, arrPost, {headers})
      .catch(e => console.log(e));

      return newObj;
    });
  }

  return (
    <ProductStyle id={id} onClick={eventHandler} selected={selected}>
      <div className="in-cart">No carrinho</div>
      <img src={image} alt="" draggable="false"/>
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="price"><span>R$</span> {numFormat(price)}</div>
      </div>
    </ProductStyle>
  );
}

export const ProductStyle = styled.li`
  position: relative;
  width: 320px;
  min-height: 220px;

  border: 1px solid #17313a;
  background-color: #102531;

  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    border: 1px solid #227aad;
  }

  .in-cart {
    display: ${props => props.selected ? "block" : "none"};
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px;
    color: white;
    background-color: green;
  }

  img {
    border-bottom: 1px solid #17313a;
    width: 318px;
    height: 180px;
    object-fit: cover;
  }

  .bottom {
    display: flex;
    justify-content: center;
    height: 100%;
  }
  
  .title {
    border-right: 1px solid #17313a;
    background-color: #102531;
    
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
  }

  .price {
    background-color: ${colorBG};
    font-weight: 600;

    span {
      color: #88a0a7;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
`;