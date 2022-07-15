import { useState, useEffect } from "react";
import Form from "./components/Form";
import Monedas from "./components/Monedas";
import Spinner from "./components/Spinner";
// import logo from './logo.svg'
// import './App.css'

function App() {
  const [moneda, setMoneda] = useState("USD,EUR,MXN");
  const [cripto, setCripto] = useState("BTC");
  const [monedas, setMonedas] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (moneda === "" && cripto === "") return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

    const getCripto = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setCargando(true);

      const list = Object.values(result.DISPLAY[cripto]);
      setTimeout(() => {
        setCargando(false);
        // setDatosConsulta(res.data.DISPLAY[criptoC][monedaC]);
        setMonedas(list);
      }, 2000);
    };
    getCripto();
  }, [moneda, cripto]);
  console.log(cargando);

  let component = monedas ? (
    <Monedas monedas={monedas} cargando={cargando} />
  ) : (
    <div />
  );

  return (
    <>
      <h1 className="font-bold text-[2.5rem] text-blue-600 text-center">
        Cotizador de Criptomonedas
      </h1>
      <div>
        <div className="grid grid-8 mt-3">
          <Form
            moneda={moneda}
            setMoneda={setMoneda}
            monedas={monedas}
            setMonedas={setMonedas}
            setCargando={setCargando}
          />
        </div>
        <div className="grid md:grid-cols-7 sm:grid-cols-8 mt-6">
          {component}
        </div>
      </div>
    </>
  );
}

export default App;
