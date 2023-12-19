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
    
    // находим '.task__remove' и добавляем обработку по клику
    const newElDel = newEl.querySelector('.task__remove');
    newElDel.addEventListener('click',() => {
        newEl.remove();
    })
    
    form.reset();
})