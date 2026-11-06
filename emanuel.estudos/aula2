// Diagnóstico 2 - Promises e async/await

// 1. O que é uma Promise em uma frase:
// Uma Promise é um objeto JavaScript que representa um valor que pode estar disponível agora, no futuro ou nunca, permitindo tratar operações assíncronas.

// 2. Três estados possíveis de uma Promise:
// Pending (pendente), Fulfilled (realizada/resolvida) e Rejected (rejeitada).

// 3. Reescrevendo .then/.catch para async/await:
async function executarBusca() {
  try {
    const produto = await buscarProduto(3);
    console.log(produto);
  } catch (erro) {
    console.log(erro);
  }
}

// 4. O que o await pausa:
// Pausa apenas a execução da função assíncrona interna onde ele está inserido, sem travar o restante do programa ou a interface.

// 5. Por que usar await fora de async dá erro:
// Porque a palavra-chave async sinaliza ao mecanismo do JavaScript que aquela função deve ser pausada e retomada de forma assíncrona quando a Promise for resolvida.

// 6. Função buscarProduto com setTimeout:
async function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Produto " + id });
    }, 1000);
  });
}

// 7. O que está errado no código:
// A função carregarDados() não foi declarada com a palavra-chave 'async' antes de 'function', tornando o uso do 'await' inválido dentro dela.

// 8. Trecho preenchido para converter a resposta em objeto:
async function carregar() {
  const resposta = await fetch("https://exemplo.com/api");
  const dados = await resposta.json();
  console.log(dados);
}

// 9. Diferença entre falha de requisição e erro do servidor (ex: 404):
// Em falhas de rede ou servidor inacessível, o fetch lança uma exceção (rejeita a Promise). Em respostas como HTTP 404 ou 500, a comunicação funcionou, então a Promise é resolvida com o objeto Response contendo 'ok: false'.

// 10. Por que produtos.map(async ...) não aguarda todos os itens:
// O .map dispara todas as funções callback de forma síncrona e simultânea, retornando um array de Promises pendentes em vez de esperar a resolução de cada uma.
