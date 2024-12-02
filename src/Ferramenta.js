class Item {
  #nome;

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return this.#nome;
  }
}

class Ferramenta extends Item {
  usar() {
    console.log(`Você usou a ${this.nome}.`);
    return true;
  }
}

module.exports = Ferramenta;
