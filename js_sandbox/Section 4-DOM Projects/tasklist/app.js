//-------------UI & ADD TASK ITEMS-------------//

// DEFINE UI VARS
const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');


// Load all event listeners
loadEventListeners();
// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Delete Task Event
  taskList.addEventListener('click', deleteItem);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Task Event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item'
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a'); 
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}
// Add Task
function addTask(e) {

  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item'
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a'); 
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

//-------------DELETE & FILTER TASKS-------------//

// Delete Item
function deleteItem(e) {
  const text = e.target.parentElement.parentElement.textContent;
  let tasks;
  tasks = JSON.parse(localStorage.getItem('tasks'));

  if(confirm('Are You Sure?')) {
    // Remove the matching task from the list
    tasks = tasks.filter(function(f) { return f !== text });
    // Update local storage with new tasklist
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Remove from ul
    if(e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks(e) {
  if(confirm('Are You Sure?')) {
    // Clear Local Storage
    if(localStorage.getItem('tasks') !== null) {
      localStorage.removeItem('tasks');
    }

    // Clear visible UL
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}


// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

//-------------PERSIST TO LOCAL STORAGE-------------//

// Store task in Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}