const Objeto = require('../Objeto');

class SofaVelho extends Objeto {
  constructor() {
    super(
      "Sofá Velho",
      "Um sofá antigo e empoeirado.",
      "Ao mexer no sofá, você encontra uma mensagem escondida!"
    );
  }
}

module.exports = SofaVelho;
