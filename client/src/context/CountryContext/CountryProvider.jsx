import { useState, useContext } from "react";
import { CountryContext } from "./CountryContext.jsx";
import {
  getCountriesRequest,
  getCountryListRequest,
  getCountryRequest,
  postCountryRequest,
  putCountryRequest,
  deleteCountryRequest,
} from "../../api/country.api.js";

export const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context || context === undefined) {
        throw new Error("useCountry must be used within a CountryContextProvider");
    }
    return context;
};

export const CountryContextProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    const loadCountries = async () => {
        const response = await getCountriesRequest();
        setCountries(response.data);
    };

    const loadListCountries = async () => {
        const response = await getCountryListRequest();
        setCountries(response.data);
    }

    const getCountry = async (id) => {
        try {
            const response = await getCountryRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const createCountry = async (country) => {
        try {
            const response = await postCountryRequest(country);
        } catch (error) {
            console.error(error);
        }
    };

    const updateCountry = async (id, country) => {
        try {
            const response = await putCountryRequest(id, country);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCountry = async (id) => {
        try {
            const response = await deleteCountryRequest(id);
            return setCountries(countries.filter((country) => country.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CountryContext.Provider value={{ countries, loadCountries, loadListCountries, getCountry, createCountry, updateCountry, deleteCountry, }} >
            {children}
        </CountryContext.Provider>
    );
};