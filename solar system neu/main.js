"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", load);
    let sun;
    let speedSlider;
    let rotationSpeed = 1; //set initial rotation speed
    function load() {
        return __awaiter(this, void 0, void 0, function* () {
            const canvas = document.querySelector("canvas");
            speedSlider = document.getElementById("speedSlider");
            speedSlider.addEventListener("input", hndSliderInput);
            canvas.addEventListener("click", hndMouseInput);
            SolarSystem.crc2 = canvas.getContext("2d");
            SolarSystem.crc2.translate(canvas.width / 2, canvas.height / 2); //translate coordinate system center to center of canvas
            const response = yield fetch("Data.json");
            const data = yield response.json();
            sun = createBody(data);
            requestAnimationFrame(animate);
        });
    }
    function hndSliderInput() {
        const value = Number(speedSlider.value) / 5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }
    function hndMouseInput(_event) {
        const mouseX = _event.clientX;
        const mouseY = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }
    function animate() {
        SolarSystem.crc2.clearRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }
    function createBody(_data) {
        const body = new SolarSystem.Body(_data);
        for (const child of _data.children) {
            body.addChild(createBody(child));
        }
        return body;
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map