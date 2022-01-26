const input = document.querySelector('input');
const btn = document.querySelector('button');
const arrBox = document.querySelector('boxArr');
const arr = [];

function inputValue() {
    let valueInput = input.value;
    let inputValueInteger = parseInt(valueInput);
    let newTab = arr.push(inputValueInteger);
}

function clearInput() {
    input.value = '';
}

function sumEl() {
    arr.reduce((acc,val) => {
        console.log('suma: ', a+b);
        //return a+b;
    })
}

function  checkBtn() {
    btn.addEventListener('click', function() {

        inputValue();
        clearInput();
        sumEl();
     });
}

checkBtn();