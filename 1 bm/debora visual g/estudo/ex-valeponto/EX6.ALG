Algoritmo "ex6"
//leia a matrícula,
//as quatro notas de um aluno na disciplina de Física,
//calcule a sua média anual e em seguida, diga qual foi o seu
//resultado,
//obedecendo os seguintes critérios:
// "	Aprovado Ò média   7,0;
//"	Recuperação Ò média   3,5 e < 7,0;
//"	Reprovado Ò média < 3,5.
Var
   // Seção de Declarações das variáveis
   Matricula : inteiro
   media, sm1, sm2 : real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("entre com a matrícula do aluno")
   leia(matricula)
   escreval("entre com a nota do primeiro semestre")
   leia(sm1)
   escreval("entre com a nota do segundo semestre")
   leia(sm2)
   //formula
   media <- (sm1 + sm2) / 2
   se(media >= 7.0)entao
      escreval("aluno aprovado!")
   senao
      se(media >= 3.5) e (media <= 6.9)entao
         escreval("alumo esta em recuperação!")
      senao
         se(media <= 3.4)entao
            escreval("aluno está reprovado!")
         fimse
      fimse
   fimse
   //resultado
   escreval("O aluno da matricula: ", matricula ," tirou : " , media)

Fimalgoritmo