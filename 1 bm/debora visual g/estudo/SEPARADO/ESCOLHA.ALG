Algoritmo "ESCOLHA"

Var
   opcao : inteiro
Inicio

   escreval("Por favor, selecione uma opção:")
   escreval("1 - Iniciar atendimento")
   escreval("2 - Acompanhar pedido")
   escreval("3 - Falar com atendente")
   leia(opcao)

   // Estrutura de escolha
   escolha (opcao)
      caso 1
         escreval("Vamos iniciar seu atendimento")
      caso 2
         escreval("Vamos acompanhar o seu pedido")
      caso 3
         escreval("Você será encaminhado para um atendente")
      outrocaso
         escreval("Opção inválida")
   fimescolha

Fimalgoritmo