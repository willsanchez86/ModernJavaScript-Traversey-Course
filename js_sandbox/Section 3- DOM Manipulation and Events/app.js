
//-------------23. Examining the Document Object-------------//
// let val;

// val = document;
// val = document.all; // Retrieve html collection-Array but can't use forEach loops
// val = document.all[0]; // Can access indexes and specific elements though (Ensure darkreader is turned off)

// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;


// // NOT RECOMMENDED - but can select things without selectors
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//   console.log(script.getAttribute('src'));
// });


// console.log(val);

//-------------24. DOM Selectors for Single Elements-------------//

// // 1) document.getElementByID()
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// 2) document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color='red';

// document.querySelector('li:last-child').style.color = 'red'; // CSS psuedo-classes

// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';


//-------------25. DOM Selectors for Multiple Elements-------------//

// // 1) document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello World';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // 2) document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// // 3) document.querySelectorAll --> returns a nodelist that doesn't need to be converted into an array
// const items = document.querySelectorAll('ul.collection li.collection-item');


// items.forEach(function(item, index){
//   item.textContent = `${index}: Hello`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.background = '#ccc';
// })

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
//   liEven[i].style.color = 'red';
// }

// console.log(items);


//-------------26. Traversing The Dom-------------//
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes; // Returns node list, but includes line breaks
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
// // node types
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 = Doctype


// // (USUALLY PREFERRED) - Get children element nodes (ONLY ELEMENTS)
// val = list.children; // Returns html collection
// val = list.children[0];

// list.children[1].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First Child
// val = list.firstChild; // Gives us first node -- Regardless if it's element or other
// val = list.firstElementChild; // Returns first element child

// // Last Child
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;


// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next and previous sibling
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.previousElementSibling;


// console.log(val);


//-------------27. Creating Elements-------------//
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);


// console.log(li);



//-------------28. Removing and Replacing Elements-------------//

// 1) REPLACE ELEMENT

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get heading to be replaced
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// console.log(newHeading, oldHeading);

// // 2) REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);


// // 3) CLASSES & ATTRIBUTES 
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

//-------------29. Event Listeners & The Event Object-------------//
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   e.preventDefault(); // e=Event object
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   let val;

//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;

//   // Timestampe
//   val = e.timeStamp;

//   // Coordinates of event relative to the window 
//   val = e.clientY; // Number of pixels from the top to pixel clicked
//   val = e.clientX; // Number of pixels from left to pixel clicked

//   // Coordinates relative to element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }


//-------------30. Mouse Events-------------//
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);
// // Doubeclick
// clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouse-enter
// card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// card.addEventListener('mouseleave', runEvent);
// // Mouseover ---will occur whenever making contact with another element within
// card.addEventListener('mouseover', runEvent);
// // Mouseout ---will occur whenever making contact with another element within
// card.addEventListener('mouseout', runEvent);
// // Mousemove ---Any movement inside the element(good for interactive programs)
// card.addEventListener('mousemove', runEvent);





// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }



//-------------31. Keyboard & Input Events------------//
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Focus ---click inside of an input
// taskInput.addEventListener('focus', runEvent);
// // Blur ---click outside of an input
// taskInput.addEventListener('blur', runEvent);
// // Cut (ctrl + X)
// taskInput.addEventListener('cut', runEvent);
// // Paste (ctrl + V)
// taskInput.addEventListener('paste', runEvent);
// // Input ---Anything done within the inpute
// taskInput.addEventListener('input', runEvent);
// // Change ---used on a Select List
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);
  // heading.innerText = e.target.value;

  // // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
// }


//-------------32. Event Bubbling & Delegation------------//

// 1) EVENT BUBBLING ---All Event Listeners of children bubble up to their parents

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// 2) EVENT DELEGTATION ---Event Listener on parent and pushing down

// document.body.addEventListener('click', deleteItem);


// function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     e.target.parentElement.parentElement.remove();
//   }
// }



//-------------33. Local & Session Storage------------//

// 1) Set Local storage item ---(Stays until manually cleared out)
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // 2) Set Session storage item ---(Clears automatically once browser is closed)
// sessionStorage.setItem('name', 'Beth');

// // remove from storage
// localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage
// localStorage.clear();

// const taskInput = document.querySelector('#task');
// const form = document.getElementById('task-form');

// form.addEventListener('submit', addTask);

// function addTask(e) {
//   let tasks;

//   if(localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(taskInput.value);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('Task Saved');

//   e.preventDefault();
// }

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);
// })
