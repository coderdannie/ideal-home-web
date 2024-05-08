import { Link } from 'react-router-dom';
import img from '../assets/house2.jpg';

const Properties = () => {
  return (
    <section className="relative translate-y-20 py-[100px] wrapper">
      <h2 className="text-primaryColor mb-[30px] text-center">Properties</h2>
      <div className=" flex flex-col justify-center md:flex-row gap-8 font-serif">
        <div className="card md:w-[45%] shadow-md pt-6 pb-8 px-6">
          <div className="card-img">
            <img src={img} alt="house " />
          </div>
          <div className="card-text pt-6">
            <p className="capitalize">rent a home</p>
            <h4 className="font-semibold py-1">Rental Homes for Everyone</h4>
            <p className="capitalize pb-6">
              {' '}
              Explore from Apartments, builder floors, <br /> villas and more
            </p>
            <Link
              to="/properties-for-rent"
              className="text-white bg-primaryColor px-6  py-[10px] rounded-md font-medium"
            >
              Explore renting
            </Link>
          </div>
        </div>
        <div className="card md:w-[45%] shadow-md pt-6 pb-8 px-6">
          <div className="card-img">
            <img src={img} alt="house " />
          </div>
          <div className="card-text pt-6">
            <p className="capitalize">buy a home</p>
            <h4 className="font-semibold py-1">
              Find, Buy & Own Your dream home
            </h4>
            <p className="capitalize pb-6">
              {' '}
              Explore from Apartments, land, builder floors, <br /> villas and
              more
            </p>
            <Link
              to="/properties-for-sale"
              className="text-white bg-primaryColor px-6  py-[10px] rounded-md font-medium "
            >
              Explore buying
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Properties;
