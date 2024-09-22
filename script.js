const clock = document.querySelector("#clock");
const time = document.querySelector("#time");
const date = document.querySelector("#date");

let currentDate = new Date();
date.innerText = currentDate.toLocaleDateString();

let currentTime;
setInterval((e) => {
    currentTime = new Date();
    time.innerText = currentTime.toLocaleTimeString();
}, 1000);

clock.addEventListener('mouseover', (e) => {
    let p = document.querySelector("#subheading");
    p.innerText = "Wow, You Are Clever 😎"
})