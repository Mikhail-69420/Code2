"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    window.addEventListener("load", start);
    const node = new ƒ.Node("Node");
    let viewport = new ƒ.Viewport();
    //console.log(viewport);
    function start() {
        const canvas = document.querySelector("canvas");
        const mesh = new ƒ.MeshCube("Cube");
        const camera = new ƒ.ComponentCamera();
        const cmpMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        node.addComponent(cmpMaterial);
        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.rotateY(180);
        // camera.mtxPivot.rotate(100);
        // camera.mtxPivot.rotate();
        //camera.mtxPivot.lookAt(new ƒ.Vector3(0, 0, 0));
        const cmpTransform = new ƒ.ComponentTransform();
        node.addComponent(cmpTransform);
        // node.addComponent(new ƒ.ComponentTransform());
        // node.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(2);
        //const viewport: ƒ.Viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        //viewport.draw();
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
        ƒ.Loop.start();
        //ƒ.Time.game.setScale();
    }
    function update() {
        const tSpeed = 1 / 1;
        const rSpeed = 360 / 1;
        const frameTimeInMilliSeconds = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        const degrees = 360 / frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]))
            node.mtxLocal.translateX(-tSpeed * frameTimeInSeconds);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]))
            node.mtxLocal.translateX(tSpeed * frameTimeInSeconds);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.Q]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.E]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation);
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=firstfudge.js.map