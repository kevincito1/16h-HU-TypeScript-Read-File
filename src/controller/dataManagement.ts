import { VerificationData } from "./verificationData.js";
import { ConvertData } from './convertData.js';
export class Data {

   uploadData(){
        const fileInput = document.getElementById('data_loaded') as HTMLInputElement;
        if (fileInput) {
            fileInput.addEventListener('change', (event: Event) => {
                const target = event.target as HTMLInputElement;
                if (target.files && target.files.length > 0) {
                    const file = target.files[0];
                    const verificationData = new VerificationData();
                    const resultVerification = verificationData.verificationData(file);
                    if(!resultVerification) {
                        return
                    }
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const text = e.target?.result;
                        const convertData = new ConvertData();
                        convertData.convertData(text);                     
                    };
                    reader.readAsText(file);    
                }
            });
        } else {
            console.error("Archivo no cargado");
        }
   
   }   
}




