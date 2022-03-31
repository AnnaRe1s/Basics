/*  Throw

Quando eu for tratar um erro eu posso usar o throw 
exemplo abaixo 

Vamos criar uma funcao de soma  que se os valores passados nao forem tipos number eu quero retornar um erro falando que ele eos valores precisam ser numeros
*/

function sum(x ,y) {

    if( typeof x !== "number"|| typeof y !== "number" ) {
            /* o new Error ele cria um erro "costumizado"  podemos usar o ReferenceError tambem existe varios tipo de erros*/
        throw new Error("Value of parameters need be numbers")
        /* [Running] node "d:\Tech\Basics js\Errors.js"
d:\Tech\Basics js\Errors.js:13
        throw new Error("Value of parameters need be numbers")
        ^

Error: Value of parameters need be numbers
    at sum (d:\Tech\Basics js\Errors.js:13:15)
    at Object.<anonymous> (d:\Tech\Basics js\Errors.js:18:1)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47 */
    }

}

sum("2", 3)


//Try catch 

try {
    //executado quando nao ha erros 
} catch (error) {
    // executado quando ocorre o erro!
} finally {
    // Sempre executado NAO IMPORTA se cair no try ou no catch
}