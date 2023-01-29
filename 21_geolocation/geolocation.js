const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

/* I used setInterval to simulate movement and direction for compass,
   but I couldn't use geolocation because Chrome doesn't support speed and heading methods,
   this is the code to get and set the speed and heading by using geolocation method:

   navigator.geolocation.watchPosition(data => {
        speed.textContent = data.coords.speed;
        arrow.style.transform = `${data.coords.heading}deg`;
        }, err => {
            console.err(err);
            alert('Please, give us permission to access your geolocation')
        })
 */

navigator.geolocation.watchPosition(data => {
    console.log(data)
    speed.textContent = data.coords.speed;
    arrow.style.transform = `${data.coords.heading}deg`;
}, err => {
    console.error(err);
    alert('Please, give us permission to access your geolocation')
})

setInterval(() => {
    let currentSpeed = Math.floor(Math.random() * 300);
    let currentHeading = Math.random() * 200;
    speed.textContent = currentSpeed;
    arrow.style.transform = `rotate(${currentHeading}deg`;
}, 1600);