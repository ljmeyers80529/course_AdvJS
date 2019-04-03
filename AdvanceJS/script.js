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
*/
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