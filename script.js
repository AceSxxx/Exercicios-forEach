let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = [];

numeros.forEach(function(numero) {
  if (numero % 2 === 0) {
    numerosPares.push(numero);
  }
});

console.log(numerosPares);

//-----------------------------------------------------------------------//

let nomes = ["João", "Maria", "Carlos", "Ana"];
let prefixo = [];

nomes.forEach(function(nome) {
  prefixo.push("Sr(a)." + nome);
});

console.log(prefixo);

//-----------------------------------------------------------------------//

let numerosMaior = [4, 11, 8, 15, 23, 7, 2];
let contador = 0;

numerosMaior.forEach(function(numero) {
  if (numero > 10) {
    contador++;
  }
});

console.log(contador);

//-----------------------------------------------------------------------//

//sla

//-----------------------------------------------------------------------//

let nomesGrande = ["ana", "carlos", "maria"];

nomesGrande.forEach(function(nome, index, array) {
  array[index] = nome.toUpperCase();
});

console.log(nomesGrande);
