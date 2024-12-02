const Sala = require('../Sala');
const Objeto = require('../Objetos/RelogioDeOuro');

class SalaDeJantar extends Sala {
  constructor(engine) {
    super("Sala de Jantar", engine);
    // Adiciona um objeto chamado "Relógio de Ouro" à Sala de Jantar
    this.objetos.set("relogio de ouro", new Objeto("Relógio de Ouro", "Um relógio antigo e elegante.", "Ao examinar o relógio, você encontra uma chave secreta para escapar da mansão."));
  }
}

module.exports = SalaDeJantar;
