---
layout: layout.njk
title: Matizhill em 11ty
---

<style>
  /* Cria um layout lado a lado */
  .container-index {
    display: flex;
    align-items: flex-start;
  }

  /* Estiliza a imagem */
  .imagem-interativa {
    width: 300px; /* Ajuste o tamanho da imagem aqui */
    cursor: pointer; /* Muda o mouse para uma "mãozinha" */
  }

</style>

<div class="container-index">
  <img 
    src="img/Ei-tem nada aqui.png" 
    id="imagem-troca" 
    class="imagem-interativa" 
  >

  <div class="texto-index">
    <h1>CAAALMA AÍ!</h1>
    <p>O que eu fiz só foi fazer o Eleventy funcionar com o Github Page. Uma ferramenta muito útil que pega os arquivos markdowns e gera páginas em html completas e personalizadas. Enquanto isso, não caçoem de mim!</p>
  </div>
</div>

<a href="traducoes" style="font-size: 20px;"><b>Listagem de Tradução</b></a>

<script>
  // Coloque aqui o caminho das imagens na ordem que você desejar
  const listaDeImagens = [
    "img/Ei-tem nada aqui.png",
    "img/Ei-tem nada aqui-1.png",
    "img/Ei-tem nada aqui-2.png"
  ];
  
  let indiceAtual = 0;
  const elementoImagem = document.getElementById("imagem-troca");

  // Adiciona o evento de clique na imagem
  elementoImagem.addEventListener("click", function() {
    // Aumenta o índice em +1. O "% listaDeImagens.length" faz o número voltar a zero quando chegar na última imagem.
    indiceAtual = (indiceAtual + 1) % listaDeImagens.length;
    // Atualiza a imagem na tela
    elementoImagem.src = listaDeImagens[indiceAtual];
  });
</script>