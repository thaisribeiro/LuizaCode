/**
 * Bruna 
 * Computador Atributos: Marca Modelo SO Cor Processador Memória Armazenamento Preço Funcionalidades:
 * Programar Estudar Pesquisar Desenhar Assistir Ouvir Música Reunir Trabalhar
 */

class Notebook {
  constructor(marca, modelo, so, cor, processador, memoria, preco)  {
    this.marca = marca;
    this.modelo = modelo;
    this.so = so;
    this.cor = cor;
    this.processador = processador;
    this.memoria = memoria;
    this.preco = preco;
  }

  getProgramar() {
    return 'Está programando';
  }

  getEstudar() {
    return 'Está estudando';
  }

  setCor(cor) {
    this.cor = cor;
  }

  getCor() {
    return this.cor;
  }
}

const notebook = new Notebook('dell', 'vostro', 'linux', 'preto', 'core i7', '16gb', '2000');
console.log(notebook);
let corNotebook = notebook.getCor();
console.log('Cor ==>', corNotebook);
notebook.setCor('rosa');
corNotebook = notebook.getCor();
console.log('Cor ==>', corNotebook);