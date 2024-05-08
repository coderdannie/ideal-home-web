import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className=" mt-[50px] md:mt-[90px]  text-center bg-[#EFF5FF]">
      <div className="wrapper">
        <p className="font-sans text-2xl pt-[62px]">Testimonials</p>
        <h2 className="text-primaryColor font-sans">What our clients say</h2>
        <TestimonialSlider />
      </div>
    </section>
  );
};
export default Testimonial;
