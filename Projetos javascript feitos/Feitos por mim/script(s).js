const frase = document.getElementById("frase");
const imagemAnime = document.getElementById("imagem-anime");
const botao = document.getElementById("btn");

// Carrega a frase
async function carregarFrase() {
    try {
        frase.textContent = "Carregando frase...";

        const respostaFrase = await fetch(
            "https://api.animechan.io/v1/quotes/random"
        );

        if (!respostaFrase.ok) {
            throw new Error("Erro na API de frases");
        }

        const dadosFrase = await respostaFrase.json();

        frase.textContent =
            `"${dadosFrase.data.content}" — ` +
            `${dadosFrase.data.character.name} ` +
            `(${dadosFrase.data.anime.name})`;

    } catch (erro) {
        console.error("Erro ao carregar frase:", erro);
        frase.textContent = "Não foi possível carregar a frase.";
    }
}


// Carrega a imagem
async function carregarImagem() {
    try {
        console.log("Buscando imagem...");

        const resposta = await fetch(
            "https://nekos.best/api/v2/waifu"
        );

        console.log("Resposta da API:", resposta);

        if (!resposta.ok) {
            throw new Error(
                `Erro na API de imagens: ${resposta.status}`
            );
        }

        const dados = await resposta.json();

        console.log("Dados recebidos:", dados);

        if (!dados.images || dados.images.length === 0) {
            throw new Error("A API não retornou nenhuma imagem.");
        }

        const urlImagem = dados.images[0].url;

        console.log("URL da imagem:", urlImagem);

        imagemAnime.src = urlImagem;

        imagemAnime.onload = () => {
            console.log("Imagem carregada com sucesso!");
        };

        imagemAnime.onerror = () => {
            console.error("A URL foi recebida, mas a imagem não pôde ser carregada.");
        };

    } catch (erro) {
        console.error("Erro ao carregar imagem:", erro);
    }
}


// Carrega tudo
async function carregarConteudo() {
    await carregarFrase();
    await carregarImagem();
}


// Botão
botao.addEventListener("click", carregarConteudo);


// Carrega ao abrir a página
carregarConteudo();