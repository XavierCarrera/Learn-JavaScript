// GLOBAL

var hello = "Hello";
let world = "Hello word";
const helloWorld = "Hello World!";

const anotherFunctions = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunctions();

const helloWorld = () => {
    globalVar = "I'm global"
}

helloWorld();
console.log(globalVar)

const anotherFunctions = () => {
    var localVar = globalVar = "I'm Global"
}

console.log(globalVar);

// LOCAL

const helloWolrd = ( )=> {
    const hello = "Hello"
    console.log(hello);
}

helloWolrd();
console.log(hello);

var scope = "I'm global";

const functionScope = () => {
    var scope = "I'm just a local"
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope();

// FUNCTION

const fruits = () => {
    var fruits = "apple";
    console.log(fruit);
}

fruits();
console.log(fruit);

const anotherNumber = () => {
    var x = 1;
    var x = 2;
    let x = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}

anotherNumber();

// BLOCK

const anotherFruit = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

anotherFruit();

let x = 1;
{
    var x = 2;
    console.log(x);
}

console.log(x);

const loopFunctions = () => {
    for (let i = 0; i <10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}