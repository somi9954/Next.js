//next.js 13버전
// 클라이언트 컴포넌트 [use] -> "use client"
// 서버 컴포넌트[ui /fetch]

"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      modules={[Scrollbar]}
      loop={true}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="h-[75vh] relative">
          <Image
            className="object-cover"
            src={"/banner1.jpg"}
            alt={""}
            fill
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[75vh] relative">
          <Image className="object-cover" src={"/banner2.jpg"} alt={""} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[75vh] relative">
          <Image className="object-cover" src={"/banner3.jpg"} alt={""} fill />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
