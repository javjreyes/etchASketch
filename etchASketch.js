
class colorPallet{
    //manually add color pallets contain hex codes
    constructor(){
        this.vibrant=["0044FF","F1D302","0FFF95","FF3C38","E637BF"];
        this.pastels=["DABFFF","907AD6","F9C784","B7FFD8","7FDEFF"];
        this.monochrom=["CEE5f2","ACCBE1","7C98B3","637081","536B78"];
    }

    //accept color pallet name and return array with color names
    getPallet(pallet){
        switch(pallet){
            case "vibrant":
                return this.vibrant;
            case "pastels":
                return this.pastels;
            case "monochrom":
                return this.monochrom;
            default:
                console.log(pallet+" is not an option.")
                return this.vibrant;
        }
    }
}


class etchASketch{
   
    constructor(){
        //create new canvas 
        this.pallet=new colorPallet();
        this.selectedPallet;
        this.width;
        this.height;
        this.newCanvas();
    }
    
    

    //clear the canvas and create new 
    newCanvas(){
        //store div containing game
        let game=document.getElementById("gameGrid");
        //clear previous game
        this.clearCanvas(game);

        //update game settings
        this.canvasSettings();
        
        //set rules for grid
        game.style["grid-template-rows"]="repeat("+this.width+", 20px)";
        game.style["grid-template-columns"]="repeat("+this.height+", 20px)";

        console.log(this.width);
        console.log(this.height);

        //calculate number of cells
        let cellCount=this.width*this.height;
        console.log(cellCount);

        //create and add cells to canvas grid
        for(let i=0;i<cellCount;i++){
            let e=document.createElement('div');
            e.onmouseover=function(){currentGame.colorMe(this)}
            game.append(e);
        }

        return "successfully created new grid";
    }

    //delete all children of gameGrid
    clearCanvas(game){
        while (game.firstChild) {
            game.removeChild(game.firstChild);
        }
    }

    //collect sizing input from form
    canvasSettings(){
        let gameSettings = document.getElementById("gameSettings").elements;
        let settings ={};
        for(let i = 0 ; i < gameSettings.length ; i++){
            let property = gameSettings.item(i);
            settings[property.name] = property.value;
        }

        this.width=Number(settings["xInput"]);
        this.height=Number(settings["yInput"]);


        //set pallet for use
        let pal;
        switch (true){
            case document.getElementById("monoChrom").checked:
                pal="monochrom";break;
            case document.getElementById("pastels").checked:
                pal="pastels";break;
            case document.getElementById("vibrant").checked:
                pal="vibrant";break;
            default:
                console.log("nothingChecked");
        }
        

        this.selectedPallet=this.pallet.getPallet(pal);
    }

    //assign a color to the cell onmouseover
    colorMe(self){
        let num=this.randNum(5);
        self.style["background-color"]="#"+this.selectedPallet[num];
    }

    randNum(numOfOptions){
        let num= Math.floor(Math.random()*numOfOptions);
        return num;
    }

    //reset the canvas size to default
    reset(){
        document.getElementById("xInput").value=25;
        document.getElementById("yInput").value=25;
        this.newCanvas();
    }
}





//ensure document is loaded
window.onload=newGame();

//declare var to store game
var currentGame;
function newGame(){
    //create new game
    currentGame=new etchASketch();
}

function newGameButton(){
    currentGame.newCanvas();
}
function resetGameButton(){
    currentGame.reset();
}

