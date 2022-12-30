// Declaring a class which name is Car.
// Using PascalCase is convention for class names.
class Car {
    // Setting constructor.
    // Instances of this Car class can set a value for the 'carname' on creation.
    constructor(brand) {
      //'this' represents a Car instance itself.
      //An instance can be created by passing the required value in the argument as follows:
      // const jeep = new Car('Jeep')
      // Then the value can be accessed as follow:
      // jeep.carname
      this.carname = brand;
    }
    // Setting a class method.
    // All instances that has provided the value required by the constructor,
    // The method is accessible as follow:
    // instance.present()
    present() {
      // return 'I have a <brand>' when it's called.
      return 'I have a ' + this.carname;
    }
 }
  
 // Declaring a class whose name is Model and inherits from the class Car.
 // Inheriting allows the child class to have the same properties as the parent class.
 class Model extends Car {
    // Setting constructor. It will overwrite the existing constructor from the parent class.
    // Two values are required, one for the brand and one for the mod.
    constructor(brand, mod) {
    // super keyword let the child class use the same constructor with its parent class.
      super(brand);
    // Initialising the additional that parent class doesn't have.
      this.model = mod;
    }
    // Adding an additional method only available for the instances of the child class.
    // It doesn't overwrite the existing method from the parent class.
    show() {
      // this.present() is the method from the parent class.
      // It's accessible because this class is inherited from the class Car.
      // this.model is from the constructor, it retrieves the value of the ‘model’.
      // If the instance correctly passed two values required from the constructor,
      // when instance.show() is called, it will execute the following
      return this.present() + ', it was made in ' + this.model;
    }
 }
  
 // The variables declared by using the let keyword have these features:
 // block scope, can't be redeclared, must be used before it's used.
 // Block scope means that if the variable is declared inside of the curly braces,
 // it can't be accessed outside of the curly braces.
  
 // Declaring an array that has three string elements.
 let makes = ["Ford", "Holden", "Toyota"]
  
 // Array.from returns a new array from an iterable object or an array-like object.
 // This iterable object or an array-like object must be provided as the first argument.
 // The second optional argument is a map function. It takes two arguments,
 // first one represents each element and the second one represents the respective index of elements.
 // This map function will map the function to all elements in the array and change the elements accordingly in the array.
  
 //new Array(40) creates a new array that has 40 empty elements.
 // x is undefined because it represents the element and in this case, the elements are empty.
 // i represents the index of each element.
 // it will create a new array that has 1980 - 2019
 // because index of 40 elements are from 0 to 39
 // To sum up, the code below says 'Create an array from an array that has 40 empty elements,
 // and assign their values to have respective index + 1980.'
 let models = Array.from(new Array(40), (x,i) => i + 1980)
  
 //Declaring a function that accepts two parameters
 function randomIntFromInterval(min,max) { // min and max included
      // Math.floor leaves only the first digit of a number and dump the rest.
      // Math.random() generates a random floating point number between 0 and 1.
      // This function will work in the following order:
      // Get the value of max - min + 1. Then multiply the random float.
      // Then add min. Then leave only the first digit of the number.
      return Math.floor(Math.random()*(max-min+1)+min);
 }
  
 // for ... of loop iterates over the iterable objects
 // and returns each element in order at a time.
 // The loop will finish after the last element has been passed.
 // model represents each element in the models array.
 for (model of models) {
   
    // randomIntFromInterval(0,makes.length-1) function generates a random integer from 0 to 2.
    // .length returns a number of elements
    // array[index] returns an element in the array that has specified index number.
  
    // declare 'make' and 'model' as global variables.
    // They are accessible out of this loop.
    // Since the 'model' is declared as a global variable,
    // It will overwrite the 'model' declared above.
    // The 'make' will have an element from the array 'makes' that index is from 0 to 2.
    make = makes[randomIntFromInterval(0,makes.length-1)]
    // The 'model' will have an element from the array 'models' that index is from 0 to 2.
    model = models[randomIntFromInterval(0,makes.length-1)]
   
    // The 'mycar' also declared as a global variable which means it's accessible outside of this loop.
    // Create a new instance of the class 'Model' and pass 'make' and 'model' values to the constructor.
    mycar = new Model(make, model);
    // Console logs the 'mycar''s class method 'show()'which is declared in the class Model body.
    console.log(mycar.show())
 }
  
 