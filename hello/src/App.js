
import './App.css';
import Titulo from './components/Titulo/Titulo';
import CardEvento from './components/CardEvento/CardEvento';
import Container from './components/container/container';

function App() {
  return (
    <div className="App">
    <h1>
      <Titulo/>
    </h1>
  
    <br /><br />

    <Container>
      <CardEvento titulo="Amo meu namorado" texto="Amo meu namorado" link="Amo meu namorado" />
      <CardEvento titulo="Amo meu namorado" texto="Amo meu namorado" link="Amo meu namorado" />
      <CardEvento titulo="Amo meu namorado" texto="Amo meu namorado" link="Amo meu namorado" />
    </Container>
  </div>

  );
}

export default App;
