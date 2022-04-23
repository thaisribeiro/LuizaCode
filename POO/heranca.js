/**
 *  Construtor Pessoa
 *  Pessoa Juridica
 *  Pessoa Fisica
 */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, cpf) {
    super(nome, sobrenome); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471');
console.log(pessoa);

class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj) {
    super(nome, sobrenome);
    this.cnpj = cnpj;
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10');
console.log(empresa);

class PJuridica2 extends Pessoa {
  constructor(nome, sobrenome) {
    super(nome, sobrenome);
  }

   setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  getCnpj() {
    return this.cnpj;
  }
}

empresa = new PJuridica2('Magalu', 'LTDA');
empresa.setCnpj('121213212/0001-10');
console.log(empresa);