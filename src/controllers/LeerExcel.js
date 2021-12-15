
export const readExcel = (req, res) => {
    const XLSX = require('xlsx');
    
    function leerExcel(ruta) {
        try {
            const workbook = XLSX.readFile(ruta);
            const workbookSheets = workbook.SheetNames;
            // console.log(workbookSheets);
            const sheet = workbookSheets[4];
            const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

            // console.log(dataExcel);
            
            // const result = await pool.request().query(queries.getAllTables);
            res.json(dataExcel);

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }

    }

    leerExcel('MAZ–LTS–DBStructure-210830.xlsx');
}


