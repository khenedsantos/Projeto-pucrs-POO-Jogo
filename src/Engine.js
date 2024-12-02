const Sala = require('./Sala');

class Engine {
  constructor() {
    this.mochila = null;
    this.salaCorrente = null;
    this.fim = false;
    this.criaCenario();
  }

  criaCenario() {
    // Caminhos corrigidos para as salas
    const HallEntrada = require('./Salas/HallEntrada');
    const Biblioteca = require('./Salas/Biblioteca');
    const QuartoSecreto = require('./Salas/QuartoSecreto');
    const SalaDeJantar = require('./Salas/SalaDeJantar');

    // Instanciando as salas
    this.hallEntrada = new HallEntrada(this);
    this.biblioteca = new Biblioteca(this);
    this.quartoSecreto = new QuartoSecreto(this);
    this.salaDeJantar = new SalaDeJantar(this);

    // Conectando as salas
    this.hallEntrada.addPorta('biblioteca', this.biblioteca);
    this.biblioteca.addPorta('hall entrada', this.hallEntrada);
    this.biblioteca.addPorta('quarto secreto', this.quartoSecreto);
    this.biblioteca.addPorta('sala de jantar', this.salaDeJantar);
    this.quartoSecreto.addPorta('biblioteca', this.biblioteca);
    this.salaDeJantar.addPorta('biblioteca', this.biblioteca);

    // Definindo a sala inicial
    this.salaCorrente = this.hallEntrada;
  }

  executaComando(comando) {
    const [acao, ...args] = comando.split(" ");
    const argumento = args.join(" ");

    switch (acao) {
      case 'coletar':
        this.mochila = this.salaCorrente.pega(argumento);
        break;
      case 'examinar':
        this.salaCorrente.usa(argumento);
        break;
      case 'inventario':
        console.log(`Você tem: ${this.mochila ? this.mochila.nome : 'nada'}`);
        break;
      case 'mover':
        this.salaCorrente = this.salaCorrente.sai(argumento);
        break;
      case 'sair':
        this.fim = true;
        console.log("Jogo encerrado.");
        break;
      default:
        console.log("Comando não reconhecido.");
    }
  }

  jogar() {
    const prompt = require('prompt-sync')(); // Certifique-se de que o prompt-sync está instalado
    while (!this.fim) {
      console.log(`\nVocê está na sala: ${this.salaCorrente.nome}`);
      const comando = prompt("O que deseja fazer? ");
      this.executaComando(comando);
    }
  }
}

module.exports = Engine;
