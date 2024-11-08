namespace SolarSystem {
    export class Body extends ƒ.Node{
        private static mesh: ƒ.Mesh = new ƒ.MeshSphere("Body");
        private static material: ƒ.Material = new ƒ.Material("Body", ƒ.ShaderLit);

        //public position: ƒ.Vector3;
        //public name: string;

        private rotationNode: ƒ.Node;

        private size: number;
        private distance: number = 0;
        private vOrbit: number;
        private vRotation: number = 0;
        //private cmpMesh: ƒ.ComponentMesh;
        //private cmpMaterial: ƒ.ComponentMaterial;
        //private cmpTransform: ƒ.ComponentTransform;

        
        public constructor(_name: string, _size: number, _distance: number, _color: string, ) {
            super(_name);
            this.name = _name;
            this.size = _size;

            this.rotationNode = new ƒ.Node(_name + "Rotation Node");
            this.rotationNode.addComponent(new ƒ.ComponentTransform);
            this.rotationNode.addChild(this)

            const tempMat: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);

            //this.cmpMesh = new ƒ.ComponentMesh(Body.mesh);
            //this.cmpMaterial = new ƒ.ComponentMaterial(Body.material);
            //this.cmpTransform = new ƒ.ComponentTransform();
            this.addComponent(new ƒ.ComponentMesh(Body.mesh));
            //this.addComponent(new ƒ.ComponentMaterial(Body.material));
            this.addComponent(tempMat);
            this.addComponent(new ƒ.ComponentTransform());

            this.mtxLocal.translateX(_distance);
        }

        public step(): void {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);

            const c = this.getChild(0);

            if (c) {
                for (const b of c.getChildren()){
                    const b 
                }
            }
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 100);
            this.vRotation = _vRotation / 1000 * (Math.PI / 100);
            this.distance = _distance;
        }

        
    }
}