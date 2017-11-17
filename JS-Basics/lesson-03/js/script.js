"use strict"

// 1
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


// 2