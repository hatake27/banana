const CapitalizarTitulos = (livro ) => {
    return livro.map(livro => ({nome : livro.nome }));
  };
  
  console.log(CapitalizarTitulos([{nome: "hobbit",  }]));
