//---------------------PART 1:  EVALUATING FUNCTIONS---------------------//
// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);


//--------------NUMBER 1 - EXEC--------------//
// exec() - Return result in an array if match, or null 
//      => Expression, index start of match, input

// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);



//--------------NUMBER 2 - TEST--------------//
// test() - Returns true or false

// const result = re.test('Hello'); // => false because test() is case sensitive
// console.log(result);



//--------------NUMBER 3 - MATCH--------------//
// match() - Return result array or null

// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);



//--------------NUMBER 4 - SEARCH--------------//
// search() - Returns index of the first match, if not found returns -1

// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);



//--------------NUMBER 5 - REPLACE--------------//
// replace() - Return new string with some or all matches of a pattern

// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);













//---------------------PART 2: MetaCharacter Symbols---------------------//

// // Custom function that determines whether RegularExpression contains input
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;  // Must start with
re = /d$/i;  // Must end with
re = /world$/i;
re = /^hello$/i;    // Must start and end with
re = /h.llo/i;    // Matches any ONE character at dot
re = /h*llo/i;    // Matches any character 0 or more times
re = /gre?a?y/i;   // Optional character
re = /gre?a?y\?/i;   // Escape character

// // String to match
// const str = 'Gray?'; 

// // Log Results
// const result = re.exec(str);
// console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

// reTest(re, str);








//-----------------PART 3: Character Sets and Quantifiers-----------------//

// Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be one of the characters inside bracket - can't be empty
re = /[GF]ray/i;    // Must be a G or F
re = /[^GF]ray/i;   // Match anything except a G or F
re = /[A-Z]ray/;    // Match any uppercase letter 
re = /[A-za-z]ray/;    // Match any letter
re = /[0-9]ray/;    // Match any digit


// Braces {} - Quantifiers
re = /hel{2}o/i;    // letter before braces must occur EXACTLY {n} amount of times
re = /hel{2,4}o/i;    // Must occur within range of times in brackets
re = /hel{2,}o/i;   // Must occur AT LEAST {n} times


// Parentheses () - Grouping
re = /([0-9]x){3}/;




// // String to match
// const str = 'Gray?'; 

// // Log Results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//     if(re.test(str)) {
//         console.log(`${str} matched ${re.source}`);
//     } else {
//         console.log(`${str} does NOT match ${re.source}`);
//     }
// }

// reTest(re, str);









//-----------------PART 4: Shorthand Character Classes-----------------//

// Shorthand Character Classes
re = /\w/;  // Word character ==> alphanumeric or_
re = /\w+/;  // + = one or more
re = /\W/;  // Non-Word character (Ex: $ !.)
re = /\d/;  // Match any digit
re = /\d+/;  // Match any digit 0 or more times
re = /\D/;  // Match any Non-digit
re = /\s/;  // Match whitespace char
re = /\S/;  // Match Non-whitespace char
re = /Hell\b/i  // Word boundary;



// Assertopms
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y




// String to match
const str = 'dkjexdxd'; 

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);