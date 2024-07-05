import { Box } from "@mui/material";
import styled from "styled-components";

const Home = () => {
  return <StyledComponent>Welcome Himitsu</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;

  align-items: center;
  color: white;
  font-size: 100px;
`;

export default Home;
