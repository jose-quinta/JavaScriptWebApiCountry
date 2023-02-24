import Express from "express";
import Cors from "cors";

import CountryRoutes from "./routes/country.routes.js";
import ProvinceRouter from "./routes/province.routes.js";

import { PORT } from "./config.js";

const app = Express();

app.use(Cors());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

app.use(CountryRoutes);
app.use(ProvinceRouter);

app.listen(PORT);
