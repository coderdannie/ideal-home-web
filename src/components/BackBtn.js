import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const BackBtn = ({ purpose }) => {
  const { forRentProperties } = useGlobalContext();
  return (
    <Link
      className=" text-white bg-primaryColor px-6  py-[10px] rounded-md font-medium  border-2"
      to={`/properties/${purpose}`}
    >
      Back
    </Link>
  );
};
export default BackBtn;
