namespace SolarSystem {
    export import ƒ = FudgeCore;

    window.addEventListener("load", start);

    //const Sun: ƒ.Node = new ƒ.Node("Sun");
    //const sun: Body = new Body("Sun", 1 ,"Yellow");
    let sun: Body;
    let viewport: ƒ.Viewport();

    let rotationNode: ƒ.Node;

    function start(): void {
        sun = new Body("Sun", 1, 0,"Yellow");
        const earth: Body = new Body("Earth", 1, 2,"Blue");
        const moon: Body = new Body("Moon", 1, 1, "Grey");
        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode)

        const rotationNode: ƒ.Node = new ƒ.Node("EarthRotation");
        const rotationTransform: ƒ.ComponentTransform = new ƒ.ComponentTransform();
        rotationNode.addComponent(rotationTransform); 

        
        rotationNode.addChild(earth);
        console.log(earth);
        
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera();

        //camera.mtxPivot.translateZ(15);
        //camera.mtxPivot.translateY(15);

        camera.mtxPivot.translateZ(-10);
        camera.mtxPivot.rotateY(100);

        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", earth, camera, canvas);
        viewport.draw();

        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        ƒ.Loop.start();

        /*const mesh: ƒ.Mesh = new ƒ.MeshCube("Cube");
        const cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        node.addComponent(cmpMaterial);
        const cmpTransform: ƒ.ComponentTransform = new ƒ.ComponentTransform();
        node.addComponent(cmpTransform);*/

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

        /*camera.mtxPivot.translateZ(10);
        camera.mtxPivot.rotateY(180);
        node.mtxLocal.translateX(2);*/
 
        // node.addComponent(new ƒ.ComponentTransform());
        // node.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(2);


        //const viewport: ƒ.Viewport = new ƒ.Viewport();
        //viewport.initialize("Viewport", node, camera, canvas);
        //viewport.draw();

        //ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        //ƒ.Loop.start();
        //ƒ.Time.game.setScale();
    }


    function update(): void {

        //rotationNode.mtxLocal.rotateY(10);

        sun.step();

        //(sun.getChild(0).getChild(0) as Body).step();

        //const tSpeed: number = 1 / 1;
        //const rSpeed: number = 360 / 1;
        //const frameTimeInMilliSeconds: number = ƒ.Loop.timeFrameGame;
        //const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        //const degrees: number = 360 / frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees);
        /*if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W]))
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
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);*/

        //const up: ƒ.Vector3 = ƒ.Vector3.Y();
        //viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation, ƒ.Vector3.Y());
        //ƒ.Recycler.store(up);
        
        viewport.draw();
    }
}