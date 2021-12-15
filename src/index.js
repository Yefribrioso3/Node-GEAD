// import { connect } from "mssql";
import app from "./app.js";
// const app = require("./app.js");

import { getConnection } from "./database/connection.js";

app.listen(app.get('port'), ()=>{
    getConnection();
    console.log('Server on port', app.get('port'))
});
