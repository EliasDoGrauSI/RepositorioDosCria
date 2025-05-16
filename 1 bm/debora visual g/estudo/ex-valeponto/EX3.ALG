Algoritmo "ex3"
//o nome, cargo e salário de dois funcionários.
// Em seguida, calcule o reajuste salarial de 20%
//em cima de cada salário e a média salarial,
//depois de reajustados, desses dois funcionários lidos.
Var
   nome1, nome2, cargo1, cargo2 : caracter
   sal1, sal2, reaj1, reaj2, media : real

Inicio
   escreval("entre com o nome do primeiro funcionario")
   leia(nome1)

   escreval("entre com o cargo do primeiro funcionario")
   leia(cargo1)

   escreval("entre com salario do peimeiro funcionario")
   leia(sal1)

   escreval("entre com o nome do segundo funcionario")
   leia(nome2)

   escreval("entre com cargo do segundo funcionario")
   leia(cargo2)

   escreval("entre com salario do segundo funcionario")
   leia(sal2)

   //reajuste salarial
   reaj1 <- sal1 * 1.20
   reaj2 <- sal2 * 1.20
   media <- (reaj1 + reaj2) / 2

   //resultado
   escreval("O reajuste do(a) ", nome1, " é de ", sal1, " para: ", reaj1:0:2)
   escreval("O reajuste do(a) ", nome2, " é de ", sal2, " para: ", reaj2:0:2)
   escreval("A media salarial depois do reajste é de:", media)




Fimalgoritmo