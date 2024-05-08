import { Nav } from '../components';
import { properties } from '../utils/data';
import Property from '../components/Property';
import { useGlobalContext } from '../context/context';
const PropertiesForSale = () => {
  const { isLoading, forSaleProperties, isError } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <main>
      <div className="bg-primaryColor">
        <div className="wrapper">
          <Nav />
        </div>
      </div>
      <section className="wrapper ">
        <h2 className="text-primaryColor pt-4">Properties for sale</h2>
        <div className="cards mt-4">
          {forSaleProperties.map((property, index) => {
            return <Property key={index} {...property} />;
          })}
        </div>
      </section>
    </main>
  );
};
export default PropertiesForSale;
