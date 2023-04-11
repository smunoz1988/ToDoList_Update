import './style.css';

const addBtn = document.getElementById('addItem');

const getItems = () => {
  const list = localStorage.getItem('data') || '[]';
  return JSON.parse(list);
}

const renderTask = () => {
  const list = getItems();
  console.log(list);
  const taskList = document.getElementById('container');
  taskList.innerHTML = '';
  list.forEach((task) => {
    const newItem = itemTemplate(task);
    taskList.innerHTML += newItem;
  }); 
}

const itemTemplate = (task) => {
  const itemTemplate = `
    <div class="item">
      <input type="checkbox" class="itemCompleted" ${task.completed ? 'checked' : ''}>
      <input type="text" class="itemDescription" value='${task.description}'>
      <button class="clearBtn">Clear</button>
    </div>
    `;
    return itemTemplate;
}

const setItems = (list) => {
  const itemJSON = JSON.stringify(list);
  localStorage.setItem('data', itemJSON);
}

const addNewItem = () => {
  const list = getItems();
  list.push({
    description: '',
    completed: false,
    id: ''
  });
  setItems(list);
  renderTask();
}

addBtn.addEventListener('click', () => {
  addNewItem();
})

renderTask();