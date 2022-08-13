export const addBtn = document.querySelector('.addBtn');
export const add = document.querySelector('.add');
export const wholeList = document.querySelector('.chores');
export const store = (localStorage.getItem('store')) ? JSON.parse(localStorage.getItem('store')) : [];

export const renderTasks = () => {
  wholeList.innerHTML = '';
  store.forEach((element) => {
    const wholeList = document.querySelector('.chores');
    const choreList = document.createElement('div');
    choreList.classList.add('choreDetails');
    choreList.innerHTML = `<div class="oneChore">
            <input type="checkbox">
            <input type="text" class="toDo" data-desc="${element.index}" value="${element.description}"/>
            </div>
            <div class="icon">
            <i class="fa-solid fa-trash-can" id="${element.index}"></i>
            </div>`;
    wholeList.appendChild(choreList);
  });
};
renderTasks();

addBtn.addEventListener('click', (e) => {
  const input = add.value;
  e.preventDefault();
  add.value = '';
  if (!input) return;
  const obj = {
    description: input,
    completed: false,
    index: store.length,
  };
  store.push(obj);
  localStorage.setItem('store', JSON.stringify(store));
  renderTasks();
});

export const removeTask = (index) => {
  store.splice(index, 1);
  let i = 0;
  store.forEach((element) => {
    element.index = i;
    i += 1;
  });
  localStorage.setItem('store', JSON.stringify(store));
  renderTasks();
};

wholeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = (e.target.id);
    removeTask(index);
  }
});

export const update = (e) => {
  const clicked = e.target.closest('.toDo');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    // const item = parseInt(clicked.getAttribute('data-desc', 10));
    const update = store.find((element) => element.index === e.target.data);

    update.description = clicked.value.trim();
    localStorage.setItem('store', JSON.stringify(store));
  });
};

wholeList.addEventListener('click', update);
