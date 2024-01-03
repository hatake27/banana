const verificarNumeros = (numero1,  numero2 = 5) => {
    if (numero1 >= numero2 )
      document.write("numero alto")
    else
      document.write("numero baixo")
  };
  
  console.log(verificarNumeros({numero1},{numero2}))
