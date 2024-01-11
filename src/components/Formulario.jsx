
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "./hook/useSelectMonedas";
import { monedas } from "./data/monedas";


const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
margin-top: 30px;
text-transform: uppercase;
padding: 10px;
width: 100%;
font-weight:700;
color: white;
border-radius: 10px;
transition: background-color:all .3s ease;


:hover{
  background-color: #FB7676;
  cursor: pointer;
} 
`;

const Formulario = () => {

  const [cripto, setCripto] = useState([]);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  useEffect(() => {
    const consultaAPI = async () => {

      const URL = import.meta.env.VITE_API;

      const respuestaAPI = await fetch(URL);
      const resultadoAPI = await respuestaAPI.json();

      const arrayCripto = resultadoAPI.Data.map(cripto => {

        const objeto = {
          key: cripto.CoinInfo.Name,
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        };
        return objeto;

      });
      setCripto(arrayCripto);
    };
    consultaAPI();
  }, []);


  return (
    <form>

      <SelectMonedas />
      {moneda}
      <InputSubmit
        type="submit"
        value="Cotizar"

      />
    </form>
  );
};

export default Formulario;