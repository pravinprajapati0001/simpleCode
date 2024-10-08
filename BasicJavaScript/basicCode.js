
// console.log("Demooooo");

//BackStick `` for Template String ${value}
//****************************************** */
// console.log(`NANDINI PRAJAPATI`) 

// 2. var (variables) in js and use strict mode and variables rules (underscore,doller,alphabet,numerics)
// we can re-declare a variable and change a values 
// ************************************
// "use strict"
//  firstName="DurgaSoft";
// console.log(firstName);
// firstName="AnilSoft";
// console.log(firstName)
// var first_$name="mfkfmm";


// 3. let keyword (can't redeclare and but we can change values)
// let x=100;
//  x=300;
//  {
//   let  x=133;
//     console.log(x)
//  }
// console.log(x);

// 4. const keywords (we can't re-declare const and also we can't change const values)
// const x=100;
// x=24214;
// console.log(x);

//5. String Indexing and find length  (length-1)
// let firstName="Durga Soft Solutions";
// console.log(firstName[4]);
// console.log(firstName.length);
// console.log(firstName[firstName.length-2]);
// console.log(firstName[18])

// 6. String methods ( trim(), toUperCase(), toLowerCase(), slice())
// let stringName=" Durg aSoft   ";
// console.log(stringName.length);
// let newString= stringName.trim(); // trim method remove spacing left and right
// console.log(newString.length);
// console.log(newString);
// let myName="pravin prajapati";
// let newMyname =myName.toUpperCase();
// console.log(newMyname)
// let toLowerCaseName =myName.toLowerCase();
// console.log(toLowerCaseName)
// let firstName="pravin";
// let newString=firstName.slice(0,4);
// console.log(newString)

//7. typeof operators (it is checked a type of data)
// let data=234;
// console.log(typeof data)
// convert number to string (using + "") and also predefine function String() method
// let num=100;
// let newString=num+"";
// console.log(typeof newString);
// let usingStringFun=String(num);
// console.log( typeof usingStringFun)
// Convert String to Number (Using +"100" + +10) and predefine function Number() method 
// let age="34";
// let newStringAge= +age+ +5;
// console.log( typeof newStringAge)

// let usingNumberFun= Number(age);
// console.log(typeof usingNumberFun)

//8. String Concatinations

// let firstName="pravin";
// let lastName="prajapati";

// let fullName= firstName + " "  +lastName;
// console.log(fullName);

// let num1="10";
// let num2="20";

// let newNumber= num1 + num2;
// console.log(newNumber);

// let converNumber= +num1 + +num2;
// console.log(converNumber)

// let converNumberFun= Number(num1) + Number(num2);
// console.log(converNumberFun)


//9. String Template (Using  ${value})
// let myName="pravin prajapapti";
// let age=28;

// let about= "My name is "+myName+ " and my is age"+age;
// console.log(about)

// let backStick=`my name is ${myName} and my age is+${age}`

//10. null, undefined, bigInt number
// let x=null;
// console.log(x);
// console.log(typeof x);
// let x=undefined;
// console.log(x);
// console.log(typeof x);
// let x=BigInt(2385823);
// console.log(x);
// let y=25n;
// console.log(typeof y)

// 11. comparison operator (!=, <,> , == and === )
//  == vs ===
// let num1="7";
// let num2=7;
// console.log(num1 == num2); // its only values checked
// console.log(num1 === num2); //its checked values and type of data also
// != vs !==
// console.log(num1 != num2);
// console.log(num1 !== num2); // here checked types of data 

// 12. if else , if else if else, nested if else 
// let num=15;

// if(num%2==0){
//     console.log("Even");
// }else {
//     console.log("odd")
// }