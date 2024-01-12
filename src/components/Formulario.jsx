
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "./hook/useSelectMonedas";
import { monedas } from "./data/monedas";
import Error from "../components/Error";


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
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptoMonedas, SelectCriptoMonedas] = useSelectMonedas("Elige tu cripto-moneda", cripto);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMonedas].includes("")) {
      setError(true);

      return;
    }
    setError(false);

  };


  return (
    <>
      {
        error && (
          <Error> Todos los campos son obligatorios</Error >
        )}

      <form
        onSubmit={handleSubmit}
      >

        <SelectMonedas />
        <SelectCriptoMonedas />
        {moneda}
        <InputSubmit
          type="submit"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;