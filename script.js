var g = 60;
var side = 14;
const soket = io()
var isWinter = false



function setup() {
    createCanvas( g * side, g  * side);
    background('#acacac');
}
function ran (matrix){

    
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                if( isWinter ) {
                    fill('white')
                }
             
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('#723E0D')
            }
            else if (matrix[y][x] == 6) {
                fill('black')
            }
            else if (matrix[y][x] == 10) {
                fill('black')
            }
           
            rect(x * side, y * side, side,side, side);
        }
    }
}


soket.on("update matrix", ran)

function showWinter(){
    isWinter = true
}
function onWinter(){
    isWinter = false
}

let winter = document.getElementById('winter')
winter.addEventListener('click', showWinter)    

let summer = document.getElementById('summer')
summer.addEventListener('click', onWinter) 

