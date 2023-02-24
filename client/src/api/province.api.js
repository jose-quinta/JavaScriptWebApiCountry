import axios from 'axios';

export const getProvincesRequest = async () =>
    await axios.get('http://localhost:4000/province');

export const getProvinceRequest = async (id) =>
    await axios.get(`http://localhost:4000/province/${id}`);

export const getProvincesFromCountryRequest = async (id) =>
    await axios.get(`http://localhost:4000/province/list/${id}`);

export const postProvinceRequest = async (province) =>
    await axios.post("http://localhost:4000/province", province);

export const putProvinceRequest = async (id, province) =>
    await axios.put(`http://localhost:4000/province/${id}`, province);

export const deleteProvinceRequest = async (id) =>
    await axios.delete(`http://localhost:4000/province/${id}`);

