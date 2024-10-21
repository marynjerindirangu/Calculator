const PreviousScreen = document.querySelector(".previous-screen");
const currentScreen = document.querySelector(".current-screen");
const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const decimalButton = document.querySelector("decimal");

let operator ="";
let currentValue = "";
let previousValue = "";

numberButtons.forEach(button =>{
    button.addEventListener("click", (e) =>{
     showNumber(e.target.textContent);
    })
})

function showNumber(num){
    if(currentValue.includes(".") && num === ".") return
    currentValue += num;
    currentScreen.textContent= currentValue;
    console.log(currentValue)
}

operationButtons.forEach(button =>{
    button.addEventListener("click", (e) =>{
        chooseOperation(e.target.textContent);
    })
})

function chooseOperation(op){
    operator = op;
    previousValue = currentValue + operator;
    PreviousScreen.textContent = previousValue;
    currentScreen.textContent=" ";
    currentValue = " ";
    console.log(previousValue)
    console.log(operator)
}

function resultsDisplay(){
    currentScreen.textContent = results;
    PreviousScreen.textContent = "";
}

clearButton.addEventListener("click", ()=>{
    currentScreen.textContent="";
    PreviousScreen.textContent="";
    previousValue="";
    currentValue="";
})

equalButton.addEventListener("click", () =>{
   calculate(operator);
   resultsDisplay();
})
  
let results;
    
function calculate(operator) {
    previousValue = parseFloat(previousValue);
    currentValue = parseFloat(currentValue)

    if(operator === "+") {
       results = previousValue + currentValue
    }
    else if(operator === "-"){
        results = previousValue - currentValue
    }
    else if(operator === "/"){
        if(currentValue ===0){
            results = "infinity"
        }
        results = previousValue / currentValue
    }
    else{
        results = previousValue * currentValue
    }
     console.log(results)
}