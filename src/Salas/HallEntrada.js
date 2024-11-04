const Sala = require('../Sala');
const Ferramenta = require('../Ferramenta');

class HallEntrada extends Sala {
  constructor(engine) {
    super("Hall de Entrada", engine);
    // Adiciona uma ferramenta "Lanterna" ao Hall de Entrada
    this.ferramentas.set("lanterna", new Ferramenta("Lanterna"));
  }
}

module.exports = HallEntrada;
