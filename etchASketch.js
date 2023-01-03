import { colorPallet } from "./colorPallet.js";

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
        let xAndY=this.canvasSettings();
        

        //set rules for grid
        game.style["grid-template-rows"]="repeat("+this.width+", 20px)";
        game.style["grid-template-columns"]="repeat("+this.height+", 20px)";

        console.log(xAndY);
        console.log(this.width);
        console.log(this.height)

        //calculate number of cells
        let cellCount=this.width*this.height;
        console.log(cellCount);

        //create and add cells to canvas grid
        for(let i=0;i<cellCount;i++){
            let e=document.createElement('div');
            e.onmouseover=function(){currentGame.colorMe(this)}
            game.append(e);
        }

        //store color pallet currently selected
        //setPallet()

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
        this.selectedPallet=this.pallet.getPallet("vibrant");
    }

    //assign a color to the cell onmouseover
    colorMe(self){
        
        console.log(this.selectedPallet[this.randNum(4)]);
        self.style["background-color"]="#"+this.selectedPallet[this.randNum(4)];
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