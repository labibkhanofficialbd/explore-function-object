

function bringSingara(taka){
    console.log('singarar jonno taka dise', taka);
    console.log('mama singara den');

    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;

    return singaraQuantity;
}

var singara = bringSingara(100);

console.log('Ai nen', singara);