// Função para realizar a pesquisa e exibir os resultados
function pesquisar() {
    // Obtém o elemento da página onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Exibe o elemento no console para depuração

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Esse curso não foi encontrado, procure usar palavras chaves, exemplo(matemática, programação...)</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = '';
    let nome = "";
    let descricao = "";

    // Itera sobre cada item no array 'dados'
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        // Verifica se o nome ou a descrição do curso contém a palavra pesquisada
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Adiciona um bloco de HTML para cada item, contendo o nome, descrição e link
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.nome}</h2> <!-- Nome do curso -->
                    <p class="descricao-curso">${dado.descricao}</p> <!-- Descrição do curso -->
                    <a href=${dado.link} target="_blank" class="link">Clica aqui para mais informações</a> <!-- Link para mais informações -->
                </div>
            `;
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado. Voce precisa digitar o nome de alguma plataforma, ou o nome de curso que vc procura</p>"
        }

    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}
