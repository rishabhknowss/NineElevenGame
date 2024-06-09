let board;
let boardWidth = 1000;
let boardHeight =690;
let context;


let aeroplaneWidth = 100;
let aeroplaneHeight = 100;
let aeroplaneX = boardWidth/8;
let aeroplaneY= boardHeight/2;
let aeroplaneImg;

let aeroplane = {
    x : aeroplaneX,
    y : aeroplaneY,
    height : aeroplaneHeight,
    width : aeroplaneWidth
}
window.onload = function(){
    board = document.getElementById("board")
    board.height=boardHeight
    board.width=boardWidth
    context = board.getContext("2d")

   

    aeroplaneImg = new Image();
    aeroplaneImg.src="./aeroplane.png";
    aeroplaneImg.onload = function(){
        context.drawImage(aeroplaneImg ,aeroplane.x , aeroplane.y , aeroplane.width , aeroplane.height )
    }
}