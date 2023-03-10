
class colorPallet{
    //manually add color pallets contain hex codes
    constructor(){
        this.vibrant=["0044FF","F1D302","0FFF95","FF3C38","E637BF"];
        this.pastels=["DABFFF","907AD6","F9C784","B7FFD8","7FDEFF"];
        this.monoBlue=["CEE5f2","ACCBE1","7C98B3","536B78","4C5F6C"];
        this.monoGreen=["D2FF96","C6FF7A","95F684","78C151","67934D"];
    }

    //accept color pallet name and return array with color names
    getPallet(pallet){
        switch(pallet){
            case "vibrant":
                return this.vibrant;
            case "pastels":
                return this.pastels;
            case "monoBlue":
                return this.monoBlue;
            case "monoGreen":
                return this.monoGreen;
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
        this.colorScheme="linear";
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
            e.onmouseover=function(){currentGame.colorCell(this)}
            e.setAttribute("data-color","0");
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
            case document.getElementById("monoBlue").checked:
                pal="monoBlue";this.colorScheme="linear";break;
            case document.getElementById("pastels").checked:
                pal="pastels";this.colorScheme="random";break;
            case document.getElementById("vibrant").checked:
                pal="vibrant";this.colorScheme="random";break;
            case document.getElementById("monoGreen").checked:
                pal="monoGreen";this.colorScheme="linear";break;
            default:
                console.log("nothingChecked");
        }
        

        this.selectedPallet=this.pallet.getPallet(pal);
    }

    //assign a color to the cell onmouseover
    colorCell(self){
        if(this.colorScheme=="linear"){
            this.colorMe2(self);
        }
        else{
            this.colorMe(self);
        }
    }
    colorMe(self){
        console.log(self);
        let num=this.randNum(5);
        self.style["background-color"]="#"+this.selectedPallet[num];
    }

    colorMe2(self){
        let colorLevel=self.getAttribute("data-color");
        switch (colorLevel){
            case "0":
                self.setAttribute("data-color","1");
                self.style["background-color"]="#"+this.selectedPallet[1]
                break;
            case "1":
                self.setAttribute("data-color","2");
                self.style["background-color"]="#"+this.selectedPallet[2]
                break;
            case "2":
                self.setAttribute("data-color","3");
                self.style["background-color"]="#"+this.selectedPallet[3]
                break;
            case "3":
                self.setAttribute("data-color","4");
                self.style["background-color"]="#"+this.selectedPallet[4]
                break;
            default:
                break;
        }
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

