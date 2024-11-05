"use strict";
var Solarsystem;
(function (Solarsystem) {
    class CelestialBodies {
        constructor(_name, _size, _color, _velocity, _radius, _childrenbody) {
            this.path = new Path2D;
            this.absoluteRotation = 0;
            this.name = _name;
            this.size = _size;
            this.color = _color;
            this.velocity = _velocity;
            this.radius = _radius;
            this.childrenbody = _childrenbody;
        }
        update(_timeslice) {
            let relativeRotation = _timeslice * this.velocity;
            this.absoluteRotation = this.absoluteRotation + relativeRotation;
        }
    }
    Solarsystem.CelestialBodies = CelestialBodies;
})(Solarsystem || (Solarsystem = {}));
//# sourceMappingURL=celestial_bodies.js.map