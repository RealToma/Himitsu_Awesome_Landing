import { Box } from "@mui/material";
import styled from "styled-components";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { dataNFTsGallery } from "../../data/nfts";

const Gallery = () => {
  return (
    <StyledComponent>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        wrapperClass="py-[10rem] relative"
      >
        {dataNFTsGallery.map((each, index) => {
          return (
            <CustomSwiperSlide key={index}>

              <img src={each.img} width={"100%"} alt="nft" />
            </CustomSwiperSlide>
          );
        })}
      </Swiper>
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

const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  width: 350px !important;
  height: 300px !important;
  position: relative;
  background: black;
  border: 2px solid white;
  overflow: hidden;
`;

export default Gallery;
