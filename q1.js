function FormatarContato({ nome, email, telefone }) {
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
  }
  
  // Exemplo dado
  const contato = {
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    telefone: "123456789"
  };
  
  const resultadoFormatado = FormatarContato(contato);
  console.log(resultadoFormatado);
  
