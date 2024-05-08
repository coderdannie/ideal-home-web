import { BiSearchAlt } from 'react-icons/bi';
const Search = () => {
  return (
    <div className="search mt-[70px] ">
      <button
        className="text-white font-serif bg-primaryColor px-6  py-[10px] rounded-md font-medium"
        type="button"
      >
        Rent
      </button>
      <button
        className="bg-white font-serif text-primaryColor px-6  py-[10px] rounded-md font-medium"
        type="button"
      >
        Buy
      </button>
      <form className="bg-white flex flex-col gap-10 md:flex-row pt-[26px] pb-[23px] rounded-md px-6 justify-evenly items-center ">
        <div className="grid gap-6 place-items-center">
          <h6 className="font-serif font-medium">Property Type</h6>
          <select>
            <option value="type">Type</option>
          </select>
        </div>
        <div className="grid gap-6 place-items-center">
          <h6 className="font-serif font-medium">Location</h6>
          <select>
            <option value="type">Location</option>
            <option value="s">osun</option>
          </select>
        </div>
        <div className="grid gap-6 place-items-center">
          <h6 className="font-serif font-medium">Price Range</h6>
          <div>
            <select>
              <option value="Min Price">Min Price</option>
            </select>
            <select>
              <option value="Max Price">Max Price</option>
            </select>
          </div>
        </div>
        <div>
          <select>
            <option value="rooms">Rooms</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-primaryColor px-6  py-[10px] rounded-md font-medium font-lg"
        >
          Search
          <BiSearchAlt className="inline " />
        </button>
      </form>
    </div>
  );
};
export default Search;
