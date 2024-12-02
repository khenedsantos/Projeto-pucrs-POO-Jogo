const Objeto = require('../Objeto');

class RelogioDeOuro extends Objeto {
  constructor() {
    super(
      "Relógio de Ouro",
      "Um relógio luxuoso preso na parede.",
      "Ao interagir com o relógio, ele revela um compartimento secreto!"
    );
  }
}

module.exports = RelogioDeOuro;
