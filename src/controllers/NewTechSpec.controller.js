// CONSULTAS A LA BASE DE DATOS

// import { getConnection, sql, queries } from "../database";
import NewTechnicalSpecification from "../Model/NewTechnicalSpecification.js";

// Obtener listado de NewServInfo  ----  Consulta  ----------------
export const getNewTechInfo = async (req, res) => {

    const newTechnicalSpecification = await NewTechnicalSpecification.findAll();

    res.json({ newTechnicalSpecification });
};

// ------   ADD NewServicesInformation   ----- Insertar --------------------------
export const createNewTechInfo = async (req, res) => {
    const { body } = req;

    try {


        const newTechnicalSpecification = new NewTechnicalSpecification(body);
        await newTechnicalSpecification.save();

        res.json(newTechnicalSpecification);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
};

// ------------   Get a NewServicesInformation by Id ---------------------
export const getNewTechInfoById = async (req, res) => {

    const { id } = req.params;
    const newTechnicalSpecification = await NewTechnicalSpecification.findByPk(id);

    if (newTechnicalSpecification) {

        res.json(newTechnicalSpecification);

    } else {

        res.status(404).json({
            msg: `No existe newTechnicalSpecification con el id ${id}`
        })

    }
};

// --------------------   Delete   ------------------------
export const deleteNewTechInfoById = async (req, res) => {

    const { id } = req.params;

    const newTechnicalSpecification = await NewTechnicalSpecification.findByPk(id);
    if (!newTechnicalSpecification) {
        return res.status(404).json({  //No existe
            msg: 'No existe newTechnicalSpecification con el id: ' + id
        });
    }

    //Eliminacion fisica borrando los datos desde la db
    await newTechnicalSpecification.destroy();

    res.json('New Technical Specification Eliminado');
};

// -----------------   Update NewServicesInformation  ----------------------- 
export const updateNewTechInfoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const newTechnicalSpecification = await NewTechnicalSpecification.findByPk(id);
        if (!newTechnicalSpecification) {
            return res.status(404).json({  //No existe
                msg: 'No existe newTechnicalSpecification con el id: ' + id
            });
        }

        // await bu.update( countrie ); //Forma directa de actualizar los datos

        await newTechnicalSpecification.update({ //Tomamos solo los datos que deseamos actualizar
            Id_TechnicalSpecification: body.Id_TechnicalSpecification,
            Name: body.Name,
            Value: body.Value
        });

        res.json(newTechnicalSpecification);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}






