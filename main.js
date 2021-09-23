const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#lucky-number');
const btnCheck = document.querySelector('#check-btn');
const outputBox = document.querySelector('#output-box');

btnCheck.addEventListener('click', function dateSum() {
    var dateOfBirthNew = birthDate.value.replaceAll('-', "");
    dateOfBirthNew = dateOfBirthNew.split("").map(Number);
    const sum = dateOfBirthNew.reduce((partial_sum, a) => partial_sum + a, 0)
    const luckyNum = luckyNumber.value;
    checkBirthDate(sum, luckyNum);
});

function checkBirthDate(sumOfDate, luckyNumbr) {
    if (sumOfDate % luckyNumbr === 0) {
        outputBox.innerText = ' Yipieee!! Your Birthdate is Lucky';
    } else {
        outputBox.innerText = 'Sorry!, Your Birthdate is Not Lucky';
    }
};


// NOTES:-

// 1. Always try to modularize your code by using a& creating as many functions as possible;
// 2. Always check the wiring of your elements & functions with the UI or Display i.e.
//  what you're calling is actually beiing called on the screen