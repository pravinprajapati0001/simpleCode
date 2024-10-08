// variables  var,let,const,Operator ,Data type

// let x=BigInt(3243);
// console.log(x)


// const product={
//     title:"Ball Pen",
//     price:-20,
//     rating:5,
//     discount:10
// }

// console.log(product)

//This is profile card object list 
// const profileCard={
//     name:"shraddha Sen",
//     age:34,
//     isFollewed:false,
//     messages:"Hello",
//     userId:'shraddha@23343',
//     emailId:'shraddha123123@gmail.com'
// }

// console.log(profileCard)

// let x=10, b;

// console.log(x++);
// console.log(x)

// let num=3;

// if(num%2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// num%2 === 0 ?console.log("Even") : console.log("Odd");;

//Swich 

// let num=3;

// switch(num){
//     case 1: console.log("monday");
//     break;
//     case 2: console.log("sunday");
//     break;
//     case 3: console.log("tuesday");
//     break;
//     case 4: console.log("wedesday");
//     break;
//     case 5: console.log("thirdsay");
//     break;
//     case 6: console.log("Friday");
//     break;
// }

// const marks=prompt("Enter your marks :");

// if(marks>=85){
//     console.log("A+ Grade");
// }else if(marks < 85 && marks >= 75){
//     console.log("A grade");
// }else if(marks<75 && marks>=60){
//     console.log("B grade");
// }else if(marks<60 && marks>=45){
//     console.log("C grade");
// }else if(marks<45 && marks>=33){
//     console.log("Passed")
// }else if(marks<33){
//     console.log("Failed");
// }

// for(let i=1; i<=10;i++){
//   if(i == 5){
//     continue;
//   }
//   console.log(i)
// }

// const str="Apna collage";

// for(let i of str){
//     console.log(i)
// }


// let student={
//     name:"rakeshkumar",
//     age:34,
//     cgpa:8.41,
//     fees:45000,
//     rollNo:4454,
//     isFollowed:true
// }

// for(let key in student){
//     console.log(key +':',+student[key])
// }

// for(let i=1;i<=100;i++){
//     if(i % 2 !== 0){
//         console.log("Even :"+i)
//     }
// }


// let gameNumber=45;

// let userNumber=prompt("Enter your guess number");

// while(userNumber != gameNumber){
//     userNumber=prompt("Your enter a wrong number !!");
// }

// console.log("Congratulations you enter right number");


// let str="ApnaCollage";

// let stringTemplates=`This is my collage name ${str}`

// console.log(stringTemplates);

// let stringName="Pravin prajapati";
// let newStr=stringName.slice(4)
// console.log(newStr);

// let str1="Pravin";
// let str2="Prajapati";
// let newString=str1.concat(str2);
// console.log(newString)

// let str="39328";
// let strNew=str.replace("28","4");
// console.log(strNew);

// let strChar="JavaScript";
// for(let i=0;i<strChar.length;i++){
//     console.log(strChar.charAt(i));
// }

// let str="I Love JavaScript";
// str=str.replace("I","S");
// console.log(str);

// let userName=prompt("Enter your username");

// let userId="@"+userName+userName.length+"32r5";

// console.log(userId);


// let str="pravin PRajapapti";
// let count=0;

// for(let i=0;i<str.length;i++){
//     if(str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u'){
//         count++;
//     }
// }
// console.log("Count :"+count);