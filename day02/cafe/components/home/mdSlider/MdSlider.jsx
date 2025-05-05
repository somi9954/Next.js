"use client";

import Container from "@/components/common/layout/Container";
import Heading from "@/components/common/typography/Heading";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MD from "./MD";

const MdSlider = () => {
  const data = [
    { title: "md1", subtitle: "어쩌구 저쩌구", imageSrc: "/md1.jpg" },
    { title: "md2", subtitle: "어쩌구 저쩌구", imageSrc: "/md2.png" },
    { title: "md3", subtitle: "어쩌구 저쩌구", imageSrc: "/md3.jpg" },
    { title: "md4", subtitle: "어쩌구 저쩌구", imageSrc: "/md4.jpg" },
    { title: "md5", subtitle: "어쩌구 저쩌구", imageSrc: "/md5.jpg" },
    { title: "md6", subtitle: "어쩌구 저쩌구", imageSrc: "/md6.jpg" },
    { title: "md7", subtitle: "어쩌구 저쩌구", imageSrc: "/md7.jpg" },
  ];

  return (
    <Container className="py-10 px-8 md:px-0">
      <Heading level={3}>New & Best MD</Heading>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
        modules={[Navigation]}
        navigation
        loop
      >
        {data.map((v) => (
          <SwiperSlide>
            <MD {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default MdSlider;