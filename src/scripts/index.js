import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

const getCards = async () => {
    const response = await fetch('../data/DATA.json');

    const responseJson = await response.json();
    const resto = responseJson.restaurants;
    // console.log(resto);
    renderAllResto(resto);
}

const renderAllResto = (resto) =>{
    const listRestoElement = document.querySelector('.wrapper')
    listRestoElement.innerHTML = '';
    resto.forEach((res) => {
        listRestoElement.innerHTML += `
         <div class="card">
              <img src="${res.pictureId}" alt="">
              <div class="card-content">
                <h5>${res.city}</h5>
                <p>Rating: ${res.rating}</p>
                <h4>${res.name}</h4>
                <p>${res.description}</p>
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