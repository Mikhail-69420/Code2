"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    window.addEventListener("load", start);
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, moveCube);
    function start() {
        const canvas = document.querySelector("canvas");
        const mesh = new ƒ.MeshCube("Cube");
        const camera = new ƒ.ComponentCamera();
        const node = new ƒ.Node("Node");
        const cmpMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const cmpTransform = new ƒ.ComponentTransform();
        node.addComponent(cmpTransform);
        // node.addComponent(new ƒ.ComponentTransform());
        // node.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(2);
        console.log(node);
        const viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        ƒ.Loop.start();
        ƒ.Time.game.setScale(1);
    }
    function moveCube() {
        const frameTimeInMilliSeconds = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        const degrees = 360 / frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=firstfudge.js.map