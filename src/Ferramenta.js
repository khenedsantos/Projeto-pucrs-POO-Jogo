class Ferramenta {
    constructor(nome) {
      this.nome = nome;
    }
  
    usar() {
      console.log(`Você usou a ${this.nome}.`);
      return true;
    }
  }
  
  module.exports = Ferramenta;
  