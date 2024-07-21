// Grid size
const gridSize = 5;

// Game grid array
let grid = [];

// Initial character position
let characterPosition = { x: 2, y: 2 };

// Initial items positions
let items = [
    { x: 1, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 4 }
];

// Create game grid
function createGameGrid() {
    const gameGrid = document.getElementById('agari0');
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');
            cell.setAttribute('id', `cell-${i}-${j}`);
            gameGrid.appendChild(cell);
            grid[i][j] = cell;
        }
    }
    updateGameGrid();
}

// Update game grid
function updateGameGrid() {
    // Clear previous grid
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid[i][j].innerHTML = '';
        }
    }

    // Place character
    const characterCell = grid[characterPosition.y][characterPosition.x];
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    characterCell.appendChild(characterElement);

    // Place items
    for (const item of items) {
        const itemCell = grid[item.y][item.x];
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemCell.appendChild(itemElement);
    }
}

// Move character
function moveCharacter(direction) {
    switch (direction) {
        case 'up':
            if (characterPosition.y > 0) characterPosition.y--;
            break;
        case 'down':
            if (characterPosition.y < gridSize - 1) characterPosition.y++;
            break;
        case 'left':
            if (characterPosition.x > 0) characterPosition.x--;
            break;
        case 'right':
            if (characterPosition.x < gridSize - 1) characterPosition.x++;
            break;
    }
    updateGameGrid();
}

// Collect item
function collectItem() {
    const itemIndex = items.findIndex(item => item.x === characterPosition.x && item.y === characterPosition.y);
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        updateGameGrid();
        alert('Item collected!');
    } else {
        alert('No item to collect here.');
    }
}

// Initialize the game
createGameGrid();
