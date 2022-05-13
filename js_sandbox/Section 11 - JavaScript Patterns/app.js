// ?---------------Module & Revealing Module Pattern---------------? //

// Basic Structure

// iffe
// (function () {
//     // Declare private vars and functions

//     return {
//         // Declare public var and functions
//     }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
    // Private within module
    let text = 'hello world';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    // Public outside module
    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();



// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added....');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        add,
        get
    }
})();


// ?---------------Singleton Pattern---------------? //

// Can never have more than one instance
const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Brad'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();




// ?---------------Factory Pattern(Ex:Membership Generation)---------------? //
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if(type ===  'standard') {
            member = new StandardMembership(name);
        } else if(type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}


const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John', 'simple'));


// members.forEach(function(member) {
//     member.define();
// })

// ?---------------Observer Pattern(Ex:Subscriptions)---------------? //
//-----------ES5-----------//
// function EventObserver() {
//     this.observers = [];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn) {
//         // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribed to ${fn}`)
//     },
//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
// }

//-----------ES6-----------//
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);

    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed to ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
})

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
})

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
})



// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}



// ?---------------Mediator Pattern(Ex:Chat Room)---------------? //

const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = [];

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Direct Message
                to.receive(message, from);
            } else {
                // Iterate and send to all yours
                for(key in users) {
                    // except the user who sent the message
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}


const brad = new User('Brad');
const will = new User('Will');
const paul = new User('Paul');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(will);
chatroom.register(paul);

brad.send('Hello Will', will);
paul.send('Hello Everyone');




// ?---------------State Pattern---------------? //