import Header from '../components/Header';
import Grid from '../components/Grid';
import { useContext } from 'react';
import PizzaContext from '../context/PizzaContext';


function Home() {
  const { pizzaData } = useContext(PizzaContext);

  return (
    <div className='bg-main'>
      <Header />
      <Grid data={pizzaData} />
      
    </div>
  );
}

export default Home;