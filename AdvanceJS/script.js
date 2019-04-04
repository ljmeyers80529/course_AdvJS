/* function constructor
// creating objcts with new

// var nuzzie = {
//     name: 'nussize',
//     yearOfBirth: 2013,
//     job: 'cat'
// };


var Cat = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2019 - this.yearOfBirth);
    // };
}

Cat.prototype.calculateAge = function() {       // inheritence.
    console.log(2019 - this.yearOfBirth);
}

Cat.prototype.lastName = "Meyers";

var nuzzie = new Cat('nuzzie',2013,'cat');
var ginger = new Cat('Ginger', 2018, 'kitten');
var goldy = new Cat('Goldy Bear', 2007, 'cat');

nuzzie.calculateAge();
ginger.calculateAge();
goldy.calculateAge();

console.log(nuzzie.lastName);
console.log(ginger.lastName);
console.log(goldy.lastName);
*/

/* creating objects with Object.create.

var catProto = {
    calculateAge: function() {
        console.log(2016-this.yearOfBirth);
    }
};

var nuzzie = Object.create(catProto);
nuzzie.name = "nuzzie";
nuzzie.yearOfBirth = 2015;

var duchess = Object.create(catProto, {
    name: { value: "Duchess"},
    yearOfBirth: {value: 2011}
})

*/

// primative vs objects
/*
//primatives
var a = 23;
var b = a;
a = 46;
console.log(a,b);

// objects
var obj1 = {
    name: 'nuzzie',
    age: 8
};

var obj2 = obj1;
obj1.age = 5;
console.log(obj1.age, obj2.age);

// functions
var age = 11;
var obj = {
    name: 'nuzzie',
    city: 'fresno'
}

function change(a, b) {
    a = 30;
    b.city = 'clovis';
}

change(age, obj);

console.log(age, obj.city);

// primative passed by value, object is passed by reference.
*/

// passing function as arguments (callbacks)
/*
var years = [2011, 2018, 2008, 1996, 1961];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(year) {
    return 2019 - year;
}

function isFullAge(age) {
    return age >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rate = arrayCalc(ages, maxHeartRate);
    console.log(ages, fullAges, rate    );
*/

// functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ", can you please explain UX design is?");
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var tq = interviewQuestion('teacher');
var dq = interviewQuestion('designer');
var uq = interviewQuestion('developer');
tq('me');
dq('nuzzie');
uq('rocky');

interviewQuestion('teacher')('dora');

// immediatly invoked function expressions (IIEF)
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5-goodLuck);
})(5);
*/

// closures
/*
function retirement(retirementAge) {
    var a = " years left until retirement."
    return function (birth) {
        var age = 2019 - birth;
        console.log((retirementAge - age) + a)
    }
}

var retireUS = retirement(66);
var retireGer = retirement(65);
var retireIce = retirement(67);

retireUS(1961);
retireGer(1961);
retireIce(1961);
//also 
// retirement(72)(1990);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ", can you please explain UX design is?");
        } else if (job === 'teacher') {
            console.log("What subject do you teach, " + name + "?");
        } else {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

interviewQuestion('teacher')('nuzzie');
interviewQuestion('developer')('duchess');
interviewQuestion('designer')('gremmie');
*/
// bind, call, and apply.

var nuzzie = {
    name: 'nuzzie',
    age: 11,
    job: 'cat',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey, what\'s up ' + ', I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
};

var dora = {
    name: 'dora',
    age: 0.25,
    job: 'kitten'
};

nuzzie.presentation('formal', 'morning');
nuzzie.presentation.call(dora, 'friendly', 'afternoon');            // using the call method

//nuzzie.presentation.apply(dora, ['friendly', 'evening']);           // will not work, the method does not accept an array.
/*
var x = nuzzie.presentation.bind(dora);
var y = nuzzie.presentation.bind(dora, 'friendly');
x('formal', 'evening');
y('morning');
*/

var years = [2011, 2018, 2008, 1996, 1961];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(year) {
    return 2019 - year;
}

function isFullAge(limit, age) {
    return age >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fa = arrayCalc(ages, isFullAge.bind(this, 20));     // preset limit to a set value so arrayCalc can execute.
console.log(fa);

