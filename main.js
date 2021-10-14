console.log("success!!")

//task #0
const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

//task #1
function createPlayer(cls, gamer) {
    const $player = document.createElement('div');
    $player.classList.add(cls);

    //progress-bar
    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = gamer.hp + "%";

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = gamer.name;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    //character
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = gamer.img;

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    const $root = document.querySelector('div.arenas');
    $root.appendChild($player);

}

// task #2
createPlayer('player1', player1);
createPlayer('player2', player2);

//task #3 finish