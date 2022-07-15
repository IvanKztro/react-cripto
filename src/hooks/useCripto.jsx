import { useState } from "react";

const useCripto = (label, listaCripto) => {
  const [state, updateState] = useState("");
  //   console.log(listaCripto);

  const SelectCripto = () => (
    <>
      <select
        className="p-2 bg-blue-200 rounded-lg"
        onChange={(e) => updateState(e.target.value)}
        value={state}
      >
        <option value="">--Seleccione Cripto--</option>
        {listaCripto.map((cripto) => (
          <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>
            {cripto.CoinInfo.FullName}
          </option>
        ))}
      </select>
    </>
  );
  return [state, SelectCripto, updateState];
};

export default useCripto;
