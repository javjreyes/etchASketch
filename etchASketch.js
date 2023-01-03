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

        //set rules for grid
        game.style["grid-template-rows"]="repeat("+rowCount+", 20px)";
        game.style["grid-template-columns"]="repeat("+colCount+", 20px)";

        //calculate number of cells
        let cellCount=rowCount*colCount;

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

    colorMe(self){
        self.style["background-color"]="red";
    }

}





document.onload=init();
var currentGame;
function init(){
    currentGame=new etchASketch(25,25);
}