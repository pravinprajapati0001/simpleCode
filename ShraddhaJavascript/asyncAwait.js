//Asynchronous programming
// Async/Await and promisess and callback Hell

// function hello(){
//     console.log("Hello world");
// }
// hello();
// // setTimeout(hello,5000);
// setTimeout(()=>{
//   hello();
// },2000); //Timeout

// console.log("Async]msdm...............")

// **********************Synchronous execution *****************
// let a=10;
// let b=20;
// console.log("Sum of a+b :",a+b);
// console.log("Sum of a+b :",a+b);
// console.log("Sum of a+b :",a+b);
// console.log("Sum of a+b :",a+b);

// console.log("Sum of a+b :",a+c); //Block the execution code

// console.log("Sum of a+b :",a+b);
// console.log("Sum of a+b :",a+b);
// console.log("Sum of a+b :",a+b);

// **********************Asynchronous execution *****************

// console.log("Hello wolrd");
// console.log("Hello wolrd");
// console.log("Hello wolrd");
// console.log("Hello wolrd");
// console.log("Hello wolrd");
// console.log("Hello wolrd");
// function printHello(){
//     console.log("Hello i am print Hello function****");
// }
// setTimeout(()=>{
//     printHello();
// },2000);

// console.log("Pravin Prajapati");
// console.log("Pravin Prajapati");
// console.log("Pravin Prajapati");
// console.log("Pravin Prajapati");
// console.log("Pravin Prajapati");
// console.log("Pravin Prajapati");

//*********************Callback Function ***********************
// setTimeout(()=> { }) //callback function example

/************************* Callback Hell (Nesting Callback) */

// function getDataInfo(dataId){
//     setTimeout(()=>{
//         console.log("Show data",dataId);
//     },3000);
// }

// getDataInfo(1);
// getDataInfo(2);
// getDataInfo(3);

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log(dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{     //Callback Hell or Nesting callback functions
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 console.log("sakdnsaknk")
//             })
//         })
//     })
// })

//******************************* Promises  ***************************//
// resolved,Rejected,pending-->> Promises state
// const promise=new Promise((resolve,reject)=>{  //resolve and reject
//   console.log("Hello");
//     // reject("error");
//   resolve("Successfully");
// })

// console.log(promise);

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("Successs")
//        },5000);
//     })
// }

// getData(133);
//----------------------------------------------------------------
//  .then((res)=> {.....})  and .catch((err)=>{.......})

// const getPromises=()=>{
//     return new Promise((resolve,reject)=>{
//     // resolve("Success data");
//     reject("Network error");
//     })
// }

// let promise=getPromises();

// promise.then((res)=>{
//     console.log("Resilt",res);
// })

// promise.catch((error)=>{
//     console.log("Rejected : ",error);
// })
//-----------------------------------------------
//********************** Promise Chaining ***********/

// function asynFunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Data---1");
//         resolve("Success !");
//         },3000);
//     })
// }

// function asynFunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Data---2");
//         resolve("Success !-2");
//         },3000);
//     })
// }

// console.log("data print--- 1 ");
// console.log("Loading...................");
// let promise1=asynFunction1();
// promise1.then((res)=>{
//     console.log("data succes fully print",res);
// })

// console.log("data print ---2 ");
// console.log("Loading...................");
// let promise2=asynFunction2();
// promise2.then((res)=>{
//     console.log("data succes fully print-2",res);
// })

function asynFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data---1");
      resolve("Success !");
    }, 4000);
  });
}

function asynFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data---2");
      resolve("Success !-2");
    }, 4000);
  });
}

// console.log("Fetching data -1......");
// let p1 = asynFunction1();
// p1.then((res) => {
//   //promise chaining
//   console.log("Success fetch data 1");
//   console.log("Fetching data-2.......");
//   let p2 = asynFunction2();
//   p2.then((res) => {
//     console.log("Successfully fetch data-2");
//   });
// });

// console.log("Fetching data -1......"); //better code calling promise
// asynFunction1().then((res) => {
//   console.log("Succesfully fetch data-1");
//   console.log("Fetching data-2.......");
//   asynFunction2().then((res) => console.log("Successfully fetch data-2"));
// });

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("fetch data :", data);
//       resolve("Success ");
//     }, 2000);
//   });
// }

// getData(1)  //best way calling  
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     return getData(4);
//   }).then((res)=>{
//     console.log(res); 
//   })
 
// ********************** async/await *************//

// function apiCall(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data print");
//             resolve(200);
//         },2000);
//     })
// }

// async function callFun(){  // async-await fun
//     await apiCall();
//     await apiCall()  
// }


// function getData(getData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data :",getData);
//             resolve("Success");
//         },2000);
//     })
// }

// async function getAllData() {   // async await function
//     console.log("getting data -1");
//     await getData(100);
//     console.log("getting data -2");
//     await getData(200);
//     console.log("getting data -3");
//     await getData(300);
//     console.log("getting data -4");
//     await getData(400);
// }

//*************** IIFE (Immediately Invkoed Fucntion Expresion) **************//
// function getData(getData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data :",getData);
//             resolve("Success");
//         },2000);
//     })
// }

// (async function (){ 
//     console.log("getting data -1");
//     await getData(100);
//     console.log("getting data -2");
//     await getData(200);
//     console.log("getting data -3");
//     await getData(300);
//     console.log("getting data -4");
//     await getData(400);
// }) ();   //IIFE function
