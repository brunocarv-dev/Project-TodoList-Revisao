const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

const changeColor = (e) => {
  const allTodo = document.querySelectorAll('.addTodo');
  for (let i = 0; i < allTodo.length; i += 1) {
    allTodo[i].classList.remove('todoColor');
  }
  e.target.classList.add('todoColor');
};

const createToDo = (value) => {
  const createLi = document.createElement('li');
  createLi.classList.add('addTodo');
  createLi.innerHTML = value;

  input.value = '';

  createLi.addEventListener('click', (e) => changeColor(e));
  list.appendChild(createLi);
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  createToDo(input.value);
});
