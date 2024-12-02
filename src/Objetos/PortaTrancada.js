const Objeto = require('../Objeto');

class PortaTrancada extends Objeto {
  constructor() {
    super(
      "Porta Trancada",
      "Uma porta que está trancada. Talvez uma ferramenta ou chave seja útil.",
      "A porta foi destrancada e agora está aberta!"
    );
  }
}

module.exports = PortaTrancada;
