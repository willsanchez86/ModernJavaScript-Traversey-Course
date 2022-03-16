// Log to Console - Using the console lesson# 6
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error("This is some error");
// console.clear();
// console.warn("This is a warning");
// console.time('Hello');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello');


//----------------------7. Variables-var let & const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init Var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// letters, numbers, _, $ are only characters that can be inside variable
// Cannot start with a number

// Multi word vars
// var firstName = "John"; // Camel Case -- standard for normal variables
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case

// LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST --Variable cannot be changed, and have to assign a value
// const name = 'John';
// console.log(name);

// const person = {
//     name: 'John',
//     age: 30,
// }

// console.log(person);

// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// // CAN reassign the values within an object or Array
// const numbers = [1,2,3,4,5,];
// numbers.push(6);
// console.log(numbers);

//--------------------9. Type Conversion
// let val;

// // Number to String
// val = String(5);
// // Bool to string
// val = String(true);
// //Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();

// // String to number
// val = Number('5');
// val = parseInt('100');
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));


//--------------------10. Numbers and the Math Object ------------------//
// const num1 = 100;
// const num2 = 50;
// let val;

// // Math Object
// val = Math.PI;
// val = Math.E; 
// val = Math.round(2.8);
// val = Math.ceil(2.4); // Rounds up
// val = Math.floor(2.8); // Rounds down
// val = Math.sqrt(64); 
// val = Math.abs(-3);
// val = Math.pow(8,2); // 8 to the 2nd power

// val = Math.random(); // Returns random decimal
// val - Math.floor(Math.Random() * 20); // Returns random number from (0-19)

// console.log(val);


//-------------11. String Methods and Concatenation ---------------//
// const firstName = 'William';
// const lastName = 'Johnson';
// const str = 'Hello there my name is Brad';

// let val;

// // Concatenation
// val = firstName + ' ' + lastName;
// // Append
// val = 'Brad ';
// val += "Traversy";
// // Escaping
// val = 'That\'s awesome, I can\'t wait';
// // Length
// val = firstName.length;
// // concat
// val = firstName.concat(' ', lastName);
// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // indexOf()
// val = firstName.indexOf('l'); // Returns the index of specific value in string
// val = firstName.lastIndexOf('l'); // Returns the index counting down from last character

// //charAt()
// val = firstName.charAt(2); // Returns character at that index
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0,4);

// // slice()
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');

// // includes()
// val = str.includes('Will');

// console.log(val)

//-------------12. Template Literals ---------------//
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template strings(es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job + ' </li><li>City: '+ city +' </li></ul>';

// function hello(){
//     return 'hello';
// }
// // With template strings (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2+2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `

// document.body.innerHTML = html;

//-------------13. Arrays & Array Methods ---------------//
// Creating arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,65);
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// //Find index of value
// val = numbers.indexOf(36)

// MUTATING ARRAYS
// numbers.push(250); // Appends 250 at end of array
// numbers.unshift(120); // Adds onto beginning of array
// numbers.pop(); // Removes last value in array
// numbers.shift(); // Removes first value in array
// numbers.splice(1,1); // Removes values from (start_index, end_index(not included)
// numbers.reverse(); // Reversing order of array

// concat
// val = numbers.concat(numbers2); 

// // SORT doesn't work for numbers list
// val = numbers.sort();
// // Use the "compare function"
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50); // Finds first number under 50

// console.log(numbers);
// console.log(val);


//-------------14. Object Literals ---------------//
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 36,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age; // "this" within the object calls the current object
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23}
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

//-------------15. Dates and Times ---------------//
// let val;

// const today = new Date(); // Defaults to todays date if entered without paramater...Date is an object reference type
// let birthday = new Date('9-14-1990 11:25:00');
// birthday = new Date('September 10 1990');
// birthday = new Date('9/10/1990');

// // Month returns number month - 1 because month starts at 0. January = 0
// val = today.getMonth();
// val = today.getDay(); // Sunday = 0, Monday = 1...
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // Retrieves the amount of seconds that have passed since Jan 1st 1970

// birthday.setMonth(2); // Change the value for month

// console.log(birthday);


//-------------16. If Statements and Comparison Operators ---------------//
// const id = 100;

// BAD PRACTICE!! --> Doesn't check the type, will still return true even if id is string
// EQUAL TO
// if(id == 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }



// EQUAL TO VALUE & TYPE
// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


// // Test if undefined 
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// // Test if GREATER OR LESS THAN
// if(id <= 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


// // IF ELSE
// const color = 'yellow';

// // if(color === 'red'){
// //     console.log('Color is red');
// // } else if(color === 'blue'){
// //     console.log('Color is blue');
// // } else {
// //     console.log('Color is not red or blue');
// // }

// // LOGICAL OPERATORS
// const name = 'Steve';
// const age = 80;
// const id1 = 100;

// // AND &&
// if(age > 0 && age < 13){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`)
// }

// // TERNARY OPERATOR
// console.log(id1 === 100 ? 'CORRECT' : 'INCORRECT');

//-------------`17. Switches ---------------//
// const color = 'yellow';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;        
// }

// console.log(`Today is ${day}`)


//---------------18. Function Declarations & Expressions---------------//

// FUNCTION DECLARATIONS
function greet(firstName = 'James'){
    return 'Hello ' + firstName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS
const square = function(x){
    return x*x;
};

// console.log(square(8));


// IMMEDIATELY INVOKABLE FUNCTION EXPERSSIONS - IIFE's
// (function(){
//     console.log('IFFE Ran..')
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })('Brad');


// PROPERTY METHODS
// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }
// todo.add();
// todo.edit(22);
// todo.delete();

// console.log(todo);

//---------------19. General Loops---------------//

// // FOR LOOP
// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue; // Continues to next iteration
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number ' + i);
// }

// // WHILE LOOP
// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// // DO WHILE
// let i = 100;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);


// EXAMPLE - Looping through array with for loop
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH loop doesn't require accessing index. similar to standard python for loop
// cars.forEach(function(car){
//     console.log(car);
// })

// Can access different values associated with that array
// cars.forEach(function(car, index){
//     console.log(car, index);
// })



// // MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'}
// ];

// const names = users.map(function(user){
//     return user.name;
// })

// console.log(names);


// // FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     // console.log(x); // Prints out the keys in the object
//     console.log(`${x} : ${user[x]}`); // Prints key value pairs to console
// }


//---------------20. A look at the Window Object---------------//

// WINDOW METHODS / OBJECTS/ PROPERTIES

// // Alert
// alert('Hello World');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// //Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points (used to set scroll points on nav bar??)
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;


// // Redirect
// window.location.href = 'http://google.com';
// // Reloead
// window.location.reload();


// History Object
// window.history.go(-2); // Returns to previous sites
// val = window.history.length;


// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;


// console.log(val);


//---------------21. Block Scope with let & const---------------//

// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);