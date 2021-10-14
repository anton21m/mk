console.log("success!!")

//task #0
const player1 = {
    name: 'player1',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

const player2 = {
    name: 'player2',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

//task #1
function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    //progress-bar
    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = "Scorpion";

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    //character
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = "http://reactmarathon-api.herokuapp.com/assets/kitana.gif";

    $character.appendChild($img);

    $player1.appendChild($progressBar);
    $player1.appendChild($character);

    const $root = document.querySelector('.root');
    $root.appendChild($player1);

}

createPlayer();