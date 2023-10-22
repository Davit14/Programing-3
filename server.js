let random = require("./random");
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {

   res.redirect("index.html");

});

server.listen(3000, function () {

   console.log("App is running on port 3000");

});


let Grass = require('./class');
let GrassEater = require('./GrassEater');
let Kiler = require('./kiler');
let Mknik = require('./mknik');
let Predator = require("./predator");
let bomb = require("./bomb");

 matrix = []
 var n = 50
 var m = 50



 for (let i = 0; i < n; i++) {
   matrix.push([])
   for (let j = 0; j < m; j++) {
      matrix[i].push(0)
   }
}

function kerparner(qanak, kerpar) {
   var k = 0
   while (k <= qanak) {
      var y = Math.floor(random( n))
      var x = Math.floor(random( m))
      if (matrix[y][x] == 0) {
         matrix[y][x] = kerpar;
      }
      k++
   }
}
 grassArr = [];
 mknikArr = [];
 grassEaterArr = []
 predatorArr = []
 kilerArr = []
 bombArr = []

function setupGame() {
   kerparner(800, 1)
   kerparner(200, 2)
   kerparner(270, 3)
   kerparner(270, 4)
   kerparner(180, 5)
   kerparner(35, 6)

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
         else if (matrix[y][x] == 6) {
            var tav = new bomb(x, y, 6)
            bombArr.push(tav)

         }
         


         
      }
   }
}


function playGame () {
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
  for (var i in bombArr) {
   bombArr[i].start();


}
  io.emit('update matrix', matrix)
}

io.on('connection', function (socket){
socket.emit('update matrix', matrix)
setupGame()
startPlaying()
})


let intervalID;

function startPlaying(){
   clearInterval(intervalID)
   intervalID = setInterval(() => {
      playGame()
   }, 650);
}
