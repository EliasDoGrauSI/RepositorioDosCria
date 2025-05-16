Algoritmo "SE_APROVAção"

Var
   primeira_nota, segunda_nota, media : real

Inicio
   escreval("informe a primeira nota:")
   leia(primeira_nota)
   escreval("informe a segunda nota:")
   leia(segunda_nota)
   //função
   media <- (primeira_nota + segunda_nota) /2
   //resultado
   escreval("sua méia é: ", media)
   se (media >= 6) entao
      escreval ("aluno aprovado")
   fimse

   se (media >= 4) e (media <= 5)entao
      escreval ("aluno recuperação")
   fimse
   se (media <= 3)entao
      escreval ("aluno reprovado")
   fimse
Fimalgoritmo





