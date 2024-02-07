import searchIcon from "./assets/search.svg";

function App() {
  return (
    <>
      <header>
        <h1>Previsão do tempo</h1>
      </header>
      <body>
        <div>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Insira aqui o nome da cidade"
          />
          <img src={searchIcon} alt="search-icon" />
        </div>
        <tbody>
          <thead>Capitais</thead>
          <div>Min</div>
          <div>Máx</div>
        </tbody>
      </body>
    </>
  );
}

export default App;
