class etchASketch{
   
    constructor(row,col){
        //create new canvas 
        this.newCanvas(row,col);
    }
    
    

    //clear the canvas and create new 
    newCanvas(rowCount,colCount){
        //store div containing game
        let game=document.getElementById("gameGrid");
        //clear previous game
        this.clearCanvas(game);

        //get form input about sizing
        let xAndY=this.canvasSizing();
        rowCount=Number(xAndY["xInput"]);
        colCount=Number(xAndY["yInput"]);

        //set rules for grid
        game.style["grid-template-rows"]="repeat("+rowCount+", 20px)";
        game.style["grid-template-columns"]="repeat("+colCount+", 20px)";

        console.log(xAndY);
        console.log(rowCount);
        console.log(colCount)

        //calculate number of cells
        let cellCount=rowCount*colCount;
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
    canvasSizing(){
        let gameSettings = document.getElementById("gameSettings").elements;
        let xAndY ={};
        for(let i = 0 ; i < gameSettings.length ; i++){
            let xOrY = gameSettings.item(i);
            xAndY[xOrY.name] = xOrY.value;
        }
        return xAndY;
    }

    //assign a color to the cell onmouseover
    colorMe(self){
        self.style["background-color"]="red";
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