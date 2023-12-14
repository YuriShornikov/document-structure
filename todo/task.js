const form = document.querySelector('form');
const task__input = document.getElementById('task__input');
const tasks__list = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // создаем элемент при отправки значения
    const new_el = document.createElement('div');
    
    // заменяем элемент на необходимую конструкцию
    new_el.innerHTML = `<div class="task"><div class="task__title">${task__input.value}</div><a href="#" class="task__remove">&times;</a></div>`;
    tasks__list.appendChild(new_el);


    // находим все классы с task и task__remove, находим индекс и удаляем по нему
    const task_all = document.querySelectorAll('.task');
    const task__remove_all = document.querySelectorAll('.task__remove');
    task__remove_all.forEach((el) => {
        let index = Array.from(task__remove_all).indexOf(el);
        el.addEventListener('click', () => {
            task_all[index].remove();
        })
    })

    form.reset();
})




