import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { links } from '../utils/constants';
import { AiOutlineBars } from 'react-icons/ai';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center text-white py-[38px]">
      <div className="logo flex items-center">
        <img className="bg-primaryColor" src={logo} alt="idea haven logo" />
        <div className=" md:text-2xl font-serif font-semibold ml-6">
          Ideal Haven
        </div>
      </div>
      <ul className="capitalize hidden md:flex font-medium text-lg gap-10">
        {links.map((link) => {
          if (link.text === 'properties') {
            return (
              <li key={link.id} className="relative ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="capitalize flex flex-row-reverse items-center"
                >
                  <MdOutlineKeyboardArrowDown className="text-2xl mt-1" />
                  {link.text}
                </button>{' '}
                {isOpen && (
                  <ul className="absolute left-6 top-[42px] bg-white shadow-xl rounded-lg px-6 py-4 text-primaryColor">
                    <li>
                      <Link className="block" to="/properties-for-rent">
                        Rent
                      </Link>
                    </li>
                    <li>
                      <Link className="block" to="/properties-for-sale">
                        Buy
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            );
          }
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>{' '}
            </li>
          );
        })}
      </ul>
      <div className="nav-btn hidden md:flex gap-4">
        <Link
          className="bg-white text-primaryColor px-6  py-[10px] rounded-md font-medium"
          to="/login"
        >
          Login
        </Link>
        <Link
          to="/register"
          className=" text-white px-6  py-[10px] rounded-md font-medium border-white border-2"
        >
          Register
        </Link>
      </div>
      <div className="toggle-nav md:hidden">
        <AiOutlineBars className="text-3xl" />
      </div>
    </nav>
  );
};
export default Nav;
