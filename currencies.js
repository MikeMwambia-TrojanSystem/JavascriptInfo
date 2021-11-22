/**
 * Use of Intl API to format currencies.
 * https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html
 */

let formatterJPY = new Intl.NumberFormat('ja-JP',{
    maximumSignificantDigits: 2,
    style: 'currency',
    currency: 'JPY'
})

console.log(formatterJPY.format(0.2233 + 0.1)); // logs "￥0.32"


let formatterUSD = new Intl.NumberFormat('en-US');
let formatterBRL = new Intl.NumberFormat('pt-BR');
let formatterJPY = new Intl.NumberFormat('ja-JP');

console.log(formatterUSD.format(0.2233 + 0.1)); // logs "0.323"
console.log(formatterBRL.format(0.2233 + 0.1)); // logs "0,323"
console.log(formatterJPY.format(0.2233 + 0.1)); // logs "0.323"

