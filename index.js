const numbers = document.querySelectorAll("#number");
const result = document.querySelector(".input");
const signs = document.querySelectorAll("#sign");
const negative = document.querySelector("#negative");
const equal = document.querySelector("#equal");
const percent = document.querySelector("#percent");
const clear = document.querySelector("#clear");

let firstValue= "";
let secondValue = "";
let sign ="";
let resultvalue=0;
let isFirstValue = false;
let isSecondValue = false;

for(let i= 0; i<numbers.length; i++){
    numbers[i].addEventListener('click', (e)=>{
      let atr = e.target.getAttribute('value');
 
        if(isFirstValue === false){
         getFirstValue(atr);
        }
        if(isSecondValue === false){
            getSecondValue(atr);
        }
    })
}
function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}
function getSecondValue(el){
    if(firstValue != "" && sign !=""){
     result.innerHTML="";
     secondValue += el;
     result.innerHTML = secondValue;
     secondValue = +secondValue
    }
}
function getSign(){
    for(let i=0; i<signs.length; i++){
        signs[i].addEventListener('click', (e)=>{ sign = e.target.getAttribute('value');
        isFirstValue = true;  
        
        }   
    )}
    }

getSign();

equal.addEventListener('click', ()=> {
    result.innerHTML= "";
    if(sign === "+"){
        resultvalue = firstValue+secondValue;
        colorChange()
    }else if (sign === "-"){
        resultvalue = firstValue - secondValue;
    }
    else if(sign === "×"){
        resultvalue = firstValue * secondValue;
    }
    else if(sign === "÷"){
        resultvalue = firstValue / secondValue;
    }
    result.innerHTML = resultvalue;
    firstValue = resultvalue;
    secondValue = "";
    }

)
 negative.addEventListener('click', ()=>{
    result.innerHTML = "";
    if(firstValue !=""){
        resultvalue = -firstValue;
        firstValue = resultvalue;

    }
    if(firstValue!= "" && secondValue != "" && sign !="" ){
        resultvalue = -resultvalue;
    }
    result.innerHTML = resultvalue;
 }) 

percent.addEventListener('click', ()=> {
    result.innerHTML.html="";
    if(firstValue != ""){
        resultvalue = firstValue/100;
        firstValue = resultvalue;
    }
    if(firstValue != "" && secondValue !="" && sign !=""){
        resultvalue= -resultvalue/100;
    }
    result.innerHTML = resultvalue;
})
clear.addEventListener('click', ()=>{
    result.innerHTML= 0;
    firstValue ="";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultvalue = 0;
})
