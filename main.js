const input = document.querySelector('input');
const btn = document.querySelector('button');
const arrBox = document.querySelector('boxArr');

const arr = [];
console.log('Wyświetlenie pustej tablicy: ' ,arr);

function checkBtn() {
    btn.addEventListener('click', function() {
        let howValue = input.value;
        let pp = parseInt(howValue);
        let arrNewIntegerType = arr.push(pp);
        console.log('Wypełniona tablica to: ', arr);
        input.value = '';
        const sum = arr.reduce( (acc, val) => {
            return acc+val;
        });
        console.log('Suma liczb z tablicy to: ' +sum);
    });
}

checkBtn();

