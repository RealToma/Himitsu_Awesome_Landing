import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { dataMenuLink } from "../../data/links";
import { SocialIconGroup } from "../icons/socialIconGroup";

const Header = () => {
  const [clickedLink, setClickedLink] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <StyledComponent>
      <LogoIcon>
        <img src="/assets/images/icons/logo.png" width={"100%"} alt="logo" />
      </LogoIcon>
      <SectionLinks>
        {dataMenuLink?.map((each, index) => {
          return (
            <ButtonMenu
              key={index}
              active={clickedLink === index ? 1 : 0}
              onClick={() => {
                setClickedLink(index);
              }}
            >
              {each.name}
            </ButtonMenu>
          );
        })}
      </SectionLinks>
      <SocialIconGroup />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  padding: 30px 200px;

  @media (max-width: 1600px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 430px) {
  }
`;

const LogoIcon = styled(Box)`
  display: flex;
  width: 70px;
  aspect-ratio: 1;
`;

const SectionLinks = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonMenu = styled(Box)`
  display: flex;
  width: fit-content;
  height: 30px;
  padding: 0px 15px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: Belleza;
  color: ${({ active }: any) => (active ? "black" : "white")};
  background-color: ${({ active }: any) => (active ? "white" : "black")};
  border-radius: 4px;
  margin: 0px 30px;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
`;

export default Header;
