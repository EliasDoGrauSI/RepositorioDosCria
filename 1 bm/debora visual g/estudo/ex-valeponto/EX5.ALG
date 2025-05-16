Algoritmo "ex5"
// nome, a idade e sexo de 4 pessoas
//Em seguida, calcule e imprima a média das idades
Var
   nm1, nm2, nm3, nm4,sx1, sx2, sx3, sx4 : caracter
   age1, age2, age3, age4 , media: real



Inicio
   escreval("nome da primeira pessoa")
   leia(nm1)
   escreval("agora  a idade")
   leia(age1)
   escreval("entre com  o sexo")
   leia(sx1)

   escreval("nome da segunda pessoa")
   leia(nm2)
   escreval("agora a idade")
   leia(age2)
   escreval("entre com o sexo")
   leia(sx2)

   escreval("nome da terceira pessoa")
   leia(nm3)
   escreval("agora a idade")
   leia(age3)
   escreval("entre com o sexo")
   leia(sx3)

   escreval("nome da quarta pessoa")
   leia(nm4)
   escreval("agora a idade")
   leia(age4)
   escreval("entre com o sexo")
   leia(sx4)

   //formulas
   media <- (age1 + age2 + age3 + age4) / 4
   //resultado
   escreval("a idade das seguintes pessoas são: " , nm1 , " tem ", age1 ," anos " ,  nm2 , " tem ", age2 , " anos " , nm3 , " tem ", age3 , " anos "  , nm4 , " tem ", age4 ," anos " , "e a media delas são: ", media)



Fimalgoritmo