document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//--------------------STANDARD ES6 Syntax--------------------//

// // Get local data in text file
// function getText() {
//     fetch('test.txt')
//         .then(function(res) {
//             return res.text();
//         })
//         .then(function(data) {
//             console.log(data);
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });     
// }

// // Get local Json Data
// function getJson() {
//     fetch('posts.json')
//         .then(handleErrors)
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function(post) {
//                 output += `<li>${post.title}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });     
// }

// // Get from External API
// function getExternal() {
//     fetch('https://api.github.com/users')
//         .then(handleErrors)
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function(user) {
//                 output += `<li>${user.login}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });     
// }


//--------------------OPTIMIZED with ARROW FUNCTIONS--------------------//

// Get local data in text file
function getText() {
    fetch('test.txt')
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err));

}

// Get local Json Data
function getJson() {
    fetch('posts.json')
        .then(handleErrors)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err));
}

// Get from External API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(handleErrors)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err));
}




// Separate function for handling Errors
function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}