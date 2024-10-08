//************** Class and Object and Prototype */
// const employee={
//     marks:45,
//     salary:40000,
//     calculateTax(){
//         console.log("This is tax 10% rate");
//     }
// }


// const karanArjun={
//   kSalary:50000,
//   calculateTax(){
//     console.log("This is tax 50% rate");
// }
// }
// karanArjun.__proto__=employee;



//*********** Classs  */
// class ToyataCar{
//     constructor(brand,milege){
//         console.log("This is constructor");
//         this.brand=brand;
//         this.milege=milege;
//     }
//     start(){
//         console.log("this is start method");
//     }

//     stop(){
//         console.log("This is stop method");
//     }
// }

// let fortuner=new ToyataCar("Tata",100);  // Object creation
// console.log(fortuner);
// fortuner.start();
// fortuner.stop();

//******Inheritance */

// class Person{
//     constructor(){
//      console.log("I am construtor");
//     }

//     eatingFood(){
//         console.log("Eating Food");
//     }

//     wakingRun(){
//         console.log("waking Run");
//     }
//     wakingRun(good){
//         console.log("waking Run"); //overloading
//     }
// }

// class Engineer extends Person{
//     constructor(){
//         super();
//     }
//     eatingFood(){
//         console.log("Child class Eating Food"); //overriding
//     }

//     wakingRun(){
//         console.log("Child class waking Run");
//     }
// }

// let eng=new Engineer();
// eng.eatingFood();
// eng.wakingRun();



// Error Handling

let a=100;
let b=500;

console.log("a and b is sum :"+ (a+b));
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
try{
    console.log("a and b is sum :"+ a+c);
}catch(err){
    console.log(err);
}
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
console.log("a and b is sum :"+ a+b);
