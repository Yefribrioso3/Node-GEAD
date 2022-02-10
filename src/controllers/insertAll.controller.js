import BU from "../Model/bu.js";
import Countries from "../Model/countries.js";
import Operations from "../Model/operations.js";
import Areas from "../Model/areas.js";
import SubAreas from "../Model/subareas.js";
import Line from "../Model/line.js";
import LineTypes from "../Model/linetype.js";
import Procedencia from "../Model/procedencia.js";
import Equipment from "../Model/equipment.js";

import ServicesInformation from "../Model/servicesInformation.js";
import TechnicalSpecification from "../Model/technicalSpecification.js";
import SelectNewTechSpec from "../Model/SelectNewTechSpec.js";
import NewTechnicalSpecification from "../Model/NewTechnicalSpecification.js";


export const createEquipos = async (req = Request, res = Responsees) => {

    // const { body } = req
    // const { cod } = req.body

    console.log(req.body)

    // try {

    //         const data = await Equipment.create(req.body, {
    //             include: [{
    //                 model: Procedencia,
    //                 as: 'Procedencia',
    //             }]
    //         })

    //         return res.status(201).json({ data: data })
    //     } catch (error) {
    //         console.log(error)
    //         return res.status(500).json(error)
    //     }




    try {

        const data = await Equipment.create(req.body, {
            include: [{
                model: Procedencia,
                as: 'Procedencia',
                include: [{
                    model: Areas,
                    as: 'areas',
                    include: [{
                        model: Operations,
                        as: 'operations',
                        include: [{
                            model: Countries,
                            as: 'countries',
                            include: [{
                                model: BU,
                                as: 'bu'
                            }]
                        }]
                    }, {
                        model: SubAreas,
                        as: 'SubArea'
                    }]
                }, {
                    model: Line,
                    as: 'line',
                    include: [{
                        model: LineTypes,
                        as: 'lineTypes'
                    }]
                }]
            }, {
                model: ServicesInformation,
                as: 'ServicesInformation'
            }, {
                model: TechnicalSpecification,
                as: 'TechnicalSpecification',
            }, {
                model: FinancialInformation,
                as: 'FinancialInformation',
            }]
        })

        return res.status(201).json({ data: data })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}