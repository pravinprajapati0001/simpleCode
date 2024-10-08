
// let marks=[12,24,55,54,33,45];

// console.log(marks.length);

// let heroes=["Saktiman","Ironman","Superman","Batman"];

// console.log(heroes);


// let num=[5,5,5,5];
// let sum=0;

// for(let i=0;i<num.length;i++){

//     sum=sum+num[i];
// }

// console.log(sum);


// for(let item of num){
//     sum=sum+item;
// }

// console.log("Sum :"+sum);


// let products=[200,400,560,900,450];
// let i=0;
// for(let val of products){
//     let offers=val/10;
//     products[i]=products[i]-offers;
//     console.log(products[i]);
//     i++
// }

// Array methods
// let number=[10,30,40,50,60];
// number.unshift(1000);
// number.pop();
// number.push(5000)
// number.shift()
// console.log(number);

// let arr1=[10,20,30,40,50];
// let arr2=[60,70,80,90,40];

// let res=arr1.concat(arr2);
// console.log(res);
// res.pop();
// console.log(res.toString());

// let superHeroes=["Spiderman","Saktiman","Krishh","Bhola","Batman","Superman","Hulk"];
// console.log(superHeroes);
// let rs=superHeroes.slice(1);
// console.log(rs);
// console.log(superHeroes)
// superHeroes.splice(2,1,100);
// console.log(superHeroes);

let companies=["Microsift","Google","Amazon","Flipkart","Uber","Tesla","RelienceJio"];
companies.shift();  //remove first company name
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);