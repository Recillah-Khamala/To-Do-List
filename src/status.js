export const cut = (e) => {
  const clicked = e.target.closest('crossOut');
  if (!clicked) return;
  const store = (localStorage.getItem('store')) ? JSON.parse(localStorage.getItem('store')) : [];
  const index = parseInt(clicked.getAttribute('data-clear'), 10);

  const checkIndex = store.find((element) => element.index === index);
  checkIndex.completed = !checkIndex.completed;

  localStorage.setItem('store', JSON.stringify(store));
};

export const clearTask = () => {
  const storage = JSON.parse(localStorage.getItem('store'));
  document.querySelectorAll('.choreDetails').forEach((el) => {
    if (el.querySelector('.oneChore').querySelector('input').checked) {
      el.remove();
    }
  });
  const checked = Array.prototype.slice.call(storage).filter((chore) => chore.completed === true);
  let i = 0;
  storage.forEach((element) => {
    element.index = i;
    i += 1;
  });
  localStorage.setItem('store', JSON.stringify(storage));
  Object.values(checked).forEach((_val, i) => {
    storage.splice(checked[i].index - i, 1);
  });
  localStorage.setItem('store', JSON.stringify(storage));
  window.location.reload();
};
