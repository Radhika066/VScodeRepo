import * as xlsx from "xlsx";

export class ExcelReader {

    static readexcel(filepath: string, sheetname: string): any {

        const wb = xlsx.readFile(filepath);

        const sh = wb.Sheets[sheetname];

        const data = xlsx.utils.sheet_to_json(sh);

        return data;
    }
}
