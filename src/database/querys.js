
export const queries = {

    // ====================   BU   =================================

    getAllProductsBU: 'SELECT * FROM BU',
    AddNewBU: "INSERT INTO BU (Name) VALUES (@Name)",
    getBu_ById: "SELECT *FROM BU WHERE Id_BU = @Id",
    detele_BU: 'DELETE FROM [ProjectGEAD].[dbo].[BU] WHERE Id_BU = @Id',
    updateBuByID: "UPDATE BU SET Name = @Name WHERE Id_BU = @id",

    // ======================   Countries   ========================

    getAllCountries: 'SELECT * FROM Countries',
    AddNewCountrie: "INSERT INTO Countries (Name, Id_BU) VALUES (@Name, @id_Bu)",
    getCountrie_ById: "SELECT *FROM Countries WHERE Id_Countries = @Id",
    detele_Countrie: 'DELETE FROM [ProjectGEAD].[dbo].[Countries] WHERE Id_Countries = @Id',
    updateCountrieByID: "UPDATE Countries SET Name = @Name, Id_BU = @id_Bu WHERE Id_Countries = @Id",

    // ======================    Area   ============================

    getAllArea: 'SELECT * FROM Areas',
    AddNewArea: "INSERT INTO Areas (Name, Id_Operations) VALUES (@Name, @id_Op)",
    getArea_ById: "SELECT *FROM Areas WHERE Id_Areas = @Id",
    detele_Area: 'DELETE FROM [ProjectGEAD].[dbo].[Areas] WHERE Id_Areas = @Id',
    updateAreaByID: "UPDATE Areas SET Name = @Name, Id_Operations = @id_Op WHERE Id_Areas = @Id",

    // ======================    SubArea   ============================

    getAllSubArea: 'SELECT * FROM SubAreas',
    AddNewSubArea: "INSERT INTO SubAreas (Name, Id_Areas) VALUES (@Name, @id_Area)",
    getSubArea_ById: "SELECT *FROM SubAreas WHERE Id_SubAreas = @Id",
    detele_SubArea: 'DELETE FROM [ProjectGEAD].[dbo].[SubAreas] WHERE Id_SubAreas = @Id',
    updateSubAreaByID: "UPDATE SubAreas SET Name = @Name, Id_Areas = @id_Area WHERE Id_SubAreas = @Id",

    // =====================   Planta    ===========================

    getAllPlanta: 'SELECT * FROM Operations',
    AddNewPlanta: "INSERT INTO Operations (Name, Id_Countries) VALUES (@Name, @id_Countries)",
    getPlanta_ById: "SELECT *FROM Operations WHERE Id_Operations = @Id",
    detele_Planta: 'DELETE FROM [ProjectGEAD].[dbo].[Operations] WHERE Id_Operations = @Id',
    updatePlantaByID: "UPDATE Operations SET Name = @Name, Id_Countries = @id_Countries WHERE Id_Operations = @Id",


    // ======================    Equipment   ============================

    getAllEquipment: 'SELECT * FROM Equipment',
    AddNewEquipment: "INSERT INTO Equipment (Name, code, Id_Procedencia, Estado) VALUES (@Name, @code, @id_Procedencia, @Estado)",
    getEquipment_ById: "SELECT *FROM Equipment WHERE Id_Equipment = @Id",
    detele_Equipment: 'DELETE FROM [ProjectGEAD].[dbo].[Equipment] WHERE Id_Equipment = @Id',
    updateEquipmentByID: "UPDATE Equipment SET Name = @Name, code = @code, Id_Procedencia = @id_Procedencia, Estado = @Estado WHERE Id_Equipment = @Id",

    // ======================    EquipmentTechnical   ============================

    getAllEquipmentTechnicals: 'SELECT * FROM EquipmentsTechnicals',
    AddNewEquipmentTechnicals: "INSERT INTO EquipmentsTechnicals (Id_Equipment, Id_TechnicalSpecification, Value) VALUES (@id_Equipment, @id_TechnicalSpec, @value)",
    getEquipmentTechnicals_ById: "SELECT *FROM EquipmentsTechnicals WHERE Id_EquipmentsTechnicals = @Id",
    detele_EquipmentTechnicals: 'DELETE FROM [ProjectGEAD].[dbo].[EquipmentsTechnicals] WHERE Id_EquipmentsTechnicals = @Id',
    updateEquipmentTechnicalsByID: "UPDATE EquipmentsTechnicals SET Id_Equipment = @id_Equipment, Id_TechnicalSpecification = @id_TechnicalSpec, Value = @value WHERE Id_EquipmentsTechnicals = @Id",

    // ======================    TechnicalSpecification   ============================

    getAllTechnicalSpec: 'SELECT * FROM TechnicalSpecification',
    AddNewTechnicalSpec: "INSERT INTO TechnicalSpecification (Name) VALUES (@Name)",
    getTechnicalSpec_ById: "SELECT *FROM TechnicalSpecification WHERE Id_EquipmentsTechnicals = @Id",
    detele_TechnicalSpec: 'DELETE FROM [ProjectGEAD].[dbo].[TechnicalSpecification] WHERE Id_TechnicalSpecification = @Id',
    updateTechnicalSpecByID: "UPDATE TechnicalSpecification SET Name = @Name WHERE Id_TechnicalSpecification = @Id",

    // ======================    TechSpecSValue   ============================

    getAllTechSpecSValue: 'SELECT * FROM TechSespecSValue',
    AddNewTechSpecSValue: "INSERT INTO TechSespecSValue (Id_TechnicalSpecification, Id_TechnicalSpecificationValues, Value) VALUES (@Id_TechnicalSpecification, @Id_TechnicalSpecValues, @value)",
    getTechSpecSValue_ById: "SELECT *FROM TechSespecSValue WHERE Id_TSSV = @Id",
    detele_TechSpecSValue: 'DELETE FROM [ProjectGEAD].[dbo].[TechSespecSValue] WHERE Id_TSSV = @Id',
    updateTechSpecSValueByID: "UPDATE TechSespecSValue SET Id_TechnicalSpecification = @id_Equipment, Id_TechnicalSpecificationValues = @id_TechnicalSpec, Value = @value WHERE Id_TSSV = @Id",

    // ======================    technicalSpecificationValues   ============================

    getAllTechnicalSpecValu: 'SELECT * FROM TechnicalSpecificationValues',
    AddNewTechnicalSpecValu: "INSERT INTO TechnicalSpecificationValues (Id_TechnicalSpecification, Value) VALUES (@id_TechnicalSpecification, @value)",
    getTechnicalSpec_ByIdValu: "SELECT *FROM TechnicalSpecificationValues WHERE Id_TechnicalSpecificationValues = @Id",
    detele_TechnicalSpecValu: 'DELETE FROM [ProjectGEAD].[dbo].[TechnicalSpecificationValues] WHERE Id_TechnicalSpecificationValues = @Id',
    updateTechnicalSpecByIDValu: "UPDATE TechnicalSpecificationValues SET Id_TechnicalSpecification = @id_TechnicalSpecification, Value = @value WHERE Id_TechnicalSpecificationValues = @Id",

    // ======================    Line   ============================

    getAllLine: 'SELECT * FROM Line',
    AddNewLine: "INSERT INTO Line (Name, number, Id_LineTypes) VALUES (@Name, @number, @id_LineTypes)",
    getLine_ById: "SELECT *FROM Line WHERE Id_Line = @Id",
    detele_Line: 'DELETE FROM [ProjectGEAD].[dbo].[Line] WHERE Id_Line = @Id',
    updateLineByID: "UPDATE Line SET Name = @Name, number = @number, Id_LineTypes = @id_LineTypes WHERE Id_Line = @Id",

    // ====================   LineType   =================================

    getAllLineType: 'SELECT * FROM LineTypes',
    AddNewLineType: "INSERT INTO LineTypes (Name) VALUES (@Name)",
    getLineType_ById: "SELECT *FROM LineTypes WHERE Id_LineTypes = @Id",
    detele_LineType: 'DELETE FROM [ProjectGEAD].[dbo].[LineTypes] WHERE Id_LineTypes = @Id',
    updateLineTypeByID: "UPDATE LineTypes SET Name = @Name WHERE Id_LineTypes = @id",

    // ======================    Procedencia   ============================

    getAllProcedencia: 'SELECT * FROM Procedencia',
    AddNewProcedencia: "INSERT INTO Procedencia (Id_Line, Id_Areas) VALUES (@id_Line, @id_Areas)",
    getProcedencia_ById: "SELECT *FROM Procedencia WHERE Id_Procedencia = @Id",
    detele_Procedencia: 'DELETE FROM [ProjectGEAD].[dbo].[Procedencia] WHERE Id_Procedencia = @Id',
    updateProcedenciaByID: "UPDATE Procedencia SET Id_Line = @id_Line, Id_Areas = @id_Areas WHERE Id_Procedencia = @Id",

    // ======================    ServicesInformacion   ============================

    getAllServicesInformacion: 'SELECT * FROM ServicesInformation',
    AddNewServicesInformacion: "INSERT INTO ServicesInformation (DateOfInstallation, DateOfDesintallation, DesuseReason, DesinstallationReason, ProcurementOrder, Id_Equipment) VALUES (@DateOfInstallation, @DateOfDesintallation, @DesuseReason, @DesinstallationReason, @ProcurementOrder, @Id_Equipment)",
    getServicesInformacion_ById: "SELECT *FROM ServicesInformation WHERE Id_ServicesInformation = @Id",
    detele_ServicesInformacion: 'DELETE FROM [ProjectGEAD].[dbo].[ServicesInformation] WHERE Id_ServicesInformation = @Id',
    updateServicesInformacionByID: "UPDATE ServicesInformation SET DateOfInstallation = @DateOfInstallation, DateOfDesintallation = @DateOfDesintallation, DesuseReason = @DesuseReason, DesinstallationReason = @DesinstallationReason, ProcurementOrder = @ProcurementOrder, Id_Equipment = @Id_Equipment WHERE Id_ServicesInformation = @Id",
    
    // ======================    SelectNewServicesInformacion   ============================

    getAllSelectNewServInfo: 'SELECT * FROM SelectNewServicesInfo',
    AddNewSelectNewServInfo: "INSERT INTO SelectNewServicesInfo ( Id_ServicesInformation, Id_NewServInfo ) VALUES (@Id_ServicesInformation, @Id_NewServInfo)",
    getSelectNewServInfo_ById: "SELECT *FROM SelectNewServicesInfo WHERE Id_SelectNewServInfo = @Id",
    // ======================   Get All New ServicesInformacion   ============================
    getAllNewServicesInfo_ByEquipmentId: "Select SI.Id_Equipment, SI.Id_ServicesInformation as Id_ServicesInfo, NSF.Id_NewServInfo, NSF.Id_ServicesInformation, NSF.Name, NSF.Value From NewServicesInformation NSF full join SelectNewServicesInfo SNSF on NSF.Id_ServicesInformation = SNSF.Id_ServicesInformation full join ServicesInformation SI on SNSF.Id_ServicesInformation = SI.Id_ServicesInformation full join Equipment on SI.Id_Equipment = Equipment.Id_Equipment Where Equipment.Id_Equipment = @Id group by SI.Id_Equipment, SI.Id_ServicesInformation, NSF.Id_NewServInfo, NSF.Id_ServicesInformation, NSF.Name, NSF.Value order by NSF.Id_NewServInfo",
    
    detele_SelectNewServInfo: 'DELETE FROM [ProjectGEAD].[dbo].[SelectNewServicesInfo] WHERE Id_SelectNewServInfo = @Id',
    updateSelectNewServInfoByID: "UPDATE SelectNewServicesInfo SET Id_ServicesInformation = @Id_ServicesInformation, Id_NewServInfo = @Id_NewServInfo WHERE Id_SelectNewServInfo = @Id",

    // ======================    New Services Informacion   ============================

    getNewServInfo: 'SELECT * FROM NewServicesInformation',
    AddNewServInfo: "INSERT INTO NewServicesInformation (Id_ServicesInformation, Name, Value) VALUES ( @Id_ServicesInformation, @Name, @Value )",
    getNewServInfo_ById: "SELECT *FROM NewServicesInformation WHERE Id_NewServInfo = @Id",
    detele_NewServInfo: 'DELETE FROM [ProjectGEAD].[dbo].[NewServicesInformation] WHERE Id_NewServInfo = @Id',
    updateNewServInfoByID: "UPDATE NewServicesInformation SET Id_ServicesInformation = @Id_ServicesInformation, Name = @Name, Value = @Value WHERE Id_NewServInfo = @Id",

    // ======================== GET ALL TABLEs   ===========================================

    getAllTabless: 'SELECT Equipment.Id_Equipment, Equipment.Name, code, P.Id_Procedencia , P.Id_Line, P.Id_Areas as [Procedencia_Area], Areas.Name as Area, Op.Name as Operation, SubAreas.Name as SubA, Countries.Name as Country, BU.Name as BU, Line.number as [Line_Number], LT.Id_LineTypes as Id_LineType, LT.Name as LineType, SI.Id_ServicesInformation, SI.DateOfDesintallation, SI.DateOfInstallation, SI.DesinstallationReason, SI.DesuseReason From Equipment join Procedencia P on Equipment.Id_Procedencia = P.Id_Procedencia join Areas on P.Id_Areas = Areas.Id_Areas join Operations Op on Areas.Id_Operations = Op.Id_Operations join SubAreas on Areas.Id_Areas = SubAreas.Id_Areas join Countries on Op.Id_Countries = Countries.Id_Countries join BU on Countries.Id_BU = BU.Id_BU left join Line on P.Id_Line = Line.Id_Line left join LineTypes LT on Line.Id_LineTypes = LT.Id_LineTypes left join ServicesInformation SI on Equipment.Id_Equipment = SI.Id_Equipment group by	Equipment.Id_Equipment, Equipment.Name, code, P.Id_Procedencia, P.Id_Line, P.Id_Areas, Areas.Name, Op.Name, SubAreas.Name, Countries.Name, BU.Name, Line.number, LT.Id_LineTypes, LT.Name, SI.Id_Equipment, SI.Id_ServicesInformation, SI.DateOfDesintallation, SI.DateOfInstallation, SI.DesinstallationReason, SI.DesuseReason order by Equipment.Id_Equipment',

    getAllTables: 'SELECT * FROM Equipment left outer join Procedencia on Equipment.Id_Procedencia = Procedencia.Id_Procedencia left outer join Areas on Procedencia.Id_Areas = Areas.Id_Areas left outer join SubAreas on Areas.Id_Areas = SubAreas.Id_Areas left outer join Operations on Areas.Id_Operations = Operations.Id_Operations left outer join Countries on Operations.Id_Countries = Countries.Id_Countries left outer join BU on Countries.Id_BU = BU.Id_BU left outer join Line on Procedencia.Id_Line = Line.Id_Line left outer join LineTypes on Line.Id_LineTypes = LineTypes.Id_LineTypes left outer join EquipmentsTechnicals on Equipment.Id_Equipment = EquipmentsTechnicals.Id_Equipment left outer join TechnicalSpecification on EquipmentsTechnicals.Id_TechnicalSpecification = TechnicalSpecification.Id_TechnicalSpecification left outer join TechSespecSValue on TechnicalSpecification.Id_TechnicalSpecification = TechSespecSValue.Id_TechnicalSpecification left outer join TechnicalSpecificationValues on TechSespecSValue.Id_TechnicalSpecificationValues = TechnicalSpecificationValues.Id_TechnicalSpecificationValues',

    

    
}

