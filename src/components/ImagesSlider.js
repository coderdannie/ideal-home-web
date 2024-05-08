import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { propertyDetails } from '../utils/data';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const ImagesSlider = ({ data }) => {
  return (
    <div className=" h-[450px] mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[400px]"
      >
        {data?.map((photo, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={photo.url} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ImagesSlider;
