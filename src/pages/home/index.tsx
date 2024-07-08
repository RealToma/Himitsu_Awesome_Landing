import { Box } from "@mui/material";
import styled from "styled-components";
import Hero from "./01Hero";
import BorderSection from "../../components/border/borderSection";
import About from "./02About";
import Gallery from "./03Gallery";

const Home = () => {
  return (
    <StyledComponent>
      <Hero />
      <BorderSection />
      <About />
      <BorderSection />
      <Gallery />
      <BorderSection />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export default Home;
