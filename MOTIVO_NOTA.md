# Motivo da nota: Arthur

Arthur, tua nota ficou **3,10 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,80 de 2,00 |
| Atividade da Aula 05 | 0,50 de 1,00 |
| Caderno | 0,80 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

## Aula 01: JavaScript moderno (0,20 de 0,40)

Arquivo: `arthur/estudos/js-moderno-Arthur.js` (01/10, no teu fork)

| Item | Situação | Custo |
|---|---|---|
| 1, 2, 4, 5, 6, 7, 8, 12 | Feitos e corretos, com `console.log` em cada um | 0 |
| 9 (o que está errado no `map`) | Tem o código corrigido (`precos.map(p => p * 2)`), mas sem escrever qual era o erro (as chaves tiram o retorno implícito). Contei como feito | 0 |
| 3 (diferença entre map e filter em uma frase) | Faltou | incompleta |
| 10 (`import Botao` contra `import { Botao }`) | Faltou | incompleta |
| 11 (por que `lista.push(novo)` é problema no React) | Faltou | incompleta |

Perdeu 0,20 porque faltaram as três respostas escritas. Para fechar: responder 3, 10 e 11 em comentário no mesmo arquivo.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivo: `arthur/estudos/promises-async-ARTHUR.js` (01/10)

| Item | Situação | Custo |
|---|---|---|
| 1 a 10 | Todas respondidas: teoria em comentário e código do async/await (3), do `buscarProduto` com setTimeout (6) e do `fetch` com `.json()` (8) | 0 |

## Aula 03: lista em JavaScript puro (0,40 de 0,40)

Arquivos: `arthur/estudos/AULA 03/INDEX.HTML` (16/10) e `AULA 03/README.md`

| Item | Situação | Custo |
|---|---|---|
| Contador, campo, botão Adicionar, `desenhar()` | Funcionam | 0 |
| Experimentos 1 a 4 | Marcados no próprio código com comentários | 0 |
| Registro | O `README.md` da pasta | 0 |

## Aula 04: React por CDN (0,40 de 0,40)

Arquivo: `arthur/estudos/aula 04/estudos/aula04-Arthur/index.html` (23/10)

| Item | Situação | Custo |
|---|---|---|
| App, Cabecalho, três Cartao com props, Lista com map e key | Página abre e renderiza | 0 |

## Aula 05: chaves, ternário e className (0,40 de 0,40)

Arquivo: o mesmo `index.html` (commit "aula 5 finalizar", 23/10)

| Item | Situação | Custo |
|---|---|---|
| `{projeto}`, ternário, className, Fragment | Presentes e funcionando | 0 |

## Atividade da Aula 05: tela do grupo em componentes (0,50 de 1,00)

Arquivos: `arthur/estudos/estudos/pratica.Arthur/index.html` e `registro.md` (12/11, no teu fork)

| Exigência | Situação | Custo |
|---|---|---|
| Componente com props | `Cabecalho({ titulo, subtitulo })`, e a lista de treinos usa map, key, ternário e className | 0 |
| `// MEU COMPONENTE` | Está em cima do `Cabecalho` | 0 |
| Registro de 3 linhas | Tem as 3 linhas certas (qual componente, o mais difícil, como se encaixa) | 0 |
| Commit teu | Sim | 0 |
| Página abre | **Não abre.** As três tags `<script>` do React, do ReactDOM e do Babel estão só com `https://unpkg.com`, sem o resto do endereço. Nenhuma biblioteca carrega e a tela fica em branco | -0,50 |

Onde está o erro, nas linhas dos três `<script src=...>` do `index.html`. Tem que ficar como na Aula 04:

```
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

O código do componente está certo, só faltam os endereços. A atividade também foi entregue depois do prazo (prazo 30/10, entrega 12/11).

## Caderno (0,80 de 1,00)

Entregue com 80% do conteúdo.
