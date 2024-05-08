import img from '../assets/iphone12.svg';

const ContactUs = () => {
  return (
    <section className=" pb-[50px]   bg-[#EFF5FF]">
      <div className="wrapper">
        <p className="font-sans text-2xl pt-[40px] text-center">Contact us</p>
        <h2 className="text-primaryColor font-sans text-center">
          Get in touch with us
        </h2>
        <div className="grid  text-primaryColor items-center mt-[46px] md:grid-cols-2 gap-8">
          <div className="contactUs-text row-start-2 md:row-start-1">
            <p className=" md:text-xl">
              Having issues in finding your dream home? Need help in renting or
              buying your first hime? Or you need a consultation on residential
              issues? Get in touch with us, we will be happy to help.
            </p>
            <form className="pt-[30px] grid gap-6">
              <input
                className="w-full py-3 pl-9 bg-white border-primaryColor rounded-lg border-2 placeholder:text-primaryColor md:text-xl"
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
              />
              <input
                className="w-full py-3 pl-9 bg-white border-primaryColor rounded-lg border-2 placeholder:text-primaryColor md:text-xl"
                type="email"
                name=""
                id=""
                placeholder="Enter a valid email address"
              />
              <textarea
                className="w-full h-[188px] pl-9 bg-white border-primaryColor rounded-lg border-2 placeholder:text-primaryColor md:text-xl "
                type="text"
                name=""
                id=""
                placeholder="Enter your message"
              />
            </form>
          </div>
          <div className="contact-img bg-[#188AEC21] h-full flex items-center justify-center rounded-2xl">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
