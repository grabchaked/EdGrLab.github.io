/*
 *	Simple and small ECMAScript 6 crib
 *	by Eduard Grabchak
 */

"use strict";

//let and const

function testLet() {
    let a = 20;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

testLet();

// classes and inheritance

class User {
    constructor(name, passw) {
        this.name = name;
        this.passw = passw;
    }

    register() {
        console.log(this.name + ' registered with pass: ' + this.passw);
    }

    static countUsers(num) {
        console.log('There are ' + num + ' users');
    }
}
let bob = new User('Bob', '123');
bob.register();

User.countUsers(20);

class Member extends User {
    constructor(name, passw) {
        super(name, passw);

    }
}

let max = new Member('Max', '3333');
max.register();

//template literals

let name = 'lopi';

function uppCase(word) {
    return word.toUpperCase();
}
let template = `${uppCase('hello')}, ${name}`;
console.log(template);

//spread operator

/*let arg1 = [1,2,3], arg2 = [4,5,6];
function test() {
	console.log(`${arg1}, ${arg2})`);
}
test(...arg1,...arg2);*/

// set and map

let arr = [2, 4, 1, 2];
let myset = new Set(arr);
myset.add('100');
myset.add({ a: 1, b: 2 });
console.log(myset);

myset.forEach(function(val) {
	console.log(val);
});

let mymap = new Map([['a1','hello'], ['b2', 'Goodbye']]);
mymap.set('c3', 'new');
console.log(mymap);

//arrow functions

let add = (a,b) => {
	let sum = a + b;
	console.log(sum);
}
add(5,5);

let circleArea = (r) => {
	let PI = 3.14;
	return PI * r * r;
}
let circleArea2 = r => 3.14 * r * r;
console.log(circleArea(3));
console.log(circleArea2(6));