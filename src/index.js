import './style.css';

const toDoTasks = [
  {
    description: 'Cleaned the house',
    completed: true,
    index: 1,
  },
  {
    description: 'Prepared all the meals',
    completed: true,
    index: 2,
  },
  {
    description: 'Done weekly shopping',
    completed: true,
    index: 1,
  },
  {
    description: 'Finished the assignment',
    completed: true,
    index: 1,
  },
  {
    description: 'Completed the daily workout',
    completed: false,
    index: 1,
  },
  {
    description: 'Cleaned the car',
    completed: false,
    index: 1,
  },
];

toDoTasks.forEach((element) => {
  const wholeList = document.querySelector('.chores');
  const choreList = document.createElement('div');
  choreList.classList.add('choreDetails');
  choreList.innerHTML = `<div class="oneChore">
    <input type="checkbox">
    <h2>${element.description}</h2>
   </div>
   <div class="icon">
   <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>`;
  wholeList.appendChild(choreList);
});