import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";

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

const App = () => {
  return (
    <Contenedor >
      <Imagen
        src={ImagenCripto}
        alt="Imagen de cripto"
      />
      <div>
        <Heading > Cotiza Criptomonedas al instante </Heading>

        <Formulario />
      </div>
    </Contenedor>
  );
};

export default App;
