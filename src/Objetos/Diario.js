const Objeto = require('../Objeto');

class Diario extends Objeto {
  constructor() {
    super(
      "Diário",
      "Um diário antigo com várias anotações.",
      "Você encontrou uma pista crucial escrita no diário!"
    );
  }
}

module.exports = Diario;
