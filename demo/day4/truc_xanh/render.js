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

function buildTile(color) {
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");
    element.addEventListener("click",()=>{
        click(element,color)
    } )
        return element;
    }

    function resetButton() {
        let rs = window.confirm('Do you want reset game !')
        if (rs) {
            window.location.reload();
        } else {
            return 0;
        }
    }

// Build up tiles
    for (let i = 0; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
        const color = colorsPicklist[randomIndex];
        const tile = buildTile(color);
        tile.style.height = "100px";
        tile.style.background = "#111111";
        tile.style.cursor = "pointer"
        tile.style.border = "5px solid #444444"
        colorsPicklist.splice(randomIndex, 1);
        tilesContainer.appendChild(tile);
        console.log("helo" + i)
    }

    function click(element,color) {
        const revealed = element.getAttribute("data-revealed");
        if (
            awaitingEndOfMove
            || revealed === "true"
            || element == activeTile
        ) {
            return;
        }

        // Reveal this color
        element.style.backgroundColor = color;

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
