let readline = require('readline-sync');
let validar = true;
let valorMaximo = 0;
let numRepeticiones = 1;

console.log('Introduzca una serie de numeros positivos: (para finalizar introduzca cero)');

while (validar) {
 let dato = Number(readline.question('-> '));
 if (dato == 0 || Math.sign(dato) == -1) {
  validar = false;
 } else {
  if (dato == valorMaximo) {
   numRepeticiones++;
  }
  if (dato > valorMaximo) {
   valorMaximo = dato;
   numRepeticiones = 1;
  }
 }
}

console.log('\nResultados:\n');
console.log('Valor máximo de la serie de números: ' + valorMaximo);
console.log('Veces repetidas que aparece el valor máximo: ' + numRepeticiones + '\n');
