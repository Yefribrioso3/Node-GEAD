// import BU from "../Model/bu.js";
import Location from "../Model/location.js";


    // ----------     GET ALL Location      ----------
export const getLocation = async ( req  = Request , res = Responsees ) => {
   
    const location = await Location.findAll();

     res.json({ location });
}

    // ----------     GET Location BY ID      ----------
export const getLocationByID = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const location = await Location.findByPk( id );
    
    if( location ) {

        res.json( location );

    } else {

        res.status(404).json({
            msg: `No existe el location con el id ${id}`
        })

    }

}

    // ----------     CREATE NEW Location      ----------
export const postLocation = async ( req = Request , res = Response ) => {
   
    const { body } = req;

    try {

        // const existeBU = await BU.findOne({
        //     where: {
        //         Name: body.Name
        //     }
        // });

        // if (existeBU) {
        //     return res.status(400).json({  // 400 Bad request
        //         msg: 'Ya existe un BU con el nombre: ' + body.Name
        //     });
        // }


        const location = new Location(body); //Crear nuevo fila de datos
        await location.save(); //Guardarla

        res.json( location ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador', error
        })
    }
}

    // ----------     UPDATE Location      ----------
export const putLocation = async ( req = Request , res = Response ) => {
   
    const { id } = req.params;
    const { body } = req;
    
    try {

        const location = await Location.findByPk( id );
        if ( !location ) {
            return res.status(404).json({  //No existe
                msg: 'No existe el location con el id: ' + id
            });
        }

        // await bu.update( body ); //Forma directa de actualizar los datos

        await location.update( { //Tomamos solo los datos que deseamos actualizar
            Name: body.Name   
        } );

        res.json( location ); 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        })
    }
}

    // ----------     DELETE Location      ----------
export const deleteLocation = async ( req = Request , res = Response ) => {
    
    const { id } = req.params;
    
    const location = await Location.findByPk( id );
    if ( !location ) {
        return res.status(404).json({  //No existe
            msg: 'No existe el location con el id: ' + id
        });
    }
    
    //Eliminacion fisica borrando los datos desde la db

    await location.destroy();

    //Eliminacion logica, actualizando el campo estado de 1 a 0

    // await bu.update({ Estado: false });
    
    res.json('location Eliminado');
}