import { useState } from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';

const SingleQuestion = ({ title, info, id }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article
      className={
        showInfo
          ? 'accordion grid items-center  shadow-xl px-6 py-6 mt-4 border-b-2 border-primaryColor'
          : 'accordion  grid items-center  px-6 py-4 mt-4 border-b-2 border-primaryColor'
      }
    >
      <div className="accordion-question flex justify-between">
        <div className=" flex ">
          <span className="block text-lightBlue font-bold text-lg pr-4">
            {id}.
          </span>{' '}
          <h5 className="text-left  font-sans  text-primaryColor text-lg md:text-2xl ">
            {title}
          </h5>
        </div>
        <button
          aria-expanded={showInfo}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <BsFillArrowUpCircleFill className="text-primaryColor text-xl md:text-2xl" />
          ) : (
            <BsFillArrowDownCircleFill className="text-primaryColor text-xl md:text-2xl" />
          )}
        </button>
      </div>
      {showInfo && (
        <p className="font-sans md:text-lg pr-2 pt-2 md:pr-6 text-left text-primaryColor">
          {info}
        </p>
      )}
    </article>
  );
};
export default SingleQuestion;
