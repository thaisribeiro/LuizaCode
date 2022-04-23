function fazerPizzaCalabresa(cobertura) {
  const massa = 'farinha de trigo + agua + sal + fermento';
  const molho = 'tomate + agua + ';
  
  const pizza = massa + molho + cobertura;
  return pizza;
}

function fazerPizzaAtum(cobertura) {
  const massa = 'farinha de trigo + agua + sal + fermento';
  const molho = 'tomate + agua + ';
  const pizza = massa + molho + cobertura;
  return pizza;
}

function fazerPizza(cobertura) {
  const massa = 'farinha de trigo => agua => sal => fermento => ';
  const molho = 'tomate => agua => ';
  const pizza = massa + molho + cobertura;
  return pizza;
}

console.log(fazerPizza('Calabresa'));
console.log(fazerPizza('Atum'));