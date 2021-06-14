// WAP in js to Pass a Function as Parameter.

// program to pass a function as a parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func) {

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

// take input
const user = prompt('Enter your name:');

//  name('Jack', greet);
//  name('Sara', greet);
name(`${user}`, greet);