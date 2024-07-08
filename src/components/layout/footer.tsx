import { Box } from "@mui/material";
import styled from "styled-components";
const Footer = () => {
  return (
    <StyledComponent>© 2024 Himitsu. All rights reserved.</StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eeeeee50;
  align-items: center;
  justify-content: center;
  color: #eeeeee50;
  font-size: 14px;
  font-family: Belleza;
`;

export default Footer;
