const hasTooltip = document.querySelectorAll('a.has-tooltip');

hasTooltip.forEach((el) => {


    // создаем выпадающий класс, помещаем его после элемента
    
    const title = el.getAttribute('title');
    const newEl = document.createElement('div');
    newEl.classList.add('tooltip');
    newEl.textContent = title;
    el.insertAdjacentElement('afterend', newEl);

    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        const allNewEl = document.querySelectorAll('.tooltip_active');
        
        // удаляем все активные классы, кроме выделенного элемента
        allNewEl.forEach((eActive) => {
            if (eActive !== ev.target.nextElementSibling && eActive.classList.contains('tooltip_active')) {
                eActive.classList.remove('tooltip_active');
            }
        })
        
        // проверяем выделенный элемент, если содержит tooltip_active, то удаляем
        if (ev.target.nextElementSibling.classList.contains('tooltip_active')) {
            console.log(el)
            ev.target.nextElementSibling.classList.remove('tooltip_active');
        } else {

            // Иначе ищем позицию, добавляем активный класс, присваиваем позицию
            const elPosition = el.getBoundingClientRect();
            newEl.classList.add('tooltip_active');
            newEl.setAttribute('data-position', `left: ${elPosition.left}px; top: ${elPosition.bottom}px`);
            newEl.style = newEl.getAttribute('data-position'); 
        }  
    })
})