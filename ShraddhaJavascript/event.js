
// const clickFun=()=>{
//   console.log("Hello i am event");
// }

// let btn=document.querySelector("#btnId");

// btn.onclick=()=>{
//     console.log("Jayesh");
// }

// btn.onclick=(event)=>{
//    console.log(event.type);
//    console.log(event.target);
//    console.log(event);
// }
// btn.addEventListener("click",(e)=>{
//     console.log("hadler-1");
// })

// btn.addEventListener("click",(e)=>{
//     console.log("hadler-2");
// })

// let handlers=()=>{
//     console.log("hadler-3");
// }
// btn.addEventListener("click", handlers)

// btn.addEventListener("click",(e)=>{
//     console.log("hadler-4");
// })

// btn.removeEventListener("click",handlers);

// let div=document.querySelector(".bttnClass");

// div.onmouseover=()=>{
//     console.log("Nandini prajapati");
// }


let bttn=document.querySelector("#modeChangeId");
let currMode="light";
// bttn.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black"
//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white"
//     }
//     console.log(currMode);
// })

let body=document.querySelector("body");
bttn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark ");
    }
    console.log(currMode);
})



