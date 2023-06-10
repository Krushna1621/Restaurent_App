import React from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Card/Cart";
function App() {
  return (
    <div>
     <Cart></Cart>
     <Header></Header>
     <main>
      <Meals></Meals>
     </main>
    </div>
  );
}

export default App;
