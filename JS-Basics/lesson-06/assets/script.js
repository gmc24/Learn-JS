function init() {
    var slider = document.querySelector('.slider');
    slider.addEventListener('click', changeBigPicture);
}

var bigImage = document.createElement('img');

function changeBigPicture(event) {
    var appDiv = document.querySelector('.show-full-img');

    var smallImg = event.target.src;
    var srcArr = smallImg.split('/');
    var smallImgName = srcArr[srcArr.length -1];
    var bigImgScr = 'assets/img/big/' + smallImgName;
    bigImage.src = bigImgScr;
    bigImage.onload = function () {console.log('Есть большая картинка')};
    bigImage.onerror = function () {console.log('Большой картинки нету ((' + this.src); this.src = 'assets/img/big/none.png'};
    appDiv.appendChild(bigImage);
}

window.onload = init;