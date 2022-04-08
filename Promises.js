/* Promisse 
 A promisse sao eventos assincronos ou seja demora um tempor a ser executiado ou  literalmente a promessa de que em algum momento aquele funcao pode ser executada
 Geramente isso pode acontecer quando nos estamos esperando o d=resultado de algo ou buscando alguma coisa 
 em um banco de dados.  ou quando deois de um tempo nos exibimos um modal na tela ou um status sobre o que
 esta carregando!

 As promisses tem alguns estados os mais conhecidos sao o
 pending => pendente 
 fullfild =>  executada
 Reject = >  rejeitada

 Entao vamos pegar como exemplo  o acesso a um app que voce esta criando o seu perfil de usuario e antes de 
 ele carregar a pagina com os dados que mais tem compatibiblidade com seu perfil ele mostre um tela de loanding 
 que vai te passando um status do que ele esta executando naquele momento.

*/

/*A function rand foi criada para simular o termo de uma execucao aleatoriamente */

function rand(min, max) {
  min *= 1000; //mil milisegundos
  return Math.floor(Math.random() * (max - min) + min);
}

function statusReport(msg, time) {
  /*Criando uma promisse,  Toda promisse recebe uma funcao que tem um resolve e um reject
    o resolve vai executar o esperando quando os dados esperados estiverem corretos e o reject 
    pode ser considerado um parametro que pode nos ajudar a capturar erros ou seja se o dados 
    enviado nao for o esperados nos podemos rejeitar o dado e enviar uma mensagem de erro informado 
    o que ocorreu um erro no envio de dados */
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      /*criando um erro que pode nos dizer que o dado encontrado nao e o esperado */
      return reject(new Error("We couldn`t find this data in our database."));
    }

    /* depois de um tempo exiba a minha mesagem (lembrando que isso e uma simulacao de status, entao depois de um certo 
        tempo ele vai alterar de uma mensagem para outra) */
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

statusReport("Submitting your data for our database", rand(1, 5))
  .then((response) => {
    console.log(response);
    return statusReport("Creating your profile", rand(1, 6));
  })
  .then((response) => {
    console.log(response);
    return statusReport(
      "We are fine-tuning the last details. It won`t take long" /*/2222/*/,
      rand(1, 4)
    );
  })
  .then((response) => {
    console.log(response);
    return statusReport("Everithing is ok! enjoy our app!", rand(1, 3));
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/* o qie fizemos acima executar uma promise apos a outra e chamada de cadeia ou seja eu preciso que um status seja executado 
  apos a finalizacao do status acima. */
/* Mas tambem podemos executar varias promisses de uma unica vez nao importando o tempo que cada uma leve ou seja so exima o status
  depois que todas as promisses forem resolvidas usando o Promisse.all*/

/* Vamos criar uma lista de promises que devem ser executada antes que exibir algo na tela */
const checkProfileDatas = [
  statusReport("Submitting your data for our database", 1000),
  statusReport("checking email", 3000),
  statusReport("Waiting for confirmation of account opening by email", 5000),
  statusReport("Account created", 1000),
];

Promise.all(checkProfileDatas)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

/* Tambem temos a promisse do tipo race que ele assim que executar a primeira promisse ele ja vai te retornar o primeiro 
valor de uma promisse */
Promise.race(checkProfileDatas)
  .then((response) => console.log("race", response))
  .catch((err) => console.log(err));
