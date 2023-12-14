const cart__products = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const product__quantity_dec = document.querySelectorAll('.product__quantity-control_dec');
const product__quantity_inc = document.querySelectorAll('.product__quantity-control_inc');
const product__quantity_value = document.querySelectorAll('.product__quantity-value');
const product__add = document.querySelectorAll('.product__add');
const product__image = document.querySelectorAll('.product__image');

// функция для + и - счетчика у продукта
function product__quantity(params, values) {
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

// находим элементы и индекс классов .product__add
product__add.forEach((el_add) => {
    let index_add = Array.from(product__add).indexOf(el_add)
    
    // обрабатываем клик на элемент
    el_add.addEventListener('click', () => {

        // находим все элементы для классов .cart__product и .cart__product-count
        const new_class_add = document.querySelectorAll('.cart__product');
        const cart__product_count = document.querySelectorAll('.cart__product-count');
        
        // если мы еще не добавляли в корзину, т.е. длина = 0, создаем классы
        if (new_class_add.length === 0) {
            product_add(index_add)
        } else {

            // создаем проверку, искомый элемент fasle
            let search_el = false;
            new_class_add.forEach((el_new_class) => {

                // если атрибут добавляемого элемента равен атрибуту в корзине, то обрабатываем счетчик
                if (product[index_add].getAttribute('data-id') === el_new_class.getAttribute('data-id')) {
                    search_el = true;
                    console.log(el_new_class.getAttribute('data-id'))
                    let count = Number(cart__product_count[index_add].textContent) + Number(product__quantity_value[index_add].textContent);
                    cart__product_count[index_add].textContent = count;
                    console.log(count)
                }
            })

            // если искомого элемента нет, то создаем его в корзине
            if (!search_el) {
                product_add(index_add)
            }
        }
    })    
})

// функция создания классов для продукта в корзине
function product_add(index_add) {
    let new_class = document.createElement('div');
    new_class.innerHTML = `<div class="cart__product" data-id=${product[index_add].getAttribute('data-id')}>
                        <img class="cart__product-image" src=${product__image[index_add].getAttribute('src')}>
                        <div class="cart__product-count">${Number(product__quantity_value[index_add].textContent)}</div>`;
    cart__products.append(new_class);
}

// вызов функций
product__quantity(product__quantity_inc, product__quantity_value);
product__quantity(product__quantity_dec, product__quantity_value);
