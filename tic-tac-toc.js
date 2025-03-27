// let num=0
// while(num=1 , num>=100 , num++);
// console.log(num);
// let num = 1; // Start from 1
// while (num <= 100) { // Loop until 100
//     console.log(num); // Print the number
//     num++; // Increment the number
// }
// for (let num = 1; num <= 100; num++) {
//     console.log(num);
// }
// let gameNum = 10;
// let userNum = prompt("guess the number: ");
// while(userNum != gameNum){
//     userNum = prompt("you guessed the wrong number , please enter again");
// }
// console.log("congradulations you guessed it right");

// let fullName = prompt("Enter your full name: ");  
// let size = fullName.length;  // `length` is a property, not a method  
// let userName = "@" + fullName + size;  // Corrected variable name  
// console.log(userName);  // Corrected variable name  
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
//         { 
//         count++;
//         }
//     }
//     console.log(count);
// }  
// let marks = [50 , 98 , 60 , 99 , 100 , 55];
// let output = marks.filter((val) =>
// {
//     return val > 90;
// });
// console.log(output);
// let numbers = [5, 10, 20, 8, 15];
// let maxNum = numbers.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log("Maximum number is:", maxNum);
let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0=true;
    enabelBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if (turn0){
        box.innerText="0";
        turn0=false;
      } else{
        box.innerText="X";
        turn0=true;
      }
      box.disabled=true;
      checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabelBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val!=""&& pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

