//DIEGO DAVI DE OLIVEIRA DIAS 202510164
/**
     * 4 – O cardápio de uma Casa de Sucos é dado abaixo. Elaborar um algoritmo para ler o código do suco
    comprado, a quantidade de suco comprada e calcular a conta final.
Código do Suco       Sucos                                                 Preço
     1               Uva .........................................        R$ 5.50
     2               Morango .....................................        R$ 7.80
     3               Limão .......................................        R$ 10.00
     4               Maracujá ....................................        R$ 13.00
     5               Abacaxi .....................................        R$ 14.50
 */

     const cardapio = [
        {codigo: 1, nome: "Uva", preco: 5.50},
        {codigo: 2, nome: "Morango", preco: 7.80},
        {codigo: 3, nome: "Limão", preco: 10.00},
        {codigo: 4, nome: "Maracujá", preco: 13.00},
        {codigo: 5, nome: "Abacaxi", preco: 14.50}
    ];
    
    // Função para calcular o valor total da compra
    function calcularConta(codigo, quantidade) {
        // Encontra o suco no cardápio pelo código
        const suco = cardapio.find(item => item.codigo === codigo);
        
        if(!suco) {
            return "Código de suco inválido!";
        }
        
        const total = suco.preco * quantidade;
        return {
            suco: suco.nome,  // Corrigido para manter consistência
            valorUnitario: suco.preco,
            quantidade: quantidade,
            total: total
        };
    }
    
    // Exemplo de uso:
    const codigoComprado = 5;
    const quantidadeComprada = 2;
    
    const conta = calcularConta(codigoComprado, quantidadeComprada);  // Nome da função corrigido
    
    if (typeof conta === 'string') {
        console.log(conta); // Mostra mensagem de erro
    } else {
        console.log("=== CASA DE SUCOS ===");
        console.log(`Suco: ${conta.suco}`);
        console.log(`Valor unitário: R$ ${conta.valorUnitario.toFixed(2)}`);  // toFixed corrigido
        console.log(`Quantidade: ${conta.quantidade}`);
        console.log(`Total a pagar: R$ ${conta.total.toFixed(2)}`);  // toFixed corrigido
    }