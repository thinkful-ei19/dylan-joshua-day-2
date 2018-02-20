'use strict';

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const arr = str.split(' ');

const decode = function(accumulator, currentValue) { 
    if (currentValue.length === 3) {
        return accumulator + ' ';
    } else {
        return accumulator + currentValue[currentValue.length - 1];
    }
};

const decodedMessage = arr.reduce(decode, '');
console.log(decodedMessage.toUpperCase());