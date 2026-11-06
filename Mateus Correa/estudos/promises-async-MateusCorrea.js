/**
 * Exercício de Diagnóstico - Aula 02: Promises e Async/Await
 * Aluno: Mateus Correa
 */

// 1. O que é uma Promise em JavaScript e quais são os seus 3 estados possíveis?
// Resposta: Uma Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona.
// Os três estados possíveis são:
// - Pending (Pendente): Estado inicial, quando a operação ainda está processando.
// - Fulfilled (Realizada): Quando a operação foi concluída com sucesso.
// - Rejected (Rejeitada): Quando a operação falhou ou deu algum erro.


// 2. Converta a função abaixo (que usa Callback) para usar Promise:
// Função antiga:
// function buscarDados(callback) {
//   setTimeout(() => { callback("Dados recebidos!"); }, 1000);
// }

// Nova função convertida para Promise:
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados recebidos!");
    }, 1000);
  });
}


// 3. Consuma a Promise da função buscarDados() criada acima utilizando .then() e .catch():
buscarDados()
  .then((resultado) => {
    console.log("Sucesso no .then():", resultado);
  })
  .catch((erro) => {
    console.error("Erro no .catch():", erro);
  });


// 4. Consuma a mesma Promise buscarDados() utilizando uma função async e o bloco try/catch:
async function executarBusca() {
  try {
    const resultado = await buscarDados();
    console.log("Sucesso no Async/Await:", resultado);
  } catch (erro) {
    console.error("Erro no Async/Await:", erro);
  }
}

// Executa a função assíncrona para testar
executarBusca();
