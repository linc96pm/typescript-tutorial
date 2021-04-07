// lesson-8 Function types

let greet: Function;

greet = () => {
    console.log("Hello world");
}


const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
};

add(1, 10, '20');

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(5, 10);
