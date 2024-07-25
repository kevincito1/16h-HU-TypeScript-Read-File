import { VerificationData } from "./verificationData.js";
import { ConvertData } from './convertData.js';
export class Data {
    uploadData() {
        const fileInput = document.getElementById('data_loaded');
        if (fileInput) {
            fileInput.addEventListener('change', (event) => {
                const target = event.target;
                if (target.files && target.files.length > 0) {
                    const file = target.files[0];
                    const verificationData = new VerificationData();
                    const resultVerification = verificationData.verificationData(file);
                    if (!resultVerification) {
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        var _a;
                        const text = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                        const convertData = new ConvertData();
                        convertData.convertData(text);
                    };
                    reader.readAsText(file);
                }
            });
        }
        else {
            console.error("Archivo no cargado");
        }
    }
}
