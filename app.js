 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

var container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

console.log("made it up here line  num 19");
    pokemon.appendChild(newImg);
    console.log("made it up here line  num 21");
    pokemon.appendChild(label);
    console.log("made it up here line  num 23");
    container.appendChild(pokemon);
    console.log("made it up here line  num 25");
}
