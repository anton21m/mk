const $arenas = document.querySelector('div.arenas');
const $randomButton = document.querySelector('.button');

//task #0
const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['saw', 'toothpick'],
    attack: function() {
        console.log(this.name + " Fight...");
    }
};

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
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

function changeHP(player) {
    $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    player.hp = (player.hp > 0) ? player.hp : 0;

    $playerLife.style.width = player.hp + "%";
    if (!player.hp) {
        gameEnd(player);
    }
}

function gameEnd(playerLost) {
    $randomButton.disabled = true;
    winPlayer = getWinPlayer(playerLost);
    console.log(`Win: ${winPlayer.name} Lose: ${playerLost.name}`);
    $arenas.appendChild(playerWin(winPlayer.name));
    $arenas.appendChild(playerLose(playerLost.name));
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + " lose";
    return $loseTitle;
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + " win";
    return $winTitle;
}

function getWinPlayer(lostPlayer) {
    return (lostPlayer.player === 1) ? player2 : player1;
}

$randomButton.addEventListener('click', function() {
    console.log("Fight");
    changeHP(player1);
    changeHP(player2);
});


// task #2
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

//task #3 finish