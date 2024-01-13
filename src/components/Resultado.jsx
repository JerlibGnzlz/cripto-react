import styled from '@emotion/styled';



const Contenedor = styled.h1`
color:white;
font-size: 14px;
text-align: center;
font-family: "Lato",sans-serif;
display: flex;
align-items: center;
gap: 1.5rem;
margin-top: 20px;

`;

const Imagen = styled.img`
display: block;
width: 100px;
margin-top: 20px;

`;
const Texto = styled.p`
font-size: 15px;
span{
  font-weight: 700;
}
`;


const Precio = styled.p`
font-size: 22px;
span{
  font-weight: 700;
}


`;
const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR } = resultado;


  return (
    <Contenedor>

      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen de Cripto' />

      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas :<span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
