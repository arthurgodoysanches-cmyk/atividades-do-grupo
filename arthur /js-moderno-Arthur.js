// ====== DADOS DE TESTE ======
const nums = [1, 2, 3, 4]; // ✅ PREENCHIDO
const p = { titulo: "Caneca", preco: 25 };
const cores = ["azul", "verde"];
const produtos = [
    { nome: "Caneca", estoque: 3 },
    { nome: "Camiseta", estoque: 0 },
    { nome: "Adesivo", estoque: 7 }
];
const precos =[1,2,3,4]; // ✅ PREENCHIDO

// ====== EXERCÍCIOS DE MAP E FILTER ======
// Q1: Multiplicar por 2
const dobro = nums.map(n => n * 2);
console.log("Q1 (Dobro):", dobro);

// Q2: Filtrar pares
const pares = nums.filter(n => n % 2 === 0);
console.log("Q2 (Pares):", pares);

// Q4: Desestruturação
const { titulo, preco } = p;
console.log(`Q4 (Desestruturado): ${titulo} custa R$${preco}`);

// Q5: Arrow Function
const ehCaro = preco => preco > 100;
console.log("Q5 (É caro? 150):", ehCaro(150));
console.log("Q5 (É caro? 50):", ehCaro(50));

// Q6: Clonar array (Imutabilidade)
const cores2 = [...cores, "vermelho"];
console.log("Q6 (Cores antigas):", cores);
console.log("Q6 (Novas cores):", cores2);

// Q7: Clonar objeto (Imutabilidade)
const pEmPromocao = { ...p, preco: 20 };
console.log("Q7 (Produto original):", p);
console.log("Q7 (Produto em promoção):", pEmPromocao);

// Q8: Produtos em estoque
const emEstoque = produtos.filter(p => p.estoque > 0).map(p => p.nome);
console.log("Q8 (Em estoque):", emEstoque);

// Q9: Correção do Map (Retorno implícito)
const total = precos.map(p => p * 2);
console.log("Q9 (Precos corrigidos):", total);

// Q12: Estoque maior que 5
const maisDeCinco = produtos.filter(p => p.estoque > 5).map(p => p.nome);
console.log("Q12 (Mais de 5 no estoque):", maisDeCinco);
