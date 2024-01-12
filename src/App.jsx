import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";
// import { monedas } from "./components/data/monedas";


const Heading = styled.h1`
font-family:"Lato",sans-serif;
color:white;
text-align: center;
font-weight: 700;
margin-bottom: 50px;
margin-top: 50px;
font-size: 40px;
`;
const Imagen = styled.img`
max-width:400px;
width:80%;
margin: 20%  auto ;
display: block;
`;

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width:90%;
@media (min-width: 992px){
display: grid;
grid-template-columns: repeat(2,1fr);
column-gap: 2rem;
}
`;

const Span = styled.span`
color: #FB7676;

`;

const App = () => {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {

        const { moneda, criptomoneda } = monedas;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();


        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor >
      <Imagen
        src={ImagenCripto}
        alt="Imagen de cripto"
      />
      <div>
        <Heading > Cotiza Criptomonedas al <Span>instante</Span>  </Heading>

        <Formulario
          setMonedas={setMonedas}
        />
      </div>
    </Contenedor>
  );
};

export default App;
