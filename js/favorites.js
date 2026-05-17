const favGrid = document.querySelector(".favorite");

let favArray = JSON.parse(localStorage.getItem("favorites")) || [];
let totalPoints = 0;
