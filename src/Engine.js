const Sala = require('./Sala');

class Engine {
  constructor() {
    this.mochila = null;
    this.salaCorrente = null;
    this.fim = false;
    this.criaCenario();
  }

  criaCenario() {
    const HallEntrada = require('./salas/HallEntrada');
    const Biblioteca = require('./salas/Biblioteca');
    const QuartoSecreto = require('./salas/QuartoSecreto');
    const SalaDeJantar = require('./salas/SalaDeJantar');
  
    // Criando as salas
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
    // Conectando Quarto Secreto com Sala de Jantar
    this.quartoSecreto.addPorta('sala de jantar', this.salaDeJantar);
    this.salaDeJantar.addPorta('quarto secreto', this.quartoSecreto);
  
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
    const prompt = require('prompt-sync')();
    while (!this.fim) {
      console.log(`\nVocê foi para ${this.salaCorrente.nome}`);
      const comando = prompt("O que deseja fazer? ");
      this.executaComando(comando);
    }
  }
}

module.exports = Engine;
