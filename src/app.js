import express from 'express';
import cors from 'cors';
import buRoutes from './routes/bu_routes.js';
import './database/association.js';
// require('./database/association.js')
// const cors = require('cors');

const app = express();

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
app.set('port', process.env.PORT || 3001 )

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(buRoutes);

export default app;


















// import countriesRoutes from './routes/bu_routes';
// import db from './database/connection';
// import cors from 'cors';

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);





// const apiPaths = {
//     BU: '/api/bu',
// }
// const apiPathsCountries = {
//     Countries: '/api/countries'

// }







// app.use( apiPathsCountries.Countries, countriesRoutes);
// app.use( apiPaths.BU, buRoutes);