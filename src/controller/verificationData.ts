export class VerificationData {
    verificationData(file: any){
        const verificationFileType = file.name.includes('.csv')
        if(!verificationFileType){
            alert('El archivo debe ser .csv')
            return false
        }
            return true
       }
}