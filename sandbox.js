// Dynamic (any) types
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'john' };
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('hello');
mixed.push(false);
console.log(mixed);
var person;
person = { name: 'John', age: 25 };
console.log(person);
person = { name: 25, age: '25' };
console.log(person);
