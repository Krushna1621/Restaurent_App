import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Card/Cart";
import CardProvider from "./Components/store/CardProvider";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);

  const ShowCarthandler=()=>{
    setCartIsShown(true)
  }

  const hideCarthandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CardProvider>
     {cartIsShown&&<Cart onClose={hideCarthandler}/>}
     <Header onShowCart={ShowCarthandler}></Header>
     <main>
      <Meals></Meals>
     </main>
    </CardProvider>
  );
}

export default App;
