/* Objeto de forma literal */

const human = {
  name: "Anna",
  lastName: "Reis",
};

console.log("***", human);

/* new Object
    O new object e uma maneira de criar um objeto de forma nao literal 

*/

const person = new Object();
person.name = "Anna";
person.lastName = "Reis";

console.log(person);

/* deletar uma chave de um objeto basta colocar a palavra em ingles deletar */

delete person.lastName;
console.log(person);


/* Objetos podem conter metodos! 
    Metodos sao funcoes que podem estar dentro do nosso objeto 
    As vantagens de se ter uma funcao dentro de um objeto e que nos podemos'
    manipular um dando de dentro do proprio Objeto usando a palavra reservada this
     */

/* Object.keys =>  me tras as chaves do objeto 
  Object.Freeze => congela o objeto
  Object.DefineProperties =>  define varias propriedades
  Obje

*/
