const steps = ['one', 'two', 'three'];


// steps.forEach(step => {
//     console.log(step);
// });

steps.forEach(showSteps);

function showSteps(step) {
    console.log(step);
}

// .map
let myList = document.getElementById('myList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
};

myList.innerHTML = stepsHtml.join('');


let grades = ['A', 'B', 'C'];
let points;

let gpaPoints = grades.map(convert);
console.log(gpaPoints);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

// .reduce

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);        

console.log(totalPoints/gpaPoints.length);

// .filter


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word) {
    return word.length < 6;
});

console.log(shortWords);

// .indexOf

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

const luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);


// Dynamic content

let container = document.getElementById('studentContainer');


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

students.forEach(function(student) {
    let name = document.createElement('div');
    name.className = 'format';

    let html = `
        <span>${student.first} ${student.last}</span>
        <hr>
    `;
    name.innerHTML = html;
    container.appendChild(name);
});

// const studentHtml = students.map(studentTemplate);

// function studentTemplate(student) {
//     return `<div class="student">
//                 <h2>${student.first} ${student.last}</h2>
//             </div>`;
// }

// container.innerHTML = studentHtml.join('');