var     items = document.querySelectorAll('.tovar'),
           cart = document.getElementById('cart'),
            cart_items = {};

for (var i=0; i < items.length; i++) {
    items[i].querySelector('.add2cart').addEventListener('click', add2cart, false);
}

function add2cart() {
    // alert (this.parentNode.dataset.id);
    var  item = this.parentNode,
        itemId = item.dataset.id,
        itemTitle = item.querySelector('.title').innerText,
        itemPrice = item.querySelector('.price').innerText;

    if (cart_items.hasOwnProperty(itemId)) {
        cart_items[itemId][2] ++;
        // alert(cart_items[itemId][2])
    } else {
    cart_items[itemId] = [itemTitle, itemPrice, 1];
    }

    showCart ();
}

function showCart() {
    if (Object.keys(cart_items).length === 0) {
        cart.innerHTML = '<span class="default-text">Ваша корзина пуста!</span>';
    } else {

        var cartSumm = 0;
        var cartBlock = '<div class="cart-header">\n' +
            '            <div class="cart-item-thmb">&nbsp;</div>\n' +
            '            <div class="cart-item-title">Наименование товара</div>\n' +
            '            <div class="cart-item-price">Цена, руб</div>\n' +
            '            <div class="cart-item-qnty">Кол-во</div>\n' +
            '        </div>';

        for(var item in cart_items){
                var itemImgSrc = items[item-1].querySelector('figure > img').src;
                // console.log(itemImgSrc);
                cartBlock += '<div class="cart-row">';
                cartBlock += '<div class="cart-item-thmb"><img src="'+itemImgSrc+'" alt=""></div>\n' +
                    '            <div class="cart-item-title">'+cart_items[item][0]+'</div>\n' +
                    '            <div class="cart-item-price">'+cart_items[item][1]+'</div>\n' +
                    '            <div class="cart-item-qnty">'+cart_items[item][2]+'</div>';
                cartBlock += '</div>';
                cartSumm += (cart_items[item][1]*cart_items[item][2]);
            // console.log(summ);
            }

        cartBlock+='<div class="cart-summ">\n' +
            '            <div class="cart-summ-text">Стоимость заказа:</div>\n' +
            '            <div class="cart-summ-count"><span class="summ">'+cartSumm+'</span> руб.</div>\n' +
            '        </div>';

        cart.innerHTML = cartBlock;
    }
}

window.onload = showCart;