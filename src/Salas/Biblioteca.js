const Sala = require('../Sala');
const LivroAntigo = require('../Objetos/LivroAntigo');

class Biblioteca extends Sala {
  constructor(engine) {
    super("Biblioteca", engine);

    this.objetos.set("livro antigo", new LivroAntigo());
    this.mensagemLivroExibida = false;
  }

  entrar() {
    if (!this.mensagemLivroExibida) {
      console.log("Há um livro antigo no chão.");
      this.mensagemLivroExibida = true;
    }
  }
}

module.exports = Biblioteca;
