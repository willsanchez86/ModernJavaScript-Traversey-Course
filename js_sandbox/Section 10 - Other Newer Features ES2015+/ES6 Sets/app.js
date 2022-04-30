// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // Will not add because values MUST be unique

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'John' })); //returns false because object is a reference value


// Delete from set
set1.delete(100);


// ITERATION THROUGH SETS

// for...of
for (let item of set1) {
    console.log(item);
}

// forEach Loop
set1.forEach((value) => {
    console.log(value);
});


// CONVERT TO ARRAY
const setArray = Array.from(set1);
console.log(setArray);