// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luige';
age = 25;

// isLoggedIn = 25
isLoggedIn = true;

// arrays
let ninja: string[] = [];

ninja.push('john')


// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 1234;

// objects
let person1: Object;

person1 = {
    name: 'John',
    age: 25
}

let person2: {
    name: string,
    age: number,
    beltColor: string
};

person2 = {
    name: 'John',
    age: 25,
    beltColor: 'black'
}