const Sala = require('../Sala');
const Objeto = require('../Objeto');

class Biblioteca extends Sala {
  constructor(engine) {
    super("Biblioteca", engine);
    // Adiciona um objeto "Livro Antigo" à Biblioteca
    this.objetos.set("livro antigo", new Objeto("Livro Antigo", "Um livro com capa desgastada.", "Você encontrou uma pista!"));
  }
}

module.exports = Biblioteca;
