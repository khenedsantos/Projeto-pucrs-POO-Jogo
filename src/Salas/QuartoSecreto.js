const Sala = require('../Sala');
const Ferramenta = require('../Ferramentas/ChaveEnferrujada');
const Objeto = require('../Objetos/Diario');

class QuartoSecreto extends Sala {
  constructor(engine) {
    super("Quarto Secreto", engine);
    // Adiciona ferramenta "Chave Enferrujada" ao Quarto Secreto
    this.ferramentas.set("chave enferrujada", new Ferramenta("Chave Enferrujada"));
    // Adiciona um objeto chamado "Diário" ao Quarto Secreto
    this.objetos.set("diario", new Objeto("Diário", "Um diário antigo cheio de anotações.", "As anotações revelam um segredo sobre o relógio de ouro."));
  }
}

module.exports = QuartoSecreto;
