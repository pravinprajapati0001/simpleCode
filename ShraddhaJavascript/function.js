
// function messagePrint(msg){
//     console.log("Hello World"+msg );
// }

// messagePrint("Pravin");


// function sum(a,b){
//     return a+b;
// }

// const res=sum(10,20);
// console.log(res)

//Arrow Function

// const arrowFunction=(a,b)=>{
// return a+b;
// }

// console.log(arrowFunction(3,5)) ;

//count vowels [a,i,e,o,u]

// function countVowels(str){
//     let count=0;
//     for(let val of str){
//         if(val === 'a' || val === 'i' || val === 'e' || val === 'o' || val === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let countValue=countVowels("ApnaCollagePRavin");
// console.log(countValue);


// const countView=(str)=>{
//     let count=0;
//     for(let val of str){
//         if(val === 'a' || val === 'i' || val === 'e' || val === 'o' || val === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let d=countVowels("ApnaCollagePRavin");
// console.log(d);


//forEach methods and callback function
// CallBack function:- A callback is a funciton to passed as an argument to another function.

// let num=[10,20,30,40,50];

// arr.forEach((val,index,arr)=>{
//  return val+1;
// })


// let calculateFun=(num)=>{
//     console.log( num*num)
// }
// num.forEach(calculateFun)

//Map method
// let arr=[10,20,30,40,50];

// let newAra=arr.map((val)=>{
// return val;
// })

// console.log(newAra);

// Filter method 
// let arr=[1,2,3,4,5,6,7,8];

// let newArry=arr.filter((val)=>{
//   return val>=3;
// })

// console.log(newArry);


//reduce mthod 
// let arr=[1,2,3,4,5,6];
// let output=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(output);

//Find max value in given arrays
// let num=[56,100,440,45,23,566];
// let maxValue=num.reduce((previous,current)=>{
//     return previous>current ? previous: current;
// })
// console.log(maxValue);

//practice question::-->1
// let arr=[89,99,34,56,88,96,100];
// let newArray=arr.filter((val)=>{
//    return val>90;
// })
// console.log(newArray);

//practice Q:-->2
// let n=prompt("Enter your number");
// let arr=[];
// for(let i=1;i<=n; i++){
//    arr[i-1]=i;
// }

// console.log(arr)

// let sum=arr.reduce((prev,curr)=>{
//   return prev+curr;
// })

// console.log("Sum of num :"+sum);

//  let factorial=arr.reduce((previous,current)=>{
//     return previous * current;
//  })

//  console.log("Factorial :"+factorial);


// console.log(window);

//DOM Manuplations

// let heading=document.getElementById("headingId");
// console.dir(heading);

// let headingClass=document.getElementsByClassName("headingClass");
// console.log(headingClass);

// let tags=document.getElementsByTagName("h1");
// console.log(tags);

// let quryTags=document.querySelector("p");
// console.log(quryTags);

// let quryID=document.querySelector("#headingId");
// console.log(quryID);

// let quryClass=document.querySelector(".headingClass");
// console.log(quryClass);

// let appendText=document.querySelector("h2");

// console.log(appendText);

// appendText.innerText=appendText.innerText+"from apna collage";


// let div=document.querySelector("div");

// console.log(div.getAttribute("class"));

// console.log(div.setAttribute("class","teen")).


// node.style
let button=document.querySelector("button");

button.style.backgroundColor="red";
button.style.color="white";
button.style.height="50px"
button.style.width="250px";
button.style.border="none";
button.style.borderRadius="30px"