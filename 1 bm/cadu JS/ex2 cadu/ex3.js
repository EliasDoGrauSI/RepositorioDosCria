//DIEGO DAVI DE OLIVEIRA DIAS 202510164
/**
     * 3 – Um endocrinologista deseja controlar a saúde de seus pacientes e, para isso, se utiliza do Índice de
    Massa Corporal (IMC). Sabendo-se que o IMC é calculado através da seguinte fórmula IMC =
    peso/altura2, onde o peso é dado em Kg e a altura é dada em metros, elaborar um algoritmo que
    apresente o nome do paciente e sua faixa de risco, baseando-se na seguinte tabela:
    IMC Operação
    abaixo de 20 abaixo do peso
    a partir de 20 até 25 normal
    acima de 25 até 30 excesso de peso
    acima de 30 até 35 obesidade
    acima de 35 obesidade mórbida
 */

    // Lista de pacientes com nome, peso (kg) e altura (m)
const pacientes = [
    {nome: "João Silva", peso: 70, altura: 1.75},
    {nome: "Maria Oliveira", peso: 55, altura: 1.68},
    {nome: "Carlos Souza", peso: 90, altura: 1.80},
    {nome: "Ana Santos", peso: 120, altura: 1.65},
    {nome: "Pedro Costa", peso: 60, altura: 1.72}
]
    // Função para calcular IMC e classificar o risco
    function calcularIMC(peso, altura){
        return peso / (altura * altura)
    }
    
    function classificarRisco(imc) {
        if(imc < 20 ) {
            return "abaixo do peso";
        }else if (imc >= 20 && imc <= 25){
            return "normal"
        }else if (imc >= 25 && imc <= 30){
            return "excesso de peso"
        }else if (imc >= 30 && imc <= 35){
            return "obesidade"
        }else if (imc >= 35){
            return "obesidade mórbida"
        }
    }
    // Processando cada paciente
    for(let paciente of pacientes) {
        const imc = calcularIMC(paciente.peso, paciente.altura);
        const classificacao = classificarRisco(imc)
    
        console.log(`paciente: ${paciente.nome}`);
        console.log(`IMC: ${imc.toFixed(2)}`);
        console.log(`classificação: ${classificacao}`);
        console.log("-----------------------------------")
    }