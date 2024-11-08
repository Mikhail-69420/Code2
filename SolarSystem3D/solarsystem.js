"use strict";
var SolarSystem;
(function (SolarSystem) {
    SolarSystem.ƒ = FudgeCore;
    window.addEventListener("load", start);
    const Sun = new SolarSystem.ƒ.Node("Sun");
    let viewport;
    ();
    //console.log(viewport);
    function start() {
        const canvas = document.querySelector("canvas");
        const camera = new SolarSystem.ƒ.ComponentCamera();
        const mesh = new SolarSystem.ƒ.MeshCube("Cube");
        const cmpMesh = new SolarSystem.ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new SolarSystem.ƒ.Material("Material", SolarSystem.ƒ.ShaderLit);
        const cmpMaterial = new SolarSystem.ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        node.addComponent(cmpMaterial);
        const cmpTransform = new SolarSystem.ƒ.ComponentTransform();
        node.addComponent(cmpTransform);
        /*const meshGround: ƒ.Mesh = new ƒ.MeshQuad("Ground");
        const cmpMeshGround: ƒ.ComponentMesh = new ƒ.ComponentMesh(meshGround);
        cmpMeshGround.mtxPivot.scaleX(-90);
        cmpMeshGround.mtxPivot.scaleY(50);
        cmpMeshGround.mtxPivot.scaleX(50);
        nodeGround.addComponent(cmpMeshGround);
        const mtrGround: ƒ.Material = new ƒ.Material("Ground", ƒ.ShaderLitTextured);
        const cmpMtrGround: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(mtrGround);
        nodeGround.*/
        //const lightcolor: ƒ.Color = new ƒ.Color(1, 0, 0 , 1)
        //const light: ƒ.LightDirectional = new ƒ.LightDirectional(lightcolor);
        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.rotateY(180);
        node.mtxLocal.translateX(2);
        // node.addComponent(new ƒ.ComponentTransform());
        // node.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(2);
        //const viewport: ƒ.Viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        //viewport.draw();
        SolarSystem.ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
        SolarSystem.ƒ.Loop.start();
        //ƒ.Time.game.setScale();
    }
    function update() {
        const tSpeed = 1 / 1;
        const rSpeed = 360 / 1;
        const frameTimeInMilliSeconds = SolarSystem.ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        //const degrees: number = 360 / frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.A]))
            node.mtxLocal.translateX(-tSpeed * frameTimeInSeconds);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.D]))
            node.mtxLocal.translateX(tSpeed * frameTimeInSeconds);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.Q]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (SolarSystem.ƒ.Keyboard.isPressedOne([SolarSystem.ƒ.KEYBOARD_CODE.E]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);
        const up = SolarSystem.ƒ.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation, SolarSystem.ƒ.Vector3.Y());
        SolarSystem.ƒ.Recycler.store(up);
        viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=solarsystem.js.map