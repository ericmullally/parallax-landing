const mouse = document.querySelector("body");
const bg = document.querySelector(".landing");
const moon = document.querySelector(".landing-moon-img");
const globe = document.querySelector(".landing-globe-img");
let window_H = window.innerHeight;
let window_W = window.innerWidth;

const setSize = (h, w) => {
  window_H = h;
  window_W = w;
};

window.addEventListener("resize", e => {
  const height = e.currentTarget.innerHeight;
  const width = e.currentTarget.innerWidth;
  setSize(height, width);
});

mouse.addEventListener("mousemove", e => {
  const X = e.pageX;
  const Y = e.pageY;
  const top = window_H / 2 - Y;
  const left = window_W / 2 - X;
  moon.style.transform = `perspective(1000px) translate3d(${left / 4}px, ${top /
    4}px, 0) `;
  globe.style.transform = `perspective(1000px) translate3d(${left /
    10}px, ${top / 10}px, 0) `;
  bg.style.transform = `perspective(1000px) translate3d(${left / 20}px, ${top /
    20}px, 0) `;
});
