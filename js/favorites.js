const favGrid = document.querySelector(".favorite-grid");
const postCont=document.querySelector(".post-container")


let favArray=JSON.parse(localStorage.getItem("favorites"))||[];
