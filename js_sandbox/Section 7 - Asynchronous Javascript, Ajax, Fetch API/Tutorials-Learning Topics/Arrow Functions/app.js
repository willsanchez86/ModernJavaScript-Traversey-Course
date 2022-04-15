// const sayHello = function() {
//     console.log('Hello');
// }


// // With Arrow Function
// const sayHello = ()  => {
//     console.log('Hello');
// }


// // One line function does not need braces
// const sayHello = () => console.log('Hello');


// // One line returns
// const sayHello = () => 'Hello';


// // Returning object literal -- WRAP IN PARENTHESIS!
// const sayHello = () => ({ msg: 'Hello'});


// // Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);


// sayHello('Will');




const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// })

// With Arrow
const nameLengths = users.map(name => name.length);

console.log(nameLengths);