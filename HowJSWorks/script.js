/* hoisting

calculateAge(1967);                 // works due to function hoisting.

function calculateAge(year) {
    console.log(2019-year);
}

calculateAge(1961);


//retirement(1971);                   // does not work, the variable retirement is set to undefined.

var retirement = function(year) {
    console.log(72-(2019-year));
}

retirement(1961);

console.log(age);                       // reports as undefined.
var age = 33;
console.log(age);                       // display correct value.


function foo() {
    var age = 55;
    console.log(age);
}

foo();                                  // display 55 since age is local to the function foo.
console.log(age);                       // displays global age (33) value.
*/
/* scope

var a = "hello!";
first();

function first() {
    var b = "hi!";
    second();

    function second() {
        var c = "hey!";
//        console.log(a + b + c);
        third();
    }
}

function third() {
    var d = "me";
    // console.log(c);                 // not defined exception, c is out of scope.
    console.log(a + d);
}

third();
*/

/* 'this' keyword */

console.log(this);                  // global object

calculateAge(1961);

function calculateAge(year) {
    console.log(2019-year);
    console.log(this);              // global object
}

var me = {
    name: "me",
    year: 1961,
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.year);
        // function innerFunc() {
        //     console.log(this);      // points back to the global (window) object.
        // }
        // innerFunc();
    }
}
me.calcAge();

var nuzzie = {
    name: 'nuzzie',
    year: 2013
}

    nuzzie.calcAge = me.calcAge;    // method borrowing.
    nuzzie.calcAge();
