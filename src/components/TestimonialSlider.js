// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const TestimonialSlider = () => {
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
      <SwiperSlide className="card bg-white pt-10">
        <div className="img-content">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content  pt-[100px] pb-[30px] px-[20px] bg-primaryColor rounded-2xl text-white">
          <p className="description pt-4 max-w-[45ch]">
            I can't believe how easy it was to find my dream apartment using
            this app! The search filters were a lifesaver, and the alerts kept
            me in the loop about new listings. Thanks to this app, I found the
            perfect place without the usual hassle."
          </p>
          <h5 className="name font-sans text-2xl pt-1">Sarah Drey</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card bg-white pt-10">
        <div className="img-content">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content pt-[100px] pb-[30px] px-[20px] bg-primaryColor rounded-2xl text-white">
          <p className="description pt-4 max-w-[45ch]">
            I can't believe how easy it was to find my dream apartment using
            this app! The search filters were a lifesaver, and the alerts kept
            me in the loop about new listings. Thanks to this app, I found the
            perfect place without the usual hassle."
          </p>
          <h5 className="name font-sans text-2xl pt-1">Sarah Drey</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card bg-white pt-10">
        <div className="img-content">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content pt-[100px] pb-[30px] px-[20px] bg-primaryColor rounded-2xl text-white ">
          <p className="description pt-4 max-w-[45ch]">
            I can't believe how easy it was to find my dream apartment using
            this app! The search filters were a lifesaver, and the alerts kept
            me in the loop about new listings. Thanks to this app, I found the
            perfect place without the usual hassle."
          </p>
          <h5 className="name font-sans text-2xl pt-1">Sarah Drey</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card bg-white pt-10">
        <div className="img-content">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content pt-[100px] pb-[30px] px-[20px] bg-primaryColor rounded-2xl text-white">
          <p className="description pt-4 max-w-[45ch]">
            I can't believe how easy it was to find my dream apartment using
            this app! The search filters were a lifesaver, and the alerts kept
            me in the loop about new listings. Thanks to this app, I found the
            perfect place without the usual hassle."
          </p>
          <h5 className="name font-sans text-2xl pt-1">Sarah Drey</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="card bg-white pt-10">
        <div className="img-content">
          <div className="card-image">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content pt-[100px] pb-[30px] px-[20px] bg-primaryColor rounded-2xl text-white">
          <p className="description pt-4 max-w-[45ch]">
            I can't believe how easy it was to find my dream apartment using
            this app! The search filters were a lifesaver, and the alerts kept
            me in the loop about new listings. Thanks to this app, I found the
            perfect place without the usual hassle."
          </p>
          <h5 className="name font-sans text-2xl pt-1">Sarah Drey</h5>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default TestimonialSlider;
