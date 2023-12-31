let random = require("./random");
module.exports = class Bomb {
        constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bursted = false;
        this.cooldown = random(100);
        this.disappearCooldown = 6;
        matrix[y][x] = 6;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x - 1, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y + 1]
        ];
    }
    start() {
        this.cooldown--;
        if (this.bursted) {
            this.disappearCooldown--;
        }
        if (this.cooldown <= 0) {
            this.burst();
        }
        if (this.disappearCooldown <= 0) {
            this.remove();
        }
    }
    remove() {
        for (const d in this.directions) {
            let x = this.directions[d][0];
            let y = this.directions[d][1];
            if (!(x >= 0 && y >= 0 && x < matrix.length && y < matrix.length)) continue;
            matrix[y][x] = 0;
        }
        matrix[this.y][this.x] = 0;
        for (var i in bombArr) {
            if (!(this.x == bombArr[i].x && this.y == bombArr[i].y)) continue;
            bombArr.splice(i, 1);
            break;
        }
    }
    burst() {
        matrix[this.y][this.x] = 6;
        for (const i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (!(x >= 0 && y >= 0 && x < matrix.length && y < matrix.length)) continue;
            matrix[y][x] = 10;
            this.removeObject(x, y)
        }
        this.bursted = true;
    }
    removeObject(x, y) {
        for (const i in grassEaterArr) {
            if (!(grassEaterArr[i].x == x && grassEaterArr[i].y == y)) continue;
            grassEaterArr.splice(i, 1);
        }
        for (const i in grassArr) {
            if (!(grassArr[i].x == x && grassArr[i].y == y)) continue;
            grassArr.splice(i, 1);
        }
        for (const i in predatorArr) {
            if (!(predatorArr[i].x == x && predatorArr[i].y == y)) continue;
            predatorArr.splice(i, 1);
        }
        for (const i in mknikArr) {
            if (!(mknikArr[i].x == x && mknikArr[i].y == y)) continue;
            mknikArr.splice(i, 1);
           
        }
        for (const i in kilerArr) {
            if (!(kilerArr[i].x == x && kilerArr[i].y == y)) continue;
            mknikArr.splice(i, 1);
    }
}}