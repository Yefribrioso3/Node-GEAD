import XLSX from 'xlsx';

export const readExcel = (req, res) => {
    // const XLSX = require('xlsx');
    
    function leerExcel(ruta) {
        try {
            const excel = XLSX.readFile(ruta);
            const nombreHoja = excel.SheetNames;
            // console.log(workbookSheets);
            const hoja = nombreHoja[0];
            const dataExcel = XLSX.utils.sheet_to_json(excel.Sheets[hoja]);

            const jData = [];
            for (let i = 0; i < dataExcel.length; i++) {
                const dato = dataExcel[i];

                jData.push({
                    ...dato,
                    Date_of_Installation: formatearFechaExcel(dato.Date_of_Installation),
                    Date_of_Desintallation: formatearFechaExcel(dato.Date_of_Desintallation)

                });
                
            }
            // workbookSheets
            // console.log(dataExcel);
            
            // const result = await pool.request().query(queries.getAllTables);
            res.json(jData);

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    //-----------------------------------------------------------------

    function formatearFechaExcel(fechaExcel) {
        const diasUTC = Math.floor(fechaExcel - 25569);
        const valorUTC = diasUTC * 86400;
        let infoFecha = new Date(valorUTC * 1000);
      
        const diaFraccionado = fechaExcel - Math.floor(fechaExcel) + 0.0000001;
        let totalSegundosDia = Math.floor(86400 * diaFraccionado);
        const segundos = totalSegundosDia % 60;
        totalSegundosDia -= segundos;
      
        const horas = Math.floor(totalSegundosDia / (60 * 60));
        const minutos = Math.floor(totalSegundosDia / 60) % 60;
      
        // Convertidos a 2 dígitos
        infoFecha.setDate(infoFecha.getDate() + 1);
        const dia = ('0' + infoFecha.getDate()).slice(-2);
        const mes = ('0' + (infoFecha.getMonth() + 1)).slice(-2);
        const anio = infoFecha.getFullYear();
      
        const fecha = `${dia}/${mes}/${anio}`;
      
       return fecha;
      }













    leerExcel(`C:\\DBStructure\\MAZ–LTS–DBStructure-210830.xlsx`);
}


