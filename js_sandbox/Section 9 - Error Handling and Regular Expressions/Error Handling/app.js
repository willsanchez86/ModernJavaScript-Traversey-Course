const user = {email: 'jdoe@gmail.com'};

try {
    //------------CORE ERRORS------------//

    // // Produce a ReferenceError
    // myFunction();
    
    // // Produce a TypeError
    // null.myFunction();

    // // WIll produce SyntaxError
    // eval('Hello World');

    // // Will Produce a URIError
    // decodeURIComponent('%');

    //---------USER GENERATED ERRORS------------//
    if(!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch(err) {
    console.log(err);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of result...');
}

console.log('Program Continues...');