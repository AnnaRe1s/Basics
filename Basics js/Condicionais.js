/* if/else (se...então)

Usamos o if/else quando queremos executar uma porção de código somente se uma condição for verdadeira exemplo abaixo

Vamos criar a seguinte validacao!
Vamos dizer que ao preencher a sua ficha de cadastro em um site o seu nome nao pode ter menos que 2 caracteres ou o campo estar vazio.
*/

/* Criamos duas variaveis onde a  characterName sera igual ao nome do usuario e a variavel nameLimit sera a quantidade minima de caracteres do nome */
const characterName = "Le";
const nameLimit = 2;

/* Se a variavel characterName estiver vazia return 'O nome do personagem não pode estar vazio' Essa sera nossa primeira validacao! */
if (!characterName) {
  console.log("O nome do personagem não pode estar vazio");
  throw new Error("EMPTY_NAME"); // o comando throw encerra a execução do código voce pode optar pelo return
}

/* se o numero de caracters no nome do usuario for maior que o limite execute o console abaixo */
if (characterName.length > nameLimit) {
  console.log(`  Seu personagem se chama ${characterName}`);

  /* caso contrario execute o else */
} else {
  console.log(
    `O nome do personagem não pode ter menos de ${nameLimit} caracteres`
  );
}

/* Podemos passar qualquer valor que retorna boolean para o if, inclusive gravar comparações em variáveis e 
passar as variáveis em si ao invéa da comparação

Com o exemplo acima podemos perceber que...
    - Eu posso criar varios if sem a nescessidade de else
    - Porem se eu for usar um else eu preciso de um if 
*/

/* IF composto - Else IF
o else if nos usamos quando temos mais de uma condicao para validar 
vamos exemplificar com um semafaro que tem 3 condicoes para o usuario 
Vermelho  =  Parar
Amarelo =  Atencao
Verde =  Continue
*/

const sinal = "Vermelho";

if (sinal === "Verde") {
  console.log("Passagem permitida!");
} else if (sinal === "Amarelo") {
  console.log("Atenção! Sinal prestes a fechar!");
} else {
  console.log("Passagem negada!");
}

/* o Else if fara o intermediario entre os outros dois valores e sim toda vez que usarmos o else if precisamos de um else no final */



/* Vamos criar o seguinte exemplo
Eu tenho um pequeno sistema que dependendo da hora o meu console vai retornar "Bom dia",  "Boa Tarde", "Boa noite", 
Entre as 0 e 11 =      "Bom dia"
         12 as 17 =    "Boa Tarde"
         18 e as 23 =  "Boa noite"
*/

const hours = 53;

if (hours >= 0 && hours <= 11) {
  console.log("Bom dia");
} else if (hours >= 12 && hours <= 17) {
  console.log("Boa Tarde");
} else if (hours >= 18 && hours <= 23) {
  console.log("Boa noite");
} else {
  console.log("Ola como voce esta hoje?");
}

/* inserimos a ultima condicao acaso todas as condicoes acima derem falsa 
 Vai que da um bug no sitema e recebemos a hora 36! */



/* Ternario
  o ternario nada mais e que um grande if else porem com uma sintaxe curta 

  o Ternario =  ? :
  geralmente funciona assim
  
  (condicao) ? resposta se for verdadeiro : falso

  vamos exemplificar em if else e transforma-lo em ternario 

*/

const age = 15

if(age >= 18 ) {
  console.log("ok! pode vender bebidas alcoolicas")
} else {
  console.log("Voce é menor não pode consumir essa bebida")
}

//ternario

console.log(age >= 18 ? "ok! pode vender bebidas alcoolicas" : "Voce e menor nao pode consumir essa bebida")