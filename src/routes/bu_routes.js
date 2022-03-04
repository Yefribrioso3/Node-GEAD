import { Router } from 'express';


import { readExcel } from '../controllers/LeerExcel.js';


import { deleteArea, getAreaById, getAreas, postArea, putArea } from '../controllers/area.controller.js';

// import a from '../controllers/area.controller.js';
// const { deleteArea, getAreaById, getAreas, postArea, putArea } = a;

import { getBU, getBuByID, postBU, putBU, deleteBU } from '../controllers/bu.controller.js';
// import pkg from '../controllers/bu.controller.js';
// const { getBU, getBuByID, postBU, putBU, deleteBU } = pkg;


import { deleteCountrie, getCountrieById, getCountries, postCountrie, putCountrie } from '../controllers/countries.controller.js';
// import c from '../controllers/countries.controller.js';
// const { deleteCountrie, getCountrieById, getCountries, postCountrie, putCountrie } = c;

import { createNewEquipment, deleteEquipmentById, getAllEquipmentRelations, getEquipment, getEquipmentById, updateEquipmentById } from '../controllers/equipment.controller.js';
// import e from '../controllers/equipment.controller.js';
// const { createNewEquipment, deleteEquipmentById, getAllEquipmentRelations, getEquipment, getEquipmentById, updateEquipmentById } = e;

import { createNewEquipmentTechnical, deleteEquipmentTechnicalById, getEquipmentTechnical, getEquipmentTechnicalById, updateEquipmentTechnicalById } from '../controllers/equipmentsTech.controller.js';
// import et from '../controllers/equipmentsTech.controller.js';
// const { createNewEquipmentTechnical, deleteEquipmentTechnicalById, getEquipmentTechnical, getEquipmentTechnicalById, updateEquipmentTechnicalById } = et;




// import { getAll, getAllById } from '../controllers/getAll.controller.js';
// import { readExcel } from '../controllers/LeerExcel.js';

import { createNewLine, deleteLineById, getLine, getLineById, updateLineById } from '../controllers/line.controller.js';
// import L from '../controllers/line.controller.js';
// const { createNewLine, deleteLineById, getLine, getLineById, updateLineById } = L;

import { createNewLineType, deleteLineTypeById, getLineType, getLineTypeById, updateLineTypeById } from '../controllers/lineType.controller.js';
// import lt from '../controllers/lineType.controller.js';
// const { createNewLineType, deleteLineTypeById, getLineType, getLineTypeById, updateLineTypeById } = lt;

import { createNewServInfo, deleteNewServInfoById, getAllNewServiInfoByEquipmentId, getNewServInfo, getNewServInfoById, updateNewServInfoById } from '../controllers/NewServicesInfo.controller.js';
// import nsi from '../controllers/NewServicesInfo.controller.js';
// const { createNewServInfo, deleteNewServInfoById, getAllNewServiInfoByEquipmentId, getNewServInfo, getNewServInfoById, updateNewServInfoById } = nsi;

import { createNewTechInfo, deleteNewTechInfoById, getNewTechInfo, getNewTechInfoById, updateNewTechInfoById } from '../controllers/NewTechSpec.controller.js';
// import nti from '../controllers/NewTechSpec.controller.js';
// const { createNewTechInfo, deleteNewTechInfoById, getNewTechInfo, getNewTechInfoById, updateNewTechInfoById } = nti;


import { deletePlanta, getPlanta, getPlantaById, postPlanta, putPlanta } from '../controllers/planta.controller.js';
// import p from '../controllers/planta.controller.js';
// const { deletePlanta, getPlanta, getPlantaById, postPlanta, putPlanta } = p;

import { createNewProcedencia, deleteProcedenciaById, getProcedencia, getProcedenciaById, updateProcedenciaById } from '../controllers/procedencia.controller.js';
// import np from '../controllers/procedencia.controller.js';
// const { createNewProcedencia, deleteProcedenciaById, getProcedencia, getProcedenciaById, updateProcedenciaById } = np;

