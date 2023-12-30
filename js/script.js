"use strict";

let number = 5.5;

console.log(number);

const persone = 'Alex';

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.age);

//const result = confirm("Are you here?");

//const answer = prompt("Did your age over 18?", "");
//console.log(answer);

const answers = [];

answers[0] = prompt('Whats your name?', '');
answers[1] = prompt('Whats your lastname?', '');
answers[2] = prompt('How old are you?', '');

document.write(answers);

const category = 'toys';

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);