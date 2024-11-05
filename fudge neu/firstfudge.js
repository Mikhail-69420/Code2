"use strict";
var Firstfudge;
(function (Firstfudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", load);
    const node = new f.Node("Node");
    let globalViewport;
    f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, move);
    function load() {
        const canvas = document.querySelector("canvas");
        const cube = new f.MeshCube("Cube");
        const material = new f.Material("Texture", f.ShaderFlat);
        const lightcolor = new f.Color(1, 0, 0, 1);
        const light = new f.LightDirectional(lightcolor);
        //const node: f.Node = new f.Node("Node");
        const cmpmaterial = new f.ComponentMaterial(material);
        //cmpmaterial.clrPrimary.set(0, 1, 0, 1);
        node.addComponent(cmpmaterial);
        //or node.addComponent(new f.ComponentMaterial(material))
        node.addComponent(new f.ComponentMesh(cube));
        node.addComponent(new f.ComponentLight(light));
        node.addComponent(new f.ComponentTransform);
        //node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(30, 20, 30));
        //node.getComponent(f.ComponentMesh).mtxPivot.translateX(1);
        node.getComponent(f.ComponentLight).mtxPivot.rotate(new f.Vector3(30, 180, 30));
        //node.getComponent(f.ComponentTransform).mtxLocal.translateX(1);
        node.mtxLocal.translateX(1);
        const bgclr = new f.Color(0, 1, 1, 1);
        const camera = new f.ComponentCamera();
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        console.log(camera);
        camera.clrBackground = bgclr;
        const viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        f.Loop.start();
        f.Time.game.setScale(0.5);
    }
    let pos = 0.2;
    function move() {
        //const frameTimeinMilliseconds: number = f.Loop.timeFrameGame;
        //const frameTimeInSeconds: number = (frameTimeinMilliseconds / 1000);
        //const degrees: number = 360 * frameTimeInSeconds;
        node.mtxLocal.translateX(pos);
        if (node.mtxLocal.translation.x > 2)
            pos = -pos;
        if (node.mtxLocal.translation.x < -2)
            pos = -pos;
        globalViewport.draw();
    }
})(Firstfudge || (Firstfudge = {}));
//# sourceMappingURL=firstfudge.js.map