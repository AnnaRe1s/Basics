/* Operadores de comparacao  */

/*  >   Maior que 
    <   Menor que
    >=  Maior ou igual que
    <=  Menor ou igual que
    ==  Iguadade (Valor)
    === Igualdade estrita (Valor e tipo)
    !=  Diferente (Valor)
    !== Diferença estrita (Valor e tipo)
*/

console.log(2 == "2"); // Verifica se os valores são iguais
console.log(2 === "2"); // Verifica se os valores E os tipos são iguais

console.log(3 > 2); // Verifica se o valor da esquerda é maior que o valor da direita  // true
console.log(3 < 2); // Verifica se o valor da esquerda é menor que o valor da direita  // true
console.log(3 >= 2); // Verifica se o valor da esquerda é maior ou igual que o valor da direita // true
console.log(2 <= 3); // Verifica se o valor da esquerda é menor maior ou igual que o valor da direita // false

console.log(2 != 2); // Verifica se os valores são diferentes
console.log(2 !== 2); // Verifica se os valores e/ou os tipos são diferentes

/* Operadores lógicos (que servem para unir diferentes comparações) */

/*  &&   And
    ||   Or
    !    Not 

*/

//          true      false
console.log(4 > 3 && 4 > 5); // Operador AND lógico, que só retorna true se ambas as partes da comparação forem verdadeiras

//          true    false
console.log(4 > 3 || 4 > 5); // Operador OR lógico, que retorna true se qualquer uma das partes da comparação for verdadeira
console.log(!4 > 5); // Operador NOT lógico, que nega o resultado de uma comparação

/*Em expressões lógicas longas, o javascript compara da esquerda para a direita*/

//                false               false
console.log((4 > 3 && 4 > 5) || typeof 2 === "string"); // false

//  Null

// O tipo null representa um valor vazio
let nothing = null;

// Undefined
let notDefinedYet = undefined;

// Por padrão, todo valor que ainda não foi inicializado é undefined no javascript

const str = "oi";
console.log(str[3]); // undefined

//Valores que em um contexto de comparação (booleano) são equivalentes a false
Falsy;
false;
0;
("");
null;
undefined;
NaN;
