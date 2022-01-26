const input = document.querySelector('input');
const btn = document.querySelector('button');
const arrBox = document.querySelector('boxArr');

const arr = [];
console.log('Wyświetlenie pustej tablicy: ' ,arr);

function checkBtn() {
    btn.addEventListener('click', function() {
        let howValue = input.value;
        let pp = parseInt(howValue);
        console.log('Wprowadzona wartość do inputa pp! ', pp);
        console.log('typ wartosci pp: ', typeof pp);
        console.log('Wprowadzona wartość do inputa ', howValue);

        let arrNewIntegerType = arr.push(pp);
        console.log('nowa tablica jako Number to: ', +arrNewIntegerType);
        let arrNew = arr.push(howValue);
        console.log('Który element tablicy: ', arrNew);
        
        //jeszcze raz puszujue i dlatego dubluje
        //console.log('Przycisk działa', arr.push(arrNew));

        console.log('Wypełniona tablica to: ', arr)

        // function displayValue() {
        //     document.arrBox.innerHTML = arr;
        // }
        // displayValue();

        const test1 = arrNewIntegerType.reduce( (acc,value) => {
            return acc + value;
        });
        console.log('sumato: ', test1);

         function test() {
            //  const test = arr.reduce( (acc,value) => {
            //      return acc + value;
            //  });

             let stringArray = arr.join(',');
             console.log(typeof stringArray);
             console.log('wartosci typu string: ',stringArray);

             let stringToInteger = parseInt(stringArray);
            //  console.log('sprawdzanie typu: ', typeof stringToInteger);
            //  console.log('wartosci typu integer', stringToInteger);
            //  console.log('nowa funkcja sumująca', test);
             let tte = []
             //let tte = stringToInteger.split(',');
            // console.log(numberTypeArr)

             let bu  = tte.push(stringToInteger);
             console.log(bu);
        


            //  function numberToString() {
            //      let numberTypeArr = [];
            //      numberTypeArr = stringToInteger.push();
            //      console.log('nowa tablica typu integer: ',numberTypeArr);
            //  }
            //  numberToString();
         }
         test1();
         input.value = '';
    });
}
checkBtn();

