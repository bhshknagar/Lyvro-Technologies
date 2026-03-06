const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const x = e.offsetX;
const y = e.offsetY;

card.style.transform =
`rotateX(${y/10}deg) rotateY(${x/10}deg)`;

});

card.addEventListener("mouseleave", ()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});