import { Box } from "@mui/material";
import styled from "styled-components";

const About = () => {
  return (
    <StyledComponent>
      <SectionLeft>
        <TextHead>The Legend of $HIM</TextHead>
        <TextBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextBody>
        <ButtonBuy>Learn More</ButtonBuy>
      </SectionLeft>
      <SectionRight>
        <img
          src="/assets/images/icons/logo.png"
          width={"100%"}
          height={"100%"}
          alt="logo"
        />
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;


  @media (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 200px;
  @media (max-width: 1440px) {
    margin-right: 50px;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  width: 500px;
  height: 500px;

  @media (max-width: 1440px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    margin-top: 30px;
  }
`;

const TextHead = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
`;

const TextBody = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 16px;
  line-height: 24px;

  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 50px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const ButtonBuy = styled(Box)`
  display: flex;
  width: 130px;
  height: 45px;
  font-family: Belleza;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  border: 1px solid white;
  background-color: white;
  /* clip-path: polygon(90% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0); */
  margin-top: 50px;
  transition: 0.3s;
  &:hover {
    color: white;
    background: black;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    width: 120px;
    height: 40px;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 35px;
  }
`;

export default About;
