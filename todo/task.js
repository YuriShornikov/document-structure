const form = document.querySelector('form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // создаем элемент при отправки значения
    const newEl = document.createElement('div');

    // удаляем пробелы и проводим проверку, чтобы добавить элемент
    const inputValue = taskInput.value.trim();
    if (inputValue.length > 0) {

        // заменяем элемент на необходимую конструкцию
        newEl.innerHTML = `<div class="task"><div class="task__title">${inputValue}</div><a href="#" class="task__remove">&times;</a></div>`;
        tasksList.appendChild(newEl);
    }
    

    


    // находим все классы с task и task__remove, находим индекс и удаляем по нему
    const taskAll = document.querySelectorAll('.task');
    const taskRemoveAll = document.querySelectorAll('.task__remove');
    taskRemoveAll.forEach((el, index) => {

        // добавляю обработчки по клику на крестик
        el.addEventListener('click', (ev) => {

            // удаляю элемент по индексу
            taskAll[index].remove();
        })

    })

    form.reset();
})



        // прежний способ
        // let index = Array.from(task__remove_all).indexOf(el);
        // el.addEventListener('click', () => {
        //     task_all[index].remove();
        // })