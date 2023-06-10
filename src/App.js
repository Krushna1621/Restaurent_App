import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Card/Cart";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);

  const ShowCarthandler=()=>{
    setCartIsShown(true)
  }

  const hideCarthandler=()=>{
    setCartIsShown(false)
  }

  return (
    <div>
     {cartIsShown&&<Cart onClose={hideCarthandler}/>}
     <Header onShowCart={ShowCarthandler}></Header>
     <main>
      <Meals></Meals>
     </main>
    </div>
  );
}

export default App;
