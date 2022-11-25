import { useContext } from "react";
import { UserContext } from "../../UserContext";
import Header from "../Header/Header";
import { CartStyle } from "./CartStyle";

export default function CartPage() {
  const user = useContext(UserContext);

  return (
    <CartStyle>
      <Header/>
    </CartStyle>
  );
}