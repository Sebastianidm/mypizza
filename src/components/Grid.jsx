import "../assets/styles/Grid.css";
import { Container } from "react-bootstrap";
import Card from './Card';

function Grid({ data }) {
  return (
    <Container>
      <div className="title-text text-white">
        <h1>Nuestra Carta</h1>
      </div>
    <div className="grilla-pizzeria">
      {data.map((p, index) => (
        <Card key={index} comidita={p}
        />
      ))}
    </div>
    </Container>
  );
}

export default Grid;