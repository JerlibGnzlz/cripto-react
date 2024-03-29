import { useState } from "react";
import styled from "@emotion/styled";



// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
color: white;
display: block;
font-size: 24px;
font-weight: 700;
margin: 15px 0;
font-family: "Lato" sans-serif;
`;


// eslint-disable-next-line react-refresh/only-export-components
const Select = styled.select`
width:100%;
font-size: 18px;
padding: 12px;
border-radius: 10px;
`;

const useSelectMonedas = (label, monedas) => {

  const [state, setState] = useState("");

  const SelectMonedas = () => (

    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value=""> Seleccione</option>
        {monedas.map(moneda => (
          <option
            key={moneda.id}
            value={moneda.id}
          >{moneda.nombre}</option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;