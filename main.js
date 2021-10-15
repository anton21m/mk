console.log("success!!")

//task #0
const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className)
        $tag.classList.add(className);
    return $tag;
}

//task #1
function createPlayer(gamer) {
    const $player = createElement('div', "player" + gamer.player);

    //progress-bar
    const $progressBar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = gamer.hp + "%";

    const $name = createElement('div', 'name');
    $name.innerText = gamer.name;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    //character
    const $character = createElement('div', 'character');
    const $img = document.createElement('img');
    $img.src = gamer.img;

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;

}

const $arenas = document.querySelector('div.arenas');

// task #2
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

//task #3 finish