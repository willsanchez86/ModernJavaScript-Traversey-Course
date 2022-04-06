// // Person constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const brad = new Person('Brad', 'Traversy', '9-10-1981');
// const john = new Person('John', 'Doe', '8-12-90');





//-------------------------------------Prototypal Inheritance-------------------------------------//

// // Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// // Greeting
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());


// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// //Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

// console.log(customer1.greeting());

//-----------------------------------------Using Object.create----------------------------------------//
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });


//-----------------------------------------ES6 Classes----------------------------------------//
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // Static methods are not part of specific instances --> Need to call the actual classname (Ex: Person.addNumbers)
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '9-14-1990');

console.log(mary.calculateAge());

//-----------------------------------------ES6 Sub-classes----------------------------------------//
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());