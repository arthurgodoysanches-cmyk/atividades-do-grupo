/**
 * REPOSITÓRIO DA SQUAD - DIAGNÓSTICO DE LABORATÓRIO
 * Arquivo: arthur/estudos/promises-async-ARTHUR.js
 * Assunto: Promises e Async/Await em JavaScript
 */

// =========================================================================
// 📑 RESPOSTAS TEÓRICAS (COMENTADAS)
// =========================================================================

/*
 1. Em uma frase, sem código: o que é uma Promise?
 R: É um objeto que representa o sucesso ou a falha futura de uma operação assíncrona que ainda está sendo processada.

 2. Quais os três estados possíveis de uma Promise?
 R: 
 - pending: Ainda em andamento, não sabemos o resultado.
 - fulfilled: Deu certo, o valor está disponível.
 - rejected: Deu errado, temos o motivo ou código do erro.

 4. O que exatamente await pausa: o programa inteiro ou só a função onde ele está?
 R: O await pausa apenas a execução da função assíncrona onde ele foi colocado. O resto do programa/página continua rodando normalmente.

 5. Por que colocar await dentro de uma função que não é async dá erro?
 R: Porque o motor do JavaScript precisa que a função seja marcada explicitamente com 'async' para saber que deve gerenciar seu fluxo em segundo plano, liberando a linha principal de processamento (Single Thread).

 7. O que está errado neste código?
 R: O uso do 'await' foi feito dentro de uma função síncrona comum. Falta colocar a palavra-chave 'async' antes da declaração da função 'carregarDados()'.

 9. Qual a diferença entre a requisição falhar (sem internet, servidor fora do ar) e o servidor responder com erro (por exemplo, status 404)? Por que fetch sozinho não lança um erro no segundo caso?
 R: Na falha de rede/servidor caído, a requisição não se completa, quebrando o fluxo e caindo no '.catch' ou no bloco 'catch'. No erro 404/500, a transação HTTP aconteceu com sucesso: a rede funcionou e o servidor respondeu (enviou uma resposta dizendo que o dado não existe). O fetch não lança erro no segundo caso porque sua única função é garantir a entrega e resposta dos pacotes de rede, o que foi cumprido.

 10. Por que rodar produtos.map(async (p) => await buscarDetalhe(p.id)) não espera todos os detalhes chegarem antes de continuar o código?
 R: Porque o método '.map()' nativo é totalmente síncrono e não foi programado para esperar Promises. Ele dispara o callback assíncrono para cada item do array de uma vez em paralelo e retorna instantaneamente um array de Promises no estado 'pending'.
*/


// =========================================================================
// 💻 QUESTÕES PRÁTICAS E CÓDIGOS CORRIGIDOS
// =========================================================================

function buscarProdutoMock(id) {
    return new Promise((resolve, reject) => {
        if (id > 0) resolve({ id, nome: "Produto " + id });
        else reject("Erro: Produto não encontrado.");
    });
}

// 3. Reescreva usando async/await o código abaixo, que hoje usa .then:
async function executarBuscaProduto() {
    try {
        const produto = await buscarProdutoMock(3);
        console.log("Resultado Q3:", produto);
    } catch (erro) {
        console.log("Erro Q3:", erro);
    }
}

// 6. Escreva uma função assíncrona chamada buscarProduto que recebe um id, espera 1 segundo...
function buscarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nome: "Produto " + id });
            } else {
                reject("id inválido");
            }
        }, 1000);
    });
}

// 7. O que está errado neste código? (Versão corrigida e segura com try/catch)
async function carregarDados() {
    try {
        const dados = await fetch("https://typicode.com");
        const json = await dados.json();
        console.log("Resultado Q7 Corrigida:", json);
    } catch (erro) {
        console.log("Erro ao carregar dados na Q7:", erro);
    }
}

// 8. Complete o trecho abaixo para imprimir o corpo da resposta já convertido em objeto:
async function carregar() {
    try {
        const resposta = await fetch("https://typicode.com");
        const dados = await resposta.json(); 
        console.log("Resultado Q8 Preenchida:", dados);
    } catch (erro) {
        console.log("Erro na Q8:", erro);
    }
}

// =========================================================================
// 🚀 ESPAÇO DE TESTES (Execução automática)
// =========================================================================

async function rodarTestes() {
    console.log("=== INICIANDO TESTES DO DIAGNÓSTICO ===\n");
    
    await executarBuscaProduto();

    try {
        console.log("Buscando produto da Q6 (aguardando 1s)...");
        const prodQ6 = await buscarProduto(42);
        console.log("Resultado Q6:", prodQ6);
    } catch (err) {
        console.error(err);
    }

    console.log("\nBuscando APIs reais das questões 7 e 8...");
    await carregarDados();
    await carregar();
    
    console.log("\n=== TESTES FINALIZADOS ===");
}

// ESTA LINHA ATIVA OS TESTES DO SEU TERMINAL:
rodarTestes();



