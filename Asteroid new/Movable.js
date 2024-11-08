"use strict";
var Asteroid;
(function (Asteroid) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Asteroid.Vector(0, 0);
            this.velocity = new Asteroid.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Asteroid.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Asteroid.crc2.canvas.height;
            if (this.position.x > Asteroid.crc2.canvas.width)
                this.position.x -= Asteroid.crc2.canvas.width;
            if (this.position.y > Asteroid.crc2.canvas.height)
                this.position.y -= Asteroid.crc2.canvas.height;
        }
        draw() {
            // console.log("draw?")
        }
    }
    Asteroid.Moveable = Moveable;
})(Asteroid || (Asteroid = {}));
//# sourceMappingURL=Movable.js.map