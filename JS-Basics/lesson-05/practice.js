var htmlClass = document.querySelector('#wrap');
var game = {
    count: 0,
    gameIsRunning: true,
    steps: [], // Массив, в котором будут храниться числа введённые игроком.
    showProgress: function (array) { // Это функция, которая преобразует массив с ходами к виду: 'Ход № : введённое игроком число' и выводит результат в консоль
        var p = document.createElement('p');
        for (var i = 0, len = array.length; i<len; i++) {
            console.log('Ход №' + (i+1) + ': ' + array[i] );
            p.innerText = 'Ход №' + (i+1) + ': ' + array[i];
            htmlClass.appendChild(p);
            p=p.cloneNode(true);
    	}
    	return this.steps;
    },
    random: function(min, max) {
        return Math.round(min + Math.random() * (max - min));
    },
    checkAnswer: function(random) {
        var answer = +prompt('Укажите число (-1 - закончить игру)');
        this.steps.push(answer); // Здесь добавляется в массив первый ход игрока.

        while(this.gameIsRunning) {
            if(answer === -1) {
                this.gameIsRunning = false;
            } else if (answer == 0 && isNaN(answer)) {
                alert('Вы не ввели число!\nВыход.');
                this.gameIsRunning = false;
            } else if (answer == random) {
                alert('Поздравляем, вы угадали число!');
                this.gameIsRunning = false;
            } else {
                this.count++;
                if ( answer < random ) {
                	alert('Мало');
                } else if ( answer > random ){
                	alert ('Много');
                }
                answer = +prompt('Укажите другое число(-1 - закончить игру)\nПопыток:' + this.count);
                this.steps.push(answer); // А здесь в массив steps добавляются ходы игрока начиная со второго введённого числа. 
            }
        }
        this.showProgress(this.steps); // Вызов функции, которая выведет в консоль все ходы игрока
        console.log('Компьютер загадал число: ' + random);
    }
}

game.checkAnswer(game.random(1, 100));