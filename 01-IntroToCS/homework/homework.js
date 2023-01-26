

function BinarioADecimal(num) {
   let suma = 0;
   for (let i = 0; i <num.length; i ++){
      suma += num [i] * 2 ** (num.length - 1 - i);
      
   }
   return suma;
}

function DecimalABinario(num) {
 var binario = "";
 while(num>0){
   binario = (num%2) + binario
   num = Math.floor (num/2);
 }
 return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
