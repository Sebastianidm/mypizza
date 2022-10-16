import "../assets/styles/Card.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PizzaContext from "../context/PizzaContext";

function Card({ comidita }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(PizzaContext);

  return (
    <div className="card col-lg-3 col-md-6" key={comidita.id}>
      <img className="card-img-top zoom"
        src={comidita.img}
        alt={comidita.name}
      />
      <div className="card-body">
        <h5 className="card-title">{comidita.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase())}</h5>
        <hr />
        <ul>
          {comidita.ingredients.map((item) => (
            <li key={item}>🍕 {item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase())}</li>
          ))}
        </ul>
        <h3 className="card-title"> ${comidita.price.toLocaleString("es-CL")}</h3>
        <hr />
        <div className="d-flex">
          <button className="btn btn-success zoom" onClick={() => navigate(`/pizza/${comidita.id}`)}> Ver más 👀</button>
          <button className="btn btn-warning zoom " onClick={() => addToCart(comidita)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
}

export default Card;