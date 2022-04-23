/**
 *  Construtor Pessoa
 *  Pessoa - Maria
 *
 */
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const maria = new Pessoa('Maria', 'Ribeiro');
console.log(maria);