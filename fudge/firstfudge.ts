namespace FirstFudge {
    import ƒ = FudgeCore;

    window.addEventListener("start", start);

    const node: ƒ.Node = new ƒ.Node("Node");
    let globalViewport = ƒ.viewport;
    
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
  

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: ƒ.Mesh = new ƒ.MeshCube("Cube");

        const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera();

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
        

        const viewport: ƒ.Viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;

        ƒ.Loop.start();
        ƒ.Time.game.setScale(1);
    }

    function update(): void {
        const tSpeed: number = 1 / 1;
        const rSpeed: number = 360 / 1;
        const frameTimeInMilliSeconds: number = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        //const degrees: number = 360 / frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]))
            node.mtxlocal.translateZ(-tSpeed * frameTimeInSeconds);
        
        globalViewport.draw();
    }
}