"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    let asteroids = [];
    function handleload(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);
        createAstroids(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser);
        //canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKey)
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function createAstroids(_nAsteroids) {
        console.log("Create Asteroids");
        for (let i = 0, i; ; i++) {
            let asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw;
        }
        //ship.draw();
        //handleCollisions();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map