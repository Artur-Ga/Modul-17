const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
let pos = "Информация о местоположении недоступна."

 if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    pos = "Координаты местонахождения: " + coords.latitude + ", " + coords.longitude
  });
}

btn.addEventListener("click", () => {
  result.innerHTML = `Размер экрана: ширина: ${clientWidth}px, высота: ${clientHeight}px. ${pos}
`})