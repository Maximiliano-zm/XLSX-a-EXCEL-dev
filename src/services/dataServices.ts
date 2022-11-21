const XLSX = require("xlsx")

interface Datos {
    ID : string,
    firstName : string,
    fecha : string
}

const ExcelAJSON = ()=>{

const excel = XLSX.readFile("C:\\Users\\KILD\\Desktop\\G\\XLSX-a-JSON\\Prueba.xlsx")
    let NombreHoja = excel.SheetNames;
    // let datos : Datos = XLSX.utils.sheet_to_json(excel.Sheets[NombreHoja[0]]);
        let datos : Datos = XLSX.utils.sheet_to_json(excel.Sheets[NombreHoja[1]]);

        // console.log(datos)
        return datos
}

const DATA = ExcelAJSON()

export default DATA


