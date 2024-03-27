import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

//navbar in mobile
let btn = document.querySelector(".burger-btn");
let menu = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li a");
btn.addEventListener("click", () => {
  menu.classList.toggle("nav-active");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menu.classList.toggle("nav-active");
  });
}

// change bg when scroll
let navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let valueScroll = window.scrollY;
  console.log(valueScroll);
  if (valueScroll < 70) {
    navbar.classList.remove("bg-nav-color");
  } else {
    navbar.classList.add("bg-nav-color");
  }
});

const getCards = async () => {
    const response = await fetch('../data/DATA.json');

    const responseJson = await response.json();
    const resto = responseJson.restaurants;
    renderAllResto(resto);
}

const renderAllResto = (resto) =>{
    const listRestoElement = document.querySelector('.wrapper')
    listRestoElement.innerHTML = '';
    resto.forEach((res, i) => {
        listRestoElement.innerHTML += `
         <div class="card" tabindex="${i}">
              <img src="${res.pictureId}" alt="">
              <span>${res.city}</span>
              <div class="card-content">
                <p class="rating">&#9733; ${res.rating}</p>
                <h4>${res.name}</h4>
                <p>${res.description.substring(0,100)}...</p>
              </div>
            </div>
        `
    });
};

getCards();

// async function logMovies() {
//   const response = await fetch("../data/DATA.json");
//   const movies = await response.json();
//   console.log(movies);
// }

// logMovies();