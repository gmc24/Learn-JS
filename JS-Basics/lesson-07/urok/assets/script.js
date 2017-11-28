var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; // интервал в мс между перемещениями змейки
var snake = []; // змейка
var direction = "x-"; // по умолчанию змейка движется вверх, уменьшая координату x
var gameIsRunning = false;
var snake_timer;
var food_timer;
var score = 0;
// var wallCreated = false;


function init() {
    prepareGameField();
    document.querySelector('#snake-start').addEventListener('click', startGame);
    document.querySelector('#snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);

    var score_tab = document.createElement('div');
    score_tab.classList.add('score-tab');
    score_tab.innerHTML = '<span>Score:</span><span class="score">'+score+'</span>';
    document.body.appendChild(score_tab);
}

function prepareGameField() {
    var game_table = document.createElement('table');
    game_table.classList.add('game-table');

    // генерируем строки и ячейки игровой таблицы
    for(var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.classList.add('game-table-row');
        row.dataset.row = i;

        for(var j = 0; j < FIELD_SIZE_Y; j++) {
            var cell = document.createElement('td');
            cell.classList.add('game-table-cell');
            cell.dataset.cell = i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }
    document.querySelector('#snake-field').appendChild(game_table);
}

function startGame() {
    gameIsRunning = true;
    respawn();

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 3000);
    setInterval(createWall, 5000);
}

// располагаем змейку на игровом поле
function respawn() {
    // стандартная длина змейки - 2
    var start_coord_x = Math.floor(FIELD_SIZE_X/2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y/2);

    var snake_head = document.querySelector("[data-cell='" + start_coord_x + "-" + start_coord_y + "']");
    snake_head.classList.add('snake-unit');

    var snake_tail = document.querySelector("[data-cell='" + (start_coord_x - 1) + "-" + start_coord_y + "']");
    snake_tail.classList.add('snake-unit');

    snake.push(snake_head, snake_tail);
}

function move() {
    var snake_head = snake[snake.length -1];
    var new_unit;
    var snake_coords = snake_head.dataset.cell.split('-');
    var coord_x = parseInt(snake_coords[0]);
    var coord_y = parseInt(snake_coords[1]);

    // определяем новую точку
    if(direction == "x-") {
        new_unit = document.querySelector("[data-cell='"+ (coord_x - 1) + '-' + coord_y +"']");
    } else if (direction == "x+") {
        new_unit = document.querySelector("[data-cell='"+ (coord_x + 1) + '-' + coord_y +"']");
    } else if (direction == "y+") {
        new_unit = document.querySelector("[data-cell='"+ coord_x + '-' + (coord_y + 1)  +"']");
    } else if (direction == "y-") {
        new_unit = document.querySelector("[data-cell='"+ coord_x + '-' + (coord_y - 1)  +"']");
    }

    // проверяем, что new_unit – не часть змейки
    // так же проверяем, что змейка не дошла до границы
    // if(!isSnakeUnit(new_unit) && new_unit !== null && !isWall(new_unit)) {
    if(!isSnakeUnit(new_unit) && !isWall(new_unit)) {
        new_unit.classList.add('snake-unit');
        snake.push(new_unit);

        // если змейка не ела, убираем хвост
        if(!haveFood(new_unit)) {
            var removed = snake.splice(0, 1)[0];
            removed.classList.remove('snake-unit', 'food-unit');
        }
    } else {
        finishTheGame();
    }
}

function isWall(unit) {
    var check = false;

    if(unit.classList.contains('wall-unit')) {
        check = true;
    }
    return check;
}

function isSnakeUnit(unit) {
    var check = false;

    if(snake.includes(unit)) {
        check = true;
    }
    return check;
}

function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    alert('GAME OVER!');
    refreshGame();
}

// проверяем встречу с едой
function haveFood(unit) {
    var check = false;
    var isSnakeEating = unit.classList.contains('food-unit');

    // змейка съела еду
    if(isSnakeEating) {
        check = true;

        // создаеи новую еду
        createFood();

        // увеличиваем количество очков
        score++;
        postScore(score);
    }
return check;
}

function postScore(x) {
    document.querySelector('span.score').innerText = score;
}

function createFood() {
    var food_x = Math.floor(Math.random() * (FIELD_SIZE_X));
    var food_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

    var food_cell = document.querySelector("[data-cell='" + food_x + '-' + food_y +"']");
    var isSnake = food_cell.classList.contains('snake-unit'); // true || false
    var isWall = food_cell.classList.contains('wall-unit'); // true || false

    //если нет змейки
    if(!isSnake && !isWall) {
        food_cell.classList.add('food-unit');
    } else {
        createFood();
    }
}

function createWall() {
    var wall_cell = [];
    for (var i=0; i<= Math.floor(Math.random() *5)+5; i++) {
        var wall_x = Math.floor(Math.random() * (FIELD_SIZE_X));
        var wall_y = Math.floor(Math.random() * (FIELD_SIZE_Y));
        wall_cell[i] = document.querySelector("[data-cell='" + wall_x + '-' + wall_y + "']");
        var isSnake = wall_cell[i].classList.contains('snake-unit'); // true || false
        var isFood = wall_cell[i].classList.contains('food-unit'); // true || false
        //если нет змейки
        if (!isSnake && !isFood) {
            wall_cell[i].classList.add('wall-unit');
        } else {
            createWall();
        }
        var walls = document.querySelectorAll('.wall-unit');
        setTimeout(function () {
            for(i=0; i<walls.length; i++) {
                walls[i].classList.remove('wall-unit');
            }
        }, 5000);
    }
}

function changeDirection(e) {
    switch(e.keyCode) {
        case 37: // нажата клавиша влево
            if(direction != "y+") {
                direction = "y-";
            }
            break;
        case 38: // нажата клавиша вверх
            if(direction != "x+")
                direction = "x-";
            break;
        case 39: // нажата клавиша вправо
            if(direction != "y-")
                direction = "y+";
            break;
        case 40: // нажата клавиша вниз
            if(direction != "x-")
                direction = "x+";
            break;
    }
}

// новая игра
function refreshGame() {
    location.reload();
}

window.onload = init;