const Objeto = require('../Objeto');

class LivroAntigo extends Objeto {
  constructor() {
    super(
      "Livro Antigo",
      "Um livro coberto de poeira. Talvez haja algo útil nele.",
      "Ao folhear o livro, você encontra uma chave escondida!"
    );
  }
}

module.exports = LivroAntigo;
