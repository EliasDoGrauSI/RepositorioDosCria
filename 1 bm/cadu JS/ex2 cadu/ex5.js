//DIEGO DAVI DE OLIVEIRA DIAS 202510164

/**
     * 5 – Elaborar um algoritmo para ler os coeficientes A, B e C de uma equação do segundo grau
    levando-se em consideração os seguintes critérios:
    • Se delta for negativo: imprimir a mensagem ”Não há solução real.”;
    • Se delta for igual a zero: imprimir a mensagem “Duas raízes reais iguais.” e calcular e imprimir
    a raiz da equação;
    • Se delta for maior do que zero: imprimir a mensagem “Duas raízes reais diferentes.” e calcular
    e imprimir as raízes da equação.
    delta = B^2 − 4AC
    Fórmula = "-B±√B^2 − 4AC/2
    !+
 */

// Valores fixos da equação: A*x² + B*x + C = 0
const A = 1;   // Coeficiente de x²
const B = -5;  // Coeficiente de x
const C = 6;   // Termo independente

// Verifica se é uma equação do segundo grau
if (A === 0) {
    console.log("Não é uma equação do segundo grau (A = 0).");
} else {
    // Calcula o delta (Δ = B² - 4AC)
    const delta = B * B - 4 * A * C;

    // Caso 1: Delta negativo → Sem raízes reais
    if (delta < 0) {
        console.log("Não existem raízes reais (Δ < 0).");
    } 
    // Caso 2: Delta zero → Raiz única (duas raízes iguais)
    else if (delta === 0) {
        const raiz = -B / (2 * A);
        console.log("Δ = 0 → Raiz dupla (duas raízes iguais):");
        console.log(`x = ${raiz.toFixed(2)}`);
    } 
    // Caso 3: Delta positivo → Duas raízes reais diferentes
    else {
        const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
        const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
        console.log("Δ > 0 → Duas raízes reais diferentes:");
        console.log(`x₁ = ${raiz1.toFixed(2)}`);
        console.log(`x₂ = ${raiz2.toFixed(2)}`);
    }
}