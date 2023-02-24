import { useState, useContext } from "react";
import { ProvinceContext } from "./ProvinceContext";
import {
    getProvincesRequest,
    getProvinceRequest,
    getProvincesFromCountryRequest,
    postProvinceRequest,
    putProvinceRequest,
    deleteProvinceRequest
} from "../../api/province.api.js";

export const useProvince = () => {
    const context = useContext(ProvinceContext);
    if (!context || context === undefined) {
        throw new Error("useProvince must be used within a ProvinceContextProvider");
    }
    return context;
};

export const ProvinceContextProvider = ({ children }) => {
    const [provinces, setProvinces] = useState([]);

    const loadProvinces = async () => {
        const response = await getProvincesRequest();
        setProvinces(response.data);
    };

    const getProvince = async (id) => {
        try {
            const response = await getProvinceRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const getProvincesListFromCountry = async (id) => {
        try {
            const response = await getProvincesFromCountryRequest(id);
            setProvinces(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createProvince = async (province) => {
        try {
            const response = await postProvinceRequest(province);
        } catch (error) {
            console.error(error);
        }
    };

    const updateProvince = async (id, province) => {
        try {
            const response = await putProvinceRequest(id, province);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProvince = async (id) => {
        try {
            const response = await deleteProvinceRequest(id);
            return setProvinces(provinces.filter((province) => province.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProvinceContext.Provider value={{ provinces, loadProvinces, getProvince, getProvincesListFromCountry, createProvince, updateProvince, deleteProvince, }} >
            {children}
        </ProvinceContext.Provider>
    );
};