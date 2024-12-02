const Objeto = require('../Objeto');

class CofreTrancado extends Objeto {
  constructor() {
    super(
      "Cofre Trancado",
      "Um cofre que parece trancado. Talvez uma ferramenta ajude a abrir.",
      "O cofre foi aberto! Dentro há o Mapa da Saída."
    );
  }
}

module.exports = CofreTrancado;
