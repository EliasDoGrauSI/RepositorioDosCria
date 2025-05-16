algoritmo "EleicaoDiretorioAcademico"
// Seção de Declarações
var
   voto, chapa1, chapa2, brancos, nulos, total, FLAG : inteiro

inicio
   // Inicialização
   chapa1 <- 0
   chapa2 <- 0
   brancos <- 0
   nulos <- 0
   total <- 0
   FLAG <- -1
   // Entrada de dados
   escreval("Sistema de Apuração Eleitoral")
   escreval("-----------------------------")
   escreval("Digite o voto: ")
   escreval("1 - Chapa 1")
   escreval("2 - Chapa 2")
   escreval("0 - Branco")
   escreval("3 - Nulo")
   escreval("-1 - Encerrar")
   escreval("Opção: ")
   leia(voto)

   // Processamento
   enquanto voto <> FLAG faca
      escolha voto
      caso 1
         chapa1 <- chapa1 + 1
         total <- total + 1
      caso 2
         chapa2 <- chapa2 + 1
         total <- total + 1
      caso 0
         brancos <- brancos + 1
         total <- total + 1
      caso 3
         nulos <- nulos + 1
         total <- total + 1
      outrocaso
         escreva("Voto inválido! Use: 1, 2, 0, 3 ou -1")
      fimescolha

      escreva( "Próximo voto (-1 para encerrar): ")
      leia(voto)
   fimenquanto

   // Apuração
   escreval( "======== RESULTADO FINAL ========")
   escreval("Total de votos Chapa 1: ", chapa1)
   escreval("Total de votos Chapa 2: ", chapa2)
   escreval("Votos em branco: ", brancos)
   escreval("Votos nulos: ", nulos)
   escreval("Total de votantes: ", total)

   // Vencedor
   se chapa1 > chapa2 entao
      escreva("CHAPA 1 VENCEU A ELEIÇÃO!")
   senao
      se chapa2 > chapa1 entao
         escreva("CHAPA 2 VENCEU A ELEIÇÃO!")
      senao
         escreva("EMPATE TÉCNICO!")
      fimse
   fimse
fimalgoritmo