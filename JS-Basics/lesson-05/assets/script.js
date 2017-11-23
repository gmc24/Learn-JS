"use strict"

function chess() {

    var field = document.getElementById('wrap');
    var newCell = document.createElement('div');
    var letters = ' ABCDEFGH ', numbers = ' 87654321 ';
    for (var i = 1, j = true, k = 0; i <= 100; i++) {
        // var newCell = document.createElement('div');
        (j) ? newCell.classList.add('cell', 'white') : newCell.classList.add('cell', 'black');
        if (i <= 10) {
            newCell.classList.remove('cell', 'white', 'black');
            newCell.classList.add('tb');
            newCell.innerText = letters[i - 1];
        } else if (i > 90) {
            newCell.classList.remove('cell', 'white', 'black');
            newCell.classList.add('bb');
            newCell.innerText = letters[i - 91];
        }
        if (i % 10 == 0) {
            newCell.classList.remove('cell', 'white', 'black');
            newCell.classList.add('rb');
            newCell.innerText = numbers[Math.floor((i - 10) / 10)];
            j = !j;
        } else if ((i - 1) % 10 == 0) {
            newCell.classList.remove('cell', 'white', 'black');
            newCell.classList.add('lb');
            newCell.innerText = numbers[Math.floor(i / 10)];
        }
        if (newCell.classList.contains('cell')) {
            newCell.classList.remove('cell');
            newCell.classList.add('cell_' + k.toString());
            k++;
        }
        field.appendChild(newCell);
        newCell = newCell.cloneNode(true);
        newCell.className = '';
        newCell.innerText = '';
        j = !j;
    }

// расставляем фигуры
    var blacks = ['&#9818;', '&#9819;', '&#9820;', '&#9821;', '&#9822;', '&#9823;'];
    var whites = ['&#9812;', '&#9813;', '&#9814;', '&#9815;', '&#9816;', '&#9817;'];

    var game_field = document.querySelectorAll('div[class*=cell]');

    for (var i = 48; i < 56; i++) {
        game_field[i].innerHTML = whites[5];
    }
    game_field[56].innerHTML = game_field[63].innerHTML = whites[2];
    game_field[57].innerHTML = game_field[62].innerHTML = whites[4];
    game_field[58].innerHTML = game_field[61].innerHTML = whites[3];
    game_field[59].innerHTML = whites[1];
    game_field[60].innerHTML = whites[0];

    for (var i = 8; i < 16; i++) {
        game_field[i].innerHTML = blacks[5];
    }
    game_field[0].innerHTML = game_field[7].innerHTML = blacks[2];
    game_field[1].innerHTML = game_field[6].innerHTML = blacks[4];
    game_field[2].innerHTML = game_field[5].innerHTML = blacks[3];
    game_field[3].innerHTML = blacks[1];
    game_field[4].innerHTML = blacks[0];

}

