'use strict';

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hailWarning = hazardWarningCreator('Hail everywhere!');
const mudSlideWarning = hazardWarningCreator('Watch out for Mud');

rocksWarning('Cuyler and Ridgeland');
rocksWarning('Main and South');
hailWarning('1st and 2nd');
hailWarning('Main and North');
mudSlideWarning('Roosevelt and Chicago');
mudSlideWarning('Clark and Division');
mudSlideWarning('South and Main');