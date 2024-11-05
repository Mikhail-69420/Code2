"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        constructor(_data) {
            this.path = new Path2D;
            this.absoluteRotation = 0;
            const children = [];
            this.name = _data.name;
            this.color = _data.color;
            this.size = _data.size;
            this.velocity = _data.velocity;
            this.orbitRadius = _data.orbitRadius;
            this.children = children;
        }
        addChild(_child) {
            this.children.push(_child);
        }
        update(_timeslice) {
            const relativeRotation = _timeslice * this.velocity;
            this.absoluteRotation = this.absoluteRotation + relativeRotation;
            SolarSystem.crc2.rotate(this.absoluteRotation * Math.PI / 180);
            SolarSystem.crc2.translate(this.orbitRadius, 0);
            SolarSystem.crc2.fillStyle = this.color;
            // crc2.beginPath();
            this.path.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI * 2);
            // crc2.closePath();
            SolarSystem.crc2.fill(this.path);
            for (const child of this.children) {
                SolarSystem.crc2.save();
                child.update(_timeslice);
                SolarSystem.crc2.restore();
            }
            // console.log(this.absoluteRotation);
        }
        showInfo(_mouseX, _mouseY) {
            const bodyName = document.getElementById("bodyName");
            if (SolarSystem.crc2.isPointInPath(this.path, _mouseX, _mouseY)) {
                bodyName.textContent = this.name;
            }
            for (const child of this.children) {
                if (SolarSystem.crc2.isPointInPath(child.path, _mouseX, _mouseY)) {
                    bodyName.textContent = child.name;
                }
            }
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=body.js.map