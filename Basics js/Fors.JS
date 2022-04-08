/* For in =>  Le o indice da array*/

const fruits = ["Banana", "Pera", "Mexirica"];
const desejos = { nome: "Anna", sonho: "Bilonaria" };

for (let i in fruits) {
   console.log("i", i);
  /* [Running] node "d:\Tech\JS.JS"
        0
        1
        2
        Ele esta lendo o indice da array
  */

  console.log("fruits", fruits);
  /*fruits [ 'Banana', 'Pera', 'Mexirica' ] 3x  */
  
  console.log("fruits[i]", fruits[i]);
  /* traz cada fruta como um loop 
    fruits[i] Banana
    fruits[i] Pera
    fruits[i] Mexirica*/
}

for (let i in desejos) {
  console.log("object i",i);
  /* traz o nome da key
        nome
        sonho
    */

  console.log("desejos", desejos);
  /* traz o objeto
        desejos { nome: 'Anna', sonho: 'Bilonaria' } x2 
    */
  console.log("desejos[i]", desejos[i]);
  /*
   retorna o Value
   Anna
   Bilonaria
   */
}


/* For of  => especifico para objetos interaveis*/

for(let i of fruits){

   console.log("of in array", i)
    /*
    Trouxe cada indice da array
    of in array  Banana
    of in array  Pera
    of in array  Mexirica
    */

   console.log("of in array",fruits)
    /*
    of in array [ 'Banana', 'Pera', 'Mexirica' ]
    of in array [ 'Banana', 'Pera', 'Mexirica' ]
    of in array [ 'Banana', 'Pera', 'Mexirica' ]
    
    */

    console.log("of in array",fruits[i]) 
    /*
    of in array undefined
    of in array undefined
    of in array undefined
     */

}


for (let key of desejos) {
    console.log("object i in of",key);
    /*
   TypeError: desejos is not iterable
      */
  
    console.log("object i in of", desejos);
    /* TypeError: desejos is not iterable
      */
    console.log("object i in of", desejos[i]);
    /*
     TypeError: desejos is not iterable
     */
  }
  

  /*
    for classico => com interaveis (arrays ou strings) 
    for in =======> Retorna o indice ou a chave (strings arrays ou objetos)
    for of ========> Retorna o valor atual (iteraveis, arrays ou Strings)
  */