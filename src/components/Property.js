import img from '../assets/house1.jpeg';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill, BsFillBookmarkStarFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import millify from 'millify';
const Property = ({
  name,
  coverPhoto,
  price,
  area,
  logo,
  isVerified,
  agency,
  rooms,
  baths,
  title,
  rentFrequency,
  externalID,
}) => {
  return (
    <Link
      to={`/properties/${externalID}`}
      className="card h-[453px] relative p-[18px] shadow-lg rounded-xl font-sans text-primaryColor"
    >
      <div className="bookmark bg-white rounded-full w-6 aspect-square flex justify-center items-center absolute top-8 right-8">
        <BsFillBookmarkStarFill />
      </div>
      <div className="h-[250px] rounded-xl overflow-hidden">
        <img
          className="h-full object-cover w-full"
          src={coverPhoto ? coverPhoto.url : img}
          alt=""
        />
      </div>
      <h3 className="font-sans pt-4 font-medium text-lg md:text-xl ">
        {agency.name}
      </h3>
      <div className=" text-primaryColor  text-left">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-1 items-center">
            {isVerified && <GoVerified className="text-green-400" />}
            <p className="font-medium">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </p>
          </div>
          <div className="h-[50px]">
            <img
              className="w-[100px] h-full object-contain"
              src={agency?.logo?.url}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-[#959698] gap-4 pb-2">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft
          <BsGridFill />
        </div>
        <p>{title.length > 30 ? title.substring(0, 30) + '...' : title}</p>
      </div>
    </Link>
  );
};
export default Property;
