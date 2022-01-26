const input = document.querySelector('input');
const btn = document.querySelector('button');

const arr = [];
console.log(arr);

// function showValue() {
// let howValue = input.value;
//     console.log(howValue);
// }
// showValue();

function checkBtn() {
    btn.addEventListener('click', function() {
        let howValue = input.value;
    console.log(howValue);
        //showValue();
        let arrNew = arr.push(howValue);
        console.log(arrNew);
        console.log('Przycisk działa', arr.push(arrNew));
        //console.log('Dlugosc elementów tablicy: ', howValue);
        

        // function suma() {
        //     console.log(arrNew);
        //     let arrNew2 = arrNew.reduce(function(acc,val) {
        //         return acc + val;
        //     });
        //     console.log('SUma liczb: ',arrNew2);
        // }
        //suma();
        
        function sum(a,c) {
            return a+c;
        }
        let sum2 = arr.reduce(sum);
        sum2();
        console.log(sum2);
    });
}
checkBtn();
howValue = '';

console.log('ddd',arr);

// function inputValue() {
//     if (input.value) {
//         console.log('Wartosc jest');
//     } else {
//         console.log('Brak wartości');
//     }
// }
// input.addEventListener('click', inputValue());