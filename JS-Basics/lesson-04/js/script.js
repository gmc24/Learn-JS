"use strict"
/*
1. Написать функцию, преобразующую число в объект

* Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
* Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
* Если число превышает 999, необходимо выдать соответствующее сообщение с помощью `console.log` и вернуть пустой объект.

2. * Выписать сделанные пользователем ходы в массив и вывести их по окончании игры

Используйте файл 'practice.js'*/

//1

/*
var n = +prompt('Введите целое положительное число:');

var chislo = {
    'единицы':'',
    'десятки':'',
    'сотни':'',
    inRange: false,
    checkInRange: function (n) {
        if (n > 0 && n <=999) {
            this.inRange = true;
        }
    },
    razr: function (n) {
        this.checkInRange(n);
        if (this.inRange) {
               n = String(n);
               switch (n.length) {
                   case 1:
                       this.единицы = n[0];
                       break;
                   case 2:
                       this.десятки = n[0];
                       this.единицы = n[1];
                       break;
                   case 3:
                       this.сотни = n[0];
                       this.десятки = n[1];
                       this.единицы = n[2];
                       break;
               }
               return this;
        } else {
            console.log('Число за пределами допустимого диапазона');
            return chislo = {};
        }
    }

}

console.log(chislo.razr(n));*/


//2


// выписать сделанные пользователем ходы в массив и вывести их по окончании игры

var game = {
    count: 0,
    gameIsRunning: true,
    random: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    checkAnswer: function(random) {
        var answer = +prompt('Укажите число (-1 – закончить игру)');
        this.moves.push(answer);

        while(this.gameIsRunning) {
            if(answer === -1) {
                this.gameIsRunning = false;
                alert('Игра окончена!\nВаши ходы: '+ this.moves.join(' '));
            } else if (answer == 0 || isNaN(answer)) {
                alert('Вы не ввели число!\nВыход.\nВаши ходы: '+ this.moves.join(' '));
                this.gameIsRunning = false;
            } else if (answer == random) {
                alert('Поздравляем, вы угадали число!\nВаши ходы: '+ this.moves.join(' '));
                this.gameIsRunning = false;
            } else {
                this.count++;
                answer = +prompt('Не угадали.\nУкажите другое чило(-1 – закончить игру)\nПопыток:' + this.count);
                this.moves.push(answer);
            }
        }
    },
    moves: []
}


game.checkAnswer(game.random(1, 5));