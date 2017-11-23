"use strict"

    var field = document.getElementById('wrap');
    var newCell;
    var letters = ' ABCDEFGH ', numbers = ' 12345678 ';
    for (var i=1; i<=100; i++) {
        newCell = document.createElement('div');
        if (i <= 10) {
            newCell.classList.add('tb');
        } else if (i > 90) {
            newCell.classList.add('bb');
            newCell.innerText = letters[i-91];
        }
        if (i%10 == 0) {
            newCell.classList.add('rb');
        } else if ((i-1)%10 == 0) {
            newCell.classList.add('lb');
            newCell.innerText = numbers.split('').reverse()[Math.floor(i/10)];
        }
            field.appendChild(newCell);
    }

