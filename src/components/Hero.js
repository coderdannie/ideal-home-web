import { Nav, Search } from '.';

const Hero = () => {
  return (
    <header className="min-h-screen">
      <div className="wrapper ">
        <Nav />
        <div className="hero max-w-[72ch] text-center mx-auto mt-8">
          <h1 className="text-white">Discover a place you will love to live</h1>
          <p className="md:text-xl text-white capitalize pt-5">
            Explore confidently using our reliable assortment of homes <br />{' '}
            available for purchase or rent
          </p>
        </div>
        <Search />
        <div className="bg-primaryColor text-white py-6 shadow-2xl shadow-primaryColor rounded-lg text-center flex  justify-evenly relative translate-y-[80px]">
          <div>
            <h5 className="num">500+</h5>
            <p className="md:text-xl pt-2 font-sans ">Happy Customer</p>
          </div>
          <div>
            <h5 className="num">6100+</h5>
            <p className="md:text-xl pt-2 font-sans ">Property Ready</p>
          </div>
          <div>
            <h5 className="num">710+</h5>
            <p className="md:text-xl pt-2 font-sans ">Award Winning</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
