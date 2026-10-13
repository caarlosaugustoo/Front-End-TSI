"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.
  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.
var nome = "Carlos"
const doc = document.querySelector("#mensagem-boas-vindas");
doc.textContent = "Seja bem-vindo, " + nome;
// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.
const nomeLoja = document.querySelector("#nome-loja");
console.log(nomeLoja.textContent);
nomeLoja.textContent = "Produtos de informática"
// 03. Altere o título principal da página utilizando textContent.
  const tituloPrincipal = document.querySelector("#titulo-principal");
  tituloPrincipal.textContent = "Loja de informática!";
// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const subtituloPrincipal = document.querySelector("#subtitulo-principal");
console.log(subtituloPrincipal.innerText);
subtituloPrincipal.innerText= "Os melhores produtos de informática";
// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.
const avisoPromocao = document.querySelector("#aviso-promocao");
let aviso = "<strongAviso! </strong> <span>Há produtos em oferta!</span>";
avisoPromocao.innerHTML = aviso;
// 06. Altere a categoria do produto em destaque utilizando
// textContent.
const categoriaDestaque = document.querySelector("#categoria-destaque");
categoriaDestaque.textContent = "Informática";
// 07. Altere o nome do produto em destaque utilizando innerText.
const nomeDestaque = document.querySelector("#nome-produto-destaque");
nomeDestaque.innerText = "Notebook"
// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.
const descricaoDestaque = document.querySelector("#descricao-produto-destaque");
console.log(descricaoDestaque.textContent);
console.log(descricaoDestaque.innerText);
descricaoDestaque.innerText = "O notebook mais rápido da geração!";
// 09. Altere o preço do produto em destaque utilizando textContent.
const precoDestaque = document.querySelector("#preco-produto-destaque");
precoDestaque.textContent = "R$ 5.999,99" 
// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
const statusProduto = document.querySelector("#status-estoque");
statusProduto.innerHTML = "<strong>Disponível!</strong>";
// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
const  totalProdutos = document.querySelector("#total-produtos");
const totalCat = document.querySelector("#total-categorias");
const total10 = document.querySelector("#total-ofertas");

totalProdutos.textContent = "17";
totalCat.innerText = "38";
total10.innerHTML = "<stron>4</stron>";
// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.