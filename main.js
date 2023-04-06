const canvas = document.getElementById("myCanvas");

canvas.width = 800;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

Animate();
function Animate() {
    car.update()
    canvas.height = window.innerHeight;
    car.draw(ctx)
    requestAnimationFrame(Animate);
}