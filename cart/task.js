const cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const productQuantityDec = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityInc = document.querySelectorAll('.product__quantity-control_inc');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
const productImage = document.querySelectorAll('.product__image');

// функция для + и - счетчика у продукта
function productQuantity(params, values) {
    params.forEach((el) => {
        let index = Array.from(params).indexOf(el);
        el.addEventListener('click', () => {
            if (el.classList.contains('product__quantity-control_inc')) {
                values[index].textContent = Number(values[index].textContent) + 1;
            }
            if (el.classList.contains('product__quantity-control_dec') && (Number(values[index].textContent)) > 0) {
                values[index].textContent = Number(values[index].textContent) - 1;
            }
            })
        })
            
            
}

// находим элементы и индекс классов .productAdd
productAdd.forEach((elAdd, index) => {
    
    // обрабатываем клик на элемент
    elAdd.addEventListener('click', () => {

        // находим все элементы для классов .cart__product и .cart__product-count
        const newClassAdd = document.querySelectorAll('.cart__product');


        
        // если мы еще не добавляли в корзину, т.е. длина = 0, создаем классы
        if (newClassAdd.length === 0) {
            productNewAdd(index)
        } else {

                // находим из массива, соответствующий товар
                const productInCard = Array.from(newClassAdd).find((elem) => elem.getAttribute('data-id') === product[index].getAttribute('data-id'));

                if (productInCard) {

                    // при наличии, находим значение .cart__product-count и увеличиваем его
                    let productCount = productInCard.querySelector('.cart__product-count');

                    let con = document.querySelector('.cart__product-count')
                    let count = Number(productCount.textContent) + Number(productQuantityValue[index].textContent);
                    productCount.textContent = count;
                
            } else {
                productNewAdd(index)
            }
        }
    })    
})
           
// функция создания классов для продукта в корзине
function productNewAdd(indexAdd) {
    let newClass = document.createElement('div');
    newClass.innerHTML = `<div class="cart__product" data-id=${product[indexAdd].getAttribute('data-id')}>
                        <img class="cart__product-image" src=${productImage[indexAdd].getAttribute('src')}>
                        <div class="cart__product-count">${Number(productQuantityValue[indexAdd].textContent)}</div>`;
    cartProducts.append(newClass);
}

// вызов функций
productQuantity(productQuantityInc, productQuantityValue);
productQuantity(productQuantityDec, productQuantityValue);
