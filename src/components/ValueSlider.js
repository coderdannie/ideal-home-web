// Import Swiper React components
import { Values } from '../utils/Values';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillHouseCheckFill } from 'react-icons/bs';
import { FaSellcast } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const ValueSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        769: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
      scrollbar={true}
      navigation={false}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="slide-container"
    >
      <SwiperSlide className=" bg-white pt-10 text-primaryColor">
        <div className="flex flex-col justify-center items-center">
          <div className="value-icon">
            <BsFillHouseCheckFill className="text-[40px]" />
          </div>
          <h5 className="font-semibold text-[28px]">Easy to Find</h5>
          <p>
            Here you can find your residence easily because we have worked with
            hundreds of residences with quality and affordable prices{' '}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" bg-white pt-10 text-primaryColor shadow-xl py-[66px] px-[36px]">
        <div className="flex flex-col justify-center items-center">
          <div className="value-icon">
            <BsFillHouseCheckFill className="text-[40px]" />
          </div>
          <h5 className="font-semibold text-[28px] py-2">Easy to Find</h5>
          <p>
            Here you can find your residence easily because we have worked with
            hundreds of residences with quality and affordable prices{' '}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" bg-white pt-10 text-primaryColor">
        <div className="flex flex-col justify-center items-center">
          <div className="value-icon">
            <FaSellcast className="text-[40px]" />
          </div>
          <h5 className="font-semibold text-[28px]">Easy to Find</h5>
          <p>
            Here you can find your residence easily because we have worked with
            hundreds of residences with quality and affordable prices{' '}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" bg-white pt-10 text-primaryColor">
        <div className="flex flex-col justify-center items-center">
          <div className="value-icon">
            <BsFillHouseCheckFill className="text-[40px]" />
          </div>
          <h5 className="font-semibold text-[28px]">Easy to Find</h5>
          <p>
            Here you can find your residence easily because we have worked with
            hundreds of residences with quality and affordable prices{' '}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" bg-white pt-10 text-primaryColor">
        <div className="flex flex-col justify-center items-center">
          <div className="value-icon">
            <BiTimer className="text-[40px]" />
          </div>
          <h5 className="font-semibold text-[28px]">Easy to Find</h5>
          <p>
            Here you can find your residence easily because we have worked with
            hundreds of residences with quality and affordable prices{' '}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default ValueSlider;
