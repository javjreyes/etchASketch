export class colorPallet{
    constructor(){
        this.vibrant=["0044FF","F1D302","0FFF95","FF3C38","E637BF"];
        this.pastels=["DABFFF","907AD6","F9C784","B7FFD8","7FDEFF"];
        this.monochrom=["CEE5f2","ACCBE1","7C98B3","7C98B3","637081","536B78"];
    }

    getPallet(pallet){
        switch(pallet){
            case "vibrant":
                return this.vibrant;
            case "pastels":
                return this.vibrant;
            case "monochrom":
                return this.monochrom;
            default:
                console.log(pallet+" is not an option.")
                return this.vibrant;
        }
    }
}