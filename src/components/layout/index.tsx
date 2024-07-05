import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <StyledComponent>
      <InsideComponent>
        {/* <Header /> */}
        <Content>{children}</Content>
        {/* <Footer /> */}
      </InsideComponent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  background-color: black;
  flex-direction: column;
  overflow: hidden;
`;

const InsideComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  animation: backAnimation1 0.5s ease-out;
  @keyframes backAnimation1 {
    0% {
      opacity: 0;
    }
    /* 50% {
      transform: scale(2);
    } */
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled(Box)`
  display: flex;
  width: 100%;
  z-index: 2;
`;

// const BackGradient = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: 1;
// `;

// const BackLogoImg = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   z-index: 1;
// `;

export default Layout;
