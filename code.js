'use strict'
// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // if(input === 'Alex') {
    //     return 'Hello, Alex!';
    // } else if(input === 'Pat') {
    //     return 'Hello, Pat!';
     if(input == '') {
        return 'Hello, World!';
    } else if(typeof input === 'string'){
        //     return 'Hello, Jane!';
        return "Hello, " + input + "!"
    } else if(input === false){
        return 'Hello, World!';
    } else if(input === true){
        return 'Hello, World!'
    }else if (input !== 'string') {
        return 'This is not a name.'
    }else {
        return 'Hello, World!';
    }};

//exercise 6 ^

function ifFive(input) {
    if (input == 5) {
        return input == 5;
    }else if (input === '5') {
            return input ===5
    } else {
        return false;
    }
}

function isEven(x) {
    if(typeof x == 'string') {
        return false;
    } else if (x % 2 === 0) {
        return true;
    }else {
        return false;
    }
};