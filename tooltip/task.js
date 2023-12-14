const has_tooltip = document.querySelectorAll('.has-tooltip');

has_tooltip.forEach((el) => {

    // создаем выпадающий класс, помещаем его после элемента
    const title = el.getAttribute('title');
    const new_el = document.createElement('div');
    new_el.classList.add('tooltip');
    new_el.textContent = title;
    el.append(new_el);

    el.addEventListener('click', (ev) => {
        ev.preventDefault();

        const all_new_el = document.querySelectorAll('.tooltip_active');
        
        // удаляем все активные классы
        all_new_el.forEach((e_active) => {
            e_active.classList.remove('tooltip_active');
        })

        // ищем позицию, добавляем активный класс, присваиваем позицию
        const el_pos = el.getBoundingClientRect();
        new_el.classList.add('tooltip_active');
        new_el.setAttribute('data-position', `left: ${el_pos.left}px; top: ${el_pos.bottom}px`);
        new_el.style = new_el.getAttribute('data-position');
    })
})