import "../assets/styles/Details.css";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzaContext from "../context/PizzaContext";

function Details() {
  const { id } = useParams();
  const { addToCart, pizzaData } = useContext(PizzaContext);
  const list = pizzaData.filter((register) => register.id === id);

  return (
    <div className="contenedor-details">
      <>
        {list.length > 0 ?
          <div className="card col-lg-3 col-md-6" key={list[0].id}>
            <img className="card-img-top imgDetalle}"
              src={list[0].img}
              alt={list[0].name}
            />
            <div className="card-body">
              <h5 className="card-title">{list[0].name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase())}</h5>

              <p className="desc">{list[0].desc}</p>
              <hr />
              <ul>
                {list[0].ingredients.map((item) => (
                  <li key={item}>🍕 {item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase())}</li>
                ))}
              </ul>
              <div className="precio-details">
              <h3 className="card-title"> ${list[0].price.toLocaleString("es-CL")}</h3>
              <button className="btn btn-warning" onClick={() => addToCart(list[0])}>Añadir 🛒</button>
              </div>
            </div>
          </div> : <div></div>
        }
      </>
    </div>
  );
}

export default Details;