//Diego Davi de Oliveira Dias 202510164

/**
 * 1 – Elaborar um algoritmo para calcular a área de um retângulo. O programa deverá solicitar ao usuário 
a largura e a altura do retângulo e então exibir a área calculada.
Área = largura x altura
 */

let L = 15;
let H = 20;
let A = L * H;
console.log("A área é: " + A);

/**
 * 2 – Elaborar um algoritmo para calcular o Índice de Massa Corporal (IMC) de uma pessoa. O programa 
deverá solicitar ao usuário o peso em quilos e a altura em metros, e então mostrar o valor do IMC.
IMC = Peso / (Altura x Altura)
 */
let KG = 20;
let Altura = 1.89;
let IMC = KG / (Altura * Altura);
console.log("O IMC do indivíduo é: " + IMC);

/**
 * 3 – Elaborar um algoritmo para calcular e imprimir a circunferência e a área de um círculo. O usuário 
deverá fornecer o raio do círculo e o programa deverá usar o valor de pi (π ≈ 3.14159) para calcular e 
exibir a circunferência e a área.
Circunferência = 2 * π * Raio
Área = π * Raio²
 */
let r = 9;
let Circunferência = 2 * 3.14 * r;
let Area = 3.14 * r ** 2;
console.log("O valor da Circunferência é: " + Circunferência);
console.log("O valor da Área é: " + Area);

/**
 * 4 – Elaborar um algoritmo que leia o preço original de um produto e calcule o preço final após a 
aplicação de um desconto de 10%. O programa deve imprimir o preço original, o valor do desconto, e o 
novo preço com o desconto aplicado.
 */

let desconto = 0.10;
let preço = 4000.00;
let novo_Preço = preço - desconto * preço;
console.log("O valor com desconto é: " + novo_Preço);

/**
 * 5 – Elaborar um algoritmo que leia três números inteiros positivos (P, Q, R), calcule e imprima o valor 
da média geométrica M desses números. A média geométrica é calculada como:
(raiz cúbica) P × Q × R 
 */
let P = 6;
let Q = 8;
let R = 3;
let Raiz_CU = Math.cbrt(P * Q * R);
console.log("O valor da média geométrica é: " + Raiz_CU);
