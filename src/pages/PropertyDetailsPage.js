import { Link, useParams } from 'react-router-dom';
import { BackBtn, ImagesSlider, Nav } from '../components';
import { propertyDetails } from '../utils/data';
import millify from 'millify';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill, BsFillBookmarkStarFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { useGlobalContext } from '../context/context';
import { useEffect } from 'react';
const PropertyDetailsPage = () => {
  const { fetchSingleProduct, singleProperty, isLoading } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = singleProperty;
  console.log(agency);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  console.log(purpose);
  return (
    <div className="pb-16">
      <div className="bg-primaryColor">
        <div className="wrapper">
          <Nav />
        </div>
      </div>
      <section className="wrapper mt-12">
        <BackBtn purpose={purpose} />
        <ImagesSlider data={photos} />
        <div>
          <h4 className="font-sans pt-4 font-medium text-lg md:text-xl ">
            {agency?.name}
          </h4>
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
                  className="w-[200px] h-full object-contain"
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
            <h5 className="font-bold uppercase text-primaryColor">{title}</h5>
            <p className="font-sans leading-6 pt-6 md:text-xl">{description}</p>
          </div>
          <div className="flex  flex-wrap gap-6 ">
            <div className="flex items-center gap-6 mt-6 md:text-xl border-primaryColor border-r-2">
              <p>Type:</p>
              <p className="font-bold  bg-blue-200 p-2">{type}</p>
            </div>
            <div className="flex items-center gap-6 mt-6 md:text-xl border-primaryColor border-r-2">
              <p>Purpose</p>
              <p className="font-bold  bg-blue-200 p-2">{purpose}</p>
            </div>
            {furnishingStatus && (
              <div className="flex items-center gap-6 mt-6 md:text-xl border-primaryColor border-r-2">
                <p>Furnishing Status</p>
                <p className="font-bold  bg-blue-200 p-2">{furnishingStatus}</p>
              </div>
            )}
          </div>
          <div className="amenities">
            {amenities?.length && (
              <p className="text-lg md:text-2xl text-primaryColor font-medium mt-5 mb-2">
                Facilites:
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {amenities?.map((item) => {
                return item?.amenities?.map((amenity) => {
                  return (
                    <p
                      key={amenity.text}
                      className="font-semibold rounded-lg bg-gray-200 p-2 "
                    >
                      {amenity.text}
                    </p>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PropertyDetailsPage;
