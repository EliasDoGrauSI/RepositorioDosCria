//DIEGO DAVI DE OLIVEIRA DIAS 202510164

/**
     *  Elaborar um algoritmo que leia o nome, a idade e sexo de 4 pessoas. Em seguida, calcule e 
    imprima:
    • A média das idades lidas deste grupo de indivíduos;
    • O total de Homens com idade entre 15 e 18 anos inclusive; 
    • O total de Mulheres com idade entre 18 e 21 anos inclusive;
    • A média das idades das mulheres lidas;
    • A média das idades dos homens lidos.
 */
const pessoas = [
    {nome:"claudio", idade: 15, genero: "M"},
    {nome:"pedro", idade: 50, genero: "M"},
    {nome:"maria", idade: 18, genero: "F"},
    {nome:"isa", idade: 21, genero: "F"}
];

let totalHomens = 0;
let totalMulheres = 0;
let idade1 = pessoas[0].idade; 
let idade2 = pessoas[1].idade; 
let idade3 = pessoas[2].idade; 
let idade4 = pessoas[3].idade; 

let media = (idade1 + idade2) / 2;
let media2 = (idade3 + idade4) / 2;
let mediaT = (idade1 + idade2 + idade3 + idade4) / 4;


for(let pessoa of pessoas) {
    if (pessoa.genero === "M" && pessoa.idade >= 15 && pessoa.idade <= 18) {
        totalHomens++;
    }
    if (pessoa.genero === "F" && pessoa.idade >= 18 && pessoa.idade <= 21) {
        totalMulheres++;
    }
}


console.log("Média total de idade: ", mediaT);
console.log("Total de Homens com idade entre 15 e 18 são: ", totalHomens);
console.log("Total de Mulheres com idade entre 18 e 21 são: ", totalMulheres);
console.log("Média de idade dos homens: ", media);
console.log("Média de idade das mulheres: ", media2);

