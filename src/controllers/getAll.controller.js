
import { getConnection} from "../database/connection.js";
// import { sql } from "../database/connection";
import { queries } from "../database/querys.js";

export const getAll = async (req, res ) => {
    
    try 
    {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTabless);
        res.json(result.recordset);
    } catch (error)
    {
        res.status(500);
        res.send(error.message);
    }
}


export const getAllById = async (req, res) =>{
    const { id } = req.params;
    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('Id', id)
        .query(queries.getAllTables)
    
    res.send(result.recordset[0])
};