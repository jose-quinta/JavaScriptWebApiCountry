import { Router } from "express";
import {
    getProvince,
    getProvinces,
    getProvincesFromCountry,
    createProvince,
    updateProvince,
    deleteProvince,
} from "../controllers/province.controllers.js";

const router = new Router();

router.get('/province', getProvinces);
router.get('/province/:id', getProvince);
router.get("/province/list/:id", getProvincesFromCountry);
router.post('/province', createProvince);
router.put('/province/:id', updateProvince);
router.delete('/province/:id', deleteProvince);

export default router;