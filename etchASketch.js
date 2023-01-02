class etchASketch{
   
    constructor(){
        this.newCanvas(25,25);
    }
    
    clearCanvas(game){
        
            while (game.firstChild) {
                game.removeChild(game.firstChild);
            }
    }


    //clear the canvas and create new 
    newCanvas(rowCount,colCount){
        let game=document.getElementById("gameGrid");
        this.clearCanvas(game);


        let rowCol=50;
        game.style["grid-template-rows"]="repeat("+rowCol+", 20px)";
        game.style["grid-template-columns"]="repeat("+rowCol+", 20px)";

        let cellCount=rowCol*rowCol;

        for(let i=0;i<cellCount;i++){
            let e=document.createElement('div');
            e.onmouseover=function(){colorMe(this)}
            game.append(e);
        }
    }
}





document.onload=init();
var currentGame;
function init(){
    currentGame=new etchASketch();
}