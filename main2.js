const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const arrBox = document.querySelector('boxArr');
const arr = [];

function inputValue() {
    let valueInput = input.value;
    let inputValueInteger = parseInt(valueInput);
    console.log('wartość wpisana do inputa: ', +inputValueInteger)
    let newTab = arr.push(inputValueInteger);
    console.log('wartość tablicy : ', arr);

}

function clearInput() {
    input.value = '';
}

function  checkBtn() {
    btn.addEventListener('click', function() {

        inputValue();
        clearInput();
        const testSuma = arr.reduce( (acc,val)=> acc + val );
        console.log("suma tablicy arr: ", +testSuma);
     });
}

checkBtn();
