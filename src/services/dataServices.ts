const excelToJson = require('convert-excel-to-json');
const sourceFile = {sourceFile: 'ubuntu@ip-172-31-4-27:~//projects//XLSX-a-EXCEL-dev//src//xlsx//Prueba.xlsx'}
const sheet1 = {sheets: ['Hoja1']}
const sheet2 = {sheets: ['Hoja2']}
const sheet3 = {sheets: ['Hoja3']}
const c1 = excelToJson({
    ...sourceFile,
    ...sheet1,
    range : 'A2:C2',
    header:{
        rows: 1
    },
    columnToKey:{
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}'
    }
});
const c2 = excelToJson({
    ...sourceFile,
    ...sheet1,
    range : 'A8:C8',
    header:{
        rows: 7
    },
    columnToKey:{
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}'
    }
});
const c3 = excelToJson({
    ...sourceFile,
    ...sheet2,
    range : 'A2:B2',
    header:{
        rows: 1
    },
    columnToKey:{
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}'
    }
});
const c4 = excelToJson({
    ...sourceFile,
    ...sheet3,
    range : 'A2:B2',
    header:{
        rows: 1
    },
    columnToKey:{
        'A': '{{A1}}',
        'B': '{{B1}}'
    }
});
    const ExceltoJSON = ()=>{
        // console.log(c1,c2,c3,c4)
            const allDataInJSON = {c1,c2,c3}
            console.log(allDataInJSON)
            return allDataInJSON
    }
const DATA = ExceltoJSON()
export default DATA
