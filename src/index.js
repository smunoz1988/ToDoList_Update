import './style.css';

const toDoTasks = [
  { description: 'buy groceries', completed: false, index: 1},
  { description: 'eat 2 apples', completed: false, index: 2},
  { description: 'make 3 clean', completed: false, index: 3}
];


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
 

window.onload = renderTask(toDoTasks);

console.log('test');