import { Box } from "@mui/material";
import styled from "styled-components";

const Tokenomics = () => {
  return (
    <StyledComponent>
      <TextHead>Tokenomics</TextHead>
     
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;


const TextHead = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;


export default Tokenomics;
