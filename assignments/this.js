/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding: Prints out the window/console Object, which is JavaScript itself. It is a very big Object with many properties
 * 2. Implicit Binding - References the object that executes the method
 * 3. New Binding - When a new Object is being created through a constructor, 'this' refers to the new Object
 * 4. Explicit Binding - Passing in an object through the .call or .apply method and this refers to the object being passed in. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this) 

// Principle 2

// code example for Implicit Binding
let bananaObject = {
    name: 'banana',
    type:'fruit',
    color:'yellow',
    description: function(){
        console.log(`I am a ${this.type}, a ${this.color} ${this.name}!`);
    }
};
bananaObject.description(); // I am a fruit, a yellow banana!
// Principle 3

// code example for New Binding

function Sandwich(sandProps){
    this.bread = sandProps.bread;
    this.meat = sandProps.meat;
    this.condiments = sandProps.condiments;
    this.veggies = sandProps.veggies;
}

let subway = new Sandwich(
    {
        bread: "white",
        meat: "smoked ham",
        condiments: "mayo",
        veggies: "lettuce"
    }
);

console.log(subway);
// Principle 4

// code example for Explicit Binding
//Use bananaObject from earlier

let potatoObject = {
    name: 'potato',
    type: 'vegetable?',
    color: 'red',
    description: function(){
        console.log(`I am a ${this.type}, a ${this.color} ${this.name}!`);
    }
};

bananaObject.description.call(potatoObject);