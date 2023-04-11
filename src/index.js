import './style.css';

const addBtn = document.getElementById('addItem');

const getItems = () => {
  const list = localStorage.getItem('data') || '[]';
  return JSON.parse(list);
}

const list = getItems();

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

const setItems = (list) => {
  const itemJSON = JSON.stringify(list);
  localStorage.setItem('data', itemJSON);
}

const addNewItem = () => {
  list.push({
    description: '',
    completed: false,
    id: ''
  });
  setItems(list);
}

addBtn.addEventListener('click', () => {
  console.log(list);
  addNewItem();
})

//renderTask();