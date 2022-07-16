import { useState } from "react";
import Spinner from "./Spinner";

function Monedas({ monedas, cargando }) {
  const tiposMonedas = ["Dolar", "Euro", "Pesos Mexicanos"];
  if (!monedas) return null;
  return (
    <>
      <div className=" mb-5 mx-auto md:col-start-1 md:col-span-7 sm:col-start-1 sm:col-span-9 md:justify-center  rounded-lg px-3 py-4 shadow-lg border-2">
        {!cargando ? (
          <>
            <h3 className="font-bold text-[1.5rem] text-green-600 text-center">
              Resultados:
            </h3>
            <main className="grid md:grid-cols-3 md:grid-rows md:justify-center gap-4">
              {monedas.map((moneda, index) => (
                // <>
                <section
                  className="my-3   hover:bg-gray-100 hover:rounded-lg hover:cursor-pointer p-3"
                  key={index}
                >
                  <h2 className="font-semibold text-[1.2rem] text-blue-800 mb-2">
                    {tiposMonedas[index]}
                  </h2>
                  {/* <p>ihndex</p> */}
                  <div>
                    <span className="font-semibold text-lg text-blue-500">
                      Precio Actual:
                    </span>{" "}
                    <span className="font-semibold text-md text-green-500">
                      {tiposMonedas[index] !== "Pesos Mexicanos"
                        ? moneda.PRICE
                        : `$ ${moneda.PRICE.slice(4, -1)}`}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-lg text-blue-500">
                      Precio más bajo:
                    </span>{" "}
                    <span className="font-semibold text-md text-green-500">
                      {tiposMonedas[index] !== "Pesos Mexicanos"
                        ? moneda.LOWDAY
                        : `$ ${moneda.LOWDAY.slice(4, -1)}`}
                      {/* {moneda.LOWDAY} */}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-lg text-blue-500">
                      Precio más alto:
                    </span>{" "}
                    <span className="font-semibold text-md text-green-500">
                      {tiposMonedas[index] !== "Pesos Mexicanos"
                        ? moneda.HIGHDAY
                        : `$ ${moneda.HIGHDAY.slice(4, -1)}`}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-lg text-blue-500">
                      Ultima actualización:
                    </span>{" "}
                    <span className="font-semibold text-md text-green-500">
                      {moneda.LASTUPDATE}
                    </span>
                  </div>
                </section>
                // </>
              ))}
            </main>
          </>
        ) : (
          <div className="flex justify-center">
            <div>
              <h3 className="font-bold text-[1.5rem] text-green-600 text-center">
                Consultando...
              </h3>
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Monedas;
