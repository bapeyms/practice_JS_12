let screenJs = document.querySelector("#screen p");
let buttonsJs = document.querySelectorAll("#buttons button");
let calcString = "";

buttonsJs.forEach(btn => {
    btn.addEventListener('click', CalcFunc)
});

function CalcFunc(e){
    const value = e.target.textContent;
    if (value === '=') {
        calcString = eval(calcString);
    } else {
        calcString += value;
    }
    screenJs.textContent = calcString;
}