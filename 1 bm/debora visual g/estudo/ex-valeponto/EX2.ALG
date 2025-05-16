Algoritmo "ex2"
// 2) Faça um algoritmo para calcular
//A = 4.PI.R^2 e V = ( 4.PI.R^3 )/3, onde R deverá ser lido.
Var
   r, a, v : real


Inicio
   escreval("entre com valior do Raio")
   leia(r)

   //conta
   a <- 4*pi*r^2
   v <- (4*pi*r^3) /3
   //resultado
   escreval("o valor da Area é: ", a:0:2)
   escreval("o valor do Volume é: ", v:0:2)

Fimalgoritmo