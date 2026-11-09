// Seleciona os elementos no HTML
const animeImg = document.getElementById('anime-img');
const btnProximo = document.getElementById('btn-proximo');

// Função assíncrona para buscar a imagem da API
async function pegarImagemAnime() {
    try {
        animeImg.alt = "Carregando...";
        
        // Usando a API gratuita Nekos.best (endpoint para waifu/anime)
        const resposta = await fetch('https://nekos.best/api/v2/waifu');
        const dados = await resposta.json();
        
        // Extrai a URL da imagem do JSON retornado pela API
        const urlImagem = dados.results[0].url;
        
        // Define a imagem no elemento <img> do HTML
        animeImg.src = urlImagem;
        animeImg.alt = "Imagem aleatória de anime";
    } catch (erro) {
        console.error("Erro ao buscar a imagem:", erro);
        animeImg.alt = "Erro ao carregar a imagem.";
    }
}

// Executa a função assim que a página é carregada
window.addEventListener('DOMContentLoaded', pegarImagemAnime);

// Executa a função sempre que o usuário clicar no botão
btnProximo.addEventListener('click', pegarImagemAnime);

//('https://nekos.best/api/v2/waifu')
//https://api.nekosia.cat/api/v1/images/catgirl
