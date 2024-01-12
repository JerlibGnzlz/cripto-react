import styled from "@emotion/styled";


const TextError = styled.div`
background-color: red;
color: wite;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: "Lato",sans-serif;
font-weight: 700;
text-align: center;
`;

const Error = ({ children }) => {
  return (
    <TextError>{children}</TextError>
  );
};

export default Error;