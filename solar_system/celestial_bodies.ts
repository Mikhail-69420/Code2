namespace Solarsystem {
    export class CelestialBodies {
        name: string;
        color: string;
        size: number;
        velocity: number;
        radius: number;
        children: Body[];

        path: Path2D = new Path2D;
        absoluteRotation: number = 0;

        constructor(_name: string, _color: string, _size: number, _velocity: number, _radius: number, _children: Body[]) {
            this.name = _name;
            this.color = _color;
            this.size = _size; 
            this.velocity = _velocity;
            this.radius = _radius;
            this.children = _children;  
        }

        update(_timeslice: number): void {
            let relativeRotation: number = _timeslice * this.velocity;
            this.absoluteRotation = this.absoluteRotation + relativeRotation;

            crc2.rotate(this.absoluteRotation * Math.PI / 180);
            crc2.translate(this.radius, 0);

            crc2.fillStyle = this.color;
            this.path.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI * 2);
            crc2.fill(this.path);

            for (const child of this.children) {
                crc2.save();
                child.update(_timeslice);
                crc2.restore();
            }
        }

        showInfo(_mouseX: number, _mouseY: number): void {
            const bodyName: HTMLSpanElement = <HTMLSpanElement>document.getElementById("bodyName");

            if (crc2.isPointInPath(this.path, _mouseX, _mouseY)) {
                bodyName.textContent = this.name;
            } else {
                for (let child of this.children) {
                    if (crc2.isPointInPath(child.path, _mouseX, _mouseY)) {
                        bodyName.textContent = child.name;
                    }
                }
            }
           
    }
}
}