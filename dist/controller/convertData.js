export class ConvertData {
    convertData(text) {
        const lines = text.split("\n");
        const headers = lines[0].split(",");
        return lines.slice(1).map((line) => {
            const values = line.split(",");
            const obj = {};
            const arrayRegisters = [];
            headers.forEach((header, index) => {
                arrayRegisters.push(obj[header.trim()] = values[index] ? values[index].trim() : '');
            });
            console.log(arrayRegisters);
            return arrayRegisters;
        });
    }
}
