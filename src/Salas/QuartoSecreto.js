const Sala = require('../Sala');
const Objeto = require('../Objeto');
const Ferramenta = require('../Ferramentas/ChaveEnferrujada');

class QuartoSecreto extends Sala {
  constructor(engine) {
    super("Quarto Secreto", engine);
    this.mensagemBauExibida = false; // Controle para exibir a mensagem do baú apenas uma vez

    // Adiciona o Baú Misterioso como objeto inicial
    this.objetos.set("bau misterioso", new Objeto(
      "Baú Misterioso",
      "Você encontrou uma Chave Enferrujada dentro do baú.",
      "O baú já foi aberto e está vazio."
    ));

    // Adiciona a Chave Enferrujada (revelada ao abrir o baú)
    this.ferramentas.set("chave enferrujada", new Ferramenta("Chave Enferrujada"));

    // Adiciona o Diário como objeto adicional
    this.objetos.set("diario", new Objeto(
      "Diário",
      "Há um diário antigo no chão.",
      "Você já leu o diário."
    ));
  }

  entrar() {
    if (!this.mensagemBauExibida) {
      console.log("Há um baú misterioso no quarto. Abra o baú.");
      this.mensagemBauExibida = true; // Marca a mensagem como exibida
    }
  }

  usarObjeto(nome, ferramenta) {
    const objeto = this.objetos.get(nome);

    if (!objeto) {
      console.log("Objeto não encontrado no quarto.");
      return;
    }

    if (nome === "bau misterioso") {
      objeto.usar(ferramenta); // Exibe a mensagem do baú
      console.log("O baú contém uma Chave Enferrujada."); // Mensagem adicional
    } else if (nome === "diario") {
      objeto.usar(ferramenta); // Exibe a mensagem do diário
      console.log("O diário diz: 'O cofre trancado na Sala de Estar guarda o Mapa da Saída.'");
    } else {
      objeto.usar(ferramenta);
    }
  }
}

module.exports = QuartoSecreto;
