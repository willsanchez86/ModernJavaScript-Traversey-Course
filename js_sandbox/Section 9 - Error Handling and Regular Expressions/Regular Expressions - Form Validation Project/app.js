// // Form Blur Event Listeners
// document.getElementById('name').addEventListener('blur', validateName);
// document.getElementById('zip').addEventListener('blur', validateZip);
// document.getElementById('email').addEventListener('blur', validateEmail);
// document.getElementById('phone').addEventListener('blur', validatePhone);

// // function validateName() {
// //     const name = document.getElementById('name');
// //     // const re = /^[A-Za-z]{2,10}$/;

// //     const re = /?=.*[a-z]/;   // Lowercase letter
// //     // const reUpper = '(?=.*[A-Z])'; // Upperowercase letter
// //     // const reDigit = /\d/; // Digit
// //     // const reSpecial = '(?=.*[^A-Za-z0-9])'; // Special Character
// //     // const reMin8 = '(?=.{8,})'; // Minimum length of 8

// //     if(!re.test(name.value)) {
// //         name.classList.add('is-invalid');
// //     } else {
// //         name.classList.remove('is-invalid');
// //     }
// // }

// function validateZip() {
//     const zip = document.getElementById('zip');
//     const re = /^[0-9]{5}(-[0-9]{4})?$/;

//     if(!re.test(zip.value)) {
//         zip.classList.add('is-invalid');
//     } else {
//         zip.classList.remove('is-invalid');
//     }
// }

// function validateEmail() {
//     const email = document.getElementById('email');
//     const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

//     if(!re.test(email.value)) {
//         email.classList.add('is-invalid');
//     } else {
//         email.classList.remove('is-invalid');
//     }
// }

// function validatePhone() {
//     const phone = document.getElementById('phone');
//     const re = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

//     if(!re.test(phone.value)) {
//         phone.classList.add('is-invalid');
//     } else {
//         phone.classList.remove('is-invalid');
//     }
// }




var scores = [1,3];

console.log(scores.reduce((a,b) => a+b));