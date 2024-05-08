import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [forSaleProperties, setForSaleProperties] = useState([]);
  const [forRentProperties, setForRentProperties] = useState([]);
  const [singleProperty, setSingleProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchPropertiesForSale = async () => {
    setIsLoading(true);
    try {
      const propertiesForSales = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale`
      );
      setIsLoading(false);
      setForSaleProperties(propertiesForSales.hits);
    } catch (error) {
      setError(error.msg);
    }
  };
  const fetchPropertiesForRent = async () => {
    setIsLoading(true);
    try {
      const propertiesForSales = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent`
      );
      setIsLoading(false);
      setForRentProperties(propertiesForSales.hits);
    } catch (error) {
      setError(error.msg);
    }
  };
  const fetchSingleProduct = async (id) => {
    setIsLoading(true);
    try {
      const fetchSingleProduct = await fetchApi(
        `${baseUrl}/properties/detail?externalID=${id}`
      );
      setIsLoading(false);
      setSingleProperty(fetchSingleProduct);
    } catch (error) {
      // console.log(error.response.msg);
    }
  };
  useEffect(() => {
    fetchPropertiesForSale();
  }, []);
  useEffect(() => {
    fetchPropertiesForRent();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        forSaleProperties,
        isError,
        forRentProperties,
        fetchSingleProduct,
        singleProperty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
