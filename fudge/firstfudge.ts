namespace FirstFudge {
    import ƒ = FudgeCore;

    window.addEventListener("load", start);

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, moveCube);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: ƒ.Mesh = new ƒ.MeshCube("Cube");

        const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera();

        const node: ƒ.Node = new ƒ.Node("Node");

        const cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        const material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        node.addComponent(cmpMaterial);

        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);

        const cmpTransform: ƒ.ComponentTransform = new ƒ.ComponentTransform();
        node.addComponent(cmpTransform);
        // node.addComponent(new ƒ.ComponentTransform());
        // node.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(2);
        node.mtxLocal.translateX(2);

        console.log(node);

        const viewport: ƒ.Viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;

        ƒ.Loop.start();
        ƒ.Time.game.setScale(1);
    }

    function moveCube(): void {
        const frameTimeInMilliSeconds: number = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        const degrees: number = 360 / frameTimeInSeconds;
        const node: ƒ.Node = new ƒ.Node("Node");
        node.mtxLocal.rotateY(degrees);
        globalViewport.draw();
    }
}