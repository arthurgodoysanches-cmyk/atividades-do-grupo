// Diagnóstico 1 - JavaScript Moderno

// 1. Dobrar valores do vetor
const nums = [1, 2, 3, 4];
const dobrados = nums.map((n) => n * 2);

// 2. Filtrar números pares
const pares = nums.filter((n) => n % 2 === 0);

// 3. Diferença entre map e filter em uma frase:
// O map transforma cada elemento de um vetor mantendo a mesma quantidade de itens, enquanto o filter seleciona apenas os elementos que cumprem uma condição, retornando um vetor de tamanho menor ou igual.

// 4. Desestruturação de objeto
const p = { titulo: "Caneca", preco: 25 };
const { titulo, preco } = p;

// 5. Função de seta ehCaro
const ehCaro = (valor) => valor > 100;

// 6. Adicionar item ao final do vetor sem alterar o original
const cores = ["azul", "verde"];
const cores2 = [...cores, "vermelho"];

// 7. Atualizar preço sem alterar o objeto original
const pEmPromocao = { ...p, preco: 20 };

// 8. Nomes dos produtos em estoque
const produtos = [
  { nome: "Caneca", estoque: 3 },
  { nome: "Camiseta", estoque: 0 },
  { nome: "Adesivo", estoque: 7 }
];
const nomesEmEstoque = produtos.filter((prod) => prod.estoque > 0).map((prod) => prod.nome);

// 9. O que está errado no código:
// Ao utilizar chaves {} no corpo da arrow function, o retorno deixa de ser implícito. Como faltou a palavra-chave 'return', a função devolve [undefined, undefined, ...]. O correto é: precos.map((p) => p * 2) ou precos.map((p) => { return p * 2; }).

// 10. Diferença entre as importações:
// 'import Botao' importa o componente exportado como padrão (export default). 'import { Botao }' importa uma exportação nomeada (export function Botao ou export { Botao }).

// 11. Por que lista.push(novo) é um problema no React:
// O push altera o vetor original diretamente em memória (mutação). O React só identifica mudanças de estado e re-renderiza a tela quando recebe uma nova referência de objeto/vetor (imutabilidade), como [...lista, novo].

// 12. Nomes dos produtos com estoque maior que 5
const estoqueMaior5 = produtos.filter((prod) => prod.estoque > 5).map((prod) => prod.nome);
