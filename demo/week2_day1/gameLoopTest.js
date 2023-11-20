let lastTime;
let i = 0;

function gameLoop(timeStamp) {
    lastTime = lastTime || timeStamp;
    let dt = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;
    update(dt);
    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

import {Node} from './Node.js'

const card = new Node();
document.body.style.background = "#333333"
document.body.style.margin = "0"
const tilesContainer = document.querySelector(".tiles");
const styleContainer = document.getElementById("tiles");

function drawStyleContainer() {
    styleContainer.style.margin = '10px auto';
    styleContainer.style.width = 'max-content'
    styleContainer.style.display = 'grid';
    styleContainer.style.gridTemplateColumns = 'repeat(4, 100px)';
    styleContainer.style.gap = '16px';
    styleContainer.style.boxSizing = 'border-box';
}

drawStyleContainer()
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal", "red", "white"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;
let coins = 10000;
// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
const coinsElement = document.getElementById("coins")

function coinDraw() {
    coinsElement.style.color = 'white';
    coinsElement.innerHTML = `coins: ${coins}`
    coinsElement.style.fontSize = '20px'
    coinsElement.style.alignContent = 'center'
    coinsElement.style.justifyContent = 'center'
    coinsElement.style.display = 'grid'
    console.log(coins);
}

coinDraw()
let isUpdating = false;
let duration = 0.2;
let timer = 0;
let isFinished = true;
let state = "scaleDown";

//const element = card._createElement();
function buildTile(color) {
    const element = card._createElement();
    element.classList.add("tile");
    element.style.transform = `scale(${card.scaleX},1)`
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");
    /*    element.addEventListener("click", () => {
                click(element, color);
            });*/
    return element;
}

function buildGrid() {
    for (i; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
        const color = colorsPicklist[randomIndex];
        const tile = buildTile(color);
        colorsPicklist.splice(randomIndex, 1);
        tilesContainer.appendChild(tile);
    }
}

function click(element, color) {
    const revealed = element.getAttribute("data-revealed");
    if (
        awaitingEndOfMove
        || revealed === "true"
        || element == activeTile
    ) {
        return;
    }
    if (!activeTile) {
        activeTile = element;
        return;
    }

    const colorToMatch = activeTile.getAttribute("data-color");
    if (colorToMatch === color) {
        setTimeout(() => {
            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true");
            element.style.background = "#333333";
            activeTile.style.background = "#333333";
            coins += 1000;
            coinsElement.innerHTML = `coins: ${coins}`
            activeTile = null;
            awaitingEndOfMove = false;
            revealedCount += 2;
        }, 1000);

        if (revealedCount === tileCount) {
            alert("You win! Refresh to start again.");
            window.location.reload()
        }
        return;
    }
    awaitingEndOfMove = true;
    coins -= 500;
    coinsElement.innerHTML = `coins: ${coins}`
    console.log(coins)
    setTimeout(() => {
        activeTile.style.background = "#111111";
        element.style.background = "#111111";
        awaitingEndOfMove = false;
        activeTile = null;
        if (coins <= 0) {
            alert("You lose! Refresh to start again.");
            window.location.reload()
        }
    }, 1000);
}

function resetButton() {
    let rs = window.confirm('Do you want reset game !')
    if (rs) {
        window.location.reload();
    } else {
        return 0;
    }
}

let btnRs = document.getElementById("button")
const element = document.getElementsByClassName('tile')
let index;
function update(dt) {
    buildGrid()
    for (let j = 0; j < element.length; j++) {
        element[j].onclick = function () {
            {
                console.log(j)
                index = j;
                click(element[j], element[j].getAttribute("data-color"))
                flip()
            }
        }
    }
    animationFlip(dt, element[index])
    btnRs.onclick = function () {
        resetButton()
    };
}

function animationFlip(dt, element) {
    if (!isUpdating || isFinished) return;
    timer += dt;
    if (state === "scaleDown") {
        element.style.transform = `scaleX(${1 - timer / duration})`
        console.log(typeof element.style.transform)
        if (timer >= duration) {
            element.style.transform = `scaleX(0)`
            //card.scaleX = 0;
            element.style.backgroundColor = element.getAttribute("data-color");
            timer = 0;
            state = "scaleUp";
        }
    } else {
        element.style.transform = `scaleX(${timer / duration})`
        if (timer >= duration) {
            element.style.transform = `scaleX(1)`
            isFinished = true;
        }
    }
}

function flip() {
    isUpdating = true;
    timer = 0;
    isFinished = false;
    state = "scaleDown";
}