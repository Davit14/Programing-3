var matrix = []
var n = 70
var m = 70
function kerparner(qanak, kerpar) {
    var k = 0
    while (k <= qanak) {
        var y = Math.floor(random(0, n))
        var x = Math.floor(random(0, m))
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar;
        }
        k++
    }
}

var side = 10;
var grassArr = [];
var mknikArr = [];
var grassEaterArr = []
var predatorArr = []
var kilerArr = []
function setup() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }
    kerparner(1000, 1)
    kerparner(200, 2)
    kerparner(285, 3)
    kerparner(555, 4)
    kerparner(210, 5)

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)

            } else if (matrix[y][x] == 3) {
                var dav = new Predator(x, y, 3)
                predatorArr.push(dav)

            }
            else if (matrix[y][x] == 4) {
                var kav = new Kiler(x, y, 4)
                kilerArr.push(kav)

            }
            else if (matrix[y][x] == 5) {
                var pav = new Mknik(x, y, 5)
                mknikArr.push(pav)

            }
            else if (matrix[y][x] == 8) {

            }
        }
    }

}

function draw() {

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
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();

    }
    for (var i in predatorArr) {
        predatorArr[i].eat();



    }
    for (var i in kilerArr) {
        kilerArr[i].eat();


    }
    for (var i in mknikArr) {
        mknikArr[i].eat();


    }

}
