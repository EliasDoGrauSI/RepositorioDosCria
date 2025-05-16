//DIEGO DAVI DE OLIVEIRA DIAS 202510164

/**
     * Elaborar um algoritmo que leia três números, coloque-os em ordem crescente e imprima-os nesta 
    ordem.
 */
function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    console.log(numeros[0], numeros[1], numeros[2]);
}

// Exemplo de uso:
let a = 50;
let b = 2;
let c = 3;

ordenarNumeros(a, b, c);


