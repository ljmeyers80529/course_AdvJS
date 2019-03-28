// console.log('Hello world.');

/* variables
var firstName = "Me";
console.log(firstName);

var lastName = "Fresno";
var age = 57;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Student';
console.log(job);

*/

/* mutation and coercion

// coercion
var firstName = "Me";
var age = 57;

console.log(firstName + " " + age);  // coercion

var job, isMarried;
job = "Student";
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job + ". Is he married " + isMarried);

// mutation

age = "fifty seven";
job = "driver";

alert(firstName + " is a " + age + " years old " + job + ". Is he married " + isMarried);

var lastName = prompt('What is your last name?');
console.log(firstName + " " + lastName);
*/

/* basic operators

//math
var meAge = 57;
var currentYear = 2019;
console.log('Subtact: ' + (currentYear - meAge));
console.log('Addition: ' + (currentYear + meAge));
console.log('Multiply: ' + (currentYear * meAge));
console.log('Divide: ' + (currentYear / meAge));
console.log('Modulus: ' + (currentYear % meAge));

//logical
var joshua = 14;
var bruce = 65;
var bruceOlder = bruce > meAge;
var joshuaOlder = joshua > meAge;

console.log(bruceOlder);
console.log(joshuaOlder);


// typeof
var xxx;

console.log(typeof bruceOlder);
console.log(typeof joshua);
console.log(typeof xxx);
console.log(typeof "Me");
*/

/* operator precedence */
/*
var now = 2019;
var yearMe = 1961;
var fullAge = 18;

var isFullAge = now - yearMe >= fullAge;

console.log(isFullAge);

var ageMe = now - yearMe;
var ageJoshua = 14;

var ave = (ageMe + ageJoshua) / 2;
console.log(ave);

var x,y;
x = y = (3 + 5) * 4 - 6;        // assignment to mutiple variables.
console.log(x, y);

x *= 2;
console.log(x);
x += 20;
console.log(x);
x++;
console.log(x);
--x;
console.log(x);
*/

// challenge
/*
var markHeight = 1.7;       // 1.7 meters
var markMass = 75;          // 45 kg
var johnHeight = 1.69;
var johnMass = 81;

var markBMI = markMass / markHeight^2;
var johnBMI = johnMass / johnHeight^2;
var isMarksBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Is Mark's BMI greater than John's?", isMarksBMI);
*/


/* if-else


var fn = "Me";
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(fn + ' is married');
} else {
    console.log(fn + ' is not married');
}

var fn = "Me";
var isMarried = false;
if (isMarried) {
    console.log(fn + ' is married');
} else {
    console.log(fn + ' is not married');
}

var markHeight = 1.7;       // 1.7 meters
var markMass = 75;          // 45 kg
var johnHeight = 1.69;
var johnMass = 81;

var markBMI = markMass / markHeight^2;
var johnBMI = johnMass / johnHeight^2;

if (markBMI > johnBMI) {
    console.log("Mark's BMI if greater than John's");
} else {
    console.log("John's BMI if greater than marks's");
}
*/

/* boolean logic

var fn = "Me";
var age = 57;

if (age < 13) {
    console.log(fn + " is a boy");
} else if (age >= 13 && age < 20) {
    console.log(fn + " is a teenager");
} else if (age >= 20 && age < 30) {
    console.log(fn + " is a young man");
} else {
    console.log(fn + " is a man");
}
*/

/* ternary and switch statements


var fn = "Me";
var age = 16;
var drink;

age >= 18 ? console.log(fn + " drinks beer") : console.log(fn + " drinks juice");

age >= 18 ? drink = "beer" : drink = "juice";
console.log(fn + " drinks " + drink);

var job = "instructor";

switch(job) {
    case "teacher":
    case "instructor":
        console.log("Teachs physics.")
        break;
    case "developer":
        console.log("Write software.")
        break;
    case "engineer":
        console.log("Designs buildings.")
        break;
    case "driver":
        console.log("Drives for uber.")
        break;
    default:
        console.log("Unknown.")
}


// switches on true, will execute the caase statement that is true.
switch (true) {
    case age < 13:
        console.log(fn + " is a boy");
        break;
    case age >= 13 && age < 20:
        console.log(fn + " is a teenager");
        break;
    case age >= 20 && age < 30:
        console.log(fn + " is a yung man");
        break;
    default:
        console.log(fn + " is a man");
}
*/

/* truty / falsy values and equality operators

    falsy values:   undifined, null, 0, '', NaN
    truthy values:  NOT falsy values.


var height;

height = 0;
if (height || height === 0) {
    console.log("Variable is defined");
} else {
    console.log("Variable is not defined");
}

height = 23;
if (height == '23') {
    console.log("== type conercion");
}

if (height === '23') {
    console.log("=== strict");
} else {
    console.log('Invalid types')
}
*/

/* challenge 2
var johnAve = (110 + 120 + 103) / 3;
var mikeAve = (116 + 94 + 123) / 3;
var winner;
var ave;

johnAve === mikeAve ? winner = "was a Draw" : ( johnAve > mikeAve ? winner = "was John" : winner = "was Mike");
johnAve === mikeAve ? ave = johnAve : ( johnAve > mikeAve ? ave = johnAve : ave = mikeAve);
//console.log("Thw winner is " + winner + " with an average of " + ave + " points per game.");

var maryAve = (97 + 40 + 105) / 3;
if (ave < maryAve) {
    winner = "was Mary";
    ave = maryAve;
}
console.log(johnAve, mikeAve, maryAve);
console.log("Thw winner " + winner + " with an average of " + ave + " points per game.");
*/

/* functions

// declaration
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function calculateRetirement(year, name) {
    var age = calculateAge(year);
    var retire = 72 - age;
    console.log(name + ' will retire in ' + retire + ' years');
}

calculateRetirement(1961, 'Me');


// function expression
var whatDoYouDo = function(job, name) {
    switch(job) {
        case "teacher":
        case "instructor":
            return name + " Teachs physics."
        case "developer":
            return name + " Writes software."
        case "engineer":
            return name + " Designs buildings."
        case "driver":
            return name + " Drives for uber."
        default:
            return "Unknown"
    }
}

console.log(whatDoYouDo('developer', 'Me'));
console.log(whatDoYouDo('teacher', 'Me'));

*/

/* arrays
*/

// inialization
var names = ["Aries", "Panda", "Trouble"];
var years = new Array(2010, 2015, 2018);

console.log(names[0], years[0]); 
console.log(names.length);          // number of elements in the array

// mutate array
names[1] = "Casper";
names[5] = "Panda";
console.log(names);

// different data types

var cat = ["Panda","Black & White", 2015, true];

cat.push("hissy");                  // add element to end of array
console.log(cat);

cat.unshift("female");              // add to beginning of array.
console.log(cat);

cat.pop();                          // pop to last element off the array.
cat.shift();                        // remove first element of the array.
console.log(cat);
