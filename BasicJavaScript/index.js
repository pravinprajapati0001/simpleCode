
// let guessNumber=24;

// let userNumber= prompt("Please Enter your guess number :-")

// while(userNumber != guessNumber){
//     userNumber=prompt("Your are enter wrong number..Please try again !!")
// }

// console.log("Congratulations! your are enter right number")



// let objectData={
//     fullName:'pravin prajapati',
//     age: 45,
// }

// let result="My name is "+objectData.fullName+" age is "+objectData.age;
// let stringTemplate=`My name is ${objectData.fullName} and age is ${objectData.age}`

// console.log(result)
// console.log(stringTemplate)
// console.log("pravin\nprajapati")


// let fullName = prompt("Enter your name :");

// let userName = "@"+fullName+fullName.length;

// console.log(userName)
//Arrays in js

// let marks=[90,34,57,76,44,23,57,76,44,23];

// marks[2]=100;
// console.log(marks)


// let carData=['BMW','TOYOTA','TATA MOTORS','ENOVA','BOLERO','SWIFT'];
// for(let i=0; i<carData.length; i++){
//     console.log(carData[i])
// }

// console.log(carData)

// let marks=[33,30,45,67,89,30];
// let sum=0;

// for(let item of marks){
//     sum=sum+item;
// }

// let averageOfMarks=sum/marks.length;

// console.log(averageOfMarks)

// let items=[250,300,500,390,700,674];

// let index=0;

// for(let val of items){

//     let offers=val/20;

//     items[index]=items[index]-offers;
//     index++;
// }

// console.log(items)


// for(let i=0;i<items.length; i++){
//  let offers=items[i]/10;
//  items[i]=items[i]-offers;
// }

// console.log(items)

// function sum(a=5,b=7){
// return a+b;
// }
// console.log(sum(null,null))


// let fruitsData=['Orange','Apple','Mango','Banana'];

// console.log(fruitsData)

// fruitsData.push('DragonFruits');

// console.log(fruitsData);

// fruitsData.pop()
// fruitsData.pop()
// fruitsData.pop()

// console.log(fruitsData)


// let companiesName=['Google','Microsoft','Amazon','Flipkart','Yash'];
// console.log(companiesName)
// companiesName.shift();
// console.log(companiesName)
// companiesName.splice(2,2,'Ola');
// console.log(companiesName)

// companiesName.push("DurgaSoftTechnologies");
// console.log(companiesName)


// function sumOfNumber(a,b){
//     return a+b;
// }
// sumOfNumber(5,10);


//Arrow function

// const arrowFun=(a,b)=>{
//    return a+b;
// }

// let result=arrowFun(5,6)

// console.log(result)

//vowels count programs
// function countVowels(str){
//  let count=0
//  for(let i=0; i<str.length; i++){
//    if(str[i] === 'a' || str[i]=== 'i' || str[i]=== 'e' || str[i]=== 'o' || str[i] === 'u'){
//     count ++;
//    }  
//  }
//  return count;
// }

// let result=countVowels("nandini");

// console.log("Vowels :",result);


//Callback functions

// const myFunction=((dw)=>{}); 

//map methods
// let numbers=[1,3,4,6];

// let res=numbers.map((num)=>{
//  return num * num
// })

// console.log(res)

// filter method 
// let num=[1,2,4,6,2,1,5,0,3];

// let  filterValues=num.filter((val)=>{
// return val >5;
// })

// console.log(filterValues)

//Reduce methods

// let num=[1,2,3,4,5,6,20];

// let result=num.reduce((previousValue,currentValue)=>{
//     return previousValue < currentValue ? previousValue : currentValue ;
// })

// console.log(result)


// let studentMarks=[88,90,66,87,96,45,99];

// let greterValues=studentMarks.filter((val)=>{
//     return val >=90;
// })

// console.log(greterValues)


// let n=prompt("Enter your number");

// let arr=[];

// for(i=1;i<=n;i++){

//     arr[i-1]=i;
// }

// console.log(arr);

// let sum = arr.reduce((prev,curr)=>{
// return prev + curr;
// })

// console.log('Sum of array number : ',sum);


// let factorials = arr.reduce((prev,curr)=>{
//     return prev * curr;
//     })
    
//     console.log('factorails : ',factorials);
// window object 
// window.alert("Hello wolrd")