import { createNewSelectNewServInfo, deleteSelectNewServInfoById, getSelectNewServInfo, getSelectNewServInfoById, updateSelectNewServInfoById } from '../controllers/SelectNewServInfo.controller.js';
// import n from '../controllers/SelectNewServInfo.controller.js';
// const { createNewSelectNewServInfo, deleteSelectNewServInfoById, getSelectNewServInfo, getSelectNewServInfoById, updateSelectNewServInfoById } = n;


import { createselectNewTechSpec, deleteselectNewTechSpecById, getselectNewTechSpec, getselectNewTechSpecById, updateselectNewTechSpecById } from '../controllers/SelectNewTechSpec.controller.js';
// import snts from '../controllers/SelectNewTechSpec.controller.js';
// const { createselectNewTechSpec, deleteselectNewTechSpecById, getselectNewTechSpec, getselectNewTechSpecById, updateselectNewTechSpecById } = snts;


import { createServicesInformation, deleteServicesInformationById, getServicesInformation, getServicesInformationById, updateServicesInformationById } from '../controllers/ServicesInformation.controller.js';
// import si from '../controllers/ServicesInformation.controller.js';
// const { createServicesInformation, deleteServicesInformationById, getServicesInformation, getServicesInformationById, updateServicesInformationById } = si;

import { createNewSubArea, deleteSubAreaById, getSubArea, getSubAreaById, updateSubAreaById } from '../controllers/subAreas.controller.js';
// import s from '../controllers/subAreas.controller.js';
// const { createNewSubArea, deleteSubAreaById, getSubArea, getSubAreaById, updateSubAreaById } = s;


import { login, register } from '../controllers/auth.controller.js'

import { createNewTechnicalSpec, deleteTechnicalSpecById, getTechnicalSpec, getTechnicalSpecById, updateTechnicalSpecById } from '../controllers/TechnicalSpec.controller.js';
import { createEquipos } from '../controllers/insertAll.controller.js';
import { createNewFinancialInformation, deleteFinancialInformationById, getFinancialInformation, getFinancialInformationById, updateFinancialInformationById } from '../controllers/financialInformation.controller.js';
import { createNewOptionalTechInfo, deleteOptionalTechInfoById, getOptionalTechInfo, getOptionalTechInfoById, updateOptionalTechInfoById } from '../controllers/optionalTechInfo.controller.js';
// import nts from '../controllers/TechnicalSpec.controller.js';
// const { createNewTechnicalSpec, deleteTechnicalSpecById, getTechnicalSpec, getTechnicalSpecById, updateTechnicalSpecById } = nts;


// import { createNewTechnicalSpecValues, deleteTechnicalSpecValuesById, getTechnicalSpecValues, getTechnicalSpecValuesById, updateTechnicalSpecValuesById } from '../controllers/TechnicalSpecValues.controller.js';
// import { createNewTechSpecSValue, deleteTechSpecSValueById, getTechSpecSValue, getTechSpecSValueById, updateTechSpecSValueById } from '../controllers/TechSpecSValue.controller.js';



// Inicializar
const router = Router();

// Rutas BU ---- Las consultas hechas en Controllers
router.get('/api/bu',          getBU); 
router.get('/api/bu/:id',      getBuByID); 
router.post('/api/bu',         postBU); 
router.put('/api/bu/:id',      putBU); 
router.delete('/api/bu/:id',   deleteBU); 

// ================   Router Countries  ========================

router.get('/api/countries',         getCountries ); 
router.get('/api/countries/:id',     getCountrieById ); //Optener por id
router.post('/api/countries',        postCountrie ); //Insertar
router.put('/api/countries/:id',     putCountrie ); //Actualizar
router.delete('/api/countries/:id',  deleteCountrie ); 

// ================   Router Plantas  ========================

router.get('/api/planta',         getPlanta ); 
router.get('/api/planta/:id',     getPlantaById ); //Optener por id
router.post('/api/planta',        postPlanta ); //Insertar
router.put('/api/planta/:id',     putPlanta ); //Actualizar
router.delete('/api/planta/:id',  deletePlanta ); 

// ================   Router Area   =================================

router.get('/api/area',         getAreas ); 
router.get('/api/area/:id',     getAreaById ); //Optener por id
router.post('/api/area',        postArea ); //Insertar
router.put('/api/area/:id',     putArea ); //Actualizar
router.delete('/api/area/:id',  deleteArea ); 

// ================   Router Auth   =================================

router.post('/api/login',         login ); 
router.post('/api/register',     register ); 

// ==============   Router SubArea   =================================

router.get('/api/subArea',          getSubArea ); 
router.get('/api/subArea/:id',      getSubAreaById ); //Optener por id
router.post('/api/subArea',         createNewSubArea ); //Insertar
router.put('/api/subArea/:id',      updateSubAreaById ); //Actualizar
router.delete('/api/subArea/:id',   deleteSubAreaById ); 

// ================   Procedencia  ====================

router.get('/api/procedencia',          getProcedencia); 
router.get('/api/procedencia/:id',      getProcedenciaById ); //Optener por id
router.post('/api/procedencia',         createNewProcedencia ); //Insertar
router.put('/api/procedencia/:id',      updateProcedenciaById ); //Actualizar
router.delete('/api/procedencia/:id',   deleteProcedenciaById ); 

// ================   Line  ====================

router.get('/api/line',         getLine ); 
router.get('/api/line/:id',     getLineById ); //Optener por id
router.post('/api/line',        createNewLine ); //Insertar
router.put('/api/line/:id',     updateLineById ); //Actualizar
router.delete('/api/line/:id',  deleteLineById ); 

// ================   LineType  ====================

router.get('/api/lineType',         getLineType); 
router.get('/api/lineType/:id',     getLineTypeById ); //Optener por id
router.post('/api/lineType',        createNewLineType ); //Insertar
router.put('/api/lineType/:id',     updateLineTypeById ); //Actualizar
router.delete('/api/lineType/:id',  deleteLineTypeById ); 

// ================   Equipment  ====================

router.get('/api/equipment',        getEquipment ); 
router.get('/api/equipment/:id',    getEquipmentById ); //Optener por id
router.post('/api/equipment',       createNewEquipment ); //Insertar
router.put('/api/equipment/:id',    updateEquipmentById ); //Actualizar
router.delete('/api/equipment/:id', deleteEquipmentById ); 

router.get('/api/AllequipmentRelation',        getAllEquipmentRelations ); 


// ================   servicesInformation  ====================

router.get('/api/servicesInformation',          getServicesInformation); 
router.get('/api/servicesInformation/:id',      getServicesInformationById ); //Optener por id
router.post('/api/servicesInformation',         createServicesInformation ); //Insertar
router.put('/api/servicesInformation/:id',      updateServicesInformationById ); //Actualizar
router.delete('/api/servicesInformation/:id',   deleteServicesInformationById ); 

// ================   SelectNewServicesInformation  ====================

router.get('/api/selectNewServInfo',         getSelectNewServInfo); 
router.get('/api/selectNewServInfo/:id',     getSelectNewServInfoById ); //Optener por id
router.post('/api/selectNewServInfo',        createNewSelectNewServInfo ); //Insertar
router.put('/api/selectNewServInfo/:id',     updateSelectNewServInfoById ); //Actualizar
router.delete('/api/selectNewServInfo/:id',  deleteSelectNewServInfoById ); 

// ================   NewServicesInformation  ====================

router.get('/api/newServInfo',          getNewServInfo); 
router.get('/api/newServInfo/:id',      getNewServInfoById ); //Optener por id
router.post('/api/newServInfo',         createNewServInfo ); //Insertar
router.put('/api/newServInfo/:id',      updateNewServInfoById ); //Actualizar
router.delete('/api/newServInfo/:id',   deleteNewServInfoById ); 



router.get('/newServInfoByEquipment/:id', getAllNewServiInfoByEquipmentId ); //Optener por Equipment id


// ================   EquipmentTechnical  ====================

router.get('/api/equipmentTechnical',           getEquipmentTechnical ); 
router.get('/api/equipmentTechnical/:id',       getEquipmentTechnicalById ); //Optener por id
router.post('/api/equipmentTechnical',          createNewEquipmentTechnical ); //Insertar
router.put('/api/equipmentTechnical/:id',       updateEquipmentTechnicalById ); //Actualizar
router.delete('/api/equipmentTechnical/:id',    deleteEquipmentTechnicalById ); 

// ================   TechnicalSpecification  ====================

router.get('/api/technicalSpecification',           getTechnicalSpec ); 
router.get('/api/technicalSpecification/:id',       getTechnicalSpecById ); //Optener por id
router.post('/api/technicalSpecification',          createNewTechnicalSpec ); //Insertar
router.put('/api/technicalSpecification/:id',       updateTechnicalSpecById ); //Actualizar
router.delete('/api/technicalSpecification/:id',    deleteTechnicalSpecById ); 



// ================   NewTechInfo  ====================

router.get('/api/NewTechInfo',           getNewTechInfo ); 
router.get('/api/NewTechInfo/:id',       getNewTechInfoById ); //Optener por id
router.post('/api/NewTechInfo',          createNewTechInfo ); //Insertar
router.put('/api/NewTechInfo/:id',       updateNewTechInfoById ); //Actualizar
router.delete('/api/NewTechInfo/:id',    deleteNewTechInfoById ); 


// ================   selectNewTechSpec  ====================

router.get('/api/selectNewTechSpec',           getselectNewTechSpec ); 
router.get('/api/selectNewTechSpec/:id',       getselectNewTechSpecById ); //Optener por id
router.post('/api/selectNewTechSpec',          createselectNewTechSpec ); //Insertar
router.put('/api/selectNewTechSpec/:id',       updateselectNewTechSpecById ); //Actualizar
router.delete('/api/selectNewTechSpec/:id',    deleteselectNewTechSpecById ) 


// =====================        LEER EXCEL         ======================

router.get('/api/readExcel', readExcel );


// =====================        Insert masivo         ======================

router.post('/api/createEquipos',          createEquipos ); //Insertar



// ================   Financial Information  ====================

router.get('/api/financialInformation',           getFinancialInformation ); 
router.get('/api/financialInformation/:id',       getFinancialInformationById ); //Optener por id
router.post('/api/financialInformation',          createNewFinancialInformation ); //Insertar
router.put('/api/financialInformation/:id',       updateFinancialInformationById ); //Actualizar
router.delete('/api/financialInformation/:id',    deleteFinancialInformationById ); 

// ================   Optional TechInfo  ====================

router.get('/api/optionalTechInfo',           getOptionalTechInfo ); 
router.get('/api/optionalTechInfo/:id',       getOptionalTechInfoById ); //Optener por id
router.post('/api/optionalTechInfo',          createNewOptionalTechInfo ); //Insertar
router.put('/api/optionalTechInfo/:id',       updateOptionalTechInfoById ); //Actualizar
router.delete('/api/optionalTechInfo/:id',    deleteOptionalTechInfoById ); 






// // ================   TechSpecSValue  ====================

// router.get('/api/TechSpecSValue',           getTechSpecSValue ); 
// router.get('/api/TechSpecSValue/:id',       getTechSpecSValueById ); //Optener por id
// router.post('/api/TechSpecSValue',          createNewTechSpecSValue ); //Insertar
// router.put('/api/TechSpecSValue/:id',       updateTechSpecSValueById ); //Actualizar
// router.delete('/api/TechSpecSValue/:id',    deleteTechSpecSValueById ); 


// // ================   TechnicalSpecificationValues  ====================

// router.get('/api/technicalSpecificationValues',         getTechnicalSpecValues ); 
// router.get('/api/technicalSpecificationValues/:id',     getTechnicalSpecValuesById ); //Optener por id
// router.post('/api/technicalSpecificationValues',        createNewTechnicalSpecValues ); //Insertar
// router.put('/api/technicalSpecificationValues/:id',     updateTechnicalSpecValuesById ); //Actualizar
// router.delete('/api/technicalSpecificationValues/:id',  deleteTechnicalSpecValuesById ); 







// // ============================   GET ALL TABLES   =================================

// router.get('/getAll', getAll );
// router.get('/gelAll/:id', getAllById );










export default router;


