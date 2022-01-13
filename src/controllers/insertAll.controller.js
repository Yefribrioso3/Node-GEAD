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

    const { body } = req

    try {

        const data = await Equipment.create(body, {
            include: [{
                model: Procedencia,
                as: 'procedencia',
                include: [{
                    model: Areas,
                    as: 'areas',
                    include: [{
                        model: Operations,
                        as: 'Operations',
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
                        as: 'subAreas'
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
                as: 'servicesInformation'
            }, {
                model: TechnicalSpecification,
                as: 'technicalSpecification',

            }]
        })

        return res.status(201).json({ data: data })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}