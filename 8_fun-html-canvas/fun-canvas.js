const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
let bright = 1;
let isDrawing = false;
let direction = true;

function draw(event) {
    let lastX = 0;
    let lastY = 0;
    if(!isDrawing) return;
    [lastX, lastY] = [event.offsetX, event.offsetY];
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(lastX, lastY);
    ctx.strokeStyle = `hsl(${hue}, ${bright}%, 50%)`;
    hue++;
    bright++;
    ctx.stroke();
    ctx.globalCompositeOperation = 'xor';

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
    // console.log(ctx.lineWidth);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



// const canvas = document.getElementById('draw');
// const context = canvas.getContext('2d');
// const particlesArray = [];
// let hue = 0;
//
// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })
//
// const mouse = {
//     x: undefined,
//     y: undefined,
// }
//
// function mouseCoord(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     for (let i = 0; i < 5; i++){
//         particlesArray.push(new Particle());
//     }
// }
//
// canvas.addEventListener('click', mouseCoord)
// canvas.addEventListener('mousemove', mouseCoord)
//
// class Particle {
//     constructor() {
//         this.x = mouse.x;
//         this.y = mouse.y;
//         //this.x = Math.random() * canvas.width;
//         //this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 15 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//         this.color = `hsl(${hue}, 100%, 50%)`;
//     }
//
//     update(){
//         this.x += this.speedX;
//         this.y +=this.speedY;
//         if (this.size > 0.2) {
//             this.size -= 0.1;
//         }
//     }
//
//     draw(){
//         context.fillStyle = this.color;
//         context.beginPath();
//         context.arc(this.x, this.y, this.size, 0,  Math.PI * 2);
//         context.fill()
//     }
// }
//
// // function init(){
// //     for (let i = 0; i < 100; i++){
// //         particlesArray.push(new Particle());
// //     }
// // }
// // init();
//
// function handleParticles(){
//     for (let i = 0; i < particlesArray.length; i++){
//         particlesArray[i].update();
//         particlesArray[i].draw();
//         for (let j = i; j < particlesArray.length; j++ ){
//             const dx = particlesArray[i].x - particlesArray[j].x;
//             const dy = particlesArray[i].y - particlesArray[j].y;
//             const distance = Math.sqrt(dx**2 + dy**2);
//             if (distance < 100){
//                 context.beginPath();
//                 context.strokeStyle = particlesArray[i].color;
//                 context.lineWidth = 0.08;
//                 context.moveTo(particlesArray[i].x, particlesArray[i].y);
//                 context.lineTo(particlesArray[j].x, particlesArray[j].y);
//                 context.stroke();
//             }
//         }
//         if (particlesArray[i].size <= 0.3) {
//             particlesArray.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// function animate(){
//     //context.fillStyle = 'rgba(0, 0, 0, 0.04)';
//     //context.fillRect(0, 0, canvas.width, canvas.height);
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     handleParticles();
//     hue+=20;
//     requestAnimationFrame(animate);
// }
//
// animate()