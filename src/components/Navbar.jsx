import "../assets/styles/Navbar.css";
import { Container, Navbar } from "react-bootstrap";

import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';

function NavBar() {
  const { totalPedido } = useContext(PizzaContext);
  let precio = totalPedido.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      style={{ background: "#030202"}}
    >
      <Container>
     
          <NavLink to="/">
            🍕  Pizzeria Mamma Mia
          </NavLink>
           
          <NavLink to="/carrito">
            🛒 Carrito ${precio.toLocaleString("es-CL")}
          </NavLink>
        
      </Container>
    </Navbar>
  );
};

export default Navbar;