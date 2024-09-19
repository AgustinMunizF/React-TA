import logo from "./logo.svg";
import "./App.css";

const Card = ({ Titulo, Descripción, PersonaAsignada, FechaInicio, FechaDeFin }) => {
  return (
    <div className="card">
      <h2>{Titulo}</h2>
      <p>{Descripción}</p>
      <p>{PersonaAsignada}</p>
      <p>{FechaInicio}</p>
      <p>{FechaDeFin}</p>
    </div>
  );
};

const Content = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Card
      Titulo="Primera Card"
      Descripción="Este es la primera Card."
      PersonaAsignada="Jose"
      FechaInicio="2024-09-10"
      FechaDeFin="2024-09-20"
    />
    <Card
      Titulo="Segunda Card"
      Descripción="Este es la segundo Card."
      PersonaAsignada="Pepe"
      FechaInicio="2024-09-15"
      FechaDeFin="2024-09-25"
    />
    <Card
      Titulo="Tercera Card"
      Descripción="Este es la tercera Card."
      PersonaAsignada="Agustin"
      FechaInicio="2024-09-20"
      FechaDeFin="2024-09-30"
    />
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
