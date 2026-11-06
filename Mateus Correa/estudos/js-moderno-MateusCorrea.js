
const nums = [1, 2, 3, 4]; 
const p = { titulo: "Caneca", preco: 25 };
const cores = ["azul", "verde"];
const produtos = [
  { nome: "Caneca", estoque: 3 },
  { nome: "Camiseta", estoque: 0 },
  { nome: "Adesivo", estoque: 7 }
];

// 1. Dobrar os números
const ex1 = nums.map(n => n * 2);
console.log("Q1 - Dobro:", ex1);

// 2. Filtrar pares
const ex2 = nums.filter(n => n % 2 === 0);
console.log("Q2 - Pares:", ex2);

// 4. Desestruturação
const { titulo, preco } = p;
console.log(`Q4 - Desestruturado: ${titulo} custa R$${preco}`);

// 5. Função de seta (Arrow Function)
const ehCaro = valor => valor > 100;
console.log("Q5 - 150 é caro?", ehCaro(150));
console.log("Q5 - 50 é caro?", ehCaro(50));

// 6. Adicionar cor sem mutação
const cores2 = [...cores, "vermelho"];
console.log("Q6 - Cores originais:", cores, "| Cores novas:", cores2);

// 7. Mudar preço sem mutação
const pEmPromocao = { ...p, preco: 20 };
console.log("Q7 - Produto original:", p, "| Em promoção:", pEmPromocao);

// 8. Nomes em estoque
const emEstoque = produtos.filter(p => p.estoque > 0).map(p => p.nome);
console.log("Q8 - Itens em estoque:", emEstoque);

// 12. Estoque maior que 5
const estoqueMaiorQue5 = produtos.filter(p => p.estoque > 5).map(p => p.nome);
console.log("Q12 - Estoque > 5:", estoqueMaiorQue5);
