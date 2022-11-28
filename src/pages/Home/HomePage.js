import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/urls";
import { UserContext } from "../../UserContext";
import Header from "../Header/Header";
import LoadingPage from "../Loading/LoadingPage";
import { HomeStyle } from "./HomeStyle";
import ProductItem from "./Product/ProductItem";

export default function HomePage({setUser}) {
  const user = useContext(UserContext);
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const headers = {Authorization: "Bearer " + user.token};
    axios.get(url.products, {headers})
    .then(r => {
      setItems(r.data);
    })
    .catch(e => console.log(e));

    axios.get(url.cart, {headers})
    .then(r => {
      if (!r.data.data) return setSelected({});
      const obj = r.data.data.reduce((o, v) => {
        o[v] = true;
        return o;
      }, {})
      setSelected(obj);
    })
    .catch(e => console.log(e));
  }, [user])

  if (selected === null || items === null) return (<LoadingPage/>);

  return (
    <HomeStyle>
      <Header setUser={setUser}/>
      <ul>
        {items.map((e, i) => <ProductItem key={i} data={{...e, id:i}} selected={selected[i]} setSelected={setSelected}/>)}
      </ul>
    </HomeStyle>
  );
}
