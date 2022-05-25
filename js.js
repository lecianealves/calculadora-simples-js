//to select class button
const buttons = document.querySelectorAll('button');

//to select class display
const display = document.querySelector('.display');

buttons.forEach(function(button){
    button.addEventListener('click', calculate)
});

function calculate(event){
    const clickButtoValue = event.target.value;

    if(clickButtoValue === "="){
        if(display.value !== ''){
            display.value = eval(display.value);
        }
    }else if(clickButtoValue === "C"){
        display.value = ''
    }else{
        display.value += clickButtoValue;
    }
}