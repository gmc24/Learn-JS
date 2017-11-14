/*
// №1
var a = 1, b = 1, c, d;  // c и  d - со значением undefined, т.к. здесь простое перечисление выражений

c = ++a;  alert(c); // 2 // с присваивается результат выражения ++а (т.к. префиксный инкремент), а=1, => с = а+1 = 1+1

d = b++;  alert(d); // 1 // сначала d присваивается b (т.к. постфиксный инкремент), затем b увеличивается на 1

c = (2+ ++a);  alert(c); // 5 // т.к. скобки, сначала выполняем действия там, а =2, получаем 2 + 2+1

d = (2+ b++);  alert(d); // 4 // сначала скобки - 2 + b = 2+2 = 4, и только после b увеличивается на единицу

 alert(a); // 3
 alert(b); // 3
*/


// №2 // Чему будет равен x в примере ниже?
/*var a = 2;
var x = 1 + (a *= 2);
// а = 2*2, х = 1+4 = 5 - проверяем
alert (x);*/

// №3//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*var a = getRandomInt(-100,100);
var b = getRandomInt(-100,100);

alert (a+'   '+b);

if (a>=0 && b>=0) {
    alert(a-b);
} else if (a<0 && b<0) {
    alert(a*b);
} else  {
    alert(a+b);
}*/

// №4 //
/*var a2 = getRandomInt(0,15);
for (var i=a2; i<=15;i++) {
switch (true) {
       case i<=15:
           alert(i);
           break;
   }
}*/

// №5 //
function sum (x,y) {
    return sum=x+y;
}

function subtr (x,y) {
    return subtr=x-y;
}

function division (x,y) {
    return division=x/y;
}

function multiply (x,y) {
    return multiply=x*y;
}

// №6 //
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1,arg2);
            break;
        case 'subtr':
            return subtr(arg1,arg2);
            break;
        case 'division':
            return division(arg1,arg2);
            break;
        case 'multiply':
            return multiply(arg1,arg2);
            break;
    }
}
alert(mathOperation(3,5,'multiply'));

// №7 //
/*
нельзя сравнить null и 0
0 - это значение, null означает отсутствие какого-либо значения
*/

/*8*. С помощью рекурсии организовать функцию факториала.
            Факторииал числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!
            n! = n * (n - 1) * (n - 2) * ...*1
            */
