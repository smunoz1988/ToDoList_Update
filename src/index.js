import './style.css';

const addBtn = document.getElementById('clearAllBtn');

const renderTask = (list) => {
  const taskList = document.getElementById('container');
  taskList.innerHtml = '';
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

const getItems = () => {
  const list = localStorage.getItem('data') || '[]';
  return JSON.parse(list);
}

const list = getItems();

const setItems = (list) => {
  const itemJSON = JSON.stringify(list);
  localStorage.setItem('data', itemJSON);
}

const addNewItem = () => {
  list.push({
    description: '',
    completed: false
  });
  setItems(list);
  renderTask(list);
}

addBtn,addEventListener('click', () => {
  addNewItem();
})

renderTask();