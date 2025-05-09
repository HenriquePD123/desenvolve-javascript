let estoqueLivros = [];

function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
  
  if (livroExistente) {
    console.log(`O livro "${titulo}" já existe. Atualizando a quantidade.`);
    livroExistente.quantidade += quantidade;
  } else {
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado com sucesso.`);
  }
}

function removerLivro(titulo) {
  const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);

  if (index !== -1) {
    estoqueLivros.splice(index, 1);
    console.log(`Livro "${titulo}" removido com sucesso.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}
function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoqueLivros.find(livro => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado no estoque.`);
  }
}

function listarLivros() {
  console.log("=== Estoque de Livros ===");
  if (estoqueLivros.length === 0) {
    console.log("Nenhum livro no estoque.");
  } else {
    for (const livro of estoqueLivros) {
      console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    }
  }
}
