Algoritmo "ex4"
//altura e sexo de três pessoas. Em seguida, calcule
//e imprima a média das alturas lidas deste grupo de pessoas.
Var
   h1, h2, h3, media : real
   nm1, nm2, nm3,  sx1, sx2, sx3: caracter

Inicio
   escreval("entre com o nome da primeira pessoa")
   leia(nm1)
   escreval("entre com a altura da primeira pessoa")
   leia(h1)
   escreval("entre com o genero da primeira pessoa")
   leia(sx1)

   escreval("entre com o nome da segunda pessoa")
   leia(nm2)
   escreval("entre com a altura da segunda pessoa")
   leia(h2)
   escreval("entre com o genero da segunda pessoa")
   leia(sx2)

   escreval("entre com o nome da terceira pessoa")
   leia(nm3)
   escreval("entre com a altura da terceira pessoa")
   leia(h3)
   escreval("entre com o genero da terceira pessoa")
   leia(sx3)

   //formula
   media <- (h1 + h2 + h3) / 3
   //resultado
   escreval("A Altura do(a) ", nm1, " é de: " , h1, " e o genero é ", sx1)
   escreval("A Altura do(a) ", nm2, " é de: " , h2, " e o genero é ", sx2)
   escreval("A Altura do(a) ", nm3, " é de: " , h3, " e o genero é ", sx3)
   escreval("e a media de todos juntos é de: ", media:0:2)


Fimalgoritmo