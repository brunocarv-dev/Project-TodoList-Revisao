const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

const lineThrough = (e) => {
  e.target.classList.remove('todoColor');
  e.target.classList.remove('addTodo');
  console.log(e.target.classList);
  if (e.target.classList[0] !== 'completed') {
    e.target.classList.add('completed');
  } else {
    e.target.classList.remove('completed');
  }

  e.target.classList.add('addTodo');
};

const changeColor = (e) => {
  const allTodo = document.querySelectorAll('.addTodo');
  console.log(allTodo);
  for (let i = 0; i < allTodo.length; i += 1) {
    allTodo[i].classList.remove('todoColor');
  }
  if (e.target.classList.contains('todoColor')) {
    e.target.classList.remove('todoColor');
  } else {
    e.target.classList.add('todoColor');
  }
};

const createToDo = (value) => {
  const createLi = document.createElement('li');
  createLi.classList.add('addTodo');
  createLi.innerHTML = value;

  input.value = '';

  createLi.addEventListener('click', (e) => changeColor(e));
  list.appendChild(createLi);

  createLi.addEventListener('dblclick', (e) => lineThrough(e));
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  createToDo(input.value);
});
