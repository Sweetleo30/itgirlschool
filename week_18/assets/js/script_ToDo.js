window.onload = function () {

    let errorMessage = document.getElementsByClassName('notes__error-message')[0];
    let toDoList = [];

    if (localStorage.getItem('toDo') != undefined) {
        toDoList = JSON.parse(localStorage.getItem('toDo'));
        notesList();
    }

    document.getElementById('button-add').onclick = function () {

        let inputVal = document.getElementById('notes-input').value;

        if (inputVal === '') {
            errorMessage.innerHTML = ('Поле не заполнено');
            return false;
        }

        let toDoItem = {};
        toDoItem.toDo = inputVal;
        toDoItem.check = false;

        toDoList.push(toDoItem);

        notesList();

        localStorage.setItem('toDo', JSON.stringify(toDoList));

        document.getElementById('notes-input').value = '';
        errorMessage.innerHTML = '';
    }

    checkCheckboxes();

    function checkCheckboxes() {
        let checkboxes = document.querySelectorAll('input[type=checkbox]')

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].onchange = function () {
                toDoList = JSON.parse(localStorage.getItem('toDo'))
                toDoList[i].check = this.checked;
                localStorage.setItem('toDo', JSON.stringify(toDoList))
            }
        }
    }

    function notesList() {

        let notesList = '';

        for (let key in toDoList) {

            if (toDoList[key].check) {
                notesList += '<input type="checkbox" class="form-item-input" checked>'
            } else {
                notesList += '<input type="checkbox" class="form-item-input" >'
            }

            notesList += toDoList[key].toDo + '<br>';
        }

        document.getElementById('notes-list').innerHTML = notesList;
    }
};

