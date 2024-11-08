"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        constructor(_name, _size, _color) {
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.cmpMesh = new SolarSystem.ƒ.ComponentMesh(Body.mesh);
            this.cmpMaterial = new SolarSystem.ƒ.ComponentMaterial(Body.material);
            this.cmpTransform = new SolarSystem.ƒ.ComponentTransform();
        }
        setTransforms(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 100);
            this.vRotation = _vRotation / 1000 * (Math.PI / 100);
            this.distance = _distance;
        }
    }
    Body.mesh = new SolarSystem.ƒ.MeshSphere("Body");
    Body.material = new SolarSystem.ƒ.Material("Body", SolarSystem.ƒ.ShaderLit);
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=body.js.map