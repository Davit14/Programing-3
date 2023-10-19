var side = 10;
const soket = io()


function setup() {
    createCanvas( 20 * side, 20  * side);
    background('#acacac');
}
function ran (matrix){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
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
                fill('black')
            }
            rect(x * side, y * side, side,side, side);
        }
    }
}


soket.on("update matrix", ran)