const Sala = require('../Sala');
const Ferramenta = require('../Ferramenta');

class Porao extends Sala {
  constructor(engine) {
    super("Porao", engine); // Nome sem acento
    this.ferramentas.set("pe de cabra", new Ferramenta("Pé de Cabra"));
  }
}

module.exports = Porao;
