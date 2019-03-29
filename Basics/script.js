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
var meHeight = 1.69;
var meMass = 81;

var markBMI = markMass / markHeight^2;
var meBMI = meMass / meHeight^2;
var isMarksBMI = markBMI > meBMI;
console.log(markBMI, meBMI);
console.log("Is Mark's BMI greater than me's?", isMarksBMI);
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
var meHeight = 1.69;
var meMass = 81;

var markBMI = markMass / markHeight^2;
var meBMI = meMass / meHeight^2;

if (markBMI > meBMI) {
    console.log("Mark's BMI if greater than me's");
} else {
    console.log("me's BMI if greater than marks's");
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
var meAve = (110 + 120 + 103) / 3;
var mikeAve = (116 + 94 + 123) / 3;
var winner;
var ave;

meAve === mikeAve ? winner = "was a Draw" : ( meAve > mikeAve ? winner = "was me" : winner = "was Mike");
meAve === mikeAve ? ave = meAve : ( meAve > mikeAve ? ave = meAve : ave = mikeAve);
//console.log("Thw winner is " + winner + " with an average of " + ave + " points per game.");

var maryAve = (97 + 40 + 105) / 3;
if (ave < maryAve) {
    winner = "was Mary";
    ave = maryAve;
}
console.log(meAve, mikeAve, maryAve);
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

var idx = cat.indexOf(2015);
console.log('Index of 2015 is ', idx);

var isBW = cat.indexOf('Black & White') === -1 ? "The cat NOT black and white" : "The cat IS black and white";
console.log(isBW); 
*/
/* challenge 3

function calculateTip(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        return bill * 0.15;
    }
    return bill * 0.1;
}

var bills = [124, 48, 268];
var totals = [];

totals.push(calculateTip(bills[0]) + bills[0]);;
totals.push(calculateTip(bills[1]) + bills[1]);
totals.push(calculateTip(bills[2]) + bills[2]);

console.log(bills, totals);
*/

/* objects and properties (dictionary or key/value pairs)

var cat = {
    name: 'Panda',
    color: 'Black & White',
    type: 'DSH',
    born: 2015
};

console.log(cat);
console.log(cat.color);
console.log(cat['name']);

console.log(cat);
cat.born = 2012;
cat['color'] = 'Orange';
console.log(cat);

var aries = new Object();
aries.color = "Orange";
aries.type = "DSH";
aries.born = 2010;
aries.sex = 'male';
console.log(aries);
*/

/* objects and methods

var cat = {
    name: 'Panda',
    color: 'Black & White',
    type: 'DSH',
    born: 2015,
    // calcAge: function(year) { return 2019 - year; }
    // calcAge: function() { return 2019 - this.born ;}
    calcAge: function() { this.age = 2019 - this.born ;}
};

// console.log(cat.name + " is " + cat.calcAge(2015) + " years old");
// console.log(cat.name + " is " + cat.calcAge() + " years old");
cat.calcAge();
console.log(cat.name + " is " + cat.age + " years old");

*/

/* challenge 4

aries = {
    name: 'Aries Meyers',
    mass: 75,
    height: 1.72,
    calcBMI: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}

nuzzie = {
    name: 'Nuzzie Meyers',
    mass: 71,
    height: 1.64,
    calcBMI: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}

if (aries.calcBMI() > nuzzie.calcBMI()) {
    console.log(aries.name + " has a bmi greater then " + nuzzie.name + " with a BMI of " + aries.bmi);
} else if (aries.bmi < nuzzie.bmi) {
    console.log(nuzzie.name + " has a bmi greater then " + aries.name + " with a BMI of " + nuzzie.bmi);
} else {
    console.log("Both " + nuzzie.name + " and  " + aries.name + " has  a BMI of " + nuzzie.bmi);
}

*/

/* loops (do, while, for)

for (var i = 0; i < 10; i++)
    console.log(i);

var names = ["Aries", "Panda", 2015, "Trouble", "Grey", "Nuzzie"];

for (var i = 0; i < names.length; i++)
    console.log(names[i]);
console.log('\n');

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}
console.log('\n');

for (var i = 0; i < names.length; i++) {
    if (typeof(names[i]) !== 'string') continue;
    console.log(names[i]);
}
console.log('\n');

for (var i = 0; i < names.length; i++) {
    if (typeof(names[i]) !== 'string')  break;
    console.log(names[i]);
}
console.log('\n');

for(var i = names.length-1; i >= 0; i--) console.log(names[i]);
*/

/* challenge 5

function calcAverage(paid) {
    var ave = 0;
    for(var i = 0; i < paid.length; i++) ave += paid[i];
    return ave / paid.length;
}

var me = {
    fullName: "Me Meyers",
    paid: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTip: function() {
        var tipValue;
        var bill;
        for(var i = 0; i < this.paid.length; i++) {
            bill = this.paid[i];
            if (bill < 50) {
                tipValue = 0.20;
            } else if (bill >= 50 && bill < 200) {
                tipValue = 0.15;
            } else {
                tipValue = 0.10;
            }
            this.tips.push(bill * tipValue);
            this.totals.push(this.tips[i] + bill);
        }
    }
}

me.calcTip();
console.log(me.fullName, me.paid, me.tips, me.totals);


var gremmie = {
    fullName: "Gremlin Meyers",
    paid: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTip: function() {
        var tipValue;
        var bill;
        for(var i = 0; i < this.paid.length; i++) {
            bill = this.paid[i];
            if (bill < 100) {
                tipValue = 0.20;
            } else if (bill >= 100 && bill < 300) {
                tipValue = 0.10;
            } else {
                tipValue = 0.25;
            }
            this.tips.push(bill * tipValue);
            this.totals.push(this.tips[i] + bill);
        }
    }
}

gremmie.calcTip();
console.log(gremmie.fullName, gremmie.paid, gremmie.tips, gremmie.totals);

meAve = calcAverage(me.tips);
gremmieAve = calcAverage(gremmie.tips);

if (meAve > gremmieAve) {
    console.log(me.fullName + " had a high tip average than " + gremmie.fullName + " @ " + meAve);
} else if (meAve < gremmieAve) {
    console.log(gremmie.fullName + " had a high tip average than " + me.fullName + " @ " + gremmieAve);
} else {
    console.log("Both " + me.fullName + " and " + gremmie.fullName + " had the sametip @ " + meAve);
}

*/


