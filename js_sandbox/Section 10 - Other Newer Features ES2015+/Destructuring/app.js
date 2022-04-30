// Destructuring Assignment

// let a, b;
// [a, b] = [100, 200];
// Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });


//---------------ARRAY DESTRUCTURING---------------//

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// Parse array returned from function
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);




//---------------OBJECT DESTRUCTURING---------------//

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male'
}

const { name, age, city } = person;

console.log(name, age, city);