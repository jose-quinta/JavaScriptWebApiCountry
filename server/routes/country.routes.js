import { Router } from "express";
import {
    getCountries,
    getCountryList,
    getCountry,
    createCountry,
    updateCountry,
    deleteCountry
} from "../controllers/country.controllers.js";

const router = new Router();

router.get('/country', getCountries);
router.get('/country/list', getCountryList);
router.get('/country/:id', getCountry);
router.post('/country', createCountry);
router.put('/country/:id', updateCountry);
router.delete('/country/:id', deleteCountry);

export default router;