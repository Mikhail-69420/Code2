"use strict";
var Asteroid;
(function (Asteroid) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    let projectile;
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroid.crc2 = canvas.getContext("2d");
        Asteroid.crc2.fillStyle = "black";
        Asteroid.crc2.strokeStyle = "white";
        Asteroid.crc2.fillRect(0, 0, Asteroid.crc2.canvas.width, Asteroid.crc2.canvas.width);
        Asteroid.createPaths();
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        let origin = new Asteroid.Vector(_event.clientX - Asteroid.crc2.canvas.offsetLeft, _event.clientY - Asteroid.crc2.canvas.offsetTop);
        let velocity = new Asteroid.Vector(0, 0);
        velocity.random(100, 100);
        projectile = new Asteroid.Projectile(origin, velocity);
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroid.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function shootLaser(_event) {
        let hotspot = new Asteroid.Vector(_event.clientX - Asteroid.crc2.canvas.offsetLeft, _event.clientY - Asteroid.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new Asteroid.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function update() {
        Asteroid.crc2.fillRect(0, 0, Asteroid.crc2.canvas.width, Asteroid.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        projectile.move(1 / 50);
        projectile.draw();
    }
})(Asteroid || (Asteroid = {}));
//# sourceMappingURL=asteroidstask.js.map