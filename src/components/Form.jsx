import { useState, useEffect } from "react";
import useCripto from "../hooks/useCripto";

function Form({ moneda, setMonedas, setCargando }) {
  const [listaCripto, setListaCripto] = useState([]);

  const [cripto, SelectCripto] = useCripto(
    "Seleccione Criptomoneda:",
    listaCripto
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      //const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      //   const resultado = await axios.get(url);
      const response = await fetch(url);
      const result = await response.json();
      //   console.log(result.Data);

      setListaCripto(result.Data);
    };
    consultarAPI();
  }, []);

  const submitCotizar = async (e) => {
    e.preventDefault();

    if (cripto.trim() === "") {
      setError(true);
      return;
    }
    // setCargando(true);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    //console.log(url);
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

  return (
    <>
      <section className=" flex justify-center">
        <form onSubmit={submitCotizar}>
          <div className="  justify-center rounded-lg px-3 py-4 shadow-lg border-2">
            {/* <div class="flex flex-col"> */}
            <SelectCripto />
            <button
              type="submit"
              className="ml-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-300 text-white font-bold"
            >
              Cotizar
            </button>
            {/* </div> */}
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
