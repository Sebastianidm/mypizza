import "../assets/styles/ShoppingCart.css";
import React, { useContext, useEffect } from 'react';
import PizzaContext from '../context/PizzaContext';


function ShoppingCart() {

  const { totalPedido, setTotalPedido, addToCart } = useContext(PizzaContext);
  let precio = totalPedido.reduce((a, { count, price }) => a + price * count, 0);

  const sustraer = (id) => {
    const findProduct = totalPedido.findIndex((p) => p.id === id);
    totalPedido[findProduct].count--;
    setTotalPedido([...totalPedido]);
  };

  const eliminar = (id) => {
    const findProduct = totalPedido.findIndex((p) => p.id === id);
    totalPedido[findProduct].count = 0;
    setTotalPedido([...totalPedido]);
  };

  
  useEffect(() => {
  }, [totalPedido]);

  return (
    <div className="contenedor">
      <h3>Detalles del pedido:</h3>
      <div className="lista-compra">
        {totalPedido.filter((p) => p.count > 0).map((p) => (
          <div className="contenedor-seleccion" key={p.id}>
            <div className="lista-precio">
              <img
                className="img-cart"
                src={p.img}
                alt={p.name}
              />
              <div className="info-pedido">
                <p>{p.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase())}</p>
              </div>
              <div className="info-precio">
                <p>${p.price.toLocaleString("es-CL")}</p>
              </div>
            </div>
            <div className="botones">
              <button className="btn btn-danger" onClick={() => addToCart(p)}> + </button>

              <h5 className="contador">{p.count}</h5>

              <button className="btn btn-primary" onClick={() => sustraer(p.id)}> - </button>
              <button className="btn" onClick={() => eliminar(p.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

      <div className="contenedor-total">
        <p>Total: ${precio.toLocaleString("es-CL")}</p>

        <button className="btn btn-success" onClick={() => alert('Seras redirigido a una plataforma de pago ')}>Ir a Pagar</button>
      </div>
    </div>
  );
}

export default ShoppingCart;