// const { default: BU } = require('../Model/bu');
// const { default: Countries } = require('../Model/countries');
// const { default: Operations } = require('../Model/operations');
// const { default: Areas } = require('../Model/areas');
// const { default: SubAreas } = require('../Model/subareas');
// const { default: Procedencia } = require('../Model/procedencia');
// const { default: Line } = require('../Model/line');
// const { default: LineTypes } = require('../Model/linetype');
// const { default: Equipment } = require('../Model/equipment');
// const { default: ServicesInformation } = require('../Model/servicesInformation');
// const { default: NewServicesInformation } = require('../Model/newServicesInformation');
// const { default: TechnicalSpecification } = require('../Model/technicalSpecification');
// const { default: NewTechnicalSpecification } = require('../Model/NewTechnicalSpecification');

import Areas from "../Model/areas.js"
import BU from "../Model/bu.js"
import Countries from "../Model/countries.js"
import Equipment from "../Model/equipment.js"
import Line from "../Model/line.js"
import LineTypes from "../Model/linetype.js"
import NewServicesInformation from "../Model/newServicesInformation.js"
import NewTechnicalSpecification from "../Model/NewTechnicalSpecification.js"
import Operations from "../Model/operations.js"
import Procedencia from "../Model/procedencia.js"
import ServicesInformation from "../Model/servicesInformation.js"
import SubAreas from "../Model/subareas.js"
import TechnicalSpecification from "../Model/technicalSpecification.js"
import FinancialInformation from "../Model/financialInformation.js"




Countries.belongsTo(BU, { as: 'bu', foreignKey: 'Id_BU'})
BU.hasMany(Countries, { foreignKey: 'Id_BU' })


Operations.belongsTo(Countries, { as: 'countries', foreignKey: 'Id_Countries' })
Countries.hasMany(Operations, { foreignKey: 'Id_Countries' })


Areas.belongsTo(Operations, { as: 'operations', foreignKey: 'Id_Operations' })
Operations.hasOne(Areas, { foreignKey: 'Id_Operations' })


SubAreas.belongsTo(Areas, { as: 'areas', foreignKey: 'Id_Areas'  })
Areas.hasOne(SubAreas, { foreignKey: 'Id_Areas' } )


Equipment.belongsTo(Procedencia, { as: 'Procedencia', foreignKey: 'Id_Procedencia' })
Procedencia.hasOne(Equipment, { foreignKey: 'Id_Procedencia' })


Procedencia.belongsTo(Areas, { as: 'areas', foreignKey: 'Id_Areas' })
Areas.hasOne(Procedencia, { foreignKey: 'Id_Areas' })

Procedencia.belongsTo(Line, { as: 'line', foreignKey: 'Id_Line'  })
Line.hasOne(Procedencia, { foreignKey: 'Id_Line' })


Line.belongsTo(LineTypes, {as: 'lineTypes', foreignKey: 'Id_LineTypes' })
LineTypes.hasMany(Line, { foreignKey: 'Id_LineTypes' })


ServicesInformation.belongsTo(Equipment, { as: 'equipment', foreignKey: 'Id_Equipment' })
Equipment.hasOne(ServicesInformation, { foreignKey: 'Id_Equipment' })


ServicesInformation.belongsToMany(NewServicesInformation, {
    through: 'SelectNewServicesInfo', 
    as: 'newServicesInformation', 
    foreignKey: 'Id_ServicesInformation'
})
NewServicesInformation.belongsToMany(ServicesInformation, {
    through: 'SelectNewServicesInfo', 
    as: 'servicesInformation', 
    foreignKey: 'Id_NewServInfo'
})


TechnicalSpecification.belongsTo(Equipment, { as: 'equipment', foreignKey: 'Id_Equipment' })
Equipment.hasOne(TechnicalSpecification, { foreignKey: 'Id_Equipment' })


TechnicalSpecification.belongsToMany(NewTechnicalSpecification, {
    through: 'SelectNewTechSpec', 
    as: 'newTechnicalSpecification', 
    foreignKey: 'Id_TechnicalSpecification'
})
NewTechnicalSpecification.belongsToMany(TechnicalSpecification, {
    through: 'SelectNewTechSpec', 
    as: 'technicalSpecification', 
    foreignKey: 'Id_NewTechSpec'
})


FinancialInformation.belongsTo(Equipment, { as: 'equipment', foreignKey: 'Id_Equipment' })
Equipment.hasOne(FinancialInformation, { foreignKey: 'Id_Equipment' })

// Equipment.belongsToMany(TechnicalSpecification, { 
//     through: 'EquipmentsTechnicals', 
//     as: 'technicalSpecification', 
//     foreignKey: 'Id_Equipment'
// })
// TechnicalSpecification.belongsToMany(Equipment, {
//     through: 'EquipmentsTechnicals',
//     as: 'equipment',
//     foreignKey: 'Id_TechnicalSpecification'
// })


// TechnicalSpecification.belongsToMany(TechnicalSpecificationValues, {
//     through: 'TechSespecSValue',
//     as: 'technicalSpecificationValues',
//     foreignKey: 'Id_TechnicalSpecification'
// })
// TechnicalSpecificationValues.belongsToMany(TechnicalSpecification, {
//     through: 'TechSespecSValue',
//     as: 'TechnicalSpecification',
//     foreignKey: 'Id_TechnicalSpecificationValues'
// })