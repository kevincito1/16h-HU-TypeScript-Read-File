export class ConvertData {
  convertData(text: string): any[] {
    const lines:string[] = text.split("\n");
    const headers:string[] = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      const obj: any = {};
      const arrayRegisters: any = []; 
      headers.forEach((header, index) => {        
        arrayRegisters.push(obj[header.trim()] =values[index] ? values[index].trim() : '')
      });
      console.log(arrayRegisters);
      return arrayRegisters;
    });
  }
}


