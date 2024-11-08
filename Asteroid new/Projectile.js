"use strict";
var Asteroid;
(function (Asteroid) {
    class Projectile extends Asteroid.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = 2;
            this.velocity = _velocity.copy();
        }
        draw() {
            Asteroid.crc2.save();
            Asteroid.crc2.translate(this.position.x, this.position.y);
            Asteroid.crc2.strokeRect(-1, -1, -1, -1);
            Asteroid.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.velocity = new Asteroid.Vector(0, 0);
        }
    }
    Asteroid.Projectile = Projectile;
})(Asteroid || (Asteroid = {}));
//# sourceMappingURL=Projectile.js.map