namespace SolarSystem {
    window.addEventListener("load", load)

    let sun: Body;
    let speedSlider: HTMLInputElement;
    export let crc2: CanvasRenderingContext2D;
    let rotationSpeed: number = 1; //set initial rotation speed

    export interface Data {
        name: string;
        color: string;
        size: number;
        velocity: number;
        orbitRadius: number;
        children: Data[];
    }

    async function load(): Promise<void> {

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        speedSlider = <HTMLInputElement>document.getElementById("speedSlider");
        speedSlider.addEventListener("input", hndSliderInput);
        canvas.addEventListener("click", hndMouseInput);

        crc2 = canvas.getContext("2d")!;
        crc2.translate(canvas.width / 2, canvas.height / 2); //translate coordinate system center to center of canvas

        const response: Response = await fetch("Data.json");
        const data: Data = await response.json();

        sun = createBody(data);

        requestAnimationFrame(animate);
    }

    function hndSliderInput(): void { //control rotation speed with slider input
        const value: number = Number(speedSlider.value) / 5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }

    function hndMouseInput(_event: MouseEvent): void {
        const mouseX: number = _event.clientX;
        const mouseY: number = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }

    function animate(): void {
        crc2.clearRect(-crc2.canvas.width / 2, -crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "black";
        crc2.fillRect(-crc2.canvas.width / 2, -crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height);

        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }

    function createBody(_data: Data): Body {
        const body: Body = new Body(_data);

        for (const child of _data.children) {
            body.addChild(createBody(child));
        }
        return body;
    }
}