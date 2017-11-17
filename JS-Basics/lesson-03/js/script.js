"use strict"

// 1
/*
var i = 0;
var arr=[];
var n = +prompt('До какого натурального N ищем простые числа? ');
//заполняем массив
while (i<n) {
    arr.push(true);
    i++;
}
//фильтруем через решето Эратосфена
i=2, arr[0]=arr[1]=false;
while (i*i <=n) {
if (arr[i]) {
    var j=i*i, k=1;
    while (j<=n) {
        arr[j]=false;
        j=i*(i+k);
        k++;
    }
}
    i++;
}
//выводим простые числа
i=0;
while (i<n) {
    if (arr[i]) {console.log(i);}
    i++;
}
*/


// 2

/*
var i=0;
do {
if (i==0) {console.log(i+' - это ноль');}
else if (i%2===0) {console.log(i+' - четное число');}
else {console.log(i+' - нечетное число');}
i++;
} while (i<=10);
*/

// 3
//for (var i=0; i<10;console.log(i++)) {}

//4
/*
for (var i = 1; i<=20;i++) {
    var row='';
    for (var j=0; j<i;j++) { row+='x' }
    console.log(row);
}
*/
// с методом repeat()
//for (var i = 1; i<=20;i++) { console.log('x'.repeat(i))}


//5 - усовершенствуем пирамидку
/*var n = +prompt("Сколько рядов будет у пирамиды?");
for (var i = 0; i<n;i++) {
    var row='';
    for (var j=1; j<=(n-i);j++) { row+=' '};
    for (var j=1; j<=(i*2+1);j++) { row+='x'};
    console.log(row);
}*/
// с методом repeat()
var n = +prompt("Сколько рядов будет у пирамиды?");
for (var i = 0; i<n;i++) { console.log(' '.repeat(n-i)+'x'.repeat(2*i+1)) }
