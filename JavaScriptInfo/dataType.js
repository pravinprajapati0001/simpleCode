//Data types:- number string boolean null undefined bigInt symboles
//var keyword
// var x=10;
// var x=100; //we can re-decalred and global variables
// console.log(x);

//let keyword
// let x=10;
// let x=100;  // Error: x is already declared  // block scope 
// console.log(x);

//Const keyword
// const x=10;
// const x=100; // can't re-declared and can't changed values // block scope
// console.log(x);

//*** number data type */
// let x=124523;
// console.log(typeof x);
// let double=56.66;
// console.log(double);

//*** String data type */
// let fullName='pravin prajapati';
// console.log(typeof fullName);

//*** Boolean data types */
// let isFollew = true;
// console.log(isFollew);

//*** null data types */
// let x=null;
// console.log(typeof x);

//*** undefined data types */
// let x;
// console.log(typeof x);

//*** BigInt */
// let x=BigInt(344477);
// console.log( typeof x);

//*** Symboles Data types */
// let x=Symbol(3);
// console.log(typeof x);


//*** Object refference data  types*/
// const student={
//     fullName:'pravin kumar',
//     age:25,
//     address:'Alamang maliwada  burhanpur'
// }
// student['fullName']='Rahul kumar'
// console.log(student);

//** practice questions */

// let mode='dark';
// let color='red';

// if(mode === 'dark'){
//     color='orange';    
// }else{
//     color='blue';
// }

// console.log(color);
// let num=prompt("Enter your number");

// if(num%5 === 0){
//     console.log(num,'number is multple of 5');
// }else{
//     console.log(num,'number is NOT multple of 5'); 
// }



for(let i=1;i<=5;i++){
    console.log(i*2)
}