import axios from 'axios';

export const getCountriesRequest = async () =>
    await axios.get('http://localhost:4000/country');

export const getCountryListRequest = async () =>
    await axios.get("http://localhost:4000/country/list");

export const getCountryRequest = async (id) =>
    await axios.get(`http://localhost:4000/country/${id}`);

export const postCountryRequest = async (country) =>
    await axios.post('http://localhost:4000/country', country);

export const putCountryRequest = async (id, country) =>
    await axios.put(`http://localhost:4000/country/${id}`, country);

export const deleteCountryRequest = async (id) =>
    await axios.delete(`http://localhost:4000/country/${id}`);

