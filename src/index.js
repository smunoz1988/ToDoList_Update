import './style.css';

toDoTasks = [
  { description: 'buy groceries', completed: false, index: 1},
  { description: 'buy groceries', completed: false, index: 2},
  { description: 'buy groceries', completed: false, index: 3}
];


const renderTask = () => {
  taskList = document.getElementById('container');
  taskList.innerHtml = '';
  toDoTasks.forEach((task) => {
    
  }); 
}