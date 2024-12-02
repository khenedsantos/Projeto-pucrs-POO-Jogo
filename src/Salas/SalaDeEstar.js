const Sala = require('../Sala');
const Objeto = require('../Objeto');

class SalaDeEstar extends Sala {
  constructor(engine) {
    super("Sala de Estar", engine);
    // Adicione objetos ou ferramentas específicos desta sala
    this.objetos.set("sofa velho", new Objeto("Sofá Velho", "Um sofá antigo e empoeirado.", "Você encontrou uma pista escondida no sofá!"));
    this.objetos.set("cofre trancado", new Objeto("Cofre Trancado", "Um cofre que precisa de uma ferramenta para ser aberto.", "O cofre está aberto e contém o Mapa da Saída!"));
  }
}

module.exports = SalaDeEstar;
