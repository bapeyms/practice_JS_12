let screenJs = document.querySelector("#screen p");
let buttonsJs = document.querySelectorAll("#buttons button");
let calcString = "";
let justCalc = false;

buttonsJs.forEach(btn => {
    btn.addEventListener('click', CalcFunc)
});

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function CalcFunc(e) {
    const value = e.target.textContent;
    if (justCalc && !isOperator(value)){
        calcString = "";
        justCalc = false;
    }
    if (value === '='){
        calcString = eval(calcString);
        justCalc = true;
    } else{
        calcString += value;
    }
    screenJs.textContent = calcString;
}