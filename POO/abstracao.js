class FazerCafe {
  constructor(quantidade_acucar, quantidade_po) {
    this.quantidade_acucar = quantidade_acucar;
    this.quantidade_po = quantidade_po;
  }

  ferverAgua() {
    return "Agua está fervida";
  }

  adicionarAcucar() {
    return 'Colocou ' + this.quantidade_acucar + 'colheres de açucar';
  }

  adicionarPo() {
    return 'Colocou ' + this.quantidade_po + 'colheres de café';
  }

  coarCafe() {
    return 'Coou o café';
  }

  servirCafe() {
    return 'café pronto!';
  }
}


let cafe = new FazerCafe(6, 3).servirCafe();
console.log(cafe);