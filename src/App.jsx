//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//hooks
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//context
import PizzaContext from "./context/PizzaContext";

//views
import Home from "./views/Home";
import Details from "./views/Details";
import ShoppingCart from "./views/ShoppingCart";
import NotFound from "./views/NotFound";

function App() {
  
  const [pizzaData, setPizzaData] = useState([]);
  const [totalPedido, setTotalPedido] = useState([]);

 
  const endpoint = "/pizzas.json";
  const fetchData = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    setPizzaData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = ({ id, price, name, img }) => {
    const findProduct = totalPedido.findIndex((p) => p.id === id);

    if (findProduct >= 0) {
      totalPedido[findProduct].count++;
      setTotalPedido([...totalPedido]);
      console.log(totalPedido);
    } else {
      const product = { id, price, name, img, count: 1 };
      setTotalPedido([...totalPedido, product]);
    }
  };

  return (
    <div className="App">
      <PizzaContext.Provider
        value={{
          pizzaData,
          setPizzaData,
          totalPedido,
          setTotalPedido,
          addToCart,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Details />} />
            <Route path="/carrito" element={<ShoppingCart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PizzaContext.Provider>
    </div>
  );
}

export default App;