"use strict";
// lesson-8 Function types
var greet;
greet = function () {
    console.log("Hello world");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(1, 10, '20');
var minus = function (a, b) {
    return a + b;
};
var result = minus(5, 10);
