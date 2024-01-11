import styled from "@emotion/styled";

const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
text-transform: uppercase;
padding: 10px;
width: 100%;
font-weight:700;
color: white;
border-radius: 10px;
transition: background-color:.4s ease;

:hover{
  background-color: #FB7676;
  cursor: pointer;
} 
`;

const Formulario = () => {
  return (
    <form>
      <InputSubmit
        type="submit"
        value="Cotizar"

      />
    </form>
  );
};

export default Formulario